import React from 'react'
import './Header.css';

function Header()
{
    return (
        <>
        <div className='Dashboard'>
                <h1>Dashboard</h1>
        </div>
    
        {/*Search bar input*/}
        <div className='search-bar-container'>
            <div className='search-bar'>
                <input type="text" placeholder='Search...' className="search-input"/>
            </div>
        </div>
        </>
    )
}

export default Header;

