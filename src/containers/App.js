import React from 'react';
import List from '../components/List';

const data = [
    { name: 'Rita Bradley', avatar_url: 'https://avatars3.githubusercontent.com/u/41173740?v=4', company: null },
    {
        name: 'Adam Wathan',
        avatar_url: 'https://avatars2.githubusercontent.com/u/4323180?v=4',
        company: 'Tailwind CSS',
    },
];

const App = ({ title }) => (
    <div className='p-6'>
        <h1 className='mb-6 text-3xl font-bold text-center'>{title}</h1>
        <List data={data} />
    </div>
);

export default App;
