import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import neonLeafPink from 'Assets/neon-leaf.png'
import neonLeafYellow from 'Assets/neon-leaf-yellow.png'
import neonLeafBlue from 'Assets/neon-leaf-blue.png'
import Sign from 'Components/ResumeSign';
import bulletBlue from 'Assets/bullet-blue.png';
import bulletPink from 'Assets/bullet-pink.png';
import bulletYellow from 'Assets/bullet-yellow.png';


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
            gridTemplateColumns: '230px 230px 230px',
            gridTemplateRows: 'auto 3fr auto',
            alignContent: 'center',
            justifyItems: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: theme.spacing(4),
            [theme.breakpoints.down("xs")]: {
                gridTemplateColumns: '1fr',
            },
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
                transition: 'all .2s ease-in-out',
            },
            '$education &:hover ~ $leaf1': {
                transition: 'all 0.2s ease-in',
                filter: 'drop-shadow(0 0 0.4rem rgb(255, 187, 17))'
            },
            '$skills &:hover ~ $leaf3': {
                transition: 'all 0.2s ease-in',
                filter: 'drop-shadow(0 0 0.4rem rgb(2, 208, 194))'
            },
            '$experience &:hover ~ $leaf2': {
                transition: 'all 0.2s ease-in',
                filter: 'drop-shadow(0 0 0.4rem rgb(216, 88, 168))'
            },
            // '$&:hover $educationInfo': {
            //     transition: 'all 0.2s ease-in',
            //     opacity: 1
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
            alignSelf: 'start',
            marginTop: theme.spacing(7),
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(1)
        },
        education: {
            gridRow: 1,
            gridColumn: 1,
            paddingTop: '30px',
            justifySelf: 'end',
            marginRight: theme.spacing(1),
            transition: 'all 0.5s ease-in',
            '&:hover ~ $educationInfo': {
                transition: 'all 0.5s ease-in',
                opacity: 1
            },
        },
        info: {
            marginRight: theme.spacing(1),
        },
        educationInfo: {
            // marginBottom: theme.spacing(40),
            gridRow: 2,
            gridColumn: 1,
            gridColumnStart: 1,
            gridColumnEnd: '4',
            justifySelf: 'center',
            alignSelf: 'start',
            opacity: 0, 
            animationName: '$hidden', 
            animationDuration: '8s', 
            transition: 'all 0.3s ease-in',
        },
        educationList: {
            flexDirection: 'column',

            '&:before': {
                backgroundImage: `url(${bulletYellow})`,
                alignSelf: 'center',
                height: `${theme.spacing(3)}px !important`
            },
            '&:hover:before': {
                filter: 'drop-shadow(0 0 0.4rem rgb(255, 187, 17))'
            },
        },
        experience: {
            gridRow: 1,
            gridColumn: 2,
            paddingTop: '30px',
            transition: 'all 0.5s ease-in',
            '&:hover ~ $experienceInfo': {
                transition: 'all 0.5s ease-in',
                opacity: 1
            },
        },
        experienceInfo: {
            opacity: 0,
            animationName: '$hidden', 
            animationDuration: '10s', 
            transition: 'all 0.3s ease-in',
        },
        experienceList: {
            flexDirection: 'column',
            '&:before': {
                backgroundImage: `url(${bulletPink})`,
                alignSelf: 'center',
                height: `${theme.spacing(3)}px !important`
            },
            '&:hover:before': {
                filter: 'drop-shadow(0 0 0.5rem rgb(216, 88, 168))'
            },
        },
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
        skill1: {
            gridRow: 2, 
            gridColumn: 1
        }, 
        skill2: {
            gridRow: 2, 
            gridColumn: 2
        }, 
        skill3: {
            gridRow: 2, 
            gridColumn: 3
        },
        skills: {
            gridRow: 1,
            gridColumn: 3,
            paddingTop: '30px',
            justifySelf: 'start',
            marginLeft: theme.spacing(1),
            transition: 'all 0.5s ease-in',
            '&:hover ~ $skillsInfo': {
                transition: 'all 0.5s ease-in',
                opacity: 1
            },
        },
        skillsInfo: {
            opacity: 0, 
            animationName: '$hidden', 
            animationDuration: '10s', 
            transition: 'all 0.3s ease-in',
        },
        skillsText: {
            textAlign: 'start',
        },
        listItem: {
            listStyle: 'none',
            display: 'flex',
            marginBottom: theme.spacing(2),
            '&:before': {
                content: '" "',
                display: 'inline-block',
                height: '11px',
                maxWidth: '25px',
                width: '1vw',
                minWidth: '5px',
                padding: theme.spacing(1),
                marginRight: theme.spacing(1),
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                transition: 'all 0.2s ease-in',
            },
            '&:hover:before': {
                transition: 'all 0.2s ease-in',
            },
        },
        skillsList: {
            '&:before': {
                backgroundImage: `url(${bulletBlue})`,
            },
            '&:hover:before': {
                filter: 'drop-shadow(0 0 0.4rem rgb(2, 208, 194))'
            },
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
        break: {
            flexBasis: '100%',
            height: 0
        },
        "@keyframes hidden": {
            "from": { opacity: 0 },
            "to": { opacity: 0 }
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
                top: '29%',
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
            "70%": {
                transform: 'translateX(1vw) rotate(-5deg)'
            },
            "100%": {
                top: '29%',
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
                top: '29%',
                transform: 'scaleY(-1) translateX(-2vw)',
            },
        },
    };
};


