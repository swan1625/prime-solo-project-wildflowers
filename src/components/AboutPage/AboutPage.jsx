import React from 'react';
import './AboutPage.css'

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (<>
  <div style={{ borderStyle: 'dashed', borderColor: '#a5c2af', marginTop: '35px', backgroundColor: '#e2d3e8',}}>
    <div className="about-container">
      <p className="listInfoHeading">  <b> Technologies Used </b></p>
      <p className="listItem" > • ReactJS / ReduxJS / Javascript </p>
      <p className="listItem" > • Node.js  / Express / PostgreSQL  </p>
      <p className="listItem" > • MaterialUI / Html / CSS </p>
      <p className="listItem" > • Multer Image Upload / Cloudinary </p>
    </div>
        <div className="about-container">
        <p className="listInfoHeading"> <b>Thank you</b></p>
        <p className="listItem" > • Liz Kerber, Matt Black, Kris Szafranski </p>
        <p className="listItem" > • Prime Digital Academy </p>
        <p className="listItem" > • Family and Friends </p>
        <p className="listItem" > • Adams Cohort </p>
        <p className="listItem" > • www.minnesotawildflowers.info </p>
      </div>
      <div className="about-container">
        <p className="listInfoHeading"> <b>Contact Info </b></p>
        <p className="listItem" > <b>Email:</b> andyswanson44@gmail.com </p>
        <p className="listItem" > <b>Github:</b> www.github.com/swan1625  </p>
        <p className="listItem" > <b>LinkedIn:</b> www.linkedin.com/in/andy-swanson-6609b4140/  </p>
      </div>
      </div>
      
      </>
  );
}

export default AboutPage;
