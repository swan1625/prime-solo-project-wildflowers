// {/* <div className="title">
// <Link to="/home">
//   <h2 className="nav-title"> 🌷 Pic Some Flowers 🌻 </h2>
// </Link>
// </div>
// <div className="nav">
//   <div>
//     {/* If no user is logged in, show these links */}
//     {!user.id && (
//       // If there's no user, show login/registration links
//       <Link className="navLink" to="/login">
//         Login / Register
//       </Link>
//     )}

//     {/* If a user is logged in, show these links */}
//     {user.id && (
//       <>
//         {/* <Link className="navLink" to="/user">
//           Home
//         </Link> */}

//         <Link className="navLink" to="/info">
//           Info
//         </Link>
//         <Link className="navLink" to='/flowerlist'>
//           Flower Index
//         </Link>
//         <Link className="navLink" to='/userlist'>
//           Digital Bouquet!
//         </Link>

//         <LogOutButton className="navLink" />
//       </>
//     )}

//     <Link className="navLink" to="/about">
//       About
//     </Link>




//   </div>
// </div> */}


// .nav {
//     /* flex box layout */
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     margin: 0 0 30px;
//     background-color: #22031F;
//     overflow: hidden;
//   }
  
//   .title{
//     color: rgb(134, 152, 168);
//     text-align: center;
//     background-color: #22031F;
    
//   }
  
  
  
//   .nav a {
//     text-decoration: none;
//   }
  
//   .nav-title {
//     font-size: 24px;
//     font-weight: 700;
//     color: #70948e;
//     padding-left: 10px;
//     margin: 0;
//   }
  
//   .navLink {
//     display: inline-block;
//     color: #f2f2f2;
//     background-color: #CC76A1;
//     text-align: center;
//     padding: 24px 10px;
//     text-decoration: none;
//     font-size: 15px;
  
//     /* these last two make the logout button in
//     the nav bar look like another link */
//     border: none;
//     cursor: pointer;
//     outline: 0;
//   }
  
//   .navLink:hover {
//     background-color: #983F6B;
//   }