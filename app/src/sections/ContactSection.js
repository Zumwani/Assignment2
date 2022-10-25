import React, { useState } from 'react'
import { json } from 'react-router-dom';
import ActionButton from '../components/ActionButton';
import Input from '../components/Input'
import TextArea from '../components/TextArea'

const ContactSection = () => {

    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    const [contactForm, setContactForm] = useState({name: "", email: "", comment: ""});
    const [formErrors, setFormErrors] = useState({name: undefined, email: undefined, comment: undefined});
    const [canSubmit, setCanSubmit] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    // const errors = {};
    const patterns = {name: 2, email: /.{1,}@.*\..{1,}/, comment: 5}

    const validateAll = (errors, values) => {
        Object.keys(contactForm).forEach(key => validate(key, values, errors));
        return errors;
    };
    
    const validate = (name, values, errors) => {
        
        const pattern = patterns[name];
        
        errors[name] = undefined;
        if (!values[name]) errors[name] = "Please enter a value";
        if (!isNaN(pattern) && values[name].trim().length < pattern) errors[name] = "Please use at least " + pattern + " characters";
        else if (pattern instanceof RegExp && !pattern.test(values[name])) errors[name] = "Please enter a valid e-mail address"; 
        
        setCanSubmit(Object.values(errors).every(i => i == undefined));
        // console.log(errors);

        return errors;

    };
    
    const handleChange = (e) => {
        let {id, value} = e.target;
        setContactForm({...contactForm, [id]: value});
    };
    
    const handleKeyUp = (e) => {
        let {id} = e.target;
        setFormErrors(validate(id, contactForm, formErrors));
    };

    const handleSubmit = (e) => {

        e.preventDefault();
        setFormErrors(validateAll(formErrors, contactForm));
        forceUpdate(); //React does not detect when object is modified, and will not automatically re-render

        if (canSubmit) {
            setSubmitted(true);
            setCanSubmit(false);
        }

    };
    
    return (
        <section className='contact-form'>
            <div className='container'>
                {
                    submitted 
                    ? "Thank you for your comment!" 
                    : <>
                        <h2>Come in contact with us</h2>
                        <form onSubmit={handleSubmit} noValidate>
                            <Input id='name' type='text'   placeholder='Your name' value={contactForm.name} errorMessage={formErrors.name} onChange={handleChange} onKeyUp={handleKeyUp}/>
                            <Input id='email' type='email' placeholder='example@domain.com' value={contactForm.email} errorMessage={formErrors.email} onChange={handleChange} onKeyUp={handleKeyUp}/>
                            <TextArea id='comment' placeholder='Your comment' containerClassName='textarea' value={contactForm.comment} errorMessage={formErrors.comment} onChange={handleChange} onKeyUp={handleKeyUp}/>
                            <ActionButton text="Post comment" simple="true"/>
                        </form>
                    </>
                }
            </div>
        </section>
    )

}

export default ContactSection