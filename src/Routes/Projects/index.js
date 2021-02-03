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
            gridTemplateColumns: 'fit-content(20%) fit-content(50%)',
            height: '100%',
            position: 'absolute',
            maxHeight: '27vh',
            justifyItems: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            margin: 'auto',
            gridColumnGap: theme.spacing(3),
            [theme.breakpoints.down("xs")]: {
                gridTemplateColumns: 'fit-content(80%)',
                gridTemplateRows: 'max-content max-content max-content',
                bottom: '42vh !important'
            },
            [theme.breakpoints.up('sm')]: {
                maxWidth: '80%', 
                gridRowGap: theme.spacing(1)
            },
            [theme.breakpoints.up('md')]: {
                maxWidth: '80%', 
                gridRowGap: theme.spacing(1), 
                gridTemplateColumns: 'repeat(2, fit-content(30%))',
                bottom: '12vh', 
                right: '12vw'
            },
            [theme.breakpoints.down('sm')]: {
                bottom: '32vh'
            },

        },
        sign: {
            gridRowStart: 1,
            gridRowEnd: 3,
            gridColumn: 1,
            width: '40vw',
            height: 'auto',
            width: '100%',
            // maxWidth: '500px',
            minWidth: '200px',
            alignSelf: 'start',
            marginLeft: 0,
            [theme.breakpoints.down("xs")]: {
                gridRow: 1,
                gridColumnEnd: '2 !important',
                width: '120%', 
            },
            [theme.breakpoints.down('sm')]: {
                gridRow: 1,
                gridColumnStart: 1, 
                gridColumnEnd: 3, 
            },
            [theme.breakpoints.up('md')]: {
                marginLeft: '0 !important'
            },
            [theme.breakpoints.up('sm')]: {
                minWidth: '56vh', 
                marginLeft: '-82px'
            },
        },
        projectTitleContainer: {
            gridRow: 1,
            gridColumn: 2,
            justifySelf: 'start',
            alignSelf: 'start',
            [theme.breakpoints.down("xs")]: {
                gridRow: '2 !important',
                gridColumn: 1,
                marginLeft: '2vw'
            },
            [theme.breakpoints.up("xs")]: {
                marginTop: theme.spacing(1) / 2
            },
            [theme.breakpoints.down('sm')]: {
                gridRow: 2,
                gridColumn: 1
            },
        },
        projectTitle: {
            fontSize: 'calc(40px + 1.5vmin) !important',
            textAlign: 'start',
            lineHeight: '1.1',
        },
        projectDescription: {
            gridRow: 2,
            gridColumn: 2,
            textAlign: 'start',
            // maxWidth: '30vw',
            justifySelf: 'start',
            paddingTop: 0,
            [theme.breakpoints.down("xs")]: {
                paddingTop: theme.spacing(3),
                gridColumn: '1 !important',
                gridRow: '3 !important',
                // maxWidth: '80vmin !important',
                marginLeft: '2vw',
                fontSize: 'calc(5px + 50%) !important',
            },
            [theme.breakpoints.down('sm')]: {
                gridRow: 2,
                gridColumn: 2,
                // maxWidth: '40vw'
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
