// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
let n1 = Math.round(Math.random()*100);
let n2 = Math.round(Math.random()*100);

const num1 = document.getElementById("number1")
const num2 = document.getElementById("number2")

num1.innerHTML=n1;
num2.innerHTML=n2;
// Iteration 3: Creating variables required to make the game functional
var score  = 0;
var operator;
let plus = document.getElementById("plus")
let minus = document.getElementById("minus")
let mul = document.getElementById("mul")
let divide = document.getElementById("divide")
let modulus = document.getElementById("modulus")

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"
const num3 = document.getElementById("number3")
var n3;
// Iteration 5: Creating a randomise function to make the game functional
function randomise(){
     n1 = Math.round(Math.random()*100);
     n2 = Math.round(Math.random()*100);
    if(n1<n2){
        let temp = n1;
        n1=n2;
        n2=temp;
    }
    operator = Math.round(Math.random()*4);
    switch(operator){
        case 0:
        n3=n1+n2;
        break;
        case 1:
        n3=n1-n2;
        break;
        case 2:
        n3=n1*n2;
        break;
        case 3:
        n3=n1/n2;
        break;
        case 4:
        n3=n1%n2;
        break;
    }
    num1.innerHTML=n1;
    num2.innerHTML=n2;
    num3.innerHTML=n3;
}
randomise()
// Iteration 6: Making the Operators (button) functional
plus.onclick=()=>{
    if(n1+n2===n3){
        console.log("plus")
        score++;
        randomise()
        resetTimer(timerId);
    }
    else{
        location.href = "gameover.html?score="+score;
    }
}
minus.onclick=()=>{
    if(n1-n2===n3){
        console.log("minus")
        score++;
        randomise();
        resetTimer(timerId);
    }
    else{
        location.href = "gameover.html?score="+score;
    }
}
mul.onclick=()=>{
    if(n1*n2===n3){
        console.log("mul")
        score++;
        randomise();
        resetTimer(timerId);
    }
    else{
        location.href = "gameover.html?score="+score;
    }
}
divide.onclick=()=>{
    if(n1/n2===n3){
        score++;
        randomise();
        resetTimer(timerId);
    }
    else{
        location.href = "gameover.html?score="+score;
    }
}
modulus.onclick=()=>{
    if(n1%n2===n3){
        score++;
        randomise();
        resetTimer(timerId);
    }
    else{
        location.href = "gameover.html?score="+score;
    }
}

// Iteration 7: Making Timer functional
const timer = document.getElementById("timer")
var timerId;

function startTimer(){
    let time = 10
    timer.innerHTML = time;
    timerId = setInterval(()=>{
        time--
        if(time==0){
            window.location.href = "./gameover.html"
        }
        timer.innerHTML = time;
    },1000);

    
}

function resetTimer(timerId){
    clearInterval(timerId)
    startTimer()
}
startTimer()
