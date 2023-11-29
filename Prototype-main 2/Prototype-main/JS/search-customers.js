// Define your search input, table, and suggestions elements
const searchInput = document.getElementById("search-input");

const suggestions = document.getElementById("suggestions");
const searchButton = document.getElementById("search-button");

searchInput.addEventListener("input", handleInput);
searchButton.addEventListener("click", handleSearch);


function handleInput() {
    document.getElementById("warning").innerHTML = "";

    const searchTerm = searchInput.value.trim().toLowerCase();
    displaySuggestions(searchTerm);
    if (searchTerm.length >= 1) {
        const matchingCustomers = CustomerTable.filter((customer) =>
            customer.First.toLowerCase().includes(searchTerm) ||
            customer.Last.toLowerCase().includes(searchTerm) ||
            customer.Email.toLowerCase().includes(searchTerm)
        );


        if (matchingCustomers.length > 0) {
            clearTable();
            populateTable(matchingCustomers, false, false);
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

    const matchingCustomers = CustomerTable.filter((customer) => {
        return searchTerms.every((term) =>
            customer.First.toLowerCase().includes(term) ||
            customer.Last.toLowerCase().includes(term) ||
            customer.Email.toLowerCase().includes(term)
        );
    });


    if (searchTerm.length >= 1 && matchingCustomers.length > 0) {
        clearTable();
        populateTable(matchingCustomers, false, false);
        tblSummary.style.display = "table"; // Display the table
    } else {
        clearTable();
        tblSummary.style.display = "none"; // Hide the table
        document.getElementById("warning").innerHTML = "Search field is required";

    }
}

function displaySuggestions(searchTerm) {
    const dataList = document.getElementById("customer-list");
    dataList.innerHTML = "";

    if (searchTerm.length >= 1) {
        const matchingCustomers = CustomerTable.filter((customer) =>
            customer.First.toLowerCase().includes(searchTerm) ||
            customer.Last.toLowerCase().includes(searchTerm) ||
            customer.Email.toLowerCase().includes(searchTerm)
        );

        if (matchingCustomers.length > 0) {
            matchingCustomers.forEach((customer) => {
                const option = document.createElement("option");
                option.value = `${customer.First} ${customer.Last} ${customer.Email}`;
                dataList.appendChild(option);
            });
        } else {
            document.getElementById("warning").innerHTML = "No search results.";
        }
    }
}

function handleSearchWithSuggestion(customer) {
    searchInput.value = `${customer.First}  ${customer.Last}  ${customer.Email}`;
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
        placeholderText.style.left = '630px';
    } else {
        placeholderText.style.left = '630px';
    }
});


