/******* Variablen ********/
const btn = document.getElementById("trigBtn");
let appStatus =true;

/******* Event-Listener *********/

btn.addEventListener("click",toggleAppStatus);

/****** Business-Logic | Toggle ******/
function toggleAppStatus(){
    appStatus = !appStatus;
    output(appStatus);
}



/* Tools */
function output(outputData) {
    console.log(outputData);
}