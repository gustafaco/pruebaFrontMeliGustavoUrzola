import React, { useState } from 'react';
import PropTypes from 'prop-types';

const InputGroup = ({ setValue, icon, icon2x }) => {

    const style = {
        inputGroup: {
            display: 'flex',
            width: '100%'
        },
        input: {
            marginLeft: '20px',
            width: '100%'
        }
    }

    const [inputValue, setInputValue] = useState('');

    const changeInput = (e) => {
        setInputValue( e.target.value );
    }

    const action = (e) => {
        e.preventDefault();
        setInputValue('');
        setValue(inputValue);
    }

    return (
        <form style={ style.inputGroup } onSubmit={ action }>
            <input 
                type="text" 
                placeholder="Nunca dejes de buscar" 
                style={ style.input } 
                onChange={ changeInput }
                value={ inputValue }
            />
            <button onClick={ action }>
                <img src={ icon } srcSet={ icon2x } alt="Buscar productos"></img>
            </button>
        </form>
    )
}

InputGroup.propTypes = {
    setValue: PropTypes.func.isRequired,
    icon: PropTypes.string.isRequired
}

export default InputGroup