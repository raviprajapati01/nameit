import './Searchbox.css';
import React from 'react';

function Searchbox({onInputChange}){
    return(
    <div className='search_container'>
        <input placeholder="type keyword" className='search_ingen'
        onChange={(event)=>onInputChange(event.target.value)}
        ></input>
    </div>
    );
}

export default Searchbox;
