import React from 'react';

const Card = ({ avatar_url, name, company }) => {
    return (
        <div className='flex py-6  space-x-2'>
            <img className='w-28 h-28 rounded-md' src={avatar_url} alt='placeholder img' />
            <div>
                <p>{name}</p>
                <p>
                    <em>{company}</em>
                </p>
            </div>
        </div>
    );
};

export default Card;
