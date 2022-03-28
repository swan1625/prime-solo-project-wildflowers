import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  function myFunction() {
    let x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  function closeFunction() {
    let x = document.getElementById("myLinks");
    x.style.display = "none";
  }

  return (
    <>   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

      <div class="topnav">
        <a href="#home" class="active"> 🌷 Pic Some Flowers 🌷</a>
        {/* <!-- Navigation links (hidden by default) --> */}
        <div id="myLinks">
          <a href='#user' onClick={closeFunction}> Profile Page </a>
          <a href="#flowerlist" onClick={closeFunction}>Flower Index</a>
          <a href="#userlist" onClick={closeFunction}>Digital Bouquet</a>
          <a href="#about" onClick={closeFunction}>About</a>


        </div>
        <a href="javascript:void(0);" class="icon" onClick={myFunction}>
          <i class="fa fa-bars"></i>
        </a>



      </div>
    </>
  );
}

export default Nav;
