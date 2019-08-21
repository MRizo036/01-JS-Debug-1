"use strict";

var twentyNine = document.createDocumentFragment();
var thirty = document.createDocumentFragment();
var thirtyOne = document.createDocumentFragment();
var formValidity = true;

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
    window.attachEvent("onload", setUpPage);
}

function removeSelectDefaults(){
    var emptyBoxes = document.getElementsByTagName("select");
    // alert("select lists: "+ emptyBoxes.length);
    for(var i=0; i < emptyBoxes.length; i++){
        emptyBoxes[i].selectedIndex = -1;
    }
}

function setUpPage() {
    removeSelectDefaults();
    setUpDays();
    createEventListeners();
}

function autoCheckCutom(){
    var messageBox = document.getElementById("customText");
    if(messageBox.value !== "" && messageBox.value !== messageBox.placeholder){
        document.getElementById("custom").checked = "checked";
    } else{
        document.getElementById("custom").checked = "";
    }
}

function copyBillingAddress(){
    var billingInputElements = document.querySelectorAll("#billingAddress input");
    var deliveryInputElements = document.querySelectorAll("#deliveryAddress input");
    if (document.getElementById("sameAddr").checked){
        for(var i = 0; i < billingInputElements.length; i++){
            deliveryInputElements[i+1].value = billingInputElements[i].value;
        }
        document.querySelector("#deliveryAddress select").value = document.querySelector("#billingAddress select").value;
    } else {
        for (var i = 0; i < billingInputElements.length; i++){
            deliveryInputElements[i+1].value = "";
        }
        document.querySelector("#deliveryAddress select").selectedIndex = -1;
    }
}

function validateAddress(fieldsetId){
    var inputElements = document.querySelectorAll("#" + fieldsetId + "input");
    // var errorDiv = document.querySelectorAll("#" + fieldsetId + ".errorMessage")[0];
    var errorDiv = document.querySelectorAll("#" + fieldsetId + ".errorMessage")[0];
    var fieldsetValidity = true;
    var elementCount = inputElements.length;
    var currentElement;

    // #billingAddress.errorMessage

    try{
        for (var i = 0; i < elementCount; i++){
            currentElement = inputElements[i];
            if (currentElement.value === ""){
                currentElement.style.background = "rgb(255,233,233)";
                fieldsetValidity = false;
            } else {
                currentElement.style.background = "white";
            }
        }

        currentElement = document.querySelector("#" + fieldsetId + " select")
        if (currentElement.selectedIndex === -1){
            currentElement.style.border = "1px solid red";
            fieldsetValidity = false;
        }else{
            currentElement.style.border = "";
        }

        if (fieldsetValidity === false){
            if(fieldsetId === "billingAddress"){
                throw "Please complete all Delivery Address information.";
            } else{
                throw "Please complete all Delivery Address information.";
            }
        } else {
            errorDiv.style.display = "none";
            errorDiv.innerHTML = "";
        }

    } catch(msg){
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        formValidity =  false;

}

function validateForm(evt){
    if (evt.preventDefault){
        evt.preventDefault();
    } else{
        evt.returnValue = false;
    }
    formValidity = true;
    validateAddress("billingAddress");
    validateAddress("deliveryAddress");

    if(formValidity === true){
        document.getElementById("errorText").innerHTML = "";
        document.getElementById("errorText").style.display = "none";
        document.getElementsByTagName("form")[0].submit();
    } else {
        document.getElementById("errorText").innerHTML = "Please fix the indicated problems and then resubmit your order.";
        document.getElementById("errorText").style.display = "block";
        scroll(0,0);
    }
}

function createEventListeners(){
    var deliveryMonth = document.getElementById("delivMo");
    if(deliveryMonth.addEventListener){
        deliveryMonth.addEventListener("change", updateDays, false);
    } else if(deliveryYear.attachEvent){
        deliveryYear.attachEvent("onchange", updateDays);
    }

    var deliveryYear = document.getElementById("delivYr");
    if (deliveryYear.addEventListener){
        deliveryYear.addEventListener("change", updateDays, false);
    } else if (deliveryYear.attachEvent){
        deliveryYear.attachEvent("onchange", updateDays);
    }

    var same = document.getElementById("sameAddr");
    if (same.addEventListener){
        same.addEventListener("change", copyBillingAddress, false);
    } else if (same.attachEvent ){
        same.attachEvent("onchange", copyBillingAddress);
    }

    var form = document.getElementsByTagName("form")[0];
    if (form.addEventListener){
        form.addEventListener("submit", validateForm, false);
    } else if (form.attachEvent){
        form.attachEvent("onsubmit", validateForm);
    }
}


function createEventListener(){
    var submitButton = document.getElementById("submit");
    if(submitButton.addEventListener){
        submitButton.addEventListener("click", removeSelectDefaults, false);
    }
    else if(submitButton.attachEvent){
        submitButton.attachEvent("onclick", removeSelectDefaults);
    }
    var messageBox = document.getElementById("customText");
    if(messageBox.addEventListener){
        messageBox.addEventListener("change", autoCheckCutom, false);
    } else if(messageBox.attachEvent){
        messageBox.attachEvent("onchange", autoCheckCutom);
    }
}







