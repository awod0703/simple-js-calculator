// CAlCULATOR

// CAlCULATOR
const display = document.getElementById("display");

 function appendtoDisplay(input){
      display.value += input;
 }

 function cleardisplay(){
    display.value = "";

 }

 function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
      display.value ="Error";
    }


    display.value = eval(display.value);
 } 