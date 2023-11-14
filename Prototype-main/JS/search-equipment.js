// Define your search input, table, and suggestions elements
const searchInput = document.getElementById("search-input");

const suggestions = document.getElementById("suggestions");
const searchButton = document.getElementById("search-button");


searchInput.addEventListener("input", handleInput);
searchButton.addEventListener("click", handleSearch);


function handleInput() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    displaySuggestions(searchTerm);
    if (searchTerm.length >= 2) {
        const matchingCustomers = EquipmentTable.filter((customer) =>
            customer.Name.toLowerCase().includes(searchTerm) ||
            customer.Model.toLowerCase().includes(searchTerm) ||
            customer.Description.toLowerCase().includes(searchTerm)
        );


        if (matchingCustomers.length > 0) {
            clearTable();
            populateTable(matchingCustomers, true, false);
            tblSummary.style.display = "table"; // Display the table
        } else {
            tblSummary.style.display = "none"; // Hide the table
        }
    } else if (searchTerm === "") {
        tblSummary.style.display = "none"; // Hide the table when search term is empty
    }

}

function handleSearch() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const searchTerms = searchTerm.split(' ');

    const matchingCustomers = EquipmentTable.filter((customer) => {
        return searchTerms.every((term) =>
            customer.Name.toLowerCase().includes(term) ||
            customer.Mode.toLowerCase().includes(term) ||
            customer.Description.toLowerCase().includes(term)
        );
    });


    if (searchTerm.length >= 2 && matchingCustomers.length > 0) {
        clearTable();
        populateTable(matchingCustomers, true, false);
        tblSummary.style.display = "table"; // Display the table
    } else {
        clearTable();
        tblSummary.style.display = "none"; // Hide the table
    }
}

function displaySuggestions(searchTerm) {
    const dataList = document.getElementById("equipment-list");
    dataList.innerHTML = "";

    if (searchTerm.length >= 2) {
        const matchingCustomers = EquipmentTable.filter((customer) =>
            customer.Name.toLowerCase().includes(searchTerm) ||
            customer.Model.toLowerCase().includes(searchTerm) ||
            customer.Description.toLowerCase().includes(searchTerm)
        );

        if (matchingCustomers.length > 0) {
            matchingCustomers.forEach((customer) => {
                const option = document.createElement("option");
                option.value = `${customer.Name} ${customer.Model} ${customer.Description}`;
                dataList.appendChild(option);
            });
        } else {
            const option = document.createElement("option");
            option.value = "No matching equipment found";
            dataList.appendChild(option);
        }
    }
}

function handleSearchWithSuggestion(customer) {
    searchInput.value = `${customer.Name}  ${customer.Model}  ${customer.Description}`;
    handleSearch();
}

function clearSuggestions() {
    suggestions.innerHTML = "";
}

function clearTable() {
    tblSummary.innerHTML = "";
}


function populateTable(customer, equimpentBool, repairsBool) {
    GenerateSummary(customer, equimpentBool, repairsBool);
}


let search = document.getElementById('search-input');
var placeholderText = document.getElementById('placeholder-label');

search.addEventListener('input', function () {
    if (searchInput.value.length > 0) {
        placeholderText.style.left = '580px';
    } else {
        placeholderText.style.left = '580px';
    }
});