import React from 'react'; 

import DefaultButton from '../components/DefaultButton.js';

import "../styles/Home.css"; 

function Home() {

    return (
        <div>
            <h1> This is our home page. </h1>
            <p> We could introduce the game here </p>
            <div>
                <DefaultButton text="Begin" route="/start"/>
            </div>
        </div>
    )
}

export default Home; 