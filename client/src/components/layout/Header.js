import React from "react";
import { Link } from "react-router-dom";
import AuthOptions from "../auth/AuthOptions";
// import Search from "../Search/Search";
import logo from '../assets/cardoc.png';
import styles from './Header.css';
// import { Container, Row, Col } from "../Grid";

export default function Header() {
  return (
    <div className={styles['nav-bar']} id="header">
      <Link to="/">
        {/* <img src={logo} alt='car doc pic'/> */}
        <h1 className="title">CarDoc - Auto parts & modification!</h1>
      </Link>
      <AuthOptions />
    </div>
  );
}