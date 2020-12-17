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
        bubble: {
            position: 'absolute',
            width: '7vw',
            bottom: 0,
            left: '50%',
            display: 'block',
            // animationIterationCount: 'infinite',
            animationFillMode: 'both',
            animationDuration: '10s',
            zIndex: 15,
            [theme.breakpoints.down("xs")]: {
                minWidth: '60px',
            },
        },
        bubble1: {
            animationName: '$Balloon1',
        },
        bubble2: {
            animationName: '$BubbleUp2',
        },
        bubble3: {
            animationName: '$BubbleUp3',
        },
        bubble4: {
            animationName: '$BubbleUp4',
        },
        bubble5: {
            animationName: '$BubbleUp5',
        },
        bubble6: {
            animationName: '$BubbleUp6',
        },
        "@keyframes Balloon1": {
            "0%": {
                bottom: '0%',
                transform: 'scale(0.4)',
            },
            "20%": {
                transform: 'translateX(10vh)'
            },
            "40%": {
                transform: 'translateX(14vh)'
            },
            "60%": {
                transform: 'translateX(10vh)'
            },
            "100%": {
                bottom: '140vh',
                transform: 'translateX(5vh)'
            },
        },
        "@keyframes BubbleUp2": {
            "0%": {
                bottom: '0%',
            },
            "20%": {
                transform: 'translateX(8vh)',
            },
            "40%": {
                transform: 'translateX(12vh)',
            },
            "60%": {
                transform: 'translateX(8vh)',
            },
            "100%": {
                bottom: '140vh',
                transform: 'translateX(12vh)',
            },
        },
        "@keyframes BubbleUp3": {
            "0%": {
                bottom: '0%',
            },
            "20%": {
                transform: 'translateX(6vh)'
            },
            "40%": {
                transform: 'translateX(4vh)'
            },
            "60%": {
                transform: 'translateX(6vh)'
            },
            "100%": {
                bottom: '140vh',
                transform: 'translateX(8vh)'
            },
        },
        "@keyframes BubbleUp4": {
            "0%": {
                bottom: '0%',
            },
            "20%": {
                transform: 'translateX(8vh)'
            },
            "40%": {
                transform: 'translateX(12vh)'
            },
            "60%": {
                transform: 'translateX(10vh)'
            },
            "100%": {
                bottom: '140vh',
                transform: 'translateX(5vh)'
            },
        },
        "@keyframes BubbleUp5": {
            "0%": {
                bottom: '0%',
            },
            "20%": {
                transform: 'translateX(10vh)'
            },
            "40%": {
                transform: 'translateX(14vh)'
            },
            "60%": {
                transform: 'translateX(10vh)'
            },
            "100%": {
                bottom: '140vh',
                transform: 'translateX(5vh)'
            },
        },
        "@keyframes BubbleUp6": {
            "0%": {
                bottom: '0%',
            },
            "20%": {
                transform: 'translateX(9vh)'
            },
            "40%": {
                transform: 'translateX(12vh)'
            },
            "60%": {
                transform: 'translateX(7vh)'
            },
            "100%": {
                bottom: '140vh',
                transform: 'translateX(12vh)'
            },
        },
    };

};



class AboutPage extends Component {


    constructor(props) {
        super(props);
        this.state = {
        }
    }

    renderBalloons = () => {
        let { classes } = this.props;
    
        return [...Array(NUMBALLOONS)].map((e, i) =>
            <img key={i}
                className={`${classes.bubble} ${classes[`bubble${i + 1}`]}`}
                src={bubble} alt='bubble'
                onMouseOver={this.popBubble}
                onAnimationIteration={this.bubbleStart} />
        )
    }

    render() {
        let { classes } = this.props;

        return <div className={classes.aboutPage}>
            <Typography style={{ zIndex: 10 }} variant="h5">about me</Typography>
            <div className={classes.bearContainer}>
                <img className={classes.bear} src={foxBubble} alt='fox' />
                {this.renderBalloons()}
            </div>
        </div>
    }
}

export default withStyles(styles)(AboutPage);
