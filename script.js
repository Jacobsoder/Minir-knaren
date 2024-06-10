
let sparadeVarden = [];

function myFunction(value) {
    document.getElementById("input").innerHTML = value;
    sparadeVarden.push(value);
    console.log("Värdet sparades:", sparadeVarden);
    updateSum();
}


function updateSum() {
    if (sparadeVarden.includes(' + ')) {
        let numberValues = sparadeVarden.filter(item => !isNaN(item)).map(Number);
        let sum = numberValues.reduce((acc, curr) => acc + curr, 0);
        document.getElementById("result").innerHTML = "Summan är: " + sum;
    }
    
    else if (sparadeVarden.includes(' - ')) {
            let numberValues = sparadeVarden.filter(item => !isNaN(item)).map(Number);
            let sum = numberValues.reduce((acc, curr) => acc - curr);
            document.getElementById("result").innerHTML = "Summan är: " + sum;
        } 
            
    else {
        document.getElementById("result").innerHTML = "Summan är: 0";
    }
}


function addEventListenersToClass(className) {
    const elements = document.getElementsByClassName(className);
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener("click", function() {
            let buttonValue = this.innerHTML;
            myFunction(buttonValue);
        });
    }
}


addEventListenersToClass("b digit");
addEventListenersToClass("badd op");
addEventListenersToClass("bsub op");