import React from 'react';
import './AboutPage.css'

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (<>
  <div style={{ borderStyle: 'dashed', borderColor: '#a5c2af', marginTop: '35px', backgroundColor: '#e2d3e8'}}>
    <div className="about-container">
      <h2 className="listInfoHeading"> Technologies Used</h2>
      <h4 className="listItem" > • ReactJS / ReduxJS / Javascript </h4>
      <h4 className="listItem" > • Node.js  / Express / PostgreSQL  </h4>
      <h4 className="listItem" > • MaterialUI / Html / CSS </h4>
      <h4 className="listItem" > • Multer Image Upload / Cloudinary </h4>
    </div>
        <div className="about-container">
        <h2 className="listInfoHeading"> Thank you</h2>
        <h4 className="listItem" > • Liz Kerber, Matt Black, Kris Szafranski </h4>
        <h4 className="listItem" > • Prime Digital Academy </h4>
        <h4 className="listItem" > • Family and Friends </h4>
        <h4 className="listItem" > • Adams Cohort </h4>
        <h4 className="listItem" > • www.minnesotawildflowers.info </h4>
      </div>
      <div className="about-container">
        <h2 className="listInfoHeading"> Contact Info </h2>
        <h4 className="listItem" > <b>Email:</b> andyswanson44@gmail.com </h4>
        <h4 className="listItem" > Github: www.github.com/swan1625  </h4>
        <h4 className="listItem" > LinkedIn: www.linkedin.com/in/andy-swanson-6609b4140/  </h4>
      </div>
      </div>
      
      </>
  );
}

export default AboutPage;
