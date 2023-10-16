document.getElementById('customerDropdown').addEventListener('change', function() {
    const selectedOption = this.value;
    if (selectedOption === 'createCustomer') {
        window.location.href = 'create_customer.html';
    } else if (selectedOption === 'viewCustomer') {
        window.location.href = 'view_customer.html'; 
    } else if (selectedOption === 'updateCustomer') {
        window.location.href = 'update_customer.html'; 
    }

});

document.getElementById('equipmentDropdown').addEventListener('change', function() {
    const selectedOption = this.value;
    if (selectedOption === 'createEquipment') {
        window.location.href = 'create_equipment.html'; 
    } else if (selectedOption === 'viewequipment') {
        window.location.href = 'view_equipment.html'; 
    } else if (selectedOption === 'updateequipment') {
        window.location.href = 'update_equipment.html'; 
    }
  
});

document.getElementById('repairDropdown').addEventListener('change', function() {
    const selectedOption = this.value;
    if (selectedOption === 'createRepair') {
        window.location.href = 'create_repair.html'; // Redirect to the create customer page
    } else if (selectedOption === 'viewRepair') {
        window.location.href = 'view_Repair.html'; // Redirect to the view customer page
    } else if (selectedOption === 'updateRepair') {
        window.location.href = 'update_Repair.html'; // Redirect to the update customer page
    }
    
});
