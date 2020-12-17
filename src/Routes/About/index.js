import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import bubble from 'Assets/bubble.png';
import foxBubble from 'Assets/fox-blowing-bubbles.gif';
import { NUMBALLOONS } from 'Constants/constants';



const styles = theme => {
    return {
        aboutPage: {
            height: '100%',
            width: '100%',
            overflowY: 'hidden',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            position: 'relative',
            minHeight: '100%',
            marginTop: theme.spacing(8)
        },
        bearContainer: {
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column',
            flex: '0 0 auto',
            width: '50vw',
            alignItems: 'stretch',
            bottom: 0,
            right: 0,
            marginRight: '-10%',
            marginBottom: '-16%',
            [theme.breakpoints.down("xs")]: {
                marginLeft: '-75px',
                marginBottom: '-120px',
                width: '320px',
            }
        },
        bear: {
            width: '100%',
            height: 'auto',
            transform: 'scaleX(-1)'
        },
        balloon: {
            position: 'absolute',
            width: '10vw',
            bottom: 0,
            left: '50%',
            display: 'block',
            animationFillMode: 'both',
            animationDuration: '10s',
            zIndex: 100,
            [theme.breakpoints.down("xs")]: {
                minWidth: '60px',
            },
        },
        balloon1: {
            animationName: '$Balloon1',
        },
        balloon2: {
            animationName: '$Balloon2',
        },
        balloon3: {
            animationName: '$Balloon3',
        },
        balloon4: {
            animationName: '$Balloon4',
        },
        "@keyframes Balloon1": {
            "0%": {
                bottom: '0%',
            },
            "20%": {
                transform: 'translateX(10vw)'
            },
            "40%": {
                transform: 'translateX(14vw)'
            },
            "60%": {
                transform: 'translateX(10vw)'
            },
            "100%": {
                bottom: '140vh',
                transform: 'translateX(5vw)'
            },
        },
        "@keyframes Balloon2": {
            "0%": {
                bottom: '0%',
            },
            "20%": {
                transform: 'translateX(8vw)',
            },
            "40%": {
                transform: 'translateX(12vw)',
            },
            "60%": {
                transform: 'translateX(8vw)',
            },
            "100%": {
                bottom: '140vh',
                transform: 'translateX(12vw)',
            },
        },
        "@keyframes Balloon3": {
            "0%": {
                bottom: '0%',
            },
            "20%": {
                transform: 'translateX(6vw)'
            },
            "40%": {
                transform: 'translateX(4vw)'
            },
            "60%": {
                transform: 'translateX(6vw)'
            },
            "100%": {
                bottom: '140vh',
                transform: 'translateX(8vw)'
            },
        },
        "@keyframes Balloon4": {
            "0%": {
                bottom: '0%',
            },
            "20%": {
                transform: 'translateX(8vw)'
            },
            "40%": {
                transform: 'translateX(12vw)'
            },
            "60%": {
                transform: 'translateX(10vw)'
            },
            "100%": {
                bottom: '140vh',
                transform: 'translateX(5vw)'
            }
        }
    }

};



class AboutPage extends Component {


    constructor(props) {
        super(props);
        this.state = {
        }
    }

    renderBalloons = () => {
        let { classes } = this.props;

        return [...Array(NUMBALLOONS)].map((e, i) => {
            let classNum = (i + 1 )% 4;
            let pos = Math.floor(Math.random() * 100) + 1 + '%';
            return <img key={i}
                style = {{left: pos}}
                className={`${classes.balloon} ${classes[`balloon${classNum}`]}`}
                src={bubble} alt='bubble'
                onMouseOver={this.popBubble}
                onAnimationIteration={this.bubbleStart} />
        }
        )
    }

    render() {
        let { classes } = this.props;

        return <div className={classes.aboutPage}>
            <Typography style={{ zIndex: 10 }} variant="h5">about me</Typography>
            <div className={classes.bearContainer}>
                <img className={classes.bear} src={foxBubble} alt='fox' />
            </div>
            {this.renderBalloons()}
        </div>
    }
}

export default withStyles(styles)(AboutPage);
