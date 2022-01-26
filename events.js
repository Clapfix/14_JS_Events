/******* Variablen ********/
const btn = document.getElementById("trigBtn");
let appStatus =true;

/******* Event-Listener *********/

btn.addEventListener("click",toggleAppStatus);

/****** Business-Logic | Toggle ******/
function toggleAppStatus(){
    appStatus = !appStatus;
    updateView();
}

/******** View-Schicht ********/

/****** Modul: update der View-Schicht | Test: */
//... View folgt status
function updateView(){
    if (appStatus){
        switchClassName("night")
    }else{
        switchClassName("day")
    }
}

// Modul: Umschaltung Klassenamen | Test:
// switchClassName("night");
// switchClassName("day");
function switchClassName(modeStr){

    // Kritik: wenig robust, da starre Indexierung
    document.body.className = modeStr;
    document.body.children[0].className = modeStr;
    document.body.children[1].className = modeStr;

}

/* Tools */
function output(outputData) {
    console.log(outputData);
}