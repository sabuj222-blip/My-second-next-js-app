import React from 'react';
import Counter from '../components/counter';

const dashboardPage = () => {
    console.log('Dashboard Page Rendered')
    return (
        <div>
            <h1>our dashboard page </h1>
            <Counter></Counter>
            
        </div>
    );
};

export default dashboardPage;