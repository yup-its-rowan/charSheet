var playerName = null;
const portNumber = 4144;
const localHost = "http://localhost:" + portNumber;
const remoteHost = "https://rohanakki.com:" + portNumber;
const currentHost = remoteHost;

examplePlayer1 = {
    name: "Rohan",
    class: "Bard",
    level: 3,
    race: "Human",
    backstory: "Dropped off at birth near a dumpster",
    notes: "This is a note",
    inventory: "One bag of rice\nOne bag of sand",
    coin: [1,1,1,1],
    stats: [20,20,15,13,20,5],
    ac: 15,
    chp: 10,
    mhp: 40,
    thp: 0,
    abilities: [["Third Wind", "Your Mom"], ["Fourth Wind", "Your Dad"]],
    attacks: [["Sword", "1", "str", "P", "4d6", "Bludgeoning", "Long Boy"]],
    spells: [[["Cheeseball", "2", "8d20", "S", "5 minutes", "5 ft", "Big attack"]],[],[],[],[],[],[],[],[],[["Cheeseball", "2", "8d20", "S", "5 minutes", "5 ft", "Big attack"]]],
    spellSlots: [2,0,0,0,0,0,0,0,0,0],
    proficiencies: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0]
}

examplePlayer2 = {
    name: "Fonk",
    class: "Bard",
    level: 3,
    race: "Human",
    backstory: "Dropped off at birth visavi a dumpster",
    notes: "This is a note",
    inventory: "One bag of rice\nOne bag of sand",
    coin: [1,1,1,1],
    stats: [20,20,15,13,20,5],
    ac: 15,
    chp: 10,
    mhp: 40,
    thp: 0,
    abilities: [["Third Wind", "Your Mom"], ["Fourth Wind", "Your Dad"]],
    attacks: [["Sword", "1", "str", "P", "4d6", "Bludgeoning", "Long Boy"]],
    spells: [[["Cheeseball", "2", "8d20", "S", "5 minutes", "5 ft", "Big attack"]],[],[],[],[],[],[],[],[],[["Cheeseball", "2", "8d20", "S", "5 minutes", "5 ft", "Big attack"]]],
    spellSlots: [2,0,0,0,0,0,0,0,0,0],
    proficiencies: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0]
}

const socket = io();

socket.on('connect', function() {
    //console.log("connected to server");
    earlyModal();
});
socket.on("listen", function(data) {
    //console.log("please work");
    data2 = JSON.parse(data);   
    if (data2["name"] == playerName){
        LoadPlayerData(data2["character"]);
        oldData = data2["oldData"];
        if (oldData == "base"){
            //console.log("based");
            return;
        }
        //this stuff is to close important things
    
        selectedAbilityModal = document.getElementById("selectedAbilityModal");
        selectedAttackModal = document.getElementById("selectedAttackModal");
        selectedSpellModal = document.getElementById("selectedSpellModal");
        if (selectedAbilityModal.style.display == "block" && oldData.length == 2){
            if (arrayValComparison(oldData, [selectedAbilityModal.getElementsByClassName("modalHeading")[0].innerHTML, selectedAbilityModal.getElementsByClassName("additionalInfoInput")[0].value])){
                selectedAbilityModal.style.display = "none";
                document.querySelector("body").style.overflow = "auto";
            }
        } else if (selectedAttackModal.style.display == "block" && oldData.length == 7){
            values = [selectedAttackModal.getElementsByClassName("modalHeading")[0].innerHTML, selectedAttackModal.getElementsByClassName("attackBonus")[0].innerHTML, selectedAttackModal.getElementsByClassName("relevantStat")[0].innerHTML, selectedAttackModal.getElementsByClassName("hasProficiency")[0].innerHTML, selectedAttackModal.getElementsByClassName("damageRoll")[0].innerHTML, selectedAttackModal.getElementsByClassName("damagingType")[0].innerHTML, selectedAttackModal.getElementsByClassName("additionalInfoInput")[0].value];
            if (arrayValComparison(oldData, values)){
                selectedAttackModal.style.display = "none";
                document.querySelector("body").style.overflow = "auto";
            }
        } else if (selectedSpellModal.style.display == "block" && oldData.length == 7){
            values = [selectedSpellModal.getElementsByClassName("modalHeading")[0].innerHTML, selectedSpellModal.getElementsByClassName("spellAttackBonus")[0].innerHTML, selectedSpellModal.getElementsByClassName("damageRollSolid")[0].innerHTML, selectedSpellModal.getElementsByClassName("dataVSM")[0].innerHTML, selectedSpellModal.getElementsByClassName("castingTimeSolid")[0].innerHTML, selectedSpellModal.getElementsByClassName("rangeSolid")[0].innerHTML, selectedSpellModal.getElementsByClassName("additionalInfoInput")[0].value];
            spellSl = data2["spellslot"];
            console.log(selectedSpellModal.getElementsByClassName("spellLevel")[0].innerHTML + " " + spellSl);
            if (arrayValComparison(oldData, values) && selectedSpellModal.getElementsByClassName("spellLevel")[0].innerHTML == spellSl){
                selectedSpellModal.style.display = "none";
                document.querySelector("body").style.overflow = "auto";
            }
        }
    }
    
});

function arrayValComparison(array1, array2){
    if (array1.length != array2.length){
        return false;
    }
    for (let index = 0; index < array1.length; index++) {
        if (array1[index] != array2[index]){
            return false;
        }
    }
    return true;
}

function earlyModal(){
    classSelect = document.getElementsByClassName("charSelect")[0];
    classSelect.innerHTML = "";
    fetch(currentHost + "/getCharList", {
        method: "GET"
    }).then(response => response.json())
    .then(data => {
        data.forEach(element => {
            characName = document.createElement("option");
            characName.className = "charSelectOption";
            characName.value = element;
            characName.innerHTML = element;
            classSelect.appendChild(characName);
        });
        console.log("names imported");
    });
    document.getElementById("earlyPopupModal").style.display = "block";
    document.querySelector("body").style.overflow = "hidden";
}

window.addEventListener('load', function () {
    /*
    if (window.document.documentElement.clientWidth > 980){
        let zoom = (( window.outerWidth - 10 ) / window.innerWidth) * 100;
        var isFirefox = typeof InstallTrigger !== 'undefined';
        if (zoom > 95 && !isFirefox){
            this.alert("This site is not optimized for desktop. Please use a mobile device or zoom out for the best experience.");
        }       
    }
    */

    LoadPlayerData(examplePlayer2);
});

