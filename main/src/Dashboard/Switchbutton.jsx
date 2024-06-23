import React, { useEffect, useState } from 'react';
import './Switchbutton.css';

export default function Switchbutton() 
{
    //Check if Dark mode is enabled
    const [isDarkMode, setIsDarkMode] = useState(() => 
        {
            //check if theme is already on light mode 
        const currentTheme = localStorage.getItem('theme') || 'light'; 

        //if not user can change it to dark mode
        return currentTheme === 'dark';
    });

    useEffect(() => 
    {
        // Set the body attribute according to the current theme in localStorage
        document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    //swtich theme when button has been pressed 
    const switchTheme = (e) => 
    {
        const newTheme = e.target.checked;
        setIsDarkMode(newTheme);
        localStorage.setItem('theme', newTheme ? 'dark' : 'light');  
        document.body.setAttribute('data-theme', newTheme ? 'dark' : 'light');
    };

    //switch button
    return (
        <div className="wrapper">
            <label className="switch">
                <input type="checkbox" onChange={switchTheme} checked={isDarkMode} />
                <span className="slider round"></span>
            </label>
        </div>
    );
    
}
