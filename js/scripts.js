(function() {
    let form = document.querySelector('#contact-form');
    let emailInput = document.querySelector('#email');
    let numberInput = document.querySelector('#number');
    let messageInput = document.querySelector('#message');

    function showErrorMessage(input, message) {
        let container = input.parentElement;

        let error = container.querySelector('.error-message');
        if (error) {
            container.removeChild(error);
        }
        if (message) { 
            let error = document.createElement('div');
            error.classList.add('error-message');
            error.innerText = message;
            container.appendChild(error);
        }
    }

    function validateEmail() {
        let value = emailInput.value;

        if (!value) {
            showErrorMessage(emailInput, 'E-mail is required field.');
            return false;
        }
        if (value.indexOf('@') === -1) {
            showErrorMessage(emailInput, 'Must enter valid e-mail.');
            return false;
        }
        if (value.indexOf('.') === -1) {
            showErrorMessage(emailInput, 'Must enter valid e-mail.');
            return false;
        }
        showErrorMessage(emailInput, null);
        return true;
    }
    
    function validateNumber() {
        let value = numberInput.value;

        if (!value) {
            showErrorMessage(numberInput, 'Phone number is a required field.');
            return false;
        }
        if(!/\b[\+]?[(]?[0-9]{2,6}[)]?[-\s\.]?[-\s\/\.0-9]{3,15}\b/m.test(value)) {
            showErrorMessage(numberInput, 'Must be a valid phone number.');
            return false;
        }
        showErrorMessage(numberInput, null);
        return true;
    }

    function validateMessage() {
        let value = messageInput.value;

        if (!value) {
            showErrorMessage(messageInput, 'Message is a required field.');
            return false;
        }
        
        if (value.length >= 50) {
            showErrorMessage(messageInput, 'Must have less than 50 characters.');
            return false;
        }
        showErrorMessage(messageInput, null);
        return true;
    }

    function validateForm() {
        let isEmailValid = validateEmail();
        let isNumberValid = validateNumber();
        let isMessageValid = validateMessage();
        return isEmailValid && isMessageValid && isNumberValid;
    }
    form.addEventListener('sumbit', (e) => {
        e.preventDefault();
        if (validateForm()) {
            alert('Your form has been sent.');
        }
    });

    emailInput.addEventListener('input', validateEmail);
    numberInput.addEventListener('input', validateNumber);
    messageInput.addEventListener('input', validateMessage);
})();