const patterns = { name: 2, email: /.{1,}@.*\..{1,}/, comments: 5 }

export const validateAll = (form, errors, setErrors, setCanSubmit) => {

    Object.keys(form).forEach(key => validate(form, errors, key));

    if (typeof setErrors == "function")
        setErrors(errors);

    var canSubmit = Object.values(errors).every(i => i == undefined); 
    if (typeof setCanSubmit == "function")
        setCanSubmit(canSubmit);

    return canSubmit;

}

export const validate = (form, errors, name, setErrors, setCanSubmit) =>
    _validate(form, errors, name, setErrors, setCanSubmit);

function _validate(form, errors, name, setErrors = undefined, setCanSubmit = undefined) {

    const pattern = patterns[name];
    
    errors[name] = undefined;
    if (!form[name]) errors[name] = "Please enter a value";
    if (!isNaN(pattern) && form[name].trim().length < pattern) errors[name] = "Please use at least " + pattern + " characters";
    else if (pattern instanceof RegExp && !pattern.test(form[name])) errors[name] = "Please enter a valid e-mail address"; 
    
    if (typeof setErrors == "function")
        setErrors(errors);

    var canSubmit = Object.values(errors).every(i => i == undefined); 
    if (typeof setCanSubmit == "function")
        setCanSubmit(canSubmit);
        
    return canSubmit;

};

export const submit = (url, method, json, setResult, contentType = "application/json") => {
    fetch(url, {
        method: method,
        headers: { "Content-Type": contentType },
        body: json
    }).
    then(r => {
        setResult(r);
    });
};
