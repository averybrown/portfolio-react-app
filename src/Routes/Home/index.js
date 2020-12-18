import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import bubble from 'Assets/bubble.png';
import foxBubble from 'Assets/fox-blowing-bubbles.gif';
import { BUBBLESTART, BUBBLEDELAY, BUBBLEDURATION, NUMBUBBLES } from 'Constants/constants';
import bubblePopPath from 'Assets/bubblepop.mp3';

const styles = theme => {
    return {
        homePage: {
            height: '100%',
            width: '100%',
            overflowY: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        title: {
            zIndex: 10, 
            marginTop: theme.spacing(15)
        },
        foxbubble: {
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column',
            flex: '0 0 auto',
            width: '50vw',
            alignItems: 'stretch',
            bottom: 0,
            left: 0,
            marginLeft: '-10%',
            marginBottom: '-20%',
            [theme.breakpoints.down("xs")]: {
                marginLeft: '-75px',
                marginBottom: '-120px',
                width: '320px',
            }
        },
        fox: {
            width: '100%',
            height: 'auto'
        },
        bubble: {
            position: 'absolute',
            width: '7vw',
            bottom: '53%',
            left: '67%',
            display: 'block',
            animationIterationCount: 'infinite',
            animationFillMode: 'both',
            animationDuration: BUBBLEDURATION,
            zIndex: 15,
            [theme.breakpoints.down("xs")]: {
                minWidth: '60px',
            },
        },
        bubble1: {
            animationName: '$BubbleUp1',
            animationDelay: `${BUBBLESTART}s`
        },
        bubble2: {
            animationName: '$BubbleUp2',
            animationDelay: `${BUBBLESTART + BUBBLEDELAY}s`
        },
        bubble3: {
            animationName: '$BubbleUp3',
            animationDelay: `${BUBBLESTART + BUBBLEDELAY * 2}s`
        },
        bubble4: {
            animationName: '$BubbleUp4',
            animationDelay: `${BUBBLESTART + BUBBLEDELAY * 3}s`
        },
        bubble5: {
            animationName: '$BubbleUp5',
            animationDelay: `${BUBBLESTART + BUBBLEDELAY * 4}s`
        },
        bubble6: {
            animationName: '$BubbleUp6',
            animationDelay: `${BUBBLESTART + BUBBLEDELAY * 5}s`
        },
        "@keyframes BubbleUp1": {
            "0%": {
                bottom: '53%',
                opacity: 0,
                transform: 'scale(0.4)',
            },
            "1%": {
                opacity: 100
            },
            "20%": {
                transform: 'translateX(10vw) scale(1.2)'
            },
            "40%": {
                transform: 'translateX(14vw) scale(1.2)'
            },
            "60%": {
                transform: 'translateX(10vw) scale(1.2)'
            },
            "100%": {
                bottom: '145vh',
                transform: 'translateX(5vw) scale(1.2)'
            },
        },
        "@keyframes BubbleUp2": {
            "0%": {
                bottom: '53%',
                opacity: 0,
                transform: 'scale(0.3)',
            },
            "1%": {
                opacity: 100,
            },
            "20%": {
                transform: 'translateX(8vw) scale(1)',
            },
            "40%": {
                transform: 'translateX(12vw) scale(1)',
            },
            "60%": {
                transform: 'translateX(8vw) scale(1)',
            },
            "100%": {
                bottom: '145vh',
                transform: 'translateX(12vw) scale(1)',
            },
        },
        "@keyframes BubbleUp3": {
            "0%": {
                bottom: '53%',
                opacity: 0,
                transform: 'scale(0.2)',
            },
            "1%": {
                opacity: 100
            },
            "20%": {
                transform: 'translateX(6vw) scale(0.8)'
            },
            "40%": {
                transform: 'translateX(4vw) scale(0.8)'
            },
            "60%": {
                transform: 'translateX(6vw) scale(0.8)'
            },
            "100%": {
                bottom: '145vh',
                transform: 'translateX(8vw) scale(0.8)'
            },
        },
        "@keyframes BubbleUp4": {
            "0%": {
                bottom: '53%',
                opacity: 0,
                transform: 'scale(0.4)'
            },
            "1%": {
                opacity: 100
            },
            "20%": {
                transform: 'translateX(8vw) scale(0.7)'
            },
            "40%": {
                transform: 'translateX(12vw) scale(0.7)'
            },
            "60%": {
                transform: 'translateX(10vw) scale(0.7)'
            },
            "100%": {
                bottom: '145vh',
                transform: 'translateX(5vw) scale(0.7)'
            },
        },
        "@keyframes BubbleUp5": {
            "0%": {
                bottom: '53%',
                opacity: 0,
                transform: 'scale(0.4)',
            },
            "1%": {
                opacity: 100,
            },
            "20%": {
                transform: 'translateX(10vw) scale(1.2)'
            },
            "40%": {
                transform: 'translateX(14vw) scale(1.2)'
            },
            "60%": {
                transform: 'translateX(10vw) scale(1.2)'
            },
            "100%": {
                bottom: '145vh',
                transform: 'translateX(5vw) scale(1.2)'
            },
        },
        "@keyframes BubbleUp6": {
            "0%": {
                bottom: '53%',
                opacity: 0,
                transform: 'scale(0.3)',
            },
            "1%": {
                opacity: 100
            },
            "20%": {
                transform: 'translateX(9vw) scale(1)'
            },
            "40%": {
                transform: 'translateX(12vw) scale(1)'
            },
            "60%": {
                transform: 'translateX(7vw) scale(1)'
            },
            "100%": {
                bottom: '145vh',
                transform: 'translateX(12vw) scale(1)'
            },
        },
    };
};

const foxstates = {
    ENTER: 'enter',
    BUBBLES: foxBubble,
}


class HomePage extends Component {


    constructor(props) {
        super(props);
        this.state = {
            foxState: foxstates.BUBBLES,
            bubblesPopped: Array(NUMBUBBLES).fill(0)
        }
        this.popSound = new Audio(bubblePopPath);

        // if (window.performance && window.performance.getEntriesByType('navigation').length) {
        // if (window.performance.getEntriesByType('navigation')[0].type === 1) {
        //     let foxSrc = `${foxstates.foxState}+?a=${Math.random()}`
        // img.src = img.src.replace(/\?.*$/,"")+"?x="+Math.random();

        //     this.setState({ foxState: foxSrc })
        // }
        // }	
    }

    // updateFoxState = () => {
    //     let { foxState } = this.state;
    //     if (foxState === foxstates.ENTER) {
    //         this.setState({ foxState: foxstates.BUBBLES });
    //     }
    // };

    popBubble = (e) => {
        e.target.style.visibility = 'hidden';

        const playPromise = this.popSound.play();
        // const playPromise = document.getElementById("audio").play();

        if (playPromise !== undefined) {
            playPromise
                .then(_ => {
                    console.log("audio played auto");
                })
                .catch(error => {
                    console.log("playback prevented: ", error);
                });
        }
    }

    bubbleStart = (e) => {
        e.target.style.visibility = 'visible';
    }

    // componentDidMount() {
    //     setInterval(this.updateFoxState, 12800);
    //   }


    renderBubbles = () => {
        let { classes } = this.props;

        return [...Array(NUMBUBBLES)].map((e, i) =>
            <img key={i}
                className={`${classes.bubble} ${classes[`bubble${i + 1}`]}`}
                src={bubble} alt='bubble'
                onMouseOver={this.popBubble}
                onAnimationIteration={this.bubbleStart} />
        )
    }


    render() {
        let { foxState } = this.state;
        let { classes } = this.props;

        return foxState ? <div className={classes.homePage}>
            <Typography className="name" variant="h6">avery brown</Typography>
            <div className={`${classes.foxbubble} character`}>
                <img className={classes.fox} src={foxState} alt='fox' />
                {foxState === foxstates.BUBBLES ? this.renderBubbles() : null}
            </div>
        </div> : null
    }
}

export default withStyles(styles)(HomePage);
