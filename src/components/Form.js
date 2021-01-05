import React, { useState } from 'react';

const Form = () => {
    const [userInput, setUserInput] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    const handleChange = (e) => {
        setUserInput(e.target.value);
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                onChange={handleChange}
                type='search'
                name='search'
                value={userInput}
                id='search'
                placeholder='search for username...'
                aria-placeholder='search for username...'
                required
            />
            <button type='submit'>Add new card</button>
        </form>
    );
};

export default Form;
