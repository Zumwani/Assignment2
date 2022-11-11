import React from 'react'

const UpDown = ({ count, onIncrement, onDecrement, onRemove }) => {

    return (
    <div className='up-down'>
        <button onClick={ () => count < 2 ? (onRemove == null ? null : onRemove()) : onDecrement() }>-</button>
        <span data-testid="count">{count}</span>
        <button onClick={ onIncrement }>+</button>
    </div>
    )

}

export default UpDown