class ResumePage extends Component {

    render() {
        let { classes } = this.props;

        return <div className={classes.resumePage}>
            <Typography className={classes.title} variant="h6">resume</Typography>
            <Sign />
            <div className={classes.content}>
                <div className={classes.education}>

                    <Typography className={classes.heading} variant="body1">
                        education
                </Typography>
                    <img className={`${classes.leaf1} ${classes.leaves}`}
                        src={neonLeafYellow}
                        width='50px'
                        height='50px'
                        alt='leaf1' />
                </div>

                <ul className={`${classes.educationInfo} ${classes.list}`}>
                    <li className={`${classes.educationList} ${classes.listItem}`}>
                        <div style={{ display: 'flex' }}>
                            <Typography className={classes.info} variant="body2">
                                Univerisity of British Columbia,
                </Typography>
                            <Typography className={classes.date} variant="body2">
                                2015 - 2019
                </Typography>
                        </div>
                    </li>
                </ul>

                <div className={classes.skills}>
                    <Typography className={classes.heading} variant="body1" >
                        technical skills
                </Typography>
                    <img className={`${classes.leaf3} ${classes.leaves}`}
                        src={neonLeafBlue}
                        width='50px'
                        height='50px'
                        alt='leaf' />
                </div>

                <ul className={`${classes.list} ${classes.skillsInfo} ${classes.skill1}`}>
                    <li className={`${classes.listItem} ${classes.skillsList}`}>
                        <Typography variant="subtitle1">
                            Java, JavaScript, Python, C++
                                </Typography>
                    </li>


                    <li className={`${classes.listItem} ${classes.skillsList}`}>
                        <Typography variant="subtitle1">
                            Azure DevOps, GitHub
                                </Typography>
                    </li>
                    <li className={`${classes.listItem} ${classes.skillsList}`}>
                        <Typography variant="subtitle1">
                            HTML, CSS, React.JS
                                </Typography>
                    </li>

                </ul>
                <ul className={`${classes.list} ${classes.skillsInfo} ${classes.skill2}`}>
                    <li className={`${classes.listItem} ${classes.skillsList}`}>
                        <Typography variant="subtitle1">
                            Database Design and SQL
                                </Typography>
                    </li>

                    <li className={`${classes.listItem} ${classes.skillsList}`}>
                        <Typography variant="subtitle1">
                            Google Analytics
                                </Typography>
                    </li>
                </ul>
                <ul className={`${classes.list} ${classes.skillsInfo} ${classes.skill3}`}>
                    <li className={`${classes.listItem} ${classes.skillsList}`}>
                        <Typography variant="subtitle1">
                            Photoshop, Figma, Invision
                                </Typography>
                    </li>
                    <li className={`${classes.listItem} ${classes.skillsList}`}>
                        <Typography variant="subtitle1">
                            AWS development tools
                                </Typography>
                    </li>

                    <li className={`${classes.listItem} ${classes.skillsList}`}>
                        <Typography variant="subtitle1">
                            Confluence
                                </Typography>
                    </li>
                </ul>


                <div className={classes.experience}>
                    <Typography className={classes.heading}>
                        experience
                </Typography>
                    <img className={`${classes.leaf2} ${classes.leaves}`}
                        src={neonLeafPink}
                        width='50px'
                        height='50px'
                        alt='leaf' />
                </div>
                
                <ul className={`${classes.job1} ${classes.list} ${classes.experienceInfo}`}>
                    <li className={`${classes.listItem} ${classes.experienceList}`}>
                        <div style={{ height: '100px' }}>
                            <Typography className={classes.info} variant="body2">
                                Front-end Developer
                        </Typography>
                            <Typography className={classes.info} style={{ height: '80px' }} variant="caption">
                                Clotech
                        </Typography>
                        </div>
                        <div className={classes.break}></div>
                        <Typography className={classes.date} variant="caption">
                            Sept. 2019 - April 2020
                        </Typography>
                    </li>
                </ul>

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

                <ul className={`${classes.job2} ${classes.list} ${classes.experienceInfo}`}>
                    <li className={`${classes.listItem} ${classes.experienceList}`}>
                        <div style={{ height: '100px' }}>

                            <Typography className={classes.info} variant="body2">
                                Intern
                </Typography>
                            <Typography className={classes.info} variant="caption">
                                Global Champions Equestrian Jumping Tour and League
                </Typography>
                        </div>
                        <div className={classes.break}></div>
                        <Typography className={classes.date} variant="caption">
                            May 2018 - Aug. 2018
                </Typography>
                    </li>
                </ul>

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


                <ul className={`${classes.job3} ${classes.list} ${classes.experienceInfo}`}>
                    <li className={`${classes.listItem} ${classes.experienceList}`}>
                        <div style={{ height: '100px' }}>
                            <Typography className={classes.info} variant="body2">
                                Website Development Intern
                </Typography>
                            <Typography className={classes.info} variant="caption">
                                Treetrunk Group
                </Typography>
                        </div>
                        <div className={classes.break}></div>
                        <Typography className={classes.date} variant="caption">
                            July 2017 - Aug. 2017
                </Typography>
                    </li>
                </ul>


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
