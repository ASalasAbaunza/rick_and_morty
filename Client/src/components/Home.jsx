import React from 'react';
import Cards from './Cards.jsx';

export default function Home(props) {
    return (
        <div>
            <Cards characters={props.characters} onClose={props.onClose}/>
        </div>
    );
}