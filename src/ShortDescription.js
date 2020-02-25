import React from 'react';
import picture from './static_assets/Manjunatha_Aishwarya.jpg';
import './ShortDescription.css';

function ShortDescription() {
    let imageAltText = "Image of Aishwarya Manjunatha";
    return (
      <div className="shortDescription">
          <div className="introText">
              <h1 className= "hi"> Hi, I am Aishwarya! </h1>
              <p>
                  I am a graduate student at Mays Business School, Texas A&M University. I am majoring in Management Information Systems.
                  I hold a bachelor's degree in Computer Science and Engineering.
                  My academic fields of interest include full-stack web application development and software product management.
                  <br /> <br />
                  I have a diverse array of hobbies ranging from
                  <a href="https://www.facebook.com/TheScrapbookOnline/" className="links" target="_blank"
                     rel="noopener noreferrer">  painting pebbles  </a>
                  and
                  <a href="https://www.instagram.com/all_stuff_artsy/" className="links" target="_blank"
                     rel="noopener noreferrer">  making beaded jewelery  </a>
                  to practicing yoga and
                  <a href="https://www.instagram.com/tinyyellownotebook/" className="links" target="_blank"
                     rel="noopener noreferrer">  creating comic strips  </a>
                  . In my spare time, I enjoy reading books, travelling and
                  singing Indian classical music.
              </p>
          </div>
          <div className="picDiv">
              <img src = { picture } height="350" width="350" className="aishwaryaImage"  alt = { imageAltText } />
          </div>
      </div>
    );
}

export default ShortDescription;
