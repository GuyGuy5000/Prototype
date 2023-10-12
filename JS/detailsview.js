
/************************generates summary using tables from database************************* */
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


function PopulateDropdown(dropdown,table){
    for(let dict of table)
        for(let key in dict)
            dropdown.innerHTML += `<option value="${dict[key]}">${dict[key]}</option>`;
}


