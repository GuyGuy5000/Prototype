function GenerateData(inputName, fakeData){
    let inputs = document.querySelectorAll(`[name=${inputName}]`);
    console.log(inputs);
    console.log(fakeData);
    for (let i = inputs.length; i < inputs.length; i++){
        input.value = fakeData[i];
    }
}
