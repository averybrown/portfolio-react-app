import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import { Typography, Divider } from '@material-ui/core';
import videoSign from 'Assets/video-sign.png';
import bulletBlue from 'Assets/bullet-blue.png';
import trailer from 'Assets/Panda-Express-Trailer.mp4'


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
            zIndex: 10,
            marginTop: 'calc(10vh - 1.5vmax)',
            [theme.breakpoints.down("xs")]: {
                marginTop: '5vh',
            },
            textAlign: 'center',
            width: '100%',
            // marginRight: '-20%'
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
                gridTemplateColumns: 'fit-content(70%)',
                gridTemplateRows: 'max-content max-content max-content',
                bottom: '42vh !important',
                // right: '0 !important'
            },
            [theme.breakpoints.up('sm')]: {
                maxWidth: '80%',
                gridRowGap: theme.spacing(1)
            },
            [theme.breakpoints.up('md')]: {
                maxWidth: '80%',
                gridRowGap: theme.spacing(3),
                gridTemplateColumns: 'fit-content(70%) fit-content(30%)',
                bottom: '12vh',
                right: '12vw'
            },
            [theme.breakpoints.down('sm')]: {
                bottom: '24vh',
                right: '10%'
            },

        },
        trailer: {
            gridRowStart: 1,
            gridRowEnd: 3,
            gridColumn: 1,
            width: '40vw',
            height: 'auto',
            width: '100%',
            position: 'relative',
            borderRadius: '5px',
            cursor: 'pointer',
            alignSelf: 'start',
            [theme.breakpoints.down("xs")]: {
                gridRow: 1,
                gridColumnEnd: '2 !important',
            },
            [theme.breakpoints.down('sm')]: {
                gridRow: 1,
                gridColumnStart: 1,
                gridColumnEnd: 3,
            },


        },
        projectTitleContainer: {
            gridRow: 1,
            gridColumn: 2,
            justifySelf: 'start',
            alignSelf: 'end',
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
            fontSize: 'calc(54px + 1.5vmin) !important',
            textAlign: 'start',
            lineHeight: '1.1',
            fontWeight: 900,
            [theme.breakpoints.down("xs")]: {
                fontSize: 'calc(40px + 1.5vmin) !important',
            },
        },
        projectDescription: {
            gridRow: 2,
            gridColumn: 2,
            fontFamily: `'Lato', sans-serif`,
            textAlign: 'start',
            // maxWidth: '30vw',
            justifySelf: 'start',
            paddingTop: 0,
            [theme.breakpoints.down("xs")]: {
                paddingTop: theme.spacing(2),
                gridColumn: '1 !important',
                gridRow: '3 !important',
                // maxWidth: '80vmin !important',
                marginLeft: '2vw',
                fontSize: 'calc(4px + 50%) !important',
            },
            [theme.breakpoints.down('sm')]: {
                gridRow: 2,
                gridColumn: 2,
                // maxWidth: '40vw'
            },

        },
        divider: {
            height: '12px',
            backgroundColor: '#f50057'
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


    constructor(props) {
        super(props);
        this.state = {
            paused: false
        };
    }

    componentDidMount = () => {
        this.playVideo();
    };

    componentWillUnmount = () => {
        this.pauseVideo();
    };

    videoClicked = () => {
        this.state.paused ?
            this.playVideo()
            : this.pauseVideo()
    }


    playVideo = () => {
        this.refs.vidRef.play();
        this.setState({ paused: false })
    };

    pauseVideo = () => {
        this.refs.vidRef.pause();
        this.setState({ paused: true })
    };


    render() {
        let { classes } = this.props;

        return <div className={classes.projectsPage}>
            <Typography className={classes.title} variant="h6">projects</Typography>
            <div className={classes.grid}>
                {/* <div className={classes.trailer}> */}
                {/* <img classes={classes.inner} src={videoSign} width={'450px'} height={'300px'} /> */}
                <video onClick={this.videoClicked}
                    ref="vidRef"
                    className={classes.trailer}
                    id="trailer"
                    autoPlay>
                    <source src={trailer} type="video/mp4" />
                    {/* <source src="http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/ogg" /> */}
                </video>
                {/* </div> */}
                <div className={classes.projectTitleContainer}>
                    <Typography className={classes.projectTitle} variant="h6">Panda <br /> Express</Typography>
                    <Divider className={classes.divider} variant="middle" />
                </div>
                <Typography className={`${classes.projectDescription} "projectParagraph"`} variant="caption">
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
