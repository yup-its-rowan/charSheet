
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

function attackButton(weapon1, attackRollMod1, damageRoll1, damageType1, additionalInfo1) {
    var elem = document.getElementsByClassName("writtenAttackList")[0];
    var writtenAttack1 = document.createElement("div");
    writtenAttack1.className = "writtenAttack centerer";
    var weapon = document.createElement("p");
    var attackRollMod = document.createElement("p");
    var damageRoll = document.createElement("p");
    var damageType = document.createElement("p");
    var additionalInfo = document.createElement("p");
    weapon.className = "weapon";
    weapon.innerHTML = weapon1;
    attackRollMod.className = "attackRollMod";
    attackRollMod.innerHTML = attackRollMod1;
    damageRoll.className = "damageRoll";
    damageRoll.innerHTML =  damageRoll1;
    damageType.className = "damageType";
    damageType.innerHTML =  damageType1;
    additionalInfo.className = "additionalInfo";
    additionalInfo.innerHTML =  additionalInfo1;
    writtenAttack1.appendChild(weapon);
    writtenAttack1.appendChild(attackRollMod);
    writtenAttack1.appendChild(damageRoll);
    writtenAttack1.appendChild(damageType);
    writtenAttack1.appendChild(additionalInfo);
    elem.appendChild(writtenAttack1);
}

//make sure to keep updating this below

window.onclick = function(event) {
    newAttackModal = document.getElementById("newAttackModal");
    if (event.target == newAttackModal) {
        if (newAttackModal.getElementsByClassName("nameInput")[0].value == ""){
            newAttackModal.style.display = "none";
            return;
        }
        attackButton(newAttackModal.getElementsByClassName("nameInput")[0].value, newAttackModal.getElementsByClassName("attackBonusInput")[0].value, newAttackModal.getElementsByClassName("damageInput")[0].value, newAttackModal.getElementsByClassName("damageTypeInput")[0].value, newAttackModal.getElementsByClassName("additionalInfoInput")[0].value);
        newAttackModal.getElementsByClassName("nameInput")[0].value = "";
        newAttackModal.getElementsByClassName("attackBonusInput")[0].value = "";
        newAttackModal.getElementsByClassName("damageInput")[0].value = "";
        newAttackModal.getElementsByClassName("damageTypeInput")[0].value = "";
        newAttackModal.getElementsByClassName("additionalInfoInput")[0].value = "";
        newAttackModal.style.display = "none";
    }
}
