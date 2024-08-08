// static/js/script.js

document.addEventListener('DOMContentLoaded', () => {
    // Add event listener for language selection change
    document.querySelectorAll('input[name="language"]').forEach(radio => {
        radio.addEventListener('change', switchLanguage);
    });

    // Initially set the language
    switchLanguage();
});

function switchLanguage() {
    // Get the selected language
    const selectedLanguage = document.querySelector('input[name="language"]:checked').value;

    const wordElements = document.querySelectorAll('.word');
    
    wordElements.forEach(el => {
        const word = el.getAttribute('data-word');
        const translation = el.getAttribute('data-translation');
        
        if (selectedLanguage === 'japanese') {
            el.textContent = word;
            el.nextElementSibling.querySelector('.translation').textContent = translation;
            el.classList.remove('has-background-primary');
            el.classList.add('has-background-danger');
        } else if (selectedLanguage === 'dutch') {
            el.textContent = translation;
            el.nextElementSibling.querySelector('.translation').textContent = word;
        }
        el.classList.remove('has-background-primary');
        el.classList.add('has-background-danger');
    });
    clearInputFields();
}

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
        const wordElement = row.parentElement.querySelector(".word");
        wordElement.classList.remove("has-background-danger");
        wordElement.classList.add("has-background-primary")
    } else {
        checkButton.innerText = 'Incorrect'; // Change button text to "Incorrect"
        checkButton.classList.remove('is-primary'); // Optionally, remove primary styling
        checkButton.classList.add('is-danger'); // Optionally, add danger styling
    }
}

function clearInputFields() {
    // Select all input fields with the class 'translation-input'
    const inputs = document.querySelectorAll('.translation-input');
    const buttons = document.querySelectorAll(".button");
    
    // Iterate through the inputs and clear their value
    inputs.forEach(input => {
        input.value = ''; // Clear the input field value
        input.disabled = false; // Ensure the input is enabled
    });

    buttons.forEach(button => {
        button.disabled = false
    });
}
