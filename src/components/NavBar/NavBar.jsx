import React from "react";
import Button from "../Button/Button";
import Search from "../SearchBar/Search";
import styles from './Navbar.module.css'
import Logo from '../../assets/Logo.png';



export default function Navbar(){
    return(
        <>
            <nav className={styles.navbar}>
                <div className={styles.logoDiv}><img  src={LogoImage} alt="logo" width={67}/></div>
                 <Search search={"Search a song of your choice"}/>
                <Button children="Give Feedback"/>
            </nav>
        </>
    )
}