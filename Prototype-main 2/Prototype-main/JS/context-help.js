function GenerateContextHelp(explanations) {

    let helpIcon = document.getElementById('help-icon');
    let helpBox = document.getElementById('help-box');
    let nextButton = document.getElementById('nextBtn');
    let skipButton = document.getElementById('skipBtn');
    let pageNum = document.getElementById("pageNum");
    let helpContent = document.querySelector('.help-content');
    let explanationIndex = 0;

    helpIcon.addEventListener('click', () => {
        explanationIndex = 0;
        helpBox.style.display = 'block';
        displayExplanation(explanationIndex);
    });

    nextButton.addEventListener('click', () => {
        explanationIndex++;
        if (explanationIndex < explanations.length) {
            displayExplanation(explanationIndex);
        } else {
            helpBox.style.display = 'none';
        }
    });

    skipButton.addEventListener('click', () => {
        helpBox.style.display = 'none';
    });
    
    function displayExplanation(index) {
        helpContent.innerHTML = explanations[index];
        pageNum.innerText= `${index + 1}/${explanations.length}`;
        if (index == explanations.length - 1)
            nextButton.textContent = "close";
        else
            nextButton.textContent = "next";
    }
}

