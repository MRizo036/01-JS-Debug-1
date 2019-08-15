"use strict";

var twentyNine = document.createDocumentFragment();
var thirty = document.createDocumentFragment();
var thirtyOne = document.createDocumentFragment();

function setUpDays() {
    var dates = document.getElementById("delivDy").getElementsByTagName("option");
    twentyNine.appendChild(dates[28].cloneNode(true));
    thirty.appendChild(dates[28].cloneNode(true));
    thirty.appendChild(dates[29].cloneNode(true));
    thirtyOne.appendChild(dates[28].cloneNode(true));
    thirtyOne.appendChild(dates[29].cloneNode(true));
    thirtyOne.appendChild(dates[30].cloneNode(true));
}

function updateDays(){
    var deliveryDay = document.getElementById("delivDy");
    var dates = deliveryDay.getElementsByTagName("option");
    var deliveryMonth = document.getElementById("delivMo");
    var deliveryYear = document.getElementById("delivYr");
    var selectedMonth = deliveryMonth.options[deliveryMonth.selectedIndex].value;

    while (dates[28]){
        deliveryDay.removeChild(date[28]);
    }

    if (deliveryYear.selectedIndex === -1){
        deliveryYear.selectedIndex = 0;
    }

    if(selectedMonth === "2"&& deliveryYear.options[deliveryYear.selectedIndex].value === "2020"){
        deliveryDay.appendChild(twentyNine.cloneNode(true));
    } else if (selectedMonth === "4" || selectedMonth === "6" ||
        selectedMonth === "9" || selectedMonth === "11"){
            deliveryDay.appendChild(thirty.cloneNode(true));
    } else if (selectedMonth === "1" || selectedMonth == "3" || selectedMonth ==="5" || selectedMonth === "7" || selectedMonth === "8" || selectedMonth === "10" || selectedMonth === "12"){
        deliveryDay.appendChild(thirtyOne.cloneNode(true));
    }     
}

function createEventListener(){
    var deliveryMonth = document.getElementById("delivMo");
    if (deliveryMonth.addEventListener){
        deliveryMonth.addEventListener("change", updateDays, false);
    } else if (deliveryMonth.attachEvent){
        deliveryMonth.attachEvent("onchange", updateDays)
    }
}

if (window.addEventListener){
    window.addEventListener("load", setUpPage, false);
}
else if(window.attachEvent){
    window.attachEvent("onload", setUpPage)
}

function removeSelectDefaults(){
    var emptyBoxes = document.getElementsByTagName("select");
    // alert("select lists: "+ emptyBoxes.length);
}

function setUpPage() {
    removeSelectDefaults();
}

function createEventListener(){
    var submitButton = document.getElementById("submit");
    if(submitButton.addEventListener){
        submitButton.addEventListener("click", removeSelectDefaults, false);
    }
    else if(submitButton.attachEvent){
        submitButton.attachEvent("onclick", removeSelectDefaults);
    }
}

for(var i=0; i < emptyBoxes.length; i++){
    emptyBoxes[i].selectedIndex = -1;
}






