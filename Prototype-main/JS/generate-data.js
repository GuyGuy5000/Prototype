function GenerateData(inputName, fakeData) {
    let inputs = document.querySelectorAll(`[name=${inputName}]`);
    console.log(inputs);
    console.log(fakeData);

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = fakeData[i];
    }
}
