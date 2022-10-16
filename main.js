let resultBtn = document.querySelector("#result");

let h4 = document.createElement("h4");

let total = 0;
const rightAnswer = (event) => {
    if(event.value === "true"){
        total++;
        event.parentElement.style.color = "green";
    }
    else{
        event.parentElement.style.color = "red";
    }
}

resultBtn.addEventListener("click", (event) => {
    h4.innerHTML = "";
    total = 0;
    let one = document.querySelector("[name='questionOne']:checked");
    let two = document.querySelector("[name='questionTwo']:checked");
    let three = document.querySelector("[name='questionThree']:checked");
    let four = document.querySelector("[name='questionFour']:checked");
    let five = document.querySelector("#questionFive");
    let six = document.querySelector("#questionSix");
    let seven = document.querySelector("#questionSeven");

    rightAnswer(one);
    rightAnswer(two);
    rightAnswer(three);
    rightAnswer(four);
    rightAnswer(five);
    rightAnswer(six);
    rightAnswer(seven);

    console.log(total);
    let result = `Resultat: ${total}/10`;

    if(total < 2){
        h4.innerText = `${result} 
        Underkänd!`;
        h4.style.color = "red";
    }
    else if(total <= 4){
        h4.innerText = `${result} 
        Godkänd!`;
        h4.style.color = "orange";
    }
    else{
        h4.innerText = `${result} 
        Mycket väl godkänd!`;
        h4.style.color = "green";
    }

    document.body.append(h4);
})




    /* document.querySelector("[name='questionOne']:checked").value,
    document.querySelector("[name='questionTwo']:checked").value,
    document.querySelector("[name='questionThree']:checked").value,
    document.querySelector("[name='questionFour']:checked").value,
    document.querySelector("#questionFive").value,
    document.querySelector("#questionSix").value,
    document.querySelector("#questionSeven").value,
    document.querySelectorAll("[name='questionEight']:checked").value,
    document.querySelectorAll("[name='questionNine']:checked").value,
    document.querySelectorAll("[name='questionTen']:checked").value */