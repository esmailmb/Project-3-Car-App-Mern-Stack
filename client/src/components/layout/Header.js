import React from "react";
import { Link } from "react-router-dom";
import AuthOptions from "../auth/AuthOptions";
import cardoc from '../assets/cardoc.png';

export default function Header() {
  return (
    <header id="header">
      <Link to="/">
        <h1 className="title">CarDoc- Auto parts & modification!</h1>
        {/* <img src={cardoc} alt='car doc pic'/> */}
      </Link>
      <AuthOptions />
    </header>
  );
}