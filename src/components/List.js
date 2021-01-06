import React from 'react';
import Card from './Card';

const List = ({ profiles }) => {
    return (
        <div>
            <ul className='divide-y divide-indigo-300'>
                {profiles.map((profile) => (
                    <Card key={profile.id} {...profile} />
                ))}
            </ul>
        </div>
    );
};

export default List;
