import React from 'react';
import vrscLogo from "./static_assets/Logos/vrsc-logo-60.png";
import tamuLogo from "./static_assets/Logos/tamu-logo-60.png";
import paycomLogo from "./static_assets/Logos/paycom-logo-60.png";
import twLogo from "./static_assets/Logos/tw-logo-60.png";
import dellLogo from "./static_assets/Logos/dell-logo-60.png";
import sjceLogo from "./static_assets/Logos/sjce-logo-60.png";
import './EducationAndWork.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Card from './Card.js';
function EducationAndWork() {
    return(
        <div className="experienceDiv">
            <header className="header">
                EDUCATION & WORK EXPERIENCE
            </header>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'black', color: 'white', 'boxShadow': 'none'}}
                    contentArrowStyle={{ borderRight: '10px solid black' }}
                    iconStyle={{ background: 'white', color: '#fff'}}
                    icon={<img src={vrscLogo} alt="VRSC Logo" className="responsive"/>}
                >
                    <Card
                    title = "Veteran Resource & Support Center (Texas A&M)"
                    subtitle = "College Station, TX"
                    leftInfo = "Marketing Graduate Assistant "
                    rightInfo = "March 2019 - Present"
                    details = "Analytics-driven social media marketing, Website administration, User Interface Design,
                     Product Management"
                    >
                    </Card>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'black', color: 'white', 'boxShadow': 'none'}}
                    contentArrowStyle={{ borderRight: '10px solid black' }}
                    iconStyle={{ background: 'white', color: '#fff'}}
                    icon={<img src={paycomLogo} alt="Paycom Logo" className="responsive"/>}
                >
                    <Card
                        title = "Paycom Payroll LLC"
                        subtitle = "Oklahoma City, OK"
                        leftInfo = "Software Development Intern"
                        rightInfo = "May 2019 - Aug 2019"
                        details = "JavaScript, PHP, C#.NET, REST APIs, SQL, Webpack, Babel, Node, Unit Testing,
                        Client Relationship Management"
                    >
                    </Card>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'black', color: 'white', 'boxShadow': 'none'}}
                    contentArrowStyle={{ borderRight: '10px solid black' }}
                    iconStyle={{ background: '#ea3c53', color: '#fff'}}
                    icon={<img src={tamuLogo} alt="TAMU Logo" className="responsive"/>}
                >
                    <Card
                        title = "Texas A&M University"
                        subtitle = "College Station, TX"
                        leftInfo = "Masters (Management Information Systems)"
                        rightInfo = "Aug 2018 - May 2020"
                    >
                    </Card>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'black', color: 'white', 'boxShadow': 'none'}}
                    contentArrowStyle={{ borderRight: '10px solid black' }}
                    iconStyle={{ background: 'white', color: '#fff'}}
                    icon={<img src={twLogo} alt="ThoughtWorks Logo" className="responsive"/>}
                >
                    <Card
                        title = "ThoughtWorks Technologies Inc."
                        subtitle = "Bengaluru, India"
                        leftInfo = "Full-Stack Application Developer"
                        rightInfo = "Apr 2017 - Jun 2018"
                        details = "ReactJS, Java, Spring Boot, Agile Methodologies, Test-Driven Development,
                         Single Page Applications, Continuous Integration-Continuous Deployment"
                    >
                    </Card>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'black', color: 'white', 'boxShadow': 'none'}}
                contentArrowStyle={{ borderRight: '10px solid black' }}
                iconStyle={{ background: 'white', color: '#fff'}}
                icon={<img src={dellLogo} alt="Dell Logo" className="responsive"/>}
                >
                    <Card
                        title = "Dell Software India Pvt. Ltd"
                        subtitle = "Hyderabad, India"
                        leftInfo = "Software Development Engineer"
                        rightInfo = "Aug 2016 - Feb 2017"
                        details = "C, Debugging, Linux, R&D, Data Storage, Disaster Recovery"
                    >
                    </Card>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'black', color: 'white', 'boxShadow': 'none'}}
                    contentArrowStyle={{ borderRight: '10px solid black' }}
                    iconStyle={{ background: 'white', color: 'white'}}
                    icon={<img src={sjceLogo} alt="SJCE Logo" className="responsive"/>}
                >
                    <Card
                        title = "Sri Jayachamarajendra College of Engineering (SJCE)"
                        subtitle = "Mysore, India"
                        leftInfo = "Bachelors (Computer Science & Engineering)"
                        rightInfo = "Aug 2012 - May 2016"
                    >
                    </Card>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
}

export default EducationAndWork;
