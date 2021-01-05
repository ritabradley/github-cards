import React from 'react';

const Card = ({ avatar_url = 'http://placeskull.com/75/75', name = 'Rita Bradley', company = 'Some Company' }) => {
    return (
        <div className='align-center flex justify-center my-4'>
            <img className='w-24 h-24 mr-4' src={avatar_url} alt='placeholder img' />
            <div>
                <p>{name}</p>
                <p>{company}</p>
            </div>
        </div>
    );
};

export default Card;
