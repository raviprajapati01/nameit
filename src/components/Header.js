import React from 'react'
import './Header.css';
// import Searchbox from './Searchbox';

const Header=({data,headerExpanded})=>{
    // console.log(headerExpanded);
    return(
        <div className='header_container'>
            <img src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png"
             alt='header-image' className={`pro_img ${headerExpanded? 'pro_img_expands':'pro_img_contreat'}`}></img>
            <h1 className={`header_heading ${headerExpanded?'header_heading_expands':'header_heading_contreat'}`}>{data}</h1>
        </div>
    );
}

export default Header; 