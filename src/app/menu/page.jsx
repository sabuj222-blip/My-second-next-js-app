import React from 'react';
import Food from '../components/Food';

const menuPage = async() => {
    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods")
    const data = await res.json()
    const foods= data.data
    return (
        <div>
            <h1>Menu:{foods.length}</h1>
            <div className="grid grid-cols-3 gap-4">
                {
                    foods.map(food=><Food key={food.id} food={food}></Food>)
                }
            </div>
        </div>
    );
};

export default menuPage;