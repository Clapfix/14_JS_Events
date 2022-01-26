/******* Variablen ********/
const btn = document.getElementById("trigBtn");
//const btn = document.body;
output(btn);

/******* Event-Listener *********/

btn.addEventListener("click",test);
btn.addEventListener("mouseenter",testEnter);

function test(){
    output("Btn clicked!");
}

function testEnter(){
    output("Mouse entered!");
}





/* Tools */
function output(outputData) {
    console.log(outputData);
}