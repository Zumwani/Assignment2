//Validate on input change
document.querySelectorAll("[required]").forEach(input => {
    input.addEventListener("input", () => input.classList.toggle("error", !validate(input)))
});

//Validate on button
document.querySelector("#postCommentButton").addEventListener("click", (e) => {

    e.preventDefault();

    let canSubmit = true;
    document.querySelectorAll("[required]").forEach(input => {

        let isValid = validate(input);
        if (!isValid)
            canSubmit = false;
        input.classList.toggle("error", !isValid); 

    });

    return !canSubmit;

});

function validate(input) {

    input.setCustomValidity("");
    input.reportValidity();

    if (input.validity.tooShort || input.validity.tooLong || input.validity.valueMissing) {
        input.setCustomValidity(`Must be between ${input.getAttribute('minlength')}-${input.getAttribute('maxlength')} characters`);
        input.reportValidity();
        return false;
    }

    if (input.validity.patternMismatch) {
        input.setCustomValidity(`Must match format: ${input.getAttribute('friendly-pattern')}`);
        input.reportValidity();
        return false;
    }

    return true;
        
}
