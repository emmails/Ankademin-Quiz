let darkModeBtn = document.querySelector("header button");
darkModeBtn.addEventListener("click", (event) => {
    console.log(event.target);
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