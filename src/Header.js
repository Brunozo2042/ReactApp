import React from 'react'
import './App.css'

export default function Header(){
    return(
        <header className='header'>
            <h1>Bruno H.</h1>
            <ul className='menu'>
                <li>About</li>
                <li>Buy</li>
                <li>Contact</li>
            </ul>
        </header>
    )
}