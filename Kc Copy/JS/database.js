//----------Seed Data---------//
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
console.log(CustomerTable);
console.log(EquipmentTable);
console.log(CustomerEquipmentTable);
console.log(ColourTable);
console.log(ManufacturerTable);
console.log(TypeTable);
console.log(CityTable);
console.log(ProvinceTable);


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
function Join(){
    let join = CustomerTable;
    for (let customer of join){
        customer["Equipment"] = EquipmentTable[CustomerEquipmentTable[CustomerTable.indexOf(customer)]["Equip"]]["Name"];
        customer["Model"] = EquipmentTable[CustomerEquipmentTable[CustomerTable.indexOf(customer)]["Equip"]]["Model"];
        customer["VIN"] = EquipmentTable[CustomerEquipmentTable[CustomerTable.indexOf(customer)]["Equip"]]["VIN"];
        customer["Description"] = EquipmentTable[CustomerEquipmentTable[CustomerTable.indexOf(customer)]["Equip"]]["Description"];
    }
    console.log(join);

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

//------------------Equipment look up table---------------------//
function AddColour(name){let colour = {Colour: name}; return colour;}

function AddManufacturer(name){let manufacturer = {Manufacturer: name}; return manufacturer;}

function AddType(name){let type = {Type: name}; return type;}

//------------------Customer look up table---------------------//
function AddCity(name){let city = {City: name}; return city;}

function AddProvince(name){let province = {Province: name}; return province;}
