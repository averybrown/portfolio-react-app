import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import sign from 'Assets/sign.png';
import neonLeafPink from 'Assets/neon-leaf.png'
import neonLeafYellow from 'Assets/neon-leaf-yellow.png'
import neonLeafBlue from 'Assets/neon-leaf-blue.png'
import Sign from 'Components/ResumeSign'


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
            gridTemplateColumns: '175px 175px 175px',
            gridTemplateRows: '1fr 3fr auto',
            alignContent: 'center',
            justifyItems: 'center',
            alignItems: 'center',
            justifyContent: 'center',
        },
        resumeLink: {
            cursor: 'pointer',
            pointerEvents: 'auto',
            zIndex: 1000,
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
            // '&:hover ~ $leaf1': {
            //     transition: 'all 0.2s ease-in',
            //     filter: 'drop-shadow(0 0 0.4rem rgb(255, 187, 17))'
            // },
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
            fontSize: 'calc(4px + 1.5vmin) !important',
            alignSelf: 'start'
        },
        education: {
            gridRow: 1,
            gridColumn: 1,

            // '&:hover': {
            //     transition: 'all 0.2s ease-in',
            //     filter: 'drop-shadow(0 0 0.4rem rgb(255, 187, 17))'
            // },
        },
        body: {
            display: 'flex'
        },
        info: {
            marginRight: theme.spacing(5),
        },
        centeredParagraph: {
            marginTop: theme.spacing(3),
            gridRow: 2,
            gridColumn: 1,
            gridColumnStart: 1,
            gridColumnEnd: '4',
            justifySelf: 'center',
            alignSelf: 'start'
        },
        experience: {
            gridRow: 1,
            gridColumn: 2,
            // '&:hover': {
            //     transition: 'all 0.2s ease-in',
            //     filter: 'drop-shadow(0 0 0.4rem rgb(2, 208, 194))'
            // },
        },
        job: {
            alignSelf: 'start'
        },
        // explist1: {
        //     gridRow: 3,
        //     gridColumn: 1,
        // },
        // explist2: {
        //     gridRow: 3,
        //     gridColumn: 2,
        // },
        // explist3: {
        //     gridRow: 3,
        //     gridColumn: 3,
        // },
        job1: {
            gridRow: 2,
            gridColumn: 1,
        },
        job2: {
            gridRow: 2,
            gridColumn: 2,
        },
        job3: {
            gridRow: 2,
            gridColumn: 3,
        },
        skills: {
            gridRow: 1,
            gridColumn: 3,
            // '&:hover': {
            //     transition: 'all 0.2s ease-in',
            //     filter: 'drop-shadow(0 0 0.4rem rgb(2, 208, 194))'
            // },
        },
        skillsText: {
            textAlign: 'start'
        },
        leaves: {
            position: 'absolute',
        },
        leaf1: {
            animationDelay: '1s',
            animationName: '$leaf1Entrance',
            animationFillMode: 'both',
            animationDuration: '5000ms',
            transition: 'all 0.2s ease-in',
            filter: 'drop-shadow(0 0 0.1rem rgb(255, 187, 17))',
            '&:hover': {
                transition: 'all 0.2s ease-in',
                filter: 'drop-shadow(0 0 0.5rem rgb(255, 187, 17))'
            },
        },
        leaf2: {
            animationDelay: '3s',
            animationName: '$leaf2Entrance',
            animationFillMode: 'both',
            animationDuration: '5000ms',
            transition: 'all 0.2s ease-in',
            filter: 'drop-shadow(0 0 0.1rem rgb(216, 88, 168))',
            '&:hover': {
                transition: 'all 0.2s ease-in',
                filter: 'drop-shadow(0 0 0.5rem rgb(216, 88, 168))'
            },
        },
        leaf3: {
            animationDelay: '2s',
            animationName: '$leaf3Entrance',
            animationFillMode: 'both',
            animationDuration: '5000ms',
            transition: 'all 0.2s ease-in',
            filter: 'drop-shadow(0 0 0.1rem rgb(2, 208, 194))',
            '&:hover': {
                transition: 'all 0.2s ease-in',
                filter: 'drop-shadow(0 0 0.5rem rgb(2, 208, 194))'
            },
        },
        "@keyframes fadein": {
            "from": { opacity: 0 },
            "to": { opacity: 1 }
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
            <Sign/>
            <div className={classes.content}>
                <div className={classes.education}>
                    <img className={`${classes.leaf1} ${classes.leaves}`}
                        src={neonLeafYellow}
                        width='50px'
                        height='50px'
                        alt='leaf1' />
                    <Typography className={classes.heading} variant="body1">
                        education
                </Typography>
                </div>

                {/* <div className={`${classes.centeredParagraph} ${classes.body}`}>
                    <Typography className={classes.info} variant="body2">
                        Univerisity of British Columbia
                </Typography>
                    <Typography className={classes.date} variant="body2">
                        2015 - 2019
                </Typography>
                </div> */}

                <div className={classes.skills}>
                    <img className={`${classes.leaf3} ${classes.leaves}`}
                        src={neonLeafBlue}
                        width='50px'
                        height='50px'
                        alt='leaf' />
                    <Typography className={classes.heading} variant="body1" >
                        technical skills
                </Typography>
                </div>

                {/* <ul className={classes.list}>
                    <li>
                        <Typography variant="subtitle1">
                            Java, JavaScript, Python, C++
                                </Typography>
                    </li>

                    <li>
                        <Typography variant="subtitle1">
                            Photoshop, Figma, Invision
                                </Typography>
                    </li>
                    <li>
                        <Typography variant="subtitle1">
                            Azure DevOps, GitHub
                                </Typography>
                    </li>

                </ul>
                <ul className={classes.list}>
                    <li>
                        <Typography variant="subtitle1">
                            Database Design and SQL
                                </Typography>
                    </li>

                    <li>
                        <Typography variant="subtitle1">
                            Google Analytics
                                </Typography>
                    </li>
                </ul>
                <ul className={classes.list}>
                    <li>
                        <Typography variant="subtitle1">
                            HTML, CSS, React.JS,
                                </Typography>
                    </li>
                    <li>
                        <Typography variant="subtitle1">
                            AWS development tools
                                </Typography>
                    </li>

                    <li>
                        <Typography variant="subtitle1">
                            Confluence
                                </Typography>
                    </li>
                </ul> */}
                <div className={classes.experience}>
                    <img className={`${classes.leaf2} ${classes.leaves}`}
                        src={neonLeafPink}
                        width='50px'
                        height='50px'
                        alt='leaf' />
                    <Typography className={classes.heading}>
                        experience
                </Typography>
                </div>

                {/* <div className={`${classes.job1} ${classes.job}`}>
                    <Typography className={classes.info} variant="caption">
                        Front-end Developer, Clotech
                        </Typography>
                    <Typography className={classes.date} variant="caption">
                        Sept. 2019 - April 2020
                        </Typography>
                </div> */}

                {/* <ul className={`${classes.list} ${classes.explist1}`}>
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


                </ul> */}

                {/* <div className={`${classes.job2} ${classes.job}`}>
                    <Typography className={classes.info} variant="caption">
                        Intern, Global Champions Equestrian Jumping Tour and League
                </Typography>
                    <Typography className={classes.date} variant="caption">
                        May 2018 - Aug. 2018
                </Typography>
                </div> */}

                {/* <ul className={`${classes.list} ${classes.explist2}`}>
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
                </ul> */}

{/* 
                <div className={`${classes.job3} ${classes.job}`}>
                    <Typography className={classes.info} variant="caption">
                        Website Development Intern, Treetrunk Group
                </Typography>
                    <Typography className={classes.date} variant="caption">
                        July 2017 - Aug. 2017
                </Typography>
                </div> */}


                {/* <ul className={`${classes.list} ${classes.explist3}`}>
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
                </ul> */}
            </div>
        </div >



    }
}

export default withStyles(styles)(ResumePage);
