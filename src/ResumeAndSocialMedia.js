import React from 'react';
import './ResumeAndSocialMedia.css';
import resume from './static_assets/Resume_Manjunatha_Aishwarya.pdf';
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacecookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';


    function ResumeAndSocialMedia() {
    return (
        <div className="social-links">
            <button className="resume-button">
                <a className="resume-link" href = { resume } target = "_blank" rel="noopener noreferrer">
                    Résumé
                </a>
            </button>
            <IconButton
                href="https://www.linkedin.com/in/amanjunatha/"
                children={<LinkedInIcon style={{ fontSize: 50 }} htmlColor="black"/>}
                target="_blank"
            />
            <IconButton
                href="https://github.com/aish-m"
                children={<GitHubIcon style={{ fontSize: 50 }} htmlColor="black"/>}
                target="_blank"
            />
            <IconButton
                href="https://www.instagram.com/aish_shastri/"
                children={<InstagramIcon style={{ fontSize: 50 }} htmlColor="black"/>}
                target="_blank"
            />
            <IconButton
                href="https://www.facebook.com/aishwarya.shastri94"
                children={<FacecookIcon style={{ fontSize: 50 }} htmlColor="black"/>}
                target="_blank"
            />
        </div>
    );
}

export default ResumeAndSocialMedia;
