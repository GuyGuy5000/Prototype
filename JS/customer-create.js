let values = document.querySelectorAll("input[name=create]").value;
let inputs = document.querySelectorAll("input[name=create]");

function Main(){
    let array = [];
    for(let input of values){
        array.push(input.value);
    }
    CustomerTable.push(Customer(array[0],array[1],array[2],array[3],array[4],array[5],"Welland", "Ontario"));
}

function Redirect(){
    for(let i of inputs){
        sessionStorage.setItem(i.getAttribute("id"), i.value);
    }
}

function RefillInputs(){
    for(let i of inputs){
        i.value = sessionStorage.getItem(`${i.getAttribute("id")}`)
    }
}

