
import React, { useState } from 'react';

const Header = () => {
    const [toggle, setToggle] = useState("none")
    function gotPressed(e) {
        e.preventDefault();
        if (toggle !== "show"){
            setToggle("show")
        } else {
            setToggle("none")
        }
    }
   
    return (
        <header className={toggle}>
            <div className="top-bar">
                <h1><a href="/">News App</a></h1>
                <a href='/' className="btn-menu" id="btn-menu" onClick={gotPressed}>Sections▼</a>
                <a href='/' className="btn-menu2" id="btn-menu" onClick={gotPressed}>More▼</a>
                <nav className="main-nav" >
                    <ul className='primary'>
                        <li><a href="">Local</a></li>
                        <li><a href="">Canada</a></li>
                        <li><a href="">Indigenous</a></li>
                        <li><a href="">World</a></li>
                        <li><a href="">Opinion</a></li>
                    </ul>
                    <ul className='secondary'>
                        <li><a href="">Business</a></li>
                        <li><a href="">Entertainment</a></li>
                        <li><a href="">Health</a></li>
                        <li><a href="">Science</a></li>
                        <li><a href="">Sports</a></li>
                    </ul>
                </nav>
                <nav className='nav2'>
                <ul className='secondary'>
                        <li><a href="">Business</a></li>
                        <li><a href="">Entertainment</a></li>
                        <li><a href="">Health</a></li>
                        <li><a href="">Science</a></li>
                        <li><a href="">Sports</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;