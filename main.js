let darkModeBtn = document.querySelector("header button");
darkModeBtn.addEventListener("click", (event) => {
    if(event.target.id === "darkMode"){
        document.getElementById("darkMode").id = "lightMode";
        event.target.innerText = "Light Mode";
        document.body.id = "dark";
    }
    else{
        document.getElementById("lightMode").id = "darkMode";
        event.target.innerText = "Dark Mode";
        document.body.id = "light";
    }
})

let resultBtn = document.querySelector("#result");
let h4 = document.createElement("h4");
h4.id = "showResult"
let total = 0;

let layout = document.querySelector("#layout");

const rightAnswer = (event) => {
    if(event.value === "true"){
        total++;
        event.closest("div").style.color = "green";
    }
    else{
        event.closest("div").style.color = "red";
    }
}

const rightAnswerCheckbox = (event) => {
    let checkboxAnswer = [];
    event.forEach((answer) => {
        checkboxAnswer.push(answer.value) 
    });
    if((event[0].name === "questionEight" && checkboxAnswer.length !== 2)||
    (event[0].name === "questionNine" && checkboxAnswer.length !== 3)||
    (event[0].name === "questionTen" && checkboxAnswer.length !== 1)){
        event[0].closest("div").style.color = "red";
    }
    else if(checkboxAnswer.includes("false")){
        event[0].closest("div").style.color = "red";
    }
    else{
        total++;
        event[0].closest("div").style.color = "green";
    }
};

resultBtn.addEventListener("click", () => {
    total = 0;

    let one = document.querySelector("[name='questionOne']:checked");
    let two = document.querySelector("[name='questionTwo']:checked");
    let three = document.querySelector("[name='questionThree']:checked");
    let four = document.querySelector("[name='questionFour']:checked");
    let five = document.querySelector("#questionFive");
    let six = document.querySelector("#questionSix");
    let seven = document.querySelector("#questionSeven");
    let eight = document.querySelectorAll("[name='questionEight']:checked");
    let nine = document.querySelectorAll("[name='questionNine']:checked");
    let ten = document.querySelectorAll("[name='questionTen']:checked");

    if(one === null || two === null || three === null || four === null || five.value === "null" || six.value === "null" || seven.value == "null" || eight.length === 0 || nine.length == null || ten.length == null){
        alert("Du måste svara på alla frågor för att få ett resultat!")
    }

    else {
    rightAnswer(one);
    rightAnswer(two);
    rightAnswer(three);
    rightAnswer(four);
    rightAnswer(five);
    rightAnswer(six);
    rightAnswer(seven);
    rightAnswerCheckbox(eight);
    rightAnswerCheckbox(nine);
    rightAnswerCheckbox(ten);

    let result = `Resultat: ${total}/10`;

    if(total < 5){
        h4.innerText = `${result} 
        Underkänd!`;
        h4.style.color = "red";
    }
    else if(total <= 7.5){
        h4.innerText = `${result} 
        Godkänd!`;
        h4.style.color = "orange";
    }
    else{
        h4.innerText = `${result} 
        Mycket väl godkänd!`;
        h4.style.color = "green";
    }
    
    layout.append(h4);
}
})