#!/usr/bin/env node
const fs = require('fs');
const http = require('http');
const https = require('https');
const express = require('express');
const cors = require('cors');
const JSONdb = require('simple-json-db');
const db = new JSONdb('./characterList2.json', {asyncWrite: true});
const socketIO = require('socket.io');

const app = express();

// cert stuff
var mode = 'dev';

if (mode != 'dev'){
	const privateKey = fs.readFileSync('/etc/letsencrypt/live/rohanakki.com/privkey.pem', 'utf8');
	const certificate = fs.readFileSync('/etc/letsencrypt/live/rohanakki.com/cert.pem', 'utf8');
	const ca = fs.readFileSync('/etc/letsencrypt/live/rohanakki.com/chain.pem', 'utf8');
	
	
	const credentials = {
		key: privateKey,
		cert: certificate,
		ca: ca
	};
}

var characterCache = null;
var connectionCount = null;

const portNumber = 4145;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
blankPlayer = {
    name: "Input Name",
    class: "Class",
    level: 1,
    race: "Race",
    backstory: "",
    notes: "",
	inventory: "",
    coin: [0,0,0,0],
    stats: [10,10,10,10,10,10],
    ac: 10,
    chp: 10,
    mhp: 10,
	thp: 0,
    abilities: [],
    attacks: [],
    spells: [[],[],[],[],[],[],[],[],[],[]],
    spellSlots: [0,0,0,0,0,0,0,0,0,0],
	proficiencies: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
}

if (!db.has('old')){
    db.set('old', "0");
	blankPlayer.name = "Tunst";
    db.set('Tunst', JSON.stringify(blankPlayer));
	blankPlayer.name = "Namfoodle";
	db.set('Namfoodle', JSON.stringify(blankPlayer));
	blankPlayer.name = "Delty";
	db.set('Delty', JSON.stringify(blankPlayer));
	blankPlayer.name = "Mort";
	db.set('Mort', JSON.stringify(blankPlayer));
	blankPlayer.name = "Rumple";
	db.set('Rumple', JSON.stringify(blankPlayer));
	blankPlayer.name = "Bingus";
	db.set('Bingus', JSON.stringify(blankPlayer));
}

characterCache = db.JSON(); //get all characters from db in server cache
connectionCount = db.get('old'); //get connection count from db

app.use(express.static(__dirname + '/public', { dotfiles: 'allow' }));
app.get( '/', function (req, res){
	res.sendFile('public/index.html', {root: __dirname});
});

app.get('/getChar', function (req, res){
	const character = req.query.character;
	res.status(200).send(JSON.parse(characterCache[character]));
});

app.post('/saveChar', function (req, res){
	const character = req.body.character;
	const name = req.body.name;
	characterCache[name] = JSON.stringify(character);
	db.set(name, JSON.stringify(character));
});

app.post('/createChar', function (req, res){
	const name = req.body.name;
	blankPlayer.name = name;
	characterCache[name] = JSON.stringify(blankPlayer);
	db.set(name, JSON.stringify(blankPlayer));
});

app.get('/getCharList', function (req, res){
	const nameList = Object.keys(characterCache);
	nameList.splice(nameList.indexOf('old'), 1);
	res.status(200).send(JSON.stringify(nameList));
});

let io = null
let httpServer = null;
let httpsServer = null;
if (mode != 'dev'){
	httpsServer = https.createServer(credentials, app);
	io = socketIO(httpsServer);	
} else {
	httpServer = http.createServer(app);
	io = socketIO(httpServer);
}

possibleSlots = ["class", "level", "race", "backstory", "notes", "inventory", "coin", "stats", "ac", "chp", "mhp", "thp", "abilities", "attacks", "spells", "spellSlots", "proficiencies"];
possibleNewSlots = ['abilities', 'attacks', 'spells'];

