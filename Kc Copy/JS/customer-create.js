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

document.addEventListener('DOMContentLoaded', function () {
    // Get the "Customers" button element
    const customersButton = document.getElementById('customersBtn');

    // Get the current page URL
    const currentPageURL = window.location.href;

    // Determine if the current page matches one of the links
    const isCreateCustomerPage = currentPageURL.includes('create_customer.html');
    const isViewCustomerPage = currentPageURL.includes('view_customer.html');

    // Add the "active" class if on the respective page
    if (isCreateCustomerPage || isViewCustomerPage) {
        customersButton.classList.add('active');
    }
});

