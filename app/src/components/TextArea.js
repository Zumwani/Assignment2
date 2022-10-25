import React from 'react'

const TextArea = ({id, placeholder, errorMessage, containerClassName, value, onChange, onKeyUp}) => {
    return (
        <div className={containerClassName}>
            <textarea id={id} placeholder={placeholder} value={value} onChange={onChange} onKeyUp={onKeyUp}
                      className={errorMessage != null ? "error" : ""}/>
            <p className='error-message'>{errorMessage}</p>
        </div>

  )
}

export default TextArea