import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Character from 'Components/Character';
import { Link } from "react-router-dom";
import Balloons from "Components/Balloons";
import SpeakerIcon from 'Components/SpeakerIcon';
import Divider from '@material-ui/core/Divider';
import GetAppIcon from '@material-ui/icons/GetApp';


const styles = theme => {
    return {
        resumePage: {
            height: '100%',
            width: '100%',
            overflowY: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            minHeight: '100%',
        },
        title: {
            zIndex: 10,
            marginTop: theme.spacing(14),
            visibility: 'hidden'
        },
        content: {
            display: 'grid',
            height: '100%',
            gridTemplateColumns: '1fr 2fr',
            gridTemplateRows: '1fr 2fr 4fr',
            alignContent: 'space-evenly',
            justifyItems: 'stretch',
            marginLeft: '6%',
            marginRight: '6%',
            gridGap: '5%', 
        },
        divider: {
            height: '5px',
            width: 'calc(9px + 8vmin)',
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1)
        },
        resumeLink: {
            cursor: 'pointer',
            zIndex: 100,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },
        heading: {
            textAlign: 'start', 
            fontWeight: 600
        },
        body: {
            display: 'flex',
            justifyContent: 'space-between'
        },
        date: {
            // fontWeight: 600,
            textAlign: 'end'
        },
        downloadIcon: {
            color: 'black',
            marginLeft: theme.spacing(1) / 2
        },
        list: {
            textAlign: 'left', 
            fontSize: 'calc(4px + 1.5vmin) !important'
        }, 
        education: {
            gridRow: 1, 
            gridColumn: 1
        },
        experience: {
            gridRow: '1 / -1', 
            gridColumn: 2
        }, 
        skills: {
            gridRow: '2 / 3', 
            gridColumn: 1
        }, 
        skillsText: {
            textAlign: 'start'
        }
    };
};


class ResumePage extends Component {

    render() {
        let { classes } = this.props;

        return <div className={classes.resumePage}>
            <Typography className={classes.title} variant="h5">resume</Typography>
            <Link className={classes.resumeLink} style={{ textDecoration: 'none' }} to="/resume.pdf" target="_blank" download>
                {/* <Typography variant="subtitle1">
                    download full resume
                </Typography>
                <GetAppIcon className={classes.downloadIcon} /> */}
            </Link>
            {/* <div className={classes.content}>
                <div className={classes.education}>
                    <Typography className={classes.heading} variant="body1">
                        Education
                </Typography>
                    <Divider className={classes.divider} />
                    <div className={classes.body}>
                        <Typography className={classes.heading} variant="body2">
                            Univerisity of British Columbia
                </Typography>
                        <Typography className={classes.date} variant="body2">
                            2015 - 2019
                </Typography>
                    </div>
                </div>
                <div className={classes.skills}>
                    <Typography className={classes.heading} variant="body1" >
                        Technical Skills
                </Typography>
                    <Divider className={classes.divider} />
                    <div className={classes.body}>
                        <Typography className={classes.skillsText} variant="caption">
                            Java, JavaScript, Python, C++, Node.js, Database Design and SQL, AWS development tools, HTML, CSS, React.JS,
                            Google Analytics, Photoshop, Figma, InVision, Confluence
                </Typography>
                    </div>

                </div>
                <div className={classes.experience}>
                    <Typography className={classes.heading}>
                        Experience
                </Typography>
                    <Divider className={classes.divider} />
                    <div className={classes.body}>
                        <Typography className={classes.heading} variant="body2">
                            Front-end Developer, Clotech
                        </Typography>
                        <Typography className={classes.date} variant="body2">
                            Sept. 2019 - April 2020
                        </Typography>
                    </div>

                    <ul className={classes.list}>
                        <li>
                            <Typography variant="caption">
                                Developed dynamic single-page web applications with React.JS
                                </Typography>
                        </li>
                        <li>
                            <Typography variant="caption">
                                Implemented secure login and authentication flows using Amazon Web Services
                                </Typography>
                        </li>
                        <li>
                            <Typography variant="caption">
                                Integrated with external APIs for order processing
                                </Typography>
                        </li>
                        <li>
                            <Typography variant="caption">
                                Designed a relational database schema using MySql to store front-end assets and user data
                                </Typography>
                        </li>
                        <li>
                            <Typography variant="caption">
                                Used AWS Lambda to define functions for securely reading, writing, and updating user data
                                </Typography>
                        </li>


                    </ul>
                    <div className={classes.body}>
                        <Typography className={classes.heading} variant="body2">
                            Intern, Global Champions Equestrian Jumping Tour and League
                </Typography>
                        <Typography className={classes.date} variant="body2">
                            May 2018 - Aug. 2018
                </Typography>
                    </div>
                    <ul className={classes.list}>
                        <li>
                            <Typography variant="caption">
                            Collaborated with a video delivery consulting firm on developing the company’s digital strategy
                                </Typography>
                        </li>
                        <li>
                            <Typography variant="caption">
                            Created Google Analytics reports to effectively evaluate website traffic and user behaviour 
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="caption">
                            Conducted market research on the current digital landscape of various sport organizations
                            </Typography>
                        </li>
                    </ul>
                    <div className={classes.body}>
                        <Typography className={classes.heading} variant="body2">
                            Website Development Intern, Treetrunk Group
                </Typography>
                        <Typography className={classes.date} variant="body2">
                            July 2017 - Aug. 2017
                </Typography>
                    </div>
                    <ul className={classes.list}>
                        <li>
                            <Typography variant="caption">
                            Collaborated with a small team of three on the website of a startup marketing company using Python and Django web framework
                                </Typography>
                        </li>
                        <li>
                            <Typography variant="caption">
                            Contributed to high-level design decisions to improve website's functionality and user experience
                            </Typography>
                        </li>
                    </ul>
                </div>
            </div> */}
            {/* <Character /> */}
        </div>
    }
}

export default withStyles(styles)(ResumePage);
