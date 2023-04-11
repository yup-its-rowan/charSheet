
var playerName = null;

function attackModal(){
    
}



function LoadPlayerData(){
    updateACHP();
    updateStats();
    updateClassAndName();
    updateCoin();
    updateNotesAndBackstory();
    updateSpells();
    updateAbilities();
    updateAttacks();
}

function updateSpells(){

}

function updateAbilities(){

}

function updateAttacks(){

}

function updateACHP(){

}

function updateStats(){

}

function updateClassAndName(){

}

function updateCoin(){

}

function updateNotesAndBackstory(){

}

function attackButton() {
    var elem = document.getElementsByClassName("writtenAttackList")[0];
    var writtenAttack1 = document.createElement("div");
    writtenAttack1.className = "writtenAttack centerer";
    var weapon = document.createElement("p");
    var attackRollMod = document.createElement("p");
    var damageRoll = document.createElement("p");
    var damageType = document.createElement("p");
    var additionalInfo = document.createElement("p");
    weapon.className = "weapon";
    weapon.innerHTML = "Greatsword";
    attackRollMod.className = "attackRollMod";
    attackRollMod.innerHTML = "+4";
    damageRoll.className = "damageRoll";
    damageRoll.innerHTML = "2d6";
    damageType.className = "damageType";
    damageType.innerHTML = "Slashing";
    additionalInfo.className = "additionalInfo";
    additionalInfo.innerHTML = "Looks Pretty";
    writtenAttack1.appendChild(weapon);
    writtenAttack1.appendChild(attackRollMod);
    writtenAttack1.appendChild(damageRoll);
    writtenAttack1.appendChild(damageType);
    writtenAttack1.appendChild(additionalInfo);
    elem.appendChild(writtenAttack1);
}