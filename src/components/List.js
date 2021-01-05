import React from 'react';
import Card from './Card';

const List = ({ data }) => {
    return (
        <div>
            <ul>
                {data.map((user) => (
                    <Card key={user.id} name={user.name} avatar_url={user.avatar_url} company={user.company} />
                ))}
            </ul>
        </div>
    );
};

export default List;
