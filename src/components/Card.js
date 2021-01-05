import React from 'react';

const Card = ({ imgUrl = 'http://placeskull.com/75/75', name = 'Rita Bradley', company = 'Some Company' }) => {
    return (
        <div className='align-center flex justify-center my-4'>
            <img className='mr-4' src={imgUrl} alt='placeholder img' />
            <div>
                <p>{name}</p>
                <p>{company}</p>
            </div>
        </div>
    );
};

export default Card;
