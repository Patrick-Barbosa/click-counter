let count = 0;
let theme = 0;
var number = document.getElementById(`number`);

function increment() {
    count++;
    number.innerHTML = count;
}

function darkmode() {
    theme++;

    if (theme == 2) {
        theme = 0;
    }

    switch (theme) {
        case 0:
            document.body.style.backgroundColor = "#f5fbef";
            document.body.style.color = "#2d2d2a";
            document.getElementById("number").style.color = "black";
            document.getElementById("changeTheme").style.color = "black";
            break;

        case 1:
            document.body.style.backgroundColor = "#2d2d2a";
            document.body.style.color = "#f5fbef";
            document.getElementById("number").style.color = "#f5fbef";
            document.getElementById("changeTheme").style.color = "#f5fbef";
            break;
    }
}