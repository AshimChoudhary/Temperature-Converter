const inputTaker1 = document.getElementById("inputTaker");
const cConvert1 = document.getElementById("cConvert");
const fConvert1 = document.getElementById("fConvert");
const submitBtn1 = document.getElementById("submitBtn");
const result1 = document.getElementById("resultGiven");

let x;

function temp(){
    if(cConvert1.checked){
        x = inputTaker1.value; 
        x =  [(x * 9/5) + 32];
        result1.textContent="Temperature is " + x + " Degrees in Fahrenheit";     
    }

    else if(fConvert1.checked){
        x = inputTaker1.value;
        x = [(x - 32) * (5/9)];
        result1.textContent="Temperature is " + x + " Degrees in Celsius";     
        
    }
    else{
        result1.textContent="Please Select one unit to move Forward";     
    
    }
}
