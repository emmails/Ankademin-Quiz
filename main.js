let keySolution = [
    "true",
    "false",
    "false",
    "true", 
    "5.3",
    "6.4",
    "7.2",
    ["8.1", "8.3"]
];

let quizAnswer = [];

let resultBtn = document.querySelector("#result");

resultBtn.addEventListener("click", () => {
    let test = document.querySelectorAll("[class='eight']:checked")
    let arr = [];
    test.forEach((answer) => {
        arr.push(answer.value);
    })
    quizAnswer.push(
    document.querySelector("[name='questionOne']:checked").value,
    document.querySelector("[name='questionTwo']:checked").value,
    document.querySelector("[name='questionThree']:checked").value,
    document.querySelector("[name='questionFour']:checked").value,
    document.querySelector("#questionFive").value,
    document.querySelector("#questionSix").value,
    document.querySelector("#questionSeven").value,
    arr
    /* document.querySelectorAll("[name='questionEight']:checked").value,
    document.querySelectorAll("[name='questionNine']:checked").value,
    document.querySelectorAll("[name='questionTen']:checked").value */
    );
    let rightAnswer = quizAnswer.filter((answer, i) => {
        return (answer == keySolution[i]);
    })

    

    console.log(quizAnswer);
    console.log(rightAnswer);
    console.log(arr);
})




/* test.forEach((answer) => {
    rightAnswer.push()
}) */