// static/js/script.js
function checkTranslation(button) {
    // Get the row containing the button
    const row = button.parentElement;
    
    // Get the translation from the hidden span
    const translation = row.querySelector('.translation').innerText;
    
    // Get the user input from the input box
    const input = row.querySelector('.translation-input').value;
    
    // Get the button element to update its text
    const checkButton = row.querySelector('.button');
    
    // Compare input with the translation
    if (input === translation) {
        checkButton.innerText = 'Correct'; // Change button text to "Correct"
        checkButton.classList.remove('is-primary'); // Optionally, remove primary styling
        checkButton.classList.add('is-success'); // Optionally, add success styling
    } else {
        checkButton.innerText = 'Incorrect'; // Change button text to "Incorrect"
        checkButton.classList.remove('is-primary'); // Optionally, remove primary styling
        checkButton.classList.add('is-danger'); // Optionally, add danger styling
    }
}
