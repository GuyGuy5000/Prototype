//----------Seed Data---------//
var RepairsTable = [
    Repair(
        "Nov 9th, 2022",
        "10:28 AM",
        "1:42 PM",
        "3.1 hours",
        "Making a funny 'wheeeeeeee' sort of noise.",
        "Yes"
    ),

    Repair(
        "Nov 9th, 2022",
        "1:53 PM",
        "3:24 PM",
        "2.7 hours",
        "Engine is missing the engine block, cranckshaft, pistons, timing belt, flywheel, distributor, and the carburetor",
        "No"
    ),

    Repair(
        "Nov 9th, 2022",
        "3:34 PM",
        "7:13 PM",
        "4.7 hours",
        "It don't work too good...",
        "No"
    ),

    Repair(
        "Nov 10th, 2022",
        "10:32 AM",
        "12:32 PM",
        "1 hour",
        "the engine seems to have exploded and now it won't start. Customer tried to re-assemble it with duct tape and a glue stick but to no avail. Try using something stronger like super glue maybe...",
        "Yes"
    ),
];

var CustomerTable = [
    Customer(
        "Nadav", 
        "Hilu", 
        "nhilu1@ncstudentsniagaracollege.ca",
        "123 fake Rd.",
        "1234567890",
        "A1B2C3",
        "Welland",
        "ON"
        ),
        Customer(
            "Melody", 
            "Ritter", 
            "songritter@music.rthm",
            "90 Electric Avn.",
            "1234567890",
            "A1B2C3",
            "Welland",
            "ON"
        ),
        Customer(
            "William", 
            "Deir", 
            "BillDeir@construction.com",
            "142 Architect Way",
            "1234567890",
            "A1B2C3",
            "Welland",
            "ON"
        )
];
var EquipmentTable = [
    Equipment(
        "TimeMaster™",
        "Toro 60V MAX* 30 in. (76 cm) eTimeMaster™ PPADLM",
        "9472956395",
        "A high end rotary lawn mower"
    ),
    Equipment(
        "Recycler®",
        "60V Max* 22 in. (56cm) Recycler® Lawn Mower",
        "9465926752",
        "A mid-range rotary lawn mower"
    ),
    Equipment(
        "Kohler Engine 5400 Series",
        "5400 Series KS595",
        "7254958410",
        "A 5400 series Kohler Engine for lawnmowers"
    )
];
var CustomerEquipmentTable = [
    CustomerEquipment(
        0,
        0
    ),
    CustomerEquipment(
        1,
        1
    ),
    CustomerEquipment(
        2,
        2
    )
];
var ColourTable = [
    AddColour(
        "White"
    ),
    AddColour(
        "Black"
    ),
    AddColour(
        "Grey"
    ),
    AddColour(
        "Red"
    ),
    AddColour(
        "Yellow"
    )
];
var ManufacturerTable = [
    AddManufacturer(
        "Kholer"
    ),
    AddManufacturer(
        "Toro"
    ),
    AddManufacturer(
        "Husqvarna"
    ),
    AddManufacturer(
        "Greenworks"
    )
];
var TypeTable = [
    AddType(
        "Riding mower"
    ),
    AddType(
        "Rotary mower"
    ),
    AddType(
        "mower Engine"
    )
]; 
var CityTable = [
    AddCity(
        "Welland"
    ),
    AddCity(
        "St. Catherines"
    ),
    AddCity(
        "Port Colborne"
    ),
    AddCity(
        "Fonthill"
    )
];
var ProvinceTable = [
    AddProvince(
        "Ontario"
    ),
    AddProvince(
        "Alberta"
    ),
    AddProvince(
        "Quebec"
    ),
    AddProvince(
        "British Columbia"
    ),
    AddProvince(
        "Manitoba"
    ),
    AddProvince(
        "Saskatchewan"
    ),
    AddProvince(
        "New Brunswick"
    ),
    AddProvince(
        "PEI"
    ),
    AddProvince(
        "Nova Scotia"
    ),
    AddProvince(
        "Newfouldland & Labrador"
    ),
    AddProvince(
        "NW Territories"
    ),
    AddProvince(
        "Nunavut"
    ),
    AddProvince(
        "Yukon"
    )
];

/***********************************************************************
                                DEBUG
************************************************************************/
// console.log(CustomerTable);
// console.log(EquipmentTable);
// console.log(CustomerEquipmentTable);
// console.log(ColourTable);
// console.log(ManufacturerTable);
// console.log(TypeTable);
// console.log(CityTable);
// console.log(ProvinceTable);


