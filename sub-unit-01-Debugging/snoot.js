"use strict";

function removeSelectDefaults(){
    var emptyBoxes = document.getElementsByTagName("select");
    // alert("select lists: "+ emptyBoxes.length);
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

var twentyNine = document.createDocumentFragment();
var thirty = document.createDocumentFragment();
var thirtyOne = document.createDocumentFragment();



