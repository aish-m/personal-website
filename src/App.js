import React from 'react';
import './App.css';
import ShortDescription from "./ShortDescription";
import EducationAndWork from "./EducationAndWork.js";
import ResumeAndSocialMedia from "./ResumeAndSocialMedia";
import EmailIcon from '@material-ui/icons/Email';

function App() {
    let name = "AISHWARYA MANJUNATHA";

  return (
    <div className="App">
        <header className="App-header">
            { name }
        </header>
        <ShortDescription/>
        <ResumeAndSocialMedia/>
        <EducationAndWork/>
        <footer className="footer">
            <div className="box">
                <div> Contact me: </div>
                <EmailIcon fontSize="large"/> <br />
                <a className="email-link" href="mailto:aishwarya.shastri94@gmail.com"> aishwarya.shastri94@gmail.com </a>
            </div>
        </footer>
    </div>
  );
}

export default App;