function removeBlockModal(){
    playerName = document.getElementsByClassName("charSelect")[0].value;
    displayRemotePlayer(playerName);
    document.getElementById("earlyPopupModal").style.display = "none";
    document.querySelector("body").style.overflow = "auto";
}

function displayRemotePlayer(player){
    fetch(currentHost + "/getChar?character="+player, {
        method: "GET"
    }).then(response => response.json())
    .then(data => {
        LoadPlayerData(data);
    });
}

function LoadPlayerData(player){
    updateACHP(player["ac"], player["chp"], player["mhp"], player["thp"]);
    updateStats(player["stats"]);
    updateClassAndName(player["name"], player["class"], player["race"], player["level"]);
    updateCoin(player["coin"]);
    updateNotes(player["notes"]);
    updateInventory(player["inventory"]);
    updateBackstory(player["backstory"]);
    updateSpells(player["spells"]);
    updateAbilities(player["abilities"]);
    updateAttacks(player["attacks"]);
    updateSpellslots(player["spellSlots"]);
    updateProficiencies(player["proficiencies"]);
}

function SendPlayerData(){
    alert("THIS SHOULD NOT BE RUN");
    alert("THIS HAS BEEN SUPERCEDED");
}

function cleanNumbers(htmlStuff, defaultV){
    if (htmlStuff == ""){
        return defaultV;
    }
    return parseInt(htmlStuff);
}

function updateProficiencies(profs){
    for (let index = 0; index < 18; index++) {
        item = document.getElementsByClassName("pf" + index)[0];
        if (profs[index] == 1){
            item.checked = true;
        } else {
            item.checked = false;
        }
        proficiencyHandler(item, index);
    }
}

function updateSpells(spells){
    spellLists = [document.getElementsByClassName("writtenSpellList0")[0], document.getElementsByClassName("writtenSpellList1")[0], document.getElementsByClassName("writtenSpellList2")[0], document.getElementsByClassName("writtenSpellList3")[0], document.getElementsByClassName("writtenSpellList4")[0], document.getElementsByClassName("writtenSpellList5")[0], document.getElementsByClassName("writtenSpellList6")[0], document.getElementsByClassName("writtenSpellList7")[0], document.getElementsByClassName("writtenSpellList8")[0], document.getElementsByClassName("writtenSpellList9")[0]];
    spellLists.forEach(element => {
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    });
    for (let spellLevel = 0; spellLevel < spells.length; spellLevel++) {
        spells[spellLevel].forEach(spell => {
            spellButton(spellLevel, spell[0], spell[1], spell[2], spell[3].toLocaleLowerCase(), spell[4], spell[5], spell[6]);
        });
    }
}

function updateAbilities(abilities){
    abilityList = document.getElementsByClassName("abilitiesList")[0];
    while (abilityList.firstChild) {
        abilityList.removeChild(abilityList.firstChild);
    }
    abilities.forEach(element => {
        abilitiesButton(element[0], element[1]);
    });
}

function updateAttacks(attacks){
    attackList = document.getElementsByClassName("writtenAttackList")[0];
    while (attackList.firstChild) {
        attackList.removeChild(attackList.firstChild);
    }
    attacks.forEach(element => {
        attackButton(element[0], element[2], element[3], element[1], element[4], element[5], element[6]);
    });
}

function updateSpellslots(spellSlots){
    document.getElementsByClassName("spellSlot1Input")[0].value = spellSlots[0];
    document.getElementsByClassName("spellSlot2Input")[0].value = spellSlots[1];
    document.getElementsByClassName("spellSlot3Input")[0].value = spellSlots[2];
    document.getElementsByClassName("spellSlot4Input")[0].value = spellSlots[3];
    document.getElementsByClassName("spellSlot5Input")[0].value = spellSlots[4];
    document.getElementsByClassName("spellSlot6Input")[0].value = spellSlots[5];
    document.getElementsByClassName("spellSlot7Input")[0].value = spellSlots[6];
    document.getElementsByClassName("spellSlot8Input")[0].value = spellSlots[7];
    document.getElementsByClassName("spellSlot9Input")[0].value = spellSlots[8];
    document.getElementsByClassName("spellSlotKiInput")[0].value = spellSlots[9];
    adjustSpellslots(spellSlots[0], spellSlots[1], spellSlots[2], spellSlots[3], spellSlots[4], spellSlots[5], spellSlots[6], spellSlots[7], spellSlots[8], spellSlots[9]);
}

function updateACHP(ac, chp, mhp, thp){
    document.getElementsByClassName("armorInput")[0].value = ac;
    document.getElementsByClassName("chpInput")[0].value = chp;
    document.getElementsByClassName("mhpInput")[0].value = mhp;
    document.getElementsByClassName("thpInput")[0].value = thp;
    adjustVisibleAC(ac);
    adjustVisibleHP(chp, mhp, thp);
}

function updateStats(stats){
    statsModal = document.getElementById("statsModal");
    statsModal.getElementsByClassName("strengthInput")[0].value = stats[0];
    statsModal.getElementsByClassName("dexterityInput")[0].value = stats[1];
    statsModal.getElementsByClassName("constitutionInput")[0].value = stats[2];
    statsModal.getElementsByClassName("intelligenceInput")[0].value = stats[3];
    statsModal.getElementsByClassName("wisdomInput")[0].value = stats[4];
    statsModal.getElementsByClassName("charismaInput")[0].value = stats[5];;   
    adjustVisibleMods(stats[0], stats[1], stats[2], stats[3], stats[4], stats[5]);
}

function updateClassAndName(name, clas, race, level){
    document.getElementsByClassName("nameDiv")[0].innerHTML = name;
    classCheck = document.getElementById("classModal");
    classCheck.getElementsByClassName("classInput")[0].value = clas;
    classCheck.getElementsByClassName("raceInput")[0].value = race;
    classCheck.getElementsByClassName("levelInput")[0].value = level;
    adjustVisibleClass(race, clas, level);
}

function updateCoin(coin){
    document.getElementsByClassName("copperInput")[0].value = coin[0];
    document.getElementsByClassName("silverInput")[0].value = coin[1];
    document.getElementsByClassName("goldInput")[0].value = coin[2];
    document.getElementsByClassName("platinumInput")[0].value = coin[3];
    adjustVisibleCash(coin[0], coin[1], coin[2], coin[3]);
}

function updateNotes(notes){
    document.getElementsByClassName("notesText")[0].value = notes;
}