/*********************************************************************** 
                                Details
************************************************************************/
function Details(record){
    let output = [];
    for (const [key, value] of Object.entries(record)){
        output.shift(value);
    }
    return output;
}

/*************************************************************************
                                Join
 **************************************************************************/
function JoinCustomer(){
    let join = CustomerTable;
    for (let customer of join){
        customer["Equipment Count"] = CustomerEquipmentTable[CustomerTable.indexOf(customer)]["Equip"] + 1;
    }
    return join
}

function JoinEquipment(){
    let join = EquipmentTable;
    for (let equipment of join){
        equipment["Customer"] = CustomerTable[CustomerEquipmentTable[EquipmentTable.indexOf(equipment)]["Cust"]]["First"] + " " + CustomerTable[CustomerEquipmentTable[EquipmentTable.indexOf(equipment)]["Cust"]]["Last"];
    }
    return join;
}

/**************************************************************************
                            TABLES & CREATES
 **************************************************************************/

//-----------------Customer record-----------------//
function Customer(firstName, lastName, email, address, phone, postalCode, city, province){
    let customerDict = {
        First: firstName,
        Last: lastName,
        Email: email,
        Address: address,
        Phone: phone,
        PostalCode: postalCode,
        city: city,
        Province: province
    };
    let exception = ValidateCustomer(customerDict);
    if (exception == "")
        return customerDict;
    else
        return exception;
}

//----------------Validate Customer----------------//
function ValidateCustomer(customerDict){
    if(customerDict.First == null || customerDict.First == ""){ //null first name
        return "First name required.";
    }
    if(customerDict.Last == null || customerDict.Last == ""){ //null last name
        return "Last name required.";
    }
    if(customerDict.Email == null || customerDict.Email == ""){ //null email
        return "Email required.";
    }
    if (customerDict.Email != null || customerDict.Email != ""){ //not null, but wrong email format
        const regexEmail = new RegExp("\.@\..\.");
        if (!regexEmail.test(customerDict.Email))
            return "Email does not exist.";
    }
    if(customerDict.Address == null || customerDict.Address == ""){ //null address
        return "Address required";
    }
    if(customerDict.Phone == null || customerDict.Phone == ""){ //null phone
        return "Phone required";
    }
    if (customerDict.Phone != null || customerDict.Phone != ""){ //not null, but wrong phone format
        const regexPhone = new RegExp("^[0-9]{10}$");
        if (!regexPhone.test(customerDict.Phone))
            return "Phone number must be exactly 10 digits";
    }
    if(customerDict.PostalCode == null || customerDict.PostalCode == ""){ //null postal code
        return "Postal code required";
    }
    if (customerDict.PostalCode != null || customerDict.PostalCode != ""){ //not null, but wrong postal code format
        const regexPostal = new RegExp("^[A-Z][0-9][A-Z][0-9][A-Z][0-9]$");
        if (!regexPostal.test(customerDict.PostalCode))
            return "Postal code does not exist";
    }
    return "";
}

//-----------------Equipment record-----------------//
function Equipment(name, model, vin, description){
    let equipDict = {
        Name: name,
        Model: model,
        VIN: vin,
        Description: description
    };
    let exception = ValidateEquipment(equipDict)
    if (exception == "")
        return equipDict;
    else
        return exception;
}

//----------------Validate Equipment-----------------//
function ValidateEquipment(equipDict){
    if (equipDict.Name == null || equipDict.Name == ""){ //null name
        return "Name required";
    }
    else if (equipDict.Model == null || equipDict.Model == ""){ // null model
        return "Model required";
    }
    else if (equipDict.VIN == null || equipDict.VIN == ""){ // null VIN
        return "Model required";
    }
    else
        return "";
}

//--------------- Customer_Equipment record---------------//
function CustomerEquipment(customerIndex, equipmentIndex){
    let custEquip = {
        Cust: customerIndex,
        Equip: equipmentIndex
    }
    return custEquip;
}


//----------------------Repairs table---------------------------//
function Repair(dateStarted,startTime, endTime, totalTime, notes, warranty){
    let repair = {
        'Date Started': dateStarted,
        'Start time': startTime,
        'End Time': endTime,
        'Total Time': totalTime,
        'notes': notes,
        'Warranty': warranty
    }
    return repair;
}

//------------------Equipment look up table---------------------//
function AddColour(name){let colour = {Colour: name}; return colour;}

function AddManufacturer(name){let manufacturer = {Manufacturer: name}; return manufacturer;}

function AddType(name){let type = {Type: name}; return type;}

//------------------Customer look up table---------------------//
function AddCity(name){let city = {City: name}; return city;}

function AddProvince(name){let province = {Province: name}; return province;}
