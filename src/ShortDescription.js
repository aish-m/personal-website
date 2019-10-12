import React from 'react';
import picture from './static_assets/Manjunatha_Aishwarya.jpg';
import './ShortDescription.css';

function ShortDescription() {
    let imageAltText = "Image of Aishwarya Manjunatha";
    return (
      <div className="shortDescription">
          <div className="picDiv">
              <img src = { picture } height="350" width="350" className="aishwaryaImage"  alt = { imageAltText } />
          </div>
          <div className="introText">
              <h1 className= "aboutMe"> About Me </h1>
              Hi! I am Aishwarya. <br />
              I am a Graduate Student at Mays Business School, Texas A&M University. I'm majoring in Management Information Systems.
              I am a Computer Science and Engineering Graduate.
              My academic fields of interest include Full-Stack Web Application Development and Software Product Management.
              In my spare time, I paint rocks, make bead jewellery, draw comic strips, sing Indian classical music
              or do Yoga.
          </div>
      </div>
    );
}

export default ShortDescription;
