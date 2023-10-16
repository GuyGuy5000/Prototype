/************************generates summary using tables from database**************************/
function GenerateSummary(table){
let tblSummary = document.getElementById("tblSummary");
    let output = "<tr><th>"; //start with opening tags for tr and th
    for(let dict of table){ 

        //generate headings for each key in the dictionary
        if (output == "<tr><th>")

            for(let [key, value] of Object.entries(dict)){
                
                output += `${key}</th><th>`;
            }
        output += "</tr><tr>"; //closes headings table row and starts new tr
        
        for(let [key, value] of Object.entries(dict)){ //generates a table data cell for all keys of a dictionary
            output += `<td>${value}</td>`;
            
        }
        output += "</tr>";

    }
    tblSummary.innerHTML = output; //displays results in table
}

/************************populates a dropdown field using tables from database**************************/
function PopulateDropdown(dropdown,table){
    for(let dict of table)
        for(let key in dict)
            if(dict[key] == "Welland" || dict[key] == "Ontario")
                dropdown.innerHTML += `<option value="${dict[key]}" selected="selected">${dict[key]}</option>`;
            else
                dropdown.innerHTML += `<option value="${dict[key]}">${dict[key]}</option>`;
}

/************************populates a text field when an option is selected from a dropdown  and enables the relevant buttons**************************/
function SelectForEdit(dropdown, datalist, textbox, btnAdd, btnEdit){
    if(datalist.innerHTML.includes(`"${dropdown.value}"`)){
        textbox.value = `${dropdown.value}`;

        btnAdd.style.background = "#6e6e6e";
        btnEdit.style.background = "#000";
    
        dropdown.disabled = true;
        btnAdd.disabled = true;
        btnEdit.disabled = false;
    }

}

/************************adds the updated value entered by the user to the datalist and enables the relevant buttons**************************/
function UpdateDropdown(dropdown, datalist, textbox, btnAdd, btnEdit){

    datalist.innerHTML = datalist.innerHTML.replaceAll(`${dropdown.value}`, `${textbox.value}`);

    console.log(datalist.innerHTML);

    btnAdd.style.background = "#000";
    btnEdit.style.background = "#6e6e6e";

    dropdown.disabled = false;
    btnAdd.disabled = false;
    btnEdit.disabled = true;
    dropdown.value = "";
    textbox.value = "";
}

/************************adds the value entered by the user to the datalist and enables the relevant buttons**************************/
function AddDropdownOption(dropdown, datalist, textbox, btnAdd, btnEdit){
    datalist.innerHTML += `<option value="${textbox.value}">${textbox.value}</option>`;

    console.log(datalist.innerHTML);
    
    btnAdd.style.background = "#000";
    btnEdit.style.background = "#6e6e6e";

    dropdown.disabled = false;
    btnAdd.disabled = false;
    btnEdit.disabled = true;
    dropdown.value = "";
    textbox.value = "";
}