function updateInventory(inventory){
    document.getElementsByClassName("inventoryText")[0].value = inventory;
}

function updateBackstory(backstory){
    document.getElementsByClassName("backstoryText")[0].value = backstory;
}

function attackButton(weapon1, modSelect, proficiency, attackRollMod1, damageRoll1, damageType1, additionalInfo1) {
    if (weapon1 == null){
        weapon1 = "Weapon";
    }
    if (modSelect == null){
        modSelect = "str";
    }
    if (proficiency == null){
        proficiency = "N";
    }
    if (attackRollMod1 == ""){
        attackRollMod1 = "0";
    }
    if (damageRoll1 == ""){
        damageRoll1 = "1";
    }
    if (damageType1 == null){
        damageType1 = "Bludgeoning";
    }
    if (additionalInfo1 == null){
        additionalInfo1 = "None";
    }
    var elem = document.getElementsByClassName("writtenAttackList")[0];
    var writtenAttack1 = document.createElement("div");
    writtenAttack1.className = "writtenAttack centerer";
    var weapon = document.createElement("p");
    var modSelected = document.createElement("p");
    var proficiencySe = document.createElement("p");
    var attackRollMod = document.createElement("p");
    var damageRoll = document.createElement("p");
    var damageType = document.createElement("p");
    var additionalInfo = document.createElement("p");
    weapon.className = "weapon";
    weapon.innerHTML = weapon1;
    modSelected.className = "relevantStat";
    modSelected.innerHTML = modSelect;
    proficiencySe.className = "proficiencyCheck";
    proficiencySe.innerHTML =  proficiency;
    attackRollMod.className = "attackRollMod";
    attackRollMod.innerHTML = attackRollMod1;
    damageRoll.className = "damageRoll";
    damageRoll.innerHTML =  damageRoll1;
    damageType.className = "damageType";
    damageType.innerHTML =  damageType1;
    additionalInfo.className = "additionalInfo";
    additionalInfo.innerHTML =  additionalInfo1;
    writtenAttack1.appendChild(weapon);
    writtenAttack1.appendChild(modSelected);
    writtenAttack1.appendChild(proficiencySe);
    writtenAttack1.appendChild(attackRollMod);
    writtenAttack1.appendChild(damageRoll);
    writtenAttack1.appendChild(damageType);
    writtenAttack1.appendChild(additionalInfo);
    writtenAttack1.onclick = function() {openSelectedAttackModal(writtenAttack1)};
    elem.appendChild(writtenAttack1);
}

function abilitiesButton(abilityName1, abilityInfo1) {
    var elem = document.getElementsByClassName("abilitiesList")[0];
    var ability1 = document.createElement("div");
    ability1.className = "writtenAbility centerer";
    var abilityName = document.createElement("p");
    var abilityInfo = document.createElement("p");
    abilityName.className = "abilityName";
    abilityName.innerHTML = abilityName1;
    abilityInfo.className = "abilityInfo";
    abilityInfo.innerHTML =  abilityInfo1;
    ability1.appendChild(abilityName);
    ability1.appendChild(abilityInfo);
    ability1.onclick = function() {openSelectedAbilityModal(ability1)};
    elem.appendChild(ability1);
}

function spellButton(level, cantripName1, attackRollMod1, damageRoll1, vsm1, castingTime1, range1, additionalInfo1) {
    var elem = document.getElementsByClassName("writtenSpellList" + level)[0];
    var spell = document.createElement("div");
    spell.className = "writtenSpell centerer";
    var cantripName = document.createElement("p");
    var attackRollMod = document.createElement("p");
    var damageRoll = document.createElement("p");
    var vsm = document.createElement("p");
    var castingTime = document.createElement("p");
    var range = document.createElement("p");
    var additionalInfo = document.createElement("p");
    cantripName.className = "spellName";
    cantripName.innerHTML = cantripName1;
    attackRollMod.className = "spellAttackMod";
    attackRollMod.innerHTML = attackRollMod1;
    damageRoll.className = "spellDamage";
    damageRoll.innerHTML =  damageRoll1;
    vsm.className = "vsm";
    vsm.innerHTML =  vsm1;
    castingTime.className = "castingTime";
    castingTime.innerHTML =  castingTime1;
    range.className = "spellRange";
    range.innerHTML =  range1;
    additionalInfo.className = "spellInfo";
    additionalInfo.innerHTML =  additionalInfo1;
    spell.appendChild(cantripName);
    spell.appendChild(attackRollMod);
    spell.appendChild(damageRoll);
    spell.appendChild(vsm);
    spell.appendChild(castingTime);
    spell.appendChild(range);
    spell.appendChild(additionalInfo);
    spell.onclick = function() {openSelectedSpellModal(spell)};
    elem.appendChild(spell);
}

function adjustVisibleCash(cp, sp, gp, pp){
    var cash = document.getElementsByClassName("cash")[0];
    cash.getElementsByClassName("copperValue")[0].innerHTML = cp;
    cash.getElementsByClassName("silverValue")[0].innerHTML = sp;
    cash.getElementsByClassName("goldValue")[0].innerHTML = gp;
    cash.getElementsByClassName("platinumValue")[0].innerHTML = pp;
}

function adjustVisibleMods(strength, dexterity, constitution, intelligence, wisdom, charisma) {
    var elem = document.getElementsByClassName("stats")[0];
    var strMod = elem.getElementsByClassName("strMod")[0];
    var dexMod = elem.getElementsByClassName("dexMod")[0];
    var conMod = elem.getElementsByClassName("conMod")[0];
    var intMod = elem.getElementsByClassName("intMod")[0];
    var wisMod = elem.getElementsByClassName("wisMod")[0];
    var chaMod = elem.getElementsByClassName("chaMod")[0];

    strMod.innerHTML = statToMod(strength);
    dexMod.innerHTML = statToMod(dexterity);
    conMod.innerHTML = statToMod(constitution);
    intMod.innerHTML = statToMod(intelligence);
    wisMod.innerHTML = statToMod(wisdom);
    chaMod.innerHTML = statToMod(charisma);
    
    document.getElementsByClassName("spellSaveDC")[0].innerHTML = "Spell Save DC: " + findSpellSaveDC();
}

function adjustVisibleAC(ac){
    var elem = document.getElementsByClassName("ACHPDiv")[0];
    var acElem = elem.getElementsByClassName("actualAC")[0];
    acElem.innerHTML = ac;
}

