import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import videoSign from 'Assets/video-sign.png';
import bulletBlue from 'Assets/bullet-blue.png';


const styles = theme => {
    return {
        projectsPage: {
            height: '100%',
            width: '100%',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            position: 'relative',
            minHeight: '100%',
        },
        title: {
            // zIndex: 10, 
            // marginTop: theme.spacing(14), 
            zIndex: 10,
            marginTop: '14vh',
            animation: '$fadein 3s',
            animationDelay: '1s',
            opacity: 0,
            animationFillMode: 'both',
            [theme.breakpoints.down("sm")]: {
                marginTop: '5vh',
            },
            [theme.breakpoints.between("sm", 'md')]: {
                marginTop: '10vh',
            },
            [theme.breakpoints.up('md')]: {
                marginTop: '14vh'
            },
        },
        grid: {
            display: 'grid',
            gridTemplateRows: 'max-content max-content',
            gridTemplateColumns: '35vw 50vw',
            // gridTemplateColumns: 'max-content, 1fr',
            height: '100%',
            position: 'absolute',
            minWidth: '250px',
            maxHeight: '27vh',
            justifyItems: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            margin: 'auto',
            [theme.breakpoints.down("xs")]: {
                // paddingTop: 0,
                // maxHeight: '62vh',
                maxWidth: '74vw',
                // marginTop: '17vh',
                // paddingRight: theme.spacing(1),
                // paddingLeft: theme.spacing(1),
                gridTemplateColumns: '1fr',
                // gridTemplateRows: '2fr 1fr 1fr',
                gridTemplateRows: 'max-content max-content max-content',
                bottom: '41vh'
            },
            [theme.breakpoints.up('sm')]: {
                maxWidth: '55vw'
            },
            [theme.breakpoints.between('sm', 'lg')]: {
                maxWidth: '55vw', 
                gridTemplateColumns: '24vw 50vw',
                bottom: '16vh'

            },

        },
        sign: {
            gridRowStart: 1,
            gridRowEnd: 3,
            gridColumn: 1,
            width: '40vw',
            height: 'auto',
            // maxWidth: '500px',
            minWidth: '200px',
            alignSelf: 'start',
            marginRight: '1vw',
            [theme.breakpoints.down("sm")]: {
                gridRow: 1,
                width: '80vw', 
                marginRight: 0
            },
            [theme.breakpoints.between('sm', 'lg')]: {
                gridRow: 1,
                gridColumnStart: 1, 
                gridColumnEnd: 3, 
                marginRight: 0, 
                width: '80vmin'
            },
        },
        projectTitleContainer: {
            gridRow: 1,
            gridColumn: 2,
            justifySelf: 'start',
            alignSelf: 'end',
            [theme.breakpoints.down("sm")]: {
                gridRow: 2,
                gridColumn: 1,
                marginLeft: '2vw'
            },
            [theme.breakpoints.up("sm")]: {
                marginTop: theme.spacing(1) / 2
            },
            [theme.breakpoints.between('sm', 'lg')]: {
                gridRow: 2,
                gridColumn: 1
            },
        },
        projectTitle: {
            fontSize: 'calc(40px + 1.5vmin) !important',
            textAlign: 'start',
            lineHeight: '1.2',
        },
        projectDescription: {
            gridRow: 2,
            gridColumn: 2,
            textAlign: 'start',
            width: '35vw',
            justifySelf: 'start',
            paddingTop: 0,
            [theme.breakpoints.down("sm")]: {
                paddingTop: theme.spacing(3),
                gridColumn: 1,
                gridRow: 3,
                width: '72vw',
                marginLeft: '2vw',
                fontSize: 'calc(5px + 50%) !important',
            },
            [theme.breakpoints.between('sm', 'lg')]: {
                gridRow: 2,
                gridColumn: 2,
                width: '40vw'
            },

        },
        leaves: {
            zIndex: '100',
            position: 'absolute',
            top: 0,
            maxWidth: '50px',
            height: 'auto',
            minWidth: '30px',
            [theme.breakpoints.down("sm")]: {
                width: 'calc(20px + 1.5vmax)'
            },
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
        "@keyframes fadein": {
            "from": { opacity: 0 },
            "to": { opacity: 1 }
        },
        "@keyframes leaf1Entrance": {
            "0%": {
                top: '-83%',
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
                top: '-3%',
            },
        },
    };
};


class ProjectsPage extends Component {

    render() {
        let { classes } = this.props;

        return <div className={classes.projectsPage}>
            <Typography className={classes.title} variant="h6">projects</Typography>
            <div className={classes.grid}>
                <img className={classes.sign} src={videoSign} width={'450px'} height={'300px'} />
                <div className={classes.projectTitleContainer}>
                    <Typography className={classes.projectTitle} variant="h6">Panda</Typography>
                    <Typography className={classes.projectTitle} variant="h6">Express</Typography>
                </div>
                <Typography className={classes.projectDescription} variant="caption">
                    Play as Regis the panda in his journey to save the other last
                    remaining member of his species in the side-scrolling runner, Panda Express.
                    My personal contributions to the project included character designs,
                    the animation system, cut scenes, user control options, scene transitions, and level design.
                    </Typography>
            </div>
        </div>
    }
}

export default withStyles(styles)(ProjectsPage);
