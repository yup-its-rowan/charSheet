
var playerName = null;

function attackModal(){
    
}



function LoadPlayerData(){
    updateACHP();
    updateStats();
    updateClassAndName();
    updateCoin();
    updateNotes();
    updateBackstory();
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

function updateNotes(){
}

function updateBackstory(){
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
    elem.appendChild(ability1);
}

function cantripButton(cantripName1, attackRollMod1, damageRoll1, vsm1, castingTime1, range1, additionalInfo1) {
    var elem = document.getElementsByClassName("writtenSpellList")[0];
    var cantrip1 = document.createElement("div");
    cantrip1.className = "writtenSpell centerer";
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
    cantrip1.appendChild(cantripName);
    cantrip1.appendChild(attackRollMod);
    cantrip1.appendChild(damageRoll);
    cantrip1.appendChild(vsm);
    cantrip1.appendChild(castingTime);
    cantrip1.appendChild(range);
    cantrip1.appendChild(additionalInfo);
    elem.appendChild(cantrip1);
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
    elem.appendChild(spell);
}
//make sure to keep updating this below
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

window.onclick = function(event) {
    newAttackModal = document.getElementById("newAttackModal");
    newAbilityModal = document.getElementById("newAbilitiesModal");
    newCantripModal = document.getElementById("newCantripModal");
    newSpellModal1 = document.getElementById("newSpellModal1");
    newSpellModal2 = document.getElementById("newSpellModal2");
    newSpellModal3 = document.getElementById("newSpellModal3");
    newSpellModal4 = document.getElementById("newSpellModal4");
    newSpellModal5 = document.getElementById("newSpellModal5");
    newSpellModal6 = document.getElementById("newSpellModal6");
    newSpellModal7 = document.getElementById("newSpellModal7");
    newSpellModal8 = document.getElementById("newSpellModal8");
    newSpellModal9 = document.getElementById("newSpellModal9");
    statsModal = document.getElementById("statsModal");
    cashModal = document.getElementById("cashModal");
    if (event.target == newAttackModal) {
        if (newAttackModal.getElementsByClassName("nameInput")[0].value != ""){
            attackButton(newAttackModal.getElementsByClassName("nameInput")[0].value, newAttackModal.getElementsByClassName("attackBonusInput")[0].value, newAttackModal.getElementsByClassName("damageInput")[0].value, newAttackModal.getElementsByClassName("damageTypeInput")[0].value, newAttackModal.getElementsByClassName("additionalInfoInput")[0].value);
        }
        newAttackModal.getElementsByClassName("nameInput")[0].value = "";
        newAttackModal.getElementsByClassName("attackBonusInput")[0].value = "";
        newAttackModal.getElementsByClassName("damageInput")[0].value = "";
        newAttackModal.getElementsByClassName("damageTypeInput")[0].value = "";
        newAttackModal.getElementsByClassName("additionalInfoInput")[0].value = "";
        newAttackModal.style.display = "none";
    }
    if (event.target == newAbilityModal) {
        if (newAbilityModal.getElementsByClassName("nameInput")[0].value != ""){
            abilitiesButton(newAbilityModal.getElementsByClassName("nameInput")[0].value, newAbilityModal.getElementsByClassName("additionalInfoInput")[0].value);
        }
        newAbilityModal.getElementsByClassName("nameInput")[0].value = "";
        newAbilityModal.getElementsByClassName("additionalInfoInput")[0].value = "";
        newAbilityModal.style.display = "none";
    }
    if (event.target == newCantripModal) {
        if (newCantripModal.getElementsByClassName("nameInput")[0].value != ""){   
            cantripButton(newCantripModal.getElementsByClassName("nameInput")[0].value, newCantripModal.getElementsByClassName("spellAttackBonusInput")[0].value, newCantripModal.getElementsByClassName("spellDamageInput")[0].value, newCantripModal.getElementsByClassName("vsmInput")[0].value, newCantripModal.getElementsByClassName("castingTimeInput")[0].value, newCantripModal.getElementsByClassName("rangeInput")[0].value, newCantripModal.getElementsByClassName("additionalInfoInput")[0].value);
        }
        newCantripModal.getElementsByClassName("nameInput")[0].value = "";
        newCantripModal.getElementsByClassName("spellAttackBonusInput")[0].value = "";
        newCantripModal.getElementsByClassName("spellDamageInput")[0].value = "";
        newCantripModal.getElementsByClassName("vsmInput")[0].value = "";
        newCantripModal.getElementsByClassName("castingTimeInput")[0].value = "";
        newCantripModal.getElementsByClassName("rangeInput")[0].value = "";
        newCantripModal.getElementsByClassName("additionalInfoInput")[0].value = "";
        newCantripModal.style.display = "none";
    }
    if (event.target == newSpellModal1) {
        if (newSpellModal1.getElementsByClassName("nameInput")[0].value != ""){
            spellButton("1", newSpellModal1.getElementsByClassName("nameInput")[0].value, newSpellModal1.getElementsByClassName("spellAttackBonusInput")[0].value, newSpellModal1.getElementsByClassName("spellDamageInput")[0].value, newSpellModal1.getElementsByClassName("vsmInput")[0].value, newSpellModal1.getElementsByClassName("castingTimeInput")[0].value, newSpellModal1.getElementsByClassName("rangeInput")[0].value, newSpellModal1.getElementsByClassName("additionalInfoInput")[0].value);
        }
        newSpellModal1.getElementsByClassName("nameInput")[0].value = "";
        newSpellModal1.getElementsByClassName("spellAttackBonusInput")[0].value = "";
        newSpellModal1.getElementsByClassName("spellDamageInput")[0].value = "";
        newSpellModal1.getElementsByClassName("vsmInput")[0].value = "";
        newSpellModal1.getElementsByClassName("castingTimeInput")[0].value = "";
        newSpellModal1.getElementsByClassName("rangeInput")[0].value = "";
        newSpellModal1.getElementsByClassName("additionalInfoInput")[0].value = "";
        newSpellModal1.style.display = "none";
    }
    if (event.target == newSpellModal2) {
        if (newSpellModal2.getElementsByClassName("nameInput")[0].value != ""){
            spellButton("2", newSpellModal2.getElementsByClassName("nameInput")[0].value, newSpellModal2.getElementsByClassName("spellAttackBonusInput")[0].value, newSpellModal2.getElementsByClassName("spellDamageInput")[0].value, newSpellModal2.getElementsByClassName("vsmInput")[0].value, newSpellModal2.getElementsByClassName("castingTimeInput")[0].value, newSpellModal2.getElementsByClassName("rangeInput")[0].value, newSpellModal2.getElementsByClassName("additionalInfoInput")[0].value);
        }
        newSpellModal2.getElementsByClassName("nameInput")[0].value = "";
        newSpellModal2.getElementsByClassName("spellAttackBonusInput")[0].value = "";
        newSpellModal2.getElementsByClassName("spellDamageInput")[0].value = "";
        newSpellModal2.getElementsByClassName("vsmInput")[0].value = "";
        newSpellModal2.getElementsByClassName("castingTimeInput")[0].value = "";
        newSpellModal2.getElementsByClassName("rangeInput")[0].value = "";
        newSpellModal2.getElementsByClassName("additionalInfoInput")[0].value = "";
        newSpellModal2.style.display = "none";
    }
    if (event.target == newSpellModal3) {
        if (newSpellModal3.getElementsByClassName("nameInput")[0].value != ""){
            spellButton("3", newSpellModal3.getElementsByClassName("nameInput")[0].value, newSpellModal3.getElementsByClassName("spellAttackBonusInput")[0].value, newSpellModal3.getElementsByClassName("spellDamageInput")[0].value, newSpellModal3.getElementsByClassName("vsmInput")[0].value, newSpellModal3.getElementsByClassName("castingTimeInput")[0].value, newSpellModal3.getElementsByClassName("rangeInput")[0].value, newSpellModal3.getElementsByClassName("additionalInfoInput")[0].value);
        }
        newSpellModal3.getElementsByClassName("nameInput")[0].value = "";
        newSpellModal3.getElementsByClassName("spellAttackBonusInput")[0].value = "";
        newSpellModal3.getElementsByClassName("spellDamageInput")[0].value = "";
        newSpellModal3.getElementsByClassName("vsmInput")[0].value = "";
        newSpellModal3.getElementsByClassName("castingTimeInput")[0].value = "";
        newSpellModal3.getElementsByClassName("rangeInput")[0].value = "";
        newSpellModal3.getElementsByClassName("additionalInfoInput")[0].value = "";
        newSpellModal3.style.display = "none";
    }
    if (event.target == newSpellModal4) {
        if (newSpellModal4.getElementsByClassName("nameInput")[0].value != ""){
            spellButton("4", newSpellModal4.getElementsByClassName("nameInput")[0].value, newSpellModal4.getElementsByClassName("spellAttackBonusInput")[0].value, newSpellModal4.getElementsByClassName("spellDamageInput")[0].value, newSpellModal4.getElementsByClassName("vsmInput")[0].value, newSpellModal4.getElementsByClassName("castingTimeInput")[0].value, newSpellModal4.getElementsByClassName("rangeInput")[0].value, newSpellModal4.getElementsByClassName("additionalInfoInput")[0].value);
        }
        newSpellModal4.getElementsByClassName("nameInput")[0].value = "";
        newSpellModal4.getElementsByClassName("spellAttackBonusInput")[0].value = "";
        newSpellModal4.getElementsByClassName("spellDamageInput")[0].value = "";
        newSpellModal4.getElementsByClassName("vsmInput")[0].value = "";
        newSpellModal4.getElementsByClassName("castingTimeInput")[0].value = "";
        newSpellModal4.getElementsByClassName("rangeInput")[0].value = "";
        newSpellModal4.getElementsByClassName("additionalInfoInput")[0].value = "";
        newSpellModal4.style.display = "none";
    }
    if (event.target == newSpellModal5) {
        if (newSpellModal5.getElementsByClassName("nameInput")[0].value != ""){
            spellButton("5", newSpellModal5.getElementsByClassName("nameInput")[0].value, newSpellModal5.getElementsByClassName("spellAttackBonusInput")[0].value, newSpellModal5.getElementsByClassName("spellDamageInput")[0].value, newSpellModal5.getElementsByClassName("vsmInput")[0].value, newSpellModal5.getElementsByClassName("castingTimeInput")[0].value, newSpellModal5.getElementsByClassName("rangeInput")[0].value, newSpellModal5.getElementsByClassName("additionalInfoInput")[0].value);
        }
        newSpellModal5.getElementsByClassName("nameInput")[0].value = "";
        newSpellModal5.getElementsByClassName("spellAttackBonusInput")[0].value = "";
        newSpellModal5.getElementsByClassName("spellDamageInput")[0].value = "";
        newSpellModal5.getElementsByClassName("vsmInput")[0].value = "";
        newSpellModal5.getElementsByClassName("castingTimeInput")[0].value = "";
        newSpellModal5.getElementsByClassName("rangeInput")[0].value = "";
        newSpellModal5.getElementsByClassName("additionalInfoInput")[0].value = "";
        newSpellModal5.style.display = "none";
    }
    if (event.target == newSpellModal6) {
        if (newSpellModal6.getElementsByClassName("nameInput")[0].value != ""){
            spellButton("6", newSpellModal6.getElementsByClassName("nameInput")[0].value, newSpellModal6.getElementsByClassName("spellAttackBonusInput")[0].value, newSpellModal6.getElementsByClassName("spellDamageInput")[0].value, newSpellModal6.getElementsByClassName("vsmInput")[0].value, newSpellModal6.getElementsByClassName("castingTimeInput")[0].value, newSpellModal6.getElementsByClassName("rangeInput")[0].value, newSpellModal6.getElementsByClassName("additionalInfoInput")[0].value);
        }
        newSpellModal6.getElementsByClassName("nameInput")[0].value = "";
        newSpellModal6.getElementsByClassName("spellAttackBonusInput")[0].value = "";
        newSpellModal6.getElementsByClassName("spellDamageInput")[0].value = "";
        newSpellModal6.getElementsByClassName("vsmInput")[0].value = "";
        newSpellModal6.getElementsByClassName("castingTimeInput")[0].value = "";
        newSpellModal6.getElementsByClassName("rangeInput")[0].value = "";
        newSpellModal6.getElementsByClassName("additionalInfoInput")[0].value = "";
        newSpellModal6.style.display = "none";
    }
    if (event.target == newSpellModal7) {
        if (newSpellModal7.getElementsByClassName("nameInput")[0].value != ""){
            spellButton("7", newSpellModal7.getElementsByClassName("nameInput")[0].value, newSpellModal7.getElementsByClassName("spellAttackBonusInput")[0].value, newSpellModal7.getElementsByClassName("spellDamageInput")[0].value, newSpellModal7.getElementsByClassName("vsmInput")[0].value, newSpellModal7.getElementsByClassName("castingTimeInput")[0].value, newSpellModal7.getElementsByClassName("rangeInput")[0].value, newSpellModal7.getElementsByClassName("additionalInfoInput")[0].value);
        }
        newSpellModal7.getElementsByClassName("nameInput")[0].value = "";
        newSpellModal7.getElementsByClassName("spellAttackBonusInput")[0].value = "";
        newSpellModal7.getElementsByClassName("spellDamageInput")[0].value = "";
        newSpellModal7.getElementsByClassName("vsmInput")[0].value = "";
        newSpellModal7.getElementsByClassName("castingTimeInput")[0].value = "";
        newSpellModal7.getElementsByClassName("rangeInput")[0].value = "";
        newSpellModal7.getElementsByClassName("additionalInfoInput")[0].value = "";
        newSpellModal7.style.display = "none";
    }
    if (event.target == newSpellModal8) {
        if (newSpellModal8.getElementsByClassName("nameInput")[0].value != ""){
            spellButton("8", newSpellModal8.getElementsByClassName("nameInput")[0].value, newSpellModal8.getElementsByClassName("spellAttackBonusInput")[0].value, newSpellModal8.getElementsByClassName("spellDamageInput")[0].value, newSpellModal8.getElementsByClassName("vsmInput")[0].value, newSpellModal8.getElementsByClassName("castingTimeInput")[0].value, newSpellModal8.getElementsByClassName("rangeInput")[0].value, newSpellModal8.getElementsByClassName("additionalInfoInput")[0].value);
        }
        newSpellModal8.getElementsByClassName("nameInput")[0].value = "";
        newSpellModal8.getElementsByClassName("spellAttackBonusInput")[0].value = "";
        newSpellModal8.getElementsByClassName("spellDamageInput")[0].value = "";
        newSpellModal8.getElementsByClassName("vsmInput")[0].value = "";
        newSpellModal8.getElementsByClassName("castingTimeInput")[0].value = "";
        newSpellModal8.getElementsByClassName("rangeInput")[0].value = "";
        newSpellModal8.getElementsByClassName("additionalInfoInput")[0].value = "";
        newSpellModal8.style.display = "none";
    }
    if (event.target == newSpellModal9) {
        if (newSpellModal9.getElementsByClassName("nameInput")[0].value != ""){
            spellButton("9", newSpellModal9.getElementsByClassName("nameInput")[0].value, newSpellModal9.getElementsByClassName("spellAttackBonusInput")[0].value, newSpellModal9.getElementsByClassName("spellDamageInput")[0].value, newSpellModal9.getElementsByClassName("vsmInput")[0].value, newSpellModal9.getElementsByClassName("castingTimeInput")[0].value, newSpellModal9.getElementsByClassName("rangeInput")[0].value, newSpellModal9.getElementsByClassName("additionalInfoInput")[0].value);
        }
        newSpellModal9.getElementsByClassName("nameInput")[0].value = "";
        newSpellModal9.getElementsByClassName("spellAttackBonusInput")[0].value = "";
        newSpellModal9.getElementsByClassName("spellDamageInput")[0].value = "";
        newSpellModal9.getElementsByClassName("vsmInput")[0].value = "";
        newSpellModal9.getElementsByClassName("castingTimeInput")[0].value = "";
        newSpellModal9.getElementsByClassName("rangeInput")[0].value = "";
        newSpellModal9.getElementsByClassName("additionalInfoInput")[0].value = "";
        newSpellModal9.style.display = "none";
    }
    if (event.target == statsModal){
        var strength = statsModal.getElementsByClassName("strengthInput")[0].value;
        var dexterity = statsModal.getElementsByClassName("dexterityInput")[0].value;
        var constitution = statsModal.getElementsByClassName("constitutionInput")[0].value;
        var intelligence = statsModal.getElementsByClassName("intelligenceInput")[0].value;
        var wisdom = statsModal.getElementsByClassName("wisdomInput")[0].value;
        var charisma = statsModal.getElementsByClassName("charismaInput")[0].value;

        if (strength == ""){
            strength = 10;
        }
        if (dexterity == ""){
            dexterity = 10;
        }
        if (constitution == ""){
            constitution = 10;
        }
        if (intelligence == ""){
            intelligence = 10;
        }
        if (wisdom == ""){
            wisdom = 10;
        }
        if (charisma == ""){
            charisma = 10;
        }
        adjustVisibleMods(strength, dexterity, constitution, intelligence, wisdom, charisma);
        statsModal.style.display = "none";
    }
    if (event.target == cashModal) {
        var cp = cashModal.getElementsByClassName("copperInput")[0].value;
        var sp = cashModal.getElementsByClassName("silverInput")[0].value;
        var gp = cashModal.getElementsByClassName("goldInput")[0].value;
        var pp = cashModal.getElementsByClassName("platinumInput")[0].value;

        if (cp == ""){
            cp = 0;
        }
        if (sp == ""){
            sp = 0;
        }
        if (gp == ""){
            gp = 0;
        }
        if (pp == ""){
            pp = 0;
        }
        adjustVisibleCash(cp, sp, gp, pp);
        cashModal.style.display = "none";
    }
}