function adjustVisibleHP(chp, mhp, thp){
    if (chp == ""){
        chp = 0;
    }  
    if (mhp == ""){
        mhp = 0;
    }
    if (thp == ""){
        thp = 0;
    }
    var elem = document.getElementsByClassName("ACHPDiv")[0];
    var hpElem = elem.getElementsByClassName("actualHP")[0];
    
    hpElem.innerHTML = parseInt(parseInt(chp)+parseInt(thp));
    if (thp > 0) {
        hpElem.style.color = "blue";
    } else if (chp <= mhp/4) {
        hpElem.style.color = "red";
    } else {
        hpElem.style.color = "black";
    }
}

function statToMod(stat) {
    if (stat <= 1) {
        return "-5";
    } else if (stat <= 3) {
        return "-4";
    } else if (stat <= 5) {
        return "-3";
    } else if (stat <= 7) {
        return "-2";
    } else if (stat <= 9) {
        return "-1";
    } else if (stat <= 11) {
        return "+0";
    } else if (stat <= 13) {
        return "+1";
    } else if (stat <= 15) {
        return "+2";
    } else if (stat <= 17) {
        return "+3";
    } else if (stat <= 19) {
        return "+4";
    } else if (stat <= 21) {
        return "+5";
    } else if (stat <= 23) {
        return "+6";
    } else if (stat <= 25) {
        return "+7";
    } else if (stat <= 27) {
        return "+8";
    } else if (stat <= 29) {
        return "+9";
    } else if (stat > 29) {
        return "+10";
    }
}

function adjustSpellslots(l11, l21, l31, l41, l51, l61, l71, l81, l91, lki1) {
    var elem = document.getElementsByClassName("spellslots")[0];
    elem.getElementsByClassName("lvl1")[0].innerHTML = l11;
    elem.getElementsByClassName("lvl2")[0].innerHTML = l21;
    elem.getElementsByClassName("lvl3")[0].innerHTML = l31;
    elem.getElementsByClassName("lvl4")[0].innerHTML = l41;
    elem.getElementsByClassName("lvl5")[0].innerHTML = l51;
    elem.getElementsByClassName("lvl6")[0].innerHTML = l61;
    elem.getElementsByClassName("lvl7")[0].innerHTML = l71;
    elem.getElementsByClassName("lvl8")[0].innerHTML = l81;
    elem.getElementsByClassName("lvl9")[0].innerHTML = l91;
    elem.getElementsByClassName("lvlki")[0].innerHTML = lki1;
}

function adjustVisibleClass(race, clas, level){
    var elem = document.getElementsByClassName("classDiv")[0];
    elem.getElementsByClassName("classDivRace")[0].innerHTML = race;
    elem.getElementsByClassName("classDivClass")[0].innerHTML = clas;
    elem.getElementsByClassName("classDivLevel")[0].innerHTML = level;
    
    document.getElementsByClassName("spellSaveDC")[0].innerHTML = "Spell Save DC: " + findSpellSaveDC();
}

//make sure to keep updating this below
window.onclick = function(event) {
    onCloseModal(event);
}

window.ontouchend = function(event) {
    onCloseModal(event);
}

function emitChangeData(slote, datae){
    var emit = {name:playerName, slot:slote, data:datae};
    socket.emit('updateThing', JSON.stringify(emit));
}

function emitCreateData(slote, datae, level=0){
    var emit = {name:playerName, slot:slote, data:datae, spellslot:level};
    socket.emit('newThing', JSON.stringify(emit));
}

function emitDeleteData(slote, datae, level=0){
    var emit = {name:playerName, slot:slote, data:datae, spellslot:level};
    socket.emit('deleteThing', JSON.stringify(emit));
}

function emitEditInfo(slote, datae, newText, level=0){
    var emit = {name:playerName, slot:slote, data:datae, spellslot:level, text:newText};
    socket.emit('editInfo', JSON.stringify(emit));
}

