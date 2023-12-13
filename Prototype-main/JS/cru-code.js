/************************generates summary using tables from database**************************/
function GenerateSummary(table, equimpentBool, repairsBool) {
    let tblSummary = document.getElementById("tblSummary");
    let output = "<tr>"; //start with opening tags for tr and th
    for (let dict of table) {

        //generate headings for each key in the dictionary
        if (output == `<tr>`)

            for (let [key, value] of Object.entries(dict)) {

                output += `<th>${key}</th>`;
            }

        output += "</tr>"; //closes headings table row and starts new tr

        for (let [key, value] of Object.entries(dict)) { //generates a table data cell for all keys of a dictionary
            output += `<td style="max-width: 300px; height: 50px">${value}</td>`;
        }
        if (equimpentBool) {
            output += `<td><a href="edit.html#equipment">Edit</a></td>`;

            if (sessionStorage.getItem("equipmentListed") === "false") {
                output += `<td><span style="display: flex;">
                                <i class='fa-regular fa-circle-check' title="Repair submitted!"
                                style='font-size:17px; text-align: center; color: rgb(51, 255, 156); cursor: pointer; margin-right: 5px;'></i>
                           </span></td>`;
                sessionStorage.setItem("equipmentListed", "true");
            }
            else {
                output += `<td><a href="repair-request.html">Repair</a></td>`;
            }
            output += "</tr>";
        }
        else if (repairsBool) {
            //randomize the status of each record
            let statuses = [{
                'status': 'Repaired',
                'color': 'color: rgb(51, 255, 156);',
                'icon': 'fa-regular fa-circle-check'
            },
            {
                'status': 'Repair on-going',
                'color': 'color: rgb(255, 149, 1);',
                'icon': 'fa-solid fa-angles-right'
            },
            {
                'status': 'Repair pending<br><br>Scheduled for:<br>Dec 15th, 2023',
                'color': 'color: rgb(255, 75, 51);',
                'icon': 'fa-regular fa-clock'
            }
            ];
            let randomInt = Math.floor(Math.random() * 3);
            output += `<td>
                        <span style="display: flex;">
                            <i class='${statuses[randomInt]["icon"]}' title="${statuses[randomInt]["status"]}"
                            style='font-size:17px; text-align: center; ${statuses[randomInt]["color"]} cursor: pointer; margin-right: 5px;'></i>
                            ${statuses[randomInt]["status"]}
                        </span>
                       </td>`;
                       output += `<td><a href="repair-details.html">Select</a></td>`;
                       output += `<td><div class="btn btn-small"><button onclick="alert('Notification sent!');"><span>Send Notification</span></button></div></td>`;
        }
        else {
            output += `<td><a href="edit.html#customer">Edit</a></td>`;
            output += `<td><a href="view_equipment.html">Equipment</a></td></tr>`;
        }

    }
    tblSummary.innerHTML = output; //displays results in table
}

function GenerateSummaryLUT(table) {
    let tblSummary = document.getElementById("tblSummary");
    let output = "<tr>"; //start with opening tags for tr and th
    for (let dict of table) {

        //generate headings for each key in the dictionary
        if (output == `<tr>`)

            for (let [key, value] of Object.entries(dict)) {

                output += `<th>${key}</th>`;
            }

        output += "</tr>"; //closes headings table row and starts new tr

        for (let [key, value] of Object.entries(dict)) { //generates a table data cell for all keys of a dictionary
            output += `<td>${value}</td>`;

        }
        output += `</tr>`;

    }
    tblSummary.innerHTML = output; //displays results in table
}



/************************populates a dropdown field using tables from database**************************/
function PopulateDropdown(dropdown, table) {
    for (let dict of table)
        for (let key in dict) {
            if (dict[key] == "Welland" || dict[key] == "Ontario") //if the dropdown is for cities
                dropdown.innerHTML += `<option value="${dict[key]}" selected="selected">${dict[key]}</option>`;

            else if (key == "First") { //if the dropdown is for customers
                dropdown.innerHTML += `<option value="${dict[key]}" selected="selected">${dict[key]} ${dict["Last"]}</option>`;
                break;
            }
            else if (key == "Name") { //if the dropdown is for equipment
                dropdown.innerHTML += `<option value="${dict["Name"]}" selected="selected">${dict["Name"]}</option>`;
                break;
            }
            else
                dropdown.innerHTML += `<option value="${dict[key]}">${dict[key]}</option>`;

        }

}

/************************populates a text field when an option is selected from a dropdown  and enables the relevant buttons**************************/
function SelectForEdit(dropdown, datalist, textbox, btnAdd, btnEdit) {
    if (datalist.innerHTML.includes(`"${dropdown.value}"`)) {
        textbox.value = `${dropdown.value}`;

        btnAdd.style.background = "#6e6e6e";
        btnEdit.style.background = "#000";

        dropdown.disabled = true;
        btnAdd.disabled = true;
        btnEdit.disabled = false;
        location.href = "#form";
    }

}

/************************adds the updated value entered by the user to the datalist and enables the relevant buttons**************************/
function UpdateDropdown(dropdown, datalist, textbox, btnAdd, btnEdit) {

    datalist.innerHTML = datalist.innerHTML.replaceAll(`${dropdown.value}`, `${textbox.value}`);

    console.log(datalist.innerHTML);

    btnAdd.style.background = "#000";
    btnEdit.style.background = "#6e6e6e";

    dropdown.disabled = false;
    btnAdd.disabled = false;
    btnEdit.disabled = true;
    dropdown.value = "";
    textbox.value = "";
    location.href = "#select";

}

/************************adds the value entered by the user to the datalist and enables the relevant buttons**************************/
function AddDropdownOption(dropdown, datalist, textbox, btnAdd, btnEdit) {
    datalist.innerHTML += `<option value="${textbox.value}">${textbox.value}</option>`;

    console.log(datalist.innerHTML);

    btnAdd.style.background = "#000";
    btnEdit.style.background = "#6e6e6e";

    dropdown.disabled = false;
    btnAdd.disabled = false;
    btnEdit.disabled = true;
    dropdown.value = "";
    textbox.value = "";
    location.href = "#select";
}