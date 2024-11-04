import React, { useState } from "react";
import Button from "../Button/Button";
import Logo from "../../assets/Logo.png";
import SearchBar from "../SearchBar/Search";
import "./Navbar.module.css";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  return (
    <>
      <nav className="navbar">
        <Logo />
        <SearchBar />
        {/* <ModelNew val={open} className="button" onClick={handleClick} /> */}
        <Button text="Give Feedback" type="button" onClick={handleClick} />
      </nav>
    </>
  );
};

export default NavBar;