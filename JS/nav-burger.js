let btn = document.getElementById("burger-btn");
let contents = document.getElementById("burger-contents");

btn.addEventListener("click", Click);
btn.addEventListener("keydown", KeyPress);

function Click() {
    if (contents.style.display == "block"){
        contents.style.display = "none";
        btn.style.marginLeft = "0";
    }
    else{
        contents.style.display = "block";
        btn.style.marginLeft = "100px";
    }
}

function KeyPress() {
    if (Event.KeyPress === 13) {
        if (contents.style.display == "block")
            contents.style.display = "none";
        else
            contents.style.display = "block";
    }
}