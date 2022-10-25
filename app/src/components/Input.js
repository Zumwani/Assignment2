import React from 'react'

const Input = ({id, placeholder, errorMessage, containerClassName, value, onChange, onKeyUp, type = 'text'}) => {
    return (
        <div className={containerClassName}>
            <input id={id} type={type} placeholder={placeholder} value={value} onChange={onChange} onKeyUp={onKeyUp}
                   className={errorMessage != null ? "error" : ""}/>
            <p className='error-message'>{errorMessage}</p>
        </div>
    )
}

export default Input