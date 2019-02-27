import React from 'react';

const Input = (props) => (
    <form onSubmit={props.showWeather}>
        <input type="text" name="city" placeholder="Enter the city..." />
        <button>Show Weather</button>
    </form>
);

export default Input;
    
