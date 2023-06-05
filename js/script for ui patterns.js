//script for UI Patterns 
// reusable error function for errors (and input forms)

(function() {

    // query selectors -- combining ids with new variables
    let form = document.querySelector('#register-form');
    let emailInput = document.querySelector('#email');
    let passwordInput = document.querySelector('#password');


    // functions

    function showErrowMessage (input, message) {
        let container = input.parentElement; // The .input-wrapper
        
        //check and remove any existing errors
        let error = container.querySelector ('.error-message');
        if (error) {
            container.removeChild(error);
        }

        //Now add the error if the message isn't empty
        if (message) {
            let error = document.createElement('div');
            error.errorClassList.add('error-message');
            error.innerText = message; // accepts a function parameter (message) as inner text
            container.appendChild(error);
        }
    }

    function validateEmail () {
        let value = emailInput.value;
        if (!value) {
            showErrowMessage(emailInput, 'Email is a required field');
            return false;
        }

        if (value.indexOf('@') === -1) {
            showErrowMessage(emailInput, 'You must enter a valid email address');
            return false;
        }

        if (value.indexOf('.') == -1) {
            showErrowMessage(emailInput, 'You must enter a valid email address');
            return false;
        }

        showErrorMessage(emailInput, null);
        return true;

        /*  
        let hasAtSign = value.indexOf ('@') > -1; //Trying to find out if there is an @, or . Sign in an inputfield.
        let hasDot = value.indexOf ('.') > -1;
        return value && hasAtSign && hasDot;
        */
    }


    function validatePassword () {
        let value = passwordInput.value;
        if (!value) {
            showErrowMessage(passwordInput, 'Password is a required field');
            return false;
        }
        if (value.length <8) {
            showErrowMessage(passwordInput, 'The password needs to be at least 8 characters long');
            return false;
        }
        showErrowMessage(passwordInput, null)
        return true;
        /* return value && value.length >=8; */
    }


    function validateForm () {
        // return validateEmail() && validatePassword(); <-- has the effect that you only see one error message at a time (because of the && operator)
        // show all the errors at once when submitting the form (through rewriting ):

        let isValidEmail = validateEmail();
        let isValidPassword = validatePassword ();
        return isValidEmail && isValidPassword;
    }

    form.addEventListener ('submit'/*(event-type that is listened to)*/, (e) => {
        e.preventDefault(); //Do not submit to the server
        if (validateForm()) {
            alert('Success!');
        }
        }) /*(The listener receives a notification when an event of the specified type occurs)*/


    emailInput.addEventListener('input', validateEmail); 
    passwordInput.addEventListener('input', validatePassword); // <-- these two lines have the affect that validation errors are only shown when a user starts typing or clicks the submit button. 

    //THE RETURN STATEMENT HERE
}) ();
