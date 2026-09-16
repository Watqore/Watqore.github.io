alert("Привет!");
let button = document.getElementById("myButton");
let themebutton = document.getElementById("themebutton");
themebutton.addEventListener("click", function() {
    document.body.classList.toggle("darkmode");
});
document.getElementById("myButton").addEventListener("click", function() {
let text = document.getElementById("nameinput").value;
if (text !== "") {
    alert("Привет, " + text + "!");
} else {
if (text ==="") {
    alert("Ты ничего не написал!");
}
}
});
for (let a = 10; a >=1; a--) {
    document.getElementById("output").innerHTML += a + " ";
};
for (let a = 1; a <= 10; a++) {
    if (a % 2 === 0) {
        console.log(a + " - чётное");
    }
}
document.getElementById("guessbutton").addEventListener("click", function() {
    let secretnumber = Math.floor(Math.random() * 10) +1;
    let number = Number(document.getElementById("guessnumber").value);
    if (number === secretnumber) {
        document.getElementById("result").innerHTML = "Угадал!";
    } else if (number > secretnumber) {
        document.getElementById("result").innerHTML = "Меньше!";
    } else {
        document.getElementById("result").innerHTML = "Больше!";
    }
    document.getElementById("guessinput").value = "";
});



