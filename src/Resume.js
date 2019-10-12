import React from 'react';
import './ResumeButton.css';
import resume from './static_assets/Resume_Manjunatha_Aishwarya.pdf';

function Resume() {
    return (
        <div className="resume-div">
            <button className="resume-button">
                <a href = {resume} target = "_blank" rel="noopener noreferrer">Resume</a>
            </button>
        </div>
    );
}

export default Resume;