io.on('connection', (socket) => {
	console.log('a user connected');
	connectionCount++;
	db.set('old', connectionCount);
	socket.on('disconnect', () => {
		//console.log('user disconnected');
	});
	socket.on('updateThing', (data) => {
		info = JSON.parse(data);
		charaName = info['name'];
		charaSlot = info['slot'];
		charaData = info['data'];
		if (!characterCache[charaName]){
			return;
		}
		if (!possibleSlots.includes(charaSlot)){
			return;
		}
		actualChar = JSON.parse(characterCache[charaName]);
		actualChar[charaSlot] = charaData;
		characterCache[charaName] = JSON.stringify(actualChar);
		emitAndSaveUpdate(charaName, actualChar);
	});

	socket.on('newThing', (data) => {
		info = JSON.parse(data);
		charaName = info['name'];
		slot = info['slot'];
		arrayData = info['data'];
		if (!characterCache[charaName]){
			return;
		}
		if (!possibleNewSlots.includes(slot)){
			return;
		}
		actualChar = JSON.parse(characterCache[charaName]);
		if (slot != 'spells'){
            actualChar[slot].push(arrayData);
		} else {
			spellSlot = info['spellslot'];
			actualChar[slot][spellSlot].push(arrayData);
		}
		
		characterCache[charaName] = JSON.stringify(actualChar);
		emitAndSaveUpdate(charaName, actualChar);
	});

	socket.on('deleteThing', (data) => {
		info = JSON.parse(data);
		charaName = info['name'];
		slot = info['slot'];
		arrayData = info['data'];
		if (!characterCache[charaName]){
			return;
		}
		if (!possibleNewSlots.includes(slot)){
			return;
		}
		actualChar = JSON.parse(characterCache[charaName]);
		spellslot = -1;
		if (slot != 'spells'){
			removeObjFromArray(actualChar[slot], arrayData);
		} else {
			spellSlot = info['spellslot'];
			removeObjFromArray(actualChar[slot][spellSlot], arrayData);
		}
		characterCache[charaName] = JSON.stringify(actualChar);
		emitAndSaveUpdate(charaName, actualChar, arrayData, spellSlot);
	});

	socket.on('editInfo', (data) => {
		info = JSON.parse(data);
		charaName = info['name'];
		slot = info['slot'];
		arrayData = info['data'];
		newText = info['text'];
		if (!characterCache[charaName]){
			return;
		}
		if (!possibleNewSlots.includes(slot)){
			return;
		}
		actualChar = JSON.parse(characterCache[charaName]);
		spellSlot = -1;
		if (slot != 'spells'){
			insertAddInfo(actualChar[slot], arrayData, newText);
		} else {
			spellSlot = info['spellslot'];
			insertAddInfo(actualChar[slot][spellSlot], arrayData, newText);
		}
		characterCache[charaName] = JSON.stringify(actualChar);
		emitAndSaveUpdate(charaName, actualChar, arrayData, spellSlot);
	});

	function removeObjFromArray(array, obj){
		index = -1;
		array.forEach(element => {
			allSame = true;
			for (let i = 0; i < obj.length; i++){
				if (obj[i] != element[i]){
					allSame = false;
					break;
				}
			}
			if (allSame){
				index = array.indexOf(element);
			}
		});
		if (index < 0){
			return;
		}
		array.splice(index, 1);
	}

	function insertAddInfo(array, obj, newText){
		index = -1;
		array.forEach(element => {
			allSame = true;
			for (let i = 0; i < obj.length; i++){
				if (obj[i] != element[i]){
					allSame = false;
					break;
				}
			}
			if (allSame){
				index = array.indexOf(element);
			}
		});
		if (index < 0){
			return;
		}
		array[index][array[index].length - 1] = newText;
	}

	function emitAndSaveUpdate(specificName, specificCharacter, oldDat="base", spellSlot=-1){
		let data = {name:specificName, character:specificCharacter, oldData:oldDat, spellslot:spellSlot};
		socket.broadcast.emit("listen", JSON.stringify(data));
		db.set(charaName, JSON.stringify(actualChar));
		//console.log("emitted Update");
	}
});

if (mode != 'dev'){
	httpsServer.listen(portNumber, () => {
		console.log('ahem. these nuts?');
	});
} else {
	httpServer.listen(portNumber, () => {
		console.log('ahem. these nuts but in http?');
	});
}

app.get('*', function (req, res){
	res.status(404).send("what");
});