function onCloseModal(event){
    newAttackModal = document.getElementById("newAttackModal");
    newAbilityModal = document.getElementById("newAbilitiesModal");
    newSpellModal = document.getElementById("newSpellModal");
    statsModal = document.getElementById("statsModal");
    cashModal = document.getElementById("cashModal");
    spellSlotsModal = document.getElementById("spellSlotsModal");
    ACModal = document.getElementById("ACModal");
    HPModal = document.getElementById("HPModal");
    classModal = document.getElementById("classModal");
    selectedAttackModal = document.getElementById("selectedAttackModal");
    selectedAbilityModal = document.getElementById("selectedAbilityModal");
    selectedSpellModal = document.getElementById("selectedSpellModal");
    proficiencyModal = document.getElementById("proficiencyModal");

    if (event.target == newAttackModal) {
        if (newAttackModal.getElementsByClassName("nameInput")[0].value != ""){
            values = [newAttackModal.getElementsByClassName("nameInput")[0].value, newAttackModal.getElementsByClassName("attackBonusInput")[0].value, newAttackModal.getElementsByClassName("modifierSelect")[0].value];
            if (newAttackModal.getElementsByClassName("proficiencyInput")[0].checked){
                values.push("P");
            } else {
                values.push("N");
            }
            values.push(newAttackModal.getElementsByClassName("damageInput")[0].value);
            values.push(newAttackModal.getElementsByClassName("damageTypeInput")[0].value);
            values.push(newAttackModal.getElementsByClassName("additionalInfoInput")[0].value);
            if (values[0] == null){
                values[0] = "Weapon";
            }
            if (values[2] == null){
                values[2] = "str";
            }
            if (values[3] == null){
                values[3] = "N";
            }
            if (values[1] == ""){
                values[1] = "0";
            }
            if (values[4] == ""){
                values[4] = "1";
            }
            if (values[5] == null){
                values[5] = "Bludgeoning";
            }
            if (values[6] == null){
                values[6] = "None";
            }
            emitCreateData("attacks", values);    
            attackButton(values[0], values[2], values[3], values[1], values[4], values[5], values[6]);
        }
        
        newAttackModal.getElementsByClassName("nameInput")[0].value = "";
        newAttackModal.getElementsByClassName("modifierSelect")[0].value = "str";
        newAttackModal.getElementsByClassName("proficiencyInput")[0].checked = false;
        newAttackModal.getElementsByClassName("attackBonusInput")[0].value = "";
        newAttackModal.getElementsByClassName("damageInput")[0].value = "";
        newAttackModal.getElementsByClassName("damageTypeInput")[0].value = "";
        newAttackModal.getElementsByClassName("additionalInfoInput")[0].value = "";
        newAttackModal.style.display = "none";
        document.querySelector("body").style.overflow = "auto";
    }
    if (event.target == newAbilityModal) {
        if (newAbilityModal.getElementsByClassName("nameInput")[0].value != ""){
            values = [newAbilityModal.getElementsByClassName("nameInput")[0].value, newAbilityModal.getElementsByClassName("additionalInfoInput")[0].value];
            emitCreateData("abilities", values);
            abilitiesButton(newAbilityModal.getElementsByClassName("nameInput")[0].value, newAbilityModal.getElementsByClassName("additionalInfoInput")[0].value);
        }
        newAbilityModal.getElementsByClassName("nameInput")[0].value = "";
        newAbilityModal.getElementsByClassName("additionalInfoInput")[0].value = "";
        newAbilityModal.style.display = "none";
        document.querySelector("body").style.overflow = "auto";
    }
    if (event.target == newSpellModal) {
        var level = document.getElementsByClassName("levelOfNewSpell")[0].innerHTML;
        newSpellModal.getElementsByClassName("vsmInput")[0].value = newSpellModal.getElementsByClassName("vsmInput")[0].value.toLocaleLowerCase();
        if (newSpellModal.getElementsByClassName("nameInput")[0].value != ""){   
            values = [newSpellModal.getElementsByClassName("nameInput")[0].value, newSpellModal.getElementsByClassName("spellAttackBonusInput")[0].value, newSpellModal.getElementsByClassName("spellDamageInput")[0].value, newSpellModal.getElementsByClassName("vsmInput")[0].value, newSpellModal.getElementsByClassName("castingTimeInput")[0].value, newSpellModal.getElementsByClassName("rangeInput")[0].value, newSpellModal.getElementsByClassName("additionalInfoInput")[0].value];
            emitCreateData("spells", values, level);
            spellButton(level, newSpellModal.getElementsByClassName("nameInput")[0].value, newSpellModal.getElementsByClassName("spellAttackBonusInput")[0].value, newSpellModal.getElementsByClassName("spellDamageInput")[0].value, newSpellModal.getElementsByClassName("vsmInput")[0].value, newSpellModal.getElementsByClassName("castingTimeInput")[0].value, newSpellModal.getElementsByClassName("rangeInput")[0].value, newSpellModal.getElementsByClassName("additionalInfoInput")[0].value);
        }
        newSpellModal.getElementsByClassName("nameInput")[0].value = "";
        newSpellModal.getElementsByClassName("spellAttackBonusInput")[0].value = "";
        newSpellModal.getElementsByClassName("spellDamageInput")[0].value = "";
        newSpellModal.getElementsByClassName("vsmInput")[0].value = "";
        newSpellModal.getElementsByClassName("castingTimeInput")[0].value = "";
        newSpellModal.getElementsByClassName("rangeInput")[0].value = "";
        newSpellModal.getElementsByClassName("additionalInfoInput")[0].value = "";
        newSpellModal.style.display = "none";
        document.querySelector("body").style.overflow = "auto";
    }
    if (event.target == statsModal){
        stripAndSendStats();
        statsModal.style.display = "none";
        document.querySelector("body").style.overflow = "auto";
    }
    if (event.target == cashModal) {
        stripAndSendCash();
        cashModal.style.display = "none";
        document.querySelector("body").style.overflow = "auto";
    }
    if (event.target == spellSlotsModal) {
        stripAndSendSpellslots();        
        spellSlotsModal.style.display = "none";
        document.querySelector("body").style.overflow = "auto";
    }
    if (event.target == ACModal) {
        stripAndSendACModal();
        ACModal.style.display = "none";
        document.querySelector("body").style.overflow = "auto";
    }
    if (event.target == HPModal) {
        stripAndSendHPModal();
        HPModal.style.display = "none";
        document.querySelector("body").style.overflow = "auto";
    }
    if (event.target == classModal) {
        stripAndSendClass();
        classModal.style.display = "none";
        document.querySelector("body").style.overflow = "auto";
    }
    if (event.target == selectedAttackModal) {
        selectedAttackModal.style.display = "none";
        document.querySelector("body").style.overflow = "auto";
    }
    if (event.target == selectedAbilityModal) {
        selectedAbilityModal.style.display = "none";
        document.querySelector("body").style.overflow = "auto";
    }
    if (event.target == selectedSpellModal) {
        selectedSpellModal.style.display = "none";
        document.querySelector("body").style.overflow = "auto";
    }
    if (event.target == proficiencyModal) {
        proficiencyModal.style.display = "none";
        document.querySelector("body").style.overflow = "auto";
        stripAndSendProficiency();
    }
}
function stripAndSendClass(){
    classModal = document.getElementById("classModal");
    var classInput = classModal.getElementsByClassName("classInput")[0].value;   
    var raceInput = classModal.getElementsByClassName("raceInput")[0].value;
    var levelInput = classModal.getElementsByClassName("levelInput")[0].value;

    if (classInput == ""){
        classInput = "Input Class";
    }  
    if (raceInput == ""){
        raceInput = "Input Race";
    }
    if (levelInput == ""){
        levelInput = 1;
        classModal.getElementsByClassName("levelInput")[0].value = 1;
    }
    adjustVisibleClass(raceInput, classInput, levelInput);
    emitChangeData("class", classInput);
    emitChangeData("race", raceInput);
    emitChangeData("level", levelInput);
}
function stripAndSendHPModal(){
    HPModal = document.getElementById("HPModal");
    var chp = HPModal.getElementsByClassName("chpInput")[0].value;   
    var mhp = HPModal.getElementsByClassName("mhpInput")[0].value;
    var thp = HPModal.getElementsByClassName("thpInput")[0].value;
    if (chp == ""){
        chp = 0;
        HPModal.getElementsByClassName("chpInput")[0].value = 0;
    }  
    if (mhp == ""){
        mhp = 0;
        HPModal.getElementsByClassName("mhpInput")[0].value = 0;
    }
    if (thp == ""){
        thp = 0;
        HPModal.getElementsByClassName("thpInput")[0].value = 0;
    }
    adjustVisibleHP(chp, mhp, thp);
    emitChangeData("chp", chp);
    emitChangeData("mhp", mhp);
    emitChangeData("thp", thp);
}
function stripAndSendACModal(){
    ACModal = document.getElementById("ACModal");
    var ac = ACModal.getElementsByClassName("armorInput")[0].value;   
    if (ac == ""){
        ac = 10;
        ACModal.getElementsByClassName("armorInput")[0].value = 10;
    }  
    adjustVisibleAC(ac);
    emitChangeData("ac", ac);
}
function stripAndSendSpellslots(){
    spellSlotsModal = document.getElementById("spellSlotsModal");
    var l1 = spellSlotsModal.getElementsByClassName("spellSlot1Input")[0].value;
    var l2 = spellSlotsModal.getElementsByClassName("spellSlot2Input")[0].value;
    var l3 = spellSlotsModal.getElementsByClassName("spellSlot3Input")[0].value;
    var l4 = spellSlotsModal.getElementsByClassName("spellSlot4Input")[0].value;
    var l5 = spellSlotsModal.getElementsByClassName("spellSlot5Input")[0].value;
    var l6 = spellSlotsModal.getElementsByClassName("spellSlot6Input")[0].value;
    var l7 = spellSlotsModal.getElementsByClassName("spellSlot7Input")[0].value;
    var l8 = spellSlotsModal.getElementsByClassName("spellSlot8Input")[0].value;
    var l9 = spellSlotsModal.getElementsByClassName("spellSlot9Input")[0].value;
    var lKi = spellSlotsModal.getElementsByClassName("spellSlotKiInput")[0].value;

    adjustSpellslots(l1, l2, l3, l4, l5, l6, l7, l8, l9, lKi);
    values = [l1, l2, l3, l4, l5, l6, l7, l8, l9, lKi];
    emitChangeData("spellSlots", values);
}
function stripAndSendCash(){
    cashModal = document.getElementById("cashModal");
    var cp = cashModal.getElementsByClassName("copperInput")[0].value;
    var sp = cashModal.getElementsByClassName("silverInput")[0].value;
    var gp = cashModal.getElementsByClassName("goldInput")[0].value;
    var pp = cashModal.getElementsByClassName("platinumInput")[0].value;

    if (cp == ""){
        cp = 0;
        cashModal.getElementsByClassName("copperInput")[0].value = 0;
    }
    if (sp == ""){
        sp = 0;
        cashModal.getElementsByClassName("silverInput")[0].value = 0;
    }
    if (gp == ""){
        gp = 0;
        cashModal.getElementsByClassName("goldInput")[0].value = 0;
    }
    if (pp == ""){
        pp = 0;
        cashModal.getElementsByClassName("platinumInput")[0].value = 0;
    }
    if (cp[0] == "0"){
        cp = cp.substring(1);
        cashModal.getElementsByClassName("copperInput")[0].value = cp;
    }
    if (sp[0] == "0"){
        sp = sp.substring(1);
        cashModal.getElementsByClassName("silverInput")[0].value = sp;
    }
    if (gp[0] == "0"){
        gp = gp.substring(1);
        cashModal.getElementsByClassName("goldInput")[0].value = gp;
    }
    if (pp[0] == "0"){
        pp = pp.substring(1);
        cashModal.getElementsByClassName("platinumInput")[0].value = pp;
    }
    adjustVisibleCash(cp, sp, gp, pp);
    values = [cp, sp, gp, pp];
    emitChangeData("coin", values);
}
function stripAndSendStats(){
    statsModal = document.getElementById("statsModal");
    var strength = statsModal.getElementsByClassName("strengthInput")[0].value;
    var dexterity = statsModal.getElementsByClassName("dexterityInput")[0].value;
    var constitution = statsModal.getElementsByClassName("constitutionInput")[0].value;
    var intelligence = statsModal.getElementsByClassName("intelligenceInput")[0].value;
    var wisdom = statsModal.getElementsByClassName("wisdomInput")[0].value;
    var charisma = statsModal.getElementsByClassName("charismaInput")[0].value;

    if (strength == ""){
        strength = 10;
        statsModal.getElementsByClassName("strengthInput")[0].value = 10;
    }
    if (dexterity == ""){
        dexterity = 10;
        statsModal.getElementsByClassName("dexterityInput")[0].value = 10;
    }
    if (constitution == ""){
        constitution = 10;
        statsModal.getElementsByClassName("constitutionInput")[0].value = 10;
    }
    if (intelligence == ""){
        intelligence = 10;
        statsModal.getElementsByClassName("intelligenceInput")[0].value = 10;
    }
    if (wisdom == ""){
        wisdom = 10;
        statsModal.getElementsByClassName("wisdomInput")[0].value = 10;
    }
    if (charisma == ""){
        charisma = 10;
        statsModal.getElementsByClassName("charismaInput")[0].value = 10;
    }
    
    adjustVisibleMods(strength, dexterity, constitution, intelligence, wisdom, charisma);
    values = [strength, dexterity, constitution, intelligence, wisdom, charisma];
    emitChangeData("stats", values);
}
function stripAndSendProficiency(){
    values = [];
    for (var i = 0; i < 18; i++){
        var checkbox = document.getElementsByClassName("pf" + i)[0];
        if (checkbox.checked){
            values.push(1);
        } else {
            values.push(0);
        }
    }
    emitChangeData("proficiencies", values);
}
function proficiencyHandler(checkbox, index){
    relevantMod = document.getElementsByClassName("hiddenAttribute" + index)[0].innerHTML;
    correctMod = document.getElementsByClassName(relevantMod + "Mod")[0].innerHTML;
    value = 0;
    if (correctMod[0] == "-"){
        value = parseInt(correctMod);
    } else {
        value = parseInt(correctMod.substring(1));
    }
    if (checkbox.checked){
        value += levelToProficiency();
    }
    if (value >= 0){
        value = "+" + value;
    }
    document.getElementsByClassName("calculatedProf" + index)[0].innerHTML = value;
}
function openProficiencyModal() {
    document.getElementById("proficiencyModal").style.display = "block";
    document.querySelector("body").style.overflow = "hidden";
}
function openNewAttackModal() {
    document.getElementById("newAttackModal").style.display = "block";
    document.querySelector("body").style.overflow = "hidden";
}
function openNewAbilitiesModal() {
    document.getElementById("newAbilitiesModal").style.display = "block";
    document.querySelector("body").style.overflow = "hidden";
}
function openNewSpellModal(lvl){
    var spellModal = document.getElementById("newSpellModal");
    document.getElementsByClassName("levelOfNewSpell")[0].innerHTML = lvl;
    if (lvl == 0){
        spellModal.getElementsByClassName("modalHeading")[0].innerHTML = "New Cantrip";
    } else {
        spellModal.getElementsByClassName("modalHeading")[0].innerHTML = "New L" + lvl + " Spell";
    }
    spellModal.style.display = "block";
    document.querySelector("body").style.overflow = "hidden";
}
function openStatsModal() {
    document.getElementById("statsModal").style.display = "block";
    document.querySelector("body").style.overflow = "hidden";
}
function openCashModal() {
    document.getElementById("cashModal").style.display = "block";
    document.querySelector("body").style.overflow = "hidden";
}
function openSpellSlotsModal() {
    document.getElementById("spellSlotsModal").style.display = "block";
    document.querySelector("body").style.overflow = "hidden";
}
function openACModal(){
    document.getElementById("ACModal").style.display = "block";
    document.querySelector("body").style.overflow = "hidden";
}
function openHPModal(){
    document.getElementById("HPModal").style.display = "block";
    document.querySelector("body").style.overflow = "hidden";
}
function openClassModal(){
    document.getElementById("classModal").style.display = "block";
    document.querySelector("body").style.overflow = "hidden";
}
function openSelectedAttackModal(obj){
    selectedAttackModal = document.getElementById("selectedAttackModal");
    selectedAttackModal.getElementsByClassName("headingText")[0].innerHTML = obj.getElementsByClassName("weapon")[0].innerHTML;
    var modifier = parseInt(obj.getElementsByClassName("attackRollMod")[0].innerHTML);
    selectedAttackModal.getElementsByClassName("hasProficiency")[0].innerHTML = obj.getElementsByClassName("proficiencyCheck")[0].innerHTML;
    selectedAttackModal.getElementsByClassName("relevantStat")[0].innerHTML = obj.getElementsByClassName("relevantStat")[0].innerHTML;
    selectedAttackModal.getElementsByClassName("attackBonus")[0].innerHTML = obj.getElementsByClassName("attackRollMod")[0].innerHTML;
    selectedAttackModal.getElementsByClassName("damageRoll")[0].innerHTML = obj.getElementsByClassName("damageRoll")[0].innerHTML;
    if (obj.getElementsByClassName("proficiencyCheck")[0].innerHTML == "P"){
        modifier+=levelToProficiency();
    }
    modifier+= findModifier(obj);

    if (modifier > 0){
        modifier = "+" + modifier;
    } else if (modifier == 0){
        modifier = "";
    }
    selectedAttackModal.getElementsByClassName("attackRollSolid")[0].innerHTML = "d20" + modifier;

    var damageMod = parseInt(findModifier(obj));
    if (damageMod > 0){
        damageMod = "+" + damageMod;
    } else if (damageMod == 0){
        damageMod = "";
    }
    selectedAttackModal.getElementsByClassName("damageRollSolid")[0].innerHTML = obj.getElementsByClassName("damageRoll")[0].innerHTML + damageMod;
    selectedAttackModal.getElementsByClassName("damagingType")[0].innerHTML = obj.getElementsByClassName("damageType")[0].innerHTML;
    selectedAttackModal.getElementsByClassName("textAreaModal")[0].value = obj.getElementsByClassName("additionalInfo")[0].innerHTML;
    selectedAttackModal.getElementsByClassName("textAreaModal")[0].oninput = function() {
        values = [obj.getElementsByClassName("weapon")[0].innerHTML, obj.getElementsByClassName("attackRollMod")[0].innerHTML, obj.getElementsByClassName("relevantStat")[0].innerHTML, obj.getElementsByClassName("proficiencyCheck")[0].innerHTML, obj.getElementsByClassName("damageRoll")[0].innerHTML, obj.getElementsByClassName("damageType")[0].innerHTML, obj.getElementsByClassName("additionalInfo")[0].innerHTML];
        emitEditInfo("attacks", values, selectedAttackModal.getElementsByClassName("textAreaModal")[0].value);
        obj.getElementsByClassName("additionalInfo")[0].innerHTML = selectedAttackModal.getElementsByClassName("textAreaModal")[0].value;  
    };
    selectedAttackModal.getElementsByClassName("deleteSelectedAttackButton")[0].onclick = function() {
        values = [obj.getElementsByClassName("weapon")[0].innerHTML, obj.getElementsByClassName("attackRollMod")[0].innerHTML, obj.getElementsByClassName("relevantStat")[0].innerHTML, obj.getElementsByClassName("proficiencyCheck")[0].innerHTML, obj.getElementsByClassName("damageRoll")[0].innerHTML, obj.getElementsByClassName("damageType")[0].innerHTML, obj.getElementsByClassName("additionalInfo")[0].innerHTML];
        emitDeleteData("attacks", values);
        obj.remove();
        selectedAttackModal.style.display = "none";
        document.querySelector("body").style.overflow = "auto";
    };
    selectedAttackModal.style.display = "block";
    document.querySelector("body").style.overflow = "hidden";
}
function openSelectedAbilityModal(obj){
    selectedAbility = document.getElementById("selectedAbilityModal");
    selectedAbility.getElementsByClassName("headingText")[0].innerHTML = obj.getElementsByClassName("abilityName")[0].innerHTML;
    selectedAbility.getElementsByClassName("textAreaModalAbility")[0].value = obj.getElementsByClassName("abilityInfo")[0].innerHTML;
    selectedAbility.getElementsByClassName("textAreaModalAbility")[0].oninput = function() {
        values = [obj.getElementsByClassName("abilityName")[0].innerHTML, obj.getElementsByClassName("abilityInfo")[0].innerHTML];
        emitEditInfo("abilities", values, selectedAbility.getElementsByClassName("textAreaModalAbility")[0].value);
        obj.getElementsByClassName("abilityInfo")[0].innerHTML = selectedAbility.getElementsByClassName("textAreaModalAbility")[0].value;
    };
    selectedAbility.getElementsByClassName("deleteSelectedAbilityButton")[0].onclick = function() {
        values = [obj.getElementsByClassName("abilityName")[0].innerHTML, obj.getElementsByClassName("abilityInfo")[0].innerHTML];
        emitDeleteData("abilities", values);
        obj.remove();
        selectedAbility.style.display = "none";
        document.querySelector("body").style.overflow = "auto";
    };
    selectedAbility.style.display = "block";
    document.querySelector("body").style.overflow = "hidden";
}

