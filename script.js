const display = document.getElementById("display")

// append value
function appendValue(val) {
    if (display.value ==="0"){
        display.value =val;
    }else{
        display.value +=val;
        
    }
}

// clear 
const clearDisplay = () => {
    display.value ="0";
}

// toggle button

const toggleSign = ()=> {
    if (display.value.startsWith("-")) {
        display.value=display.value.slice(1);
    } else {
        display.value = "-"+display.value
    }
}

// percentage
const percent = ()=> {
    display.value=(parseFloat(display.value)/100).toString();
}

// calculate

const calculateResult = ()=>{
    try {
        display.value=eval(display.value)
    } catch (error) {
        display.value="Error";
    }
}