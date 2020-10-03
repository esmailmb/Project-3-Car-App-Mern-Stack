import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";

export default function Home() {
  const { userData } = useContext(UserContext);

  return (
    <div className="page">
      {userData.user ? (
        <h1>Welcome {userData.user.displayName}</h1>
      ) : (
        <>
          <h2>Welcome to CarDoc for all your auto parts & modifications!  <br></br>Please
          <Link to="/login"> Log in</Link></h2>
        </>
      )}
    </div>
  );
}