import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Hero from "../Hero/Hero";
import porsche from "../assets/porsche.jpg";
import logo from "../assets/cardoc.png";


export default function Home() {
  const { userData } = useContext(UserContext);

  return (
    <div className="page">

      <Hero backgroundImage={porsche}>
        <img className="cardoclogo" src={logo} alt={"logo"} style={{ height: 140, flex: 1, width: undefined, padding: 0 }} />
        <h2 className="hometitle">For your auto parts and modifications needs.</h2>

      </Hero>
      {userData.user ? (
        <h1>Welcome {userData.user.displayName}</h1>
      ) : (
          <>
            <h2>Welcome to CarDoc!  <br></br>Please
          <Link to="/login"> Log in</Link></h2>
          </>
        )}
    </div>
  );
}