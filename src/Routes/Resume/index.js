import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import Divider from '@material-ui/core/Divider';
import sign from 'Assets/sign.png';
import vine from 'Assets/vine.png';
import neonLeafPink from 'Assets/neon-leaf.png'
import neonLeafYellow from 'Assets/neon-leaf-yellow.png'
import neonLeafBlue from 'Assets/neon-leaf-blue.png'


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
            gridTemplateColumns: '150px 150px 150px',
            gridTemplateRows: '1fr 3fr',
            alignContent: 'center',
            justifyItems: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            gridGap: '3%',
        },
        resumeLink: {
            cursor: 'pointer',
            zIndex: 100,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            '&:hover': {
                cursor: 'pointer',
            },
        },
        heading: {
            textAlign: 'start',
            fontWeight: 400,
            animation: '$fadein 2s',
            animationDelay: '8s',
            opacity: 0, 
            animationFillMode: 'both',
            transition: 'all .2s ease-in-out',
            position: 'relative',
            '&:hover': {
                transform: 'scale(1.1)',
            },
            '&:hover:after': {
                width: '100%',
                left: 0
            },
            '&:after': {
                background: 'none repeat scroll 0 0 transparent',
                bottom: '-20%',
                content: "' '",
                display: 'block',
                height: '2px',
                left: '60%',
                position: 'absolute',
                background: '#ddd',
                transition: 'width 0.3s ease 0s, left 0.3s ease 0s',
                width: 0
            },
        },
        body: {
            display: 'flex',
            justifyContent: 'space-between'
        },
        date: {
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
            gridRow: 1,
            gridColumn: 2
        },
        skills: {
            gridRow: 1,
            gridColumn: 3
        },
        skillsText: {
            textAlign: 'start'
        },
        signContainer: {
            position: 'absolute',
            right: '4%',
            zIndex: 5,
            animationName: '$signEntrance',
            animationDelay: '5s',
            animationFillMode: 'both',
            animationDuration: '5000ms',
            '&:hover': {
                cursor: 'pointer',
            },
            width: '18%',
            height: 'auto',
            [theme.breakpoints.down("sm")]: {
                width: '35%',
                minWidth: '200px'
            },
        },
        leaves: {
            position: 'absolute', 
            '&:hover': {
                // color: #fdec6e;
                // text-shadow:0px 0px 30px #fdec6e;
                // transition: 'all 0.2s ease-in',
            },
        },
        leaf1: {
            animationDelay: '1s',
            animationName: '$leaf1Entrance',
            animationFillMode: 'both',
            animationDuration: '5000ms',
        },
        leaf2: {
            animationDelay: '3s',
            animationName: '$leaf2Entrance',
            animationFillMode: 'both',
            animationDuration: '5000ms',
        }, 
        leaf3: {
            animationDelay: '2s',
            animationName: '$leaf3Entrance',
            animationFillMode: 'both',
            animationDuration: '5000ms',
        },
        sign: {
            '&:hover': {
                cursor: 'pointer',
                transform: 'scale(1.05)',
                transform: 'rotate(5deg)',
                transformOrigin: '50% 150%'
            },
            width: '100%',
            height: 'auto'
        },
        "@keyframes fadein": {
            "from": { opacity: 0 },
            "to":   { opacity: 1 }
        }, 
        "@keyframes signEntrance": {
            "0%": {
                bottom: '-50%',
            },
            "100%": {
                bottom: '-10px',
            },
        },
        "@keyframes leaf1Entrance": {
            "0%": {
                top: '-100px',
                transform: 'scale(-1, -1)', 
            },
            "20%": {
                transform: 'scale(-1, -1) translateX(4vw) rotate(5deg)'
            },
            "40%": {
                transform: 'scale(-1, -1) translateX(-3vw) rotate(-7deg)'
            },
            "60%": {
                transform: 'scale(-1, -1) translateX(2vw) rotate(7deg)'
            },
            "100%": {
                transform: 'translateX(-2vw) scale(-1, -1) rotate(-5deg)', 
                top: '26%',
            },
        },
        "@keyframes leaf2Entrance": {
            "0%": {
                top: '-100px',
            },
            "20%": {
                transform: 'translateX(-2vw) rotate(-5deg)'
            },
            "40%": {
                transform: 'translateX(-5vw) rotate(8deg)'
            },
            "60%": {
                transform: 'translateX(2vw) rotate(-5deg)'
            },
            "100%": {
                top: '26%',
                transform: 'translateX(-2vw)'
            },
        },
        "@keyframes leaf3Entrance": {
            "0%": {
                top: '-100px',
            },
            "20%": {
                transform: 'scaleY(-1) translateX(-6vw) rotate(-5deg)'
            },
            "40%": {
                transform: 'scaleY(-1) translateX(2vw) rotate(8deg)',
            },
            "60%": {
                transform: 'scaleY(-1) translateX(-5vw) rotate(-5deg)'
            },
            "100%": {
                top: '26%',
                transform: 'scaleY(-1) translateX(-2vw)', 
            },
        },
    };
};


class ResumePage extends Component {

    render() {
        let { classes } = this.props;

        return <div className={classes.resumePage}>
            <Typography className={classes.title} variant="h5">resume</Typography>
            <div className={classes.signContainer}>
                <Link className={classes.resumeLink} style={{ textDecoration: 'none' }} to="/resume.pdf" target="_blank" download>
                    <img className={classes.sign} src={sign} width='300px' height='300px' alt='sign' />
                </Link>
            </div>
            {/* <div className={classes.vineContainer}>
                <img className={classes.vine1} src={vine} width='200px' height='600px' alt='sign' />
                <img className={classes.vine2} src={vine} width='200px' height='600px' alt='sign' />
            </div> */}

            <div className={classes.content}>
                <div className={classes.education}>
                    <img className={`${classes.leaf1} ${classes.leaves}`} src={neonLeafYellow} width='50px' height='50px' alt='sign' />
                    <Typography className={classes.heading} variant="body1">
                        education
                </Typography>
                    {/* <Divider className={classes.divider} /> */}
                    {/* <div className={classes.body}>
                        <Typography className={classes.heading} variant="body2">
                            Univerisity of British Columbia
                </Typography>
                        <Typography className={classes.date} variant="body2">
                            2015 - 2019
                </Typography>
                    </div> */}
                </div>
                <div className={classes.skills}>
                    <img className={`${classes.leaf3} ${classes.leaves}`} src={neonLeafBlue} width='50px' height='50px' alt='sign' />
                    <Typography className={classes.heading} variant="body1" >
                        technical skills
                </Typography>
                    {/* <Divider className={classes.divider} /> */}
                    {/* <div className={classes.body}>
                        <Typography className={classes.skillsText} variant="caption">
                            Java, JavaScript, Python, C++, Node.js, Database Design and SQL, AWS development tools, HTML, CSS, React.JS,
                            Google Analytics, Photoshop, Figma, InVision, Confluence
                </Typography> */}
                </div>
                <div className={classes.experience}>
                    <img className={`${classes.leaf2} ${classes.leaves}`} src={neonLeafPink} width='50px' height='50px' alt='sign' />
                    <Typography className={classes.heading}>
                        experience
                </Typography>
                    {/* <Divider className={classes.divider} /> */}
                </div>
            </div>
        </div>

        /* <div className={classes.body}>
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
            </ul> */

    }
}

export default withStyles(styles)(ResumePage);