function openSelectedSpellModal(obj) {
    selectedSpellModal = document.getElementById("selectedSpellModal");

    selectedSpellModal.getElementsByClassName("headingText")[0].innerHTML = obj.getElementsByClassName("spellName")[0].innerHTML;
    selectedSpellModal.getElementsByClassName("spellAttackBonus")[0].innerHTML = obj.getElementsByClassName("spellAttackMod")[0].innerHTML;
    selectedSpellModal.getElementsByClassName("spellLevel")[0].innerHTML = obj.parentElement.className.substring(16);
    var modifier = 0;
    if (obj.getElementsByClassName("spellAttackMod")[0].innerHTML != ""){
        modifier += parseInt(obj.getElementsByClassName("spellAttackMod")[0].innerHTML);
    }
    modifier += findSpellAttackModifier();
    if (modifier > 0){
        modifier = "+" + modifier;
    } else if (modifier == 0){
        modifier = "";
    }
    selectedSpellModal.getElementsByClassName("attackRollSolid")[0].innerHTML = "d20" + modifier;
    selectedSpellModal.getElementsByClassName("damageRollSolid")[0].innerHTML = obj.getElementsByClassName("spellDamage")[0].innerHTML;
    selectedSpellModal.getElementsByClassName("rangeSolid")[0].innerHTML = obj.getElementsByClassName("spellRange")[0].innerHTML;
    selectedSpellModal.getElementsByClassName("castingTimeSolid")[0].innerHTML = obj.getElementsByClassName("castingTime")[0].innerHTML;
    var vsmTime = obj.getElementsByClassName("vsm")[0].innerHTML;
    selectedSpellModal.getElementsByClassName("dataVSM")[0].innerHTML = vsmTime;
    if (vsmTime == "v"){
        vsmTime = "Verbal";
    } else if (vsmTime == "s"){
        vsmTime = "Somatic";
    } else if (vsmTime == "m"){
        vsmTime = "Material";
    } else {
        vsmTime = vsmTime.toUpperCase();
    }
    selectedSpellModal.getElementsByClassName("vsmSolid")[0].innerHTML = vsmTime;
    selectedSpellModal.getElementsByClassName("textAreaModal")[0].value = obj.getElementsByClassName("spellInfo")[0].innerHTML;
    selectedSpellModal.getElementsByClassName("textAreaModal")[0].oninput = function() {
        values = [obj.getElementsByClassName("spellName")[0].innerHTML, obj.getElementsByClassName("spellAttackMod")[0].innerHTML, obj.getElementsByClassName("spellDamage")[0].innerHTML, obj.getElementsByClassName("vsm")[0].innerHTML, obj.getElementsByClassName("castingTime")[0].innerHTML, obj.getElementsByClassName("spellRange")[0].innerHTML, obj.getElementsByClassName("spellInfo")[0].innerHTML];
        emitEditInfo("spells", values, selectedSpellModal.getElementsByClassName("textAreaModal")[0].value, obj.parentElement.className.substring(16));
        obj.getElementsByClassName("spellInfo")[0].innerHTML = selectedSpellModal.getElementsByClassName("textAreaModal")[0].value;
    };
    selectedSpellModal.getElementsByClassName("deleteSelectedSpellButton")[0].onclick = function() {
        values = [obj.getElementsByClassName("spellName")[0].innerHTML, obj.getElementsByClassName("spellAttackMod")[0].innerHTML, obj.getElementsByClassName("spellDamage")[0].innerHTML, obj.getElementsByClassName("vsm")[0].innerHTML, obj.getElementsByClassName("castingTime")[0].innerHTML, obj.getElementsByClassName("spellRange")[0].innerHTML, obj.getElementsByClassName("spellInfo")[0].innerHTML];
        emitDeleteData("spells", values, obj.parentElement.className.substring(16));
        obj.remove();
        selectedSpellModal.style.display = "none";
        document.querySelector("body").style.overflow = "auto";
    };

    selectedSpellModal.style.display = "block";
    document.querySelector("body").style.overflow = "hidden";
}

