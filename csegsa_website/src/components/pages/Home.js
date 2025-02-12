import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Home = (props) => {

    const { username, setUsername } = useContext(AppContext);

    const handleChange = (e) => {
        console.log(e.target.value);
        setUsername(e.target.value);
    }

    return (
        <div className="">
            <div>This is the home page </div>

            <div>Enter your username here: <input onChange={handleChange}></input></div>

            {username !== '' && 
            <div>Hello, {username}</div>}
        </div>
      );  
}

export default Home;