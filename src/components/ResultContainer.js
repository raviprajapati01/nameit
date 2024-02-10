import React from 'react';
import  './ResultContainer.css';
import NameCard from './NameCard';

const ResutContainer=({suggesterdNames})=>{

    const suggesterdjsx=suggesterdNames.map((suggesterdName)=>{
        return(
            <NameCard suggesterdName={suggesterdName}/>
        );
    });
    // console.log(suggesterdNames);
    return(
        <div className='result-container'>
        <p className='container-sapration'>{suggesterdjsx}</p>
        </div>
    );
};

export default ResutContainer;