function levelToProficiency(){
    var level = document.getElementsByClassName("classDivLevel")[0].innerHTML;
    var proficiency = 2;
    if (level >= 5){
        proficiency = 3;
    }
    if (level >= 9){
        proficiency = 4;
    }
    if (level >= 13){
        proficiency = 5;
    }
    if (level >= 17){
        proficiency = 6;
    }
    return proficiency;
}
function findModifier(obj){
    var stat = obj.getElementsByClassName("relevantStat")[0].innerHTML;
    var correctMod = document.getElementsByClassName(stat + "Mod")[0].innerHTML;
    if (correctMod[0] == "+"){
        correctMod = correctMod.substring(1);
    }
    return parseInt(correctMod);
}
function spellAttackModifierHelper(trueClass){
    value = 0;
    if (trueClass == "wizard"){
        value = document.getElementsByClassName("intMod")[0].innerHTML;
    } else if (trueClass == "cleric"){
        value = document.getElementsByClassName("wisMod")[0].innerHTML;
    } else if (trueClass == "druid"){
        value = document.getElementsByClassName("wisMod")[0].innerHTML;
    } else if (trueClass == "sorcerer"){
        value = document.getElementsByClassName("chaMod")[0].innerHTML;
    } else if (trueClass == "bard"){
        value = document.getElementsByClassName("chaMod")[0].innerHTML;
    } else if (trueClass == "paladin"){
        value = document.getElementsByClassName("chaMod")[0].innerHTML;
    } else if (trueClass == "warlock"){
        value = document.getElementsByClassName("chaMod")[0].innerHTML;
    } else if (trueClass == "ranger"){
        value = document.getElementsByClassName("wisMod")[0].innerHTML;
    } else if (trueClass == "artificer"){
        value = document.getElementsByClassName("intMod")[0].innerHTML;
    }
    return parseInt(value);
}
function findSpellAttackModifier(){
    var trueClass = document.getElementsByClassName("classDivClass")[0].innerHTML.toLocaleLowerCase();
    return spellAttackModifierHelper(trueClass) + levelToProficiency();
}
function findSpellSaveDC(){
    return 8 + findSpellAttackModifier();;  
}
function remoteNotes(){
    actualNotes = document.getElementsByClassName("notesText")[0].value;
    emitChangeData("notes", actualNotes);
}
function remoteBackstory(){
    actualBackstory = document.getElementsByClassName("backstoryText")[0].value;
    emitChangeData("backstory", actualBackstory);
}
function remoteInventory(){
    actualInventory = document.getElementsByClassName("inventoryText")[0].value;
    emitChangeData("inventory", actualInventory);
}