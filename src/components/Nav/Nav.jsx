import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  
  return (
<>   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

    <div class="topnav">
    <a href="#home" class="active">🌻 Pic Some Flowers 🌷</a>
    {/* <!-- Navigation links (hidden by default) --> */}
    <div id="myLinks">
      <a href="#flowerlist" >Flower List</a>
      <a href="#userlist">Digital Bouquet</a>
      <a href="#about">About</a>
      <div>  <LogOutButton className="navLink" /> </div> 
    </div>
    {/* <!-- "Hamburger menu" / "Bar icon" to toggle the navigation links --> */}
    <a href="javascript:void(0);" class="icon" onClick={myFunction}>
      <i class="fa fa-bars"></i>
    </a>

  

    </div>
    </>
  );
}

export default Nav;
