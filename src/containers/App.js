import React from 'react';
import Card from '../components/Card';

const App = ({ title }) => (
    <div className='p-6'>
        <h1 className='mb-6 text-3xl font-bold text-center'>{title}</h1>
        <Card />
    </div>
);

export default App;
