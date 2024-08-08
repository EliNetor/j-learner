// static/js/script.js
function checkTranslation(button) {
    // Get the row containing the button
    const row = button.parentElement;
    
    // Get the translation from the hidden span
    const translation = row.querySelector('.translation').innerText;
    
    const inputField = row.querySelector('.translation-input');
    const input = inputField.value;
    
    // Get the button element to update its text
    const checkButton = row.querySelector('.button');
    
    // Compare input with the translation
    if (input === translation) {
        checkButton.innerText = 'Correct'; // Change button text to "Correct"
        checkButton.classList.remove('is-primary'); // Optionally, remove primary styling
        checkButton.classList.remove('is-danger');
        checkButton.classList.add('is-success'); // Optionally, add success styling
        checkButton.disabled = true;
        inputField.disabled = true;
        japanese_word = row.parentElement.querySelector(".japanese-word");
        japanese_word.classList.remove("has-background-danger");
        japanese_word.classList.add("has-background-primary")
    } else {
        checkButton.innerText = 'Incorrect'; // Change button text to "Incorrect"
        checkButton.classList.remove('is-primary'); // Optionally, remove primary styling
        checkButton.classList.add('is-danger'); // Optionally, add danger styling
    }
}


function clearInputFields() {
    // Select all input fields with the class 'translation-input'
    const inputs = document.querySelectorAll('.translation-input');
    
    // Iterate through the inputs and clear their value
    inputs.forEach(input => {
        input.value = ''; // Clear the input field value
        input.disabled = false; // Ensure the input is enabled
    });
}

addEventListener('DOMContentLoaded', clearInputFields());