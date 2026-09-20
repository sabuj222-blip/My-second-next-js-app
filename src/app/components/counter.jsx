'use client'
import React  from 'react';
import {useState} from 'react'


const Counter = () => {
    const[count,setCount]= useState(0)

    const handleIncrease =()=>{
        console.log('increase count')
        setCount(count+1)
    }
    console.log('counter component rendered')
    return (
        <div>
            <h1>Counter:{count}</h1>
            <button 
              onClick={handleIncrease}
            className="bg-blue-500">Increase</button>
        </div>
    );
};

export default Counter;