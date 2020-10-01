import React from "react";
import './styles.scss'
import {AuthBlock} from "./AuthBlock/AuthBlock";

export const Header = () => {
    return (
        <div className='header'>
            <div className='header__content'>
                <p>Navbar</p>
                <h1>LOGO</h1>
                <AuthBlock />
            </div>
        </div>
    )
}