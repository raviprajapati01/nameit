import React from 'react';
import './NameCard.css';

const NameCard=({suggesterdName})=>{
    const localUrl='https://www.namecheap.com/domains/registration/results/?domain='
    return(
        <a target='_blank' className='inside-card-text' href={`${localUrl}${suggesterdName}`}>
            <div className='result-card-container'>
               <p key={NameCard} className='result-card'>
               {suggesterdName}
               </p>
        </div>
        </a>
    );
}
export default NameCard;