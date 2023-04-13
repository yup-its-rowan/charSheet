
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

function attackButton(weapon1, modSelect, proficiency, attackRollMod1, damageRoll1, damageType1, additionalInfo1) {
    if (weapon1 == null){
        weapon1 = "Weapon";
    }
    if (modSelect == null){
        modSelect = "str";
    }
    if (proficiency == null){
        proficiency = false;
    }
    if (attackRollMod1 == null){
        attackRollMod1 = "0";
    }
    if (damageRoll1 == null){
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
    if (proficiency){
        proficiencySe.innerHTML = "P";
    } else {
        proficiencySe.innerHTML = "N";
    }
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

function adjustVisibleAC(ac){
    var elem = document.getElementsByClassName("ACHPDiv")[0];
    var acElem = elem.getElementsByClassName("actualAC")[0];
    acElem.innerHTML = ac;
}

function adjustVisibleHP(chp, mhp){
    var elem = document.getElementsByClassName("ACHPDiv")[0];
    var hpElem = elem.getElementsByClassName("actualHP")[0];

    hpElem.innerHTML = chp + "/" + mhp;
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
}

//make sure to keep updating this below
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
    spellSlotsModal = document.getElementById("spellSlotsModal");
    ACModal = document.getElementById("ACModal");
    HPModal = document.getElementById("HPModal");
    classModal = document.getElementById("classModal");
    selectedAttackModal = document.getElementById("selectedAttackModal");
    selectedAbilityModal = document.getElementById("selectedAbilityModal");

    if (event.target == newAttackModal) {
        if (newAttackModal.getElementsByClassName("nameInput")[0].value != ""){
            attackButton(newAttackModal.getElementsByClassName("nameInput")[0].value, newAttackModal.getElementsByClassName("modifierSelect")[0].value, newAttackModal.getElementsByClassName("proficiencyInput")[0].checked, newAttackModal.getElementsByClassName("attackBonusInput")[0].value, newAttackModal.getElementsByClassName("damageInput")[0].value, newAttackModal.getElementsByClassName("damageTypeInput")[0].value, newAttackModal.getElementsByClassName("additionalInfoInput")[0].value);
        }
        newAttackModal.getElementsByClassName("nameInput")[0].value = "";
        newAttackModal.getElementsByClassName("modifierSelect")[0].value = "str";
        newAttackModal.getElementsByClassName("proficiencyInput")[0].checked = false;
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
    if (event.target == spellSlotsModal) {
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
        spellSlotsModal.style.display = "none";
    }
    if (event.target == ACModal) {
        var ac = ACModal.getElementsByClassName("armorInput")[0].value;   
        if (ac == ""){
            ac = 10;
        }  
        adjustVisibleAC(ac);
        ACModal.style.display = "none";
    }
    if (event.target == HPModal) {
        var chp = HPModal.getElementsByClassName("chpInput")[0].value;   
        var mhp = HPModal.getElementsByClassName("mhpInput")[0].value;
        if (chp == ""){
            chp = 0;
        }  
        if (mhp == ""){
            mhp = 0;
        }
        adjustVisibleHP(chp, mhp);
        HPModal.style.display = "none";
    }
    if (event.target == classModal) {
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
        }
        adjustVisibleClass(raceInput, classInput, levelInput);
        classModal.style.display = "none";
    }
    if (event.target == selectedAttackModal) {
        selectedAttackModal.style.display = "none";
    }
    if (event.target == selectedAbilityModal) {
        selectedAbilityModal.style.display = "none";
    }

}

function openNewAttackModal() {
    document.getElementById("newAttackModal").style.display = "block";
}
function openNewAbilitiesModal() {
    document.getElementById("newAbilitiesModal").style.display = "block";
}
function openNewCantripModal() {
    document.getElementById("newCantripModal").style.display = "block";
}
function openNewSpellModal1() {
    document.getElementById("newSpellModal1").style.display = "block";
}
function openNewSpellModal2() {
    document.getElementById("newSpellModal2").style.display = "block";
}
function openNewSpellModal3() {
    document.getElementById("newSpellModal3").style.display = "block";
}
function openNewSpellModal4() {
    document.getElementById("newSpellModal4").style.display = "block";
}
function openNewSpellModal5() {
    document.getElementById("newSpellModal5").style.display = "block";
}
function openNewSpellModal6() {
    document.getElementById("newSpellModal6").style.display = "block";
}
function openNewSpellModal7() {
    document.getElementById("newSpellModal7").style.display = "block";
}
function openNewSpellModal8() {
    document.getElementById("newSpellModal8").style.display = "block";
}
function openNewSpellModal9() {
    document.getElementById("newSpellModal9").style.display = "block";
}
function openStatsModal() {
    document.getElementById("statsModal").style.display = "block";
}
function openCashModal() {
    document.getElementById("cashModal").style.display = "block";
}
function openSpellSlotsModal() {
    document.getElementById("spellSlotsModal").style.display = "block";
}
function openACModal(){
    document.getElementById("ACModal").style.display = "block";
}
function openHPModal(){
    document.getElementById("HPModal").style.display = "block";
}
function openClassModal(){
    document.getElementById("classModal").style.display = "block";
}
function openSelectedAttackModal(obj){
    selectedAttackModal = document.getElementById("selectedAttackModal");
    selectedAttackModal.getElementsByClassName("headingText")[0].innerHTML = obj.getElementsByClassName("weapon")[0].innerHTML;
    var modifier = parseInt(obj.getElementsByClassName("attackRollMod")[0].innerHTML);
    if (obj.getElementsByClassName("proficiencyCheck")[0].innerHTML == "P"){
        modifier+=levelToProficiency();
    }
    modifier+= findModifier(obj);

    if (modifier > 0){
        modifier = "+" + modifier;
    } else if (modifier < 0){
        modifier = "-" + modifier;
    } else {
        modifier = "";
    }
    selectedAttackModal.getElementsByClassName("attackRollSolid")[0].innerHTML = "d20" + modifier;

    var damageMod = parseInt(findModifier(obj));
    if (damageMod > 0){
        damageMod = "+" + damageMod;
    } else if (damageMod < 0){
        damageMod = "-" + damageMod;
    } else {
        damageMod = "";
    }
    selectedAttackModal.getElementsByClassName("damageRollSolid")[0].innerHTML = obj.getElementsByClassName("damageRoll")[0].innerHTML + damageMod;
    selectedAttackModal.getElementsByClassName("damagingType")[0].innerHTML = obj.getElementsByClassName("damageType")[0].innerHTML;
    selectedAttackModal.getElementsByClassName("textAreaModal")[0].value = obj.getElementsByClassName("additionalInfo")[0].innerHTML;
    selectedAttackModal.getElementsByClassName("textAreaModal")[0].onblur = function() {obj.getElementsByClassName("additionalInfo")[0].innerHTML = selectedAttackModal.getElementsByClassName("textAreaModal")[0].value;};
    selectedAttackModal.getElementsByClassName("deleteSelectedAttackButton")[0].onclick = function() {obj.remove(); selectedAttackModal.style.display = "none";};
    document.getElementById("selectedAttackModal").style.display = "block";
}
function openSelectedAbilityModal(obj){
    selectedAbility = document.getElementById("selectedAbilityModal");
    selectedAbility.getElementsByClassName("headingText")[0].innerHTML = obj.getElementsByClassName("abilityName")[0].innerHTML;
    selectedAbility.getElementsByClassName("textAreaModalAbility")[0].value = obj.getElementsByClassName("abilityInfo")[0].innerHTML;
    selectedAbility.getElementsByClassName("textAreaModalAbility")[0].onblur = function() {obj.getElementsByClassName("abilityInfo")[0].innerHTML = selectedAbility.getElementsByClassName("textAreaModalAbility")[0].value;};
    selectedAbility.getElementsByClassName("deleteSelectedAbilityButton")[0].onclick = function() {obj.remove(); selectedAbility.style.display = "none";};
    selectedAbility.style.display = "block";
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
    correctMod = correctMod.substring(1);
    return parseInt(correctMod);
}
function findSpellAttackModifier(){
    var trueClass = document.getElementsByClassName("classDivClass")[0].innerHTML.toLocaleLowerCase();
    var value = 0;
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
