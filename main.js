'use strict'
const inputEl = document.getElementById("amount");
const convertBtn = document.getElementById("convert-btn");
const lengthDiv = document.getElementById("length");
const volumeDiv = document.getElementById("volume");
const massDiv = document.getElementById("mass");
inputEl.value = "";


convertBtn.addEventListener("click", function(){
    const metersToFeet = Math.floor(inputEl.value * 3.28084);
    const feetToMeters = Math.floor(inputEl.value / 3.28084);
    const litersToGallons = Math.floor(inputEl.value / 3.785);
    const gallonsToLiters = Math.floor(inputEl.value * 3.785);
    const kilogramsToPounds = Math.floor(inputEl.value * 2.205);
    const poundsToKilograms = Math.floor(inputEl.value / 2.205);


    convertedLength.textContent = `${inputEl.value} meters = ${metersToFeet} feet | ${inputEl.value} feet = ${feetToMeters} meters`
    convertedVolume.textContent = `${inputEl.value} liters = ${litersToGallons} gallons | ${inputEl.value} gallons = ${gallonsToLiters} liters`
    convertedMass.textContent = `${inputEl.value} kilograms = ${kilogramsToPounds} pounds | ${inputEl.value} pounds = ${poundsToKilograms} kilograms`
});


