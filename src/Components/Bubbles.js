import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import bubble from 'Assets/bubble.png';
import { BUBBLESTART, BUBBLEDELAY, BUBBLEDURATION, NUMBUBBLES } from 'Constants/constants';



const styles = theme => {
    return {
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
            animationName: '$bubbleUp1',
            animationDelay: `${BUBBLESTART}s`
        },
        bubble2: {
            animationName: '$bubbleUp2',
            animationDelay: `${BUBBLESTART + BUBBLEDELAY}s`
        },
        bubble3: {
            animationName: '$bubbleUp3',
            animationDelay: `${BUBBLESTART + BUBBLEDELAY * 2}s`
        },
        bubble4: {
            animationName: '$bubbleUp4',
            animationDelay: `${BUBBLESTART + BUBBLEDELAY * 3}s`
        },
        bubble5: {
            animationName: '$bubbleUp5',
            animationDelay: `${BUBBLESTART + BUBBLEDELAY * 4}s`
        },
        bubble6: {
            animationName: '$bubbleUp6',
            animationDelay: `${BUBBLESTART + BUBBLEDELAY * 5}s`
        },
        "@keyframes bubbleUp1": {
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
            "99%": {
                bottom: '145vh',
                transform: 'translateX(5vw) scale(0.4)',
            },
            "100%": {
                bottom: '145vh',
                transform: 'scale(0.4)'
            },
        },
        "@keyframes bubbleUp2": {
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
            "99%": {
                transform: 'translateX(12vw) scale(0.3)',
            },
            "100%": {
                bottom: '145vh',
                transform: 'scale(0.3)',
            },
        },
        "@keyframes bubbleUp3": {
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
            "99%": {
                bottom: '145vh',
                transform: 'translateX(8vw) scale(0.2)',
            },
            "100%": {
                bottom: '145vh',
                transform: 'scale(0.2)'
            },
        },
        "@keyframes bubbleUp4": {
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
            "99%": {
                bottom: '145vh',
                transform: 'translateX(8vw) scale(0.4)',
            },
            "100%": {
                bottom: '145vh',
                transform: 'scale(0.4)'
            },
        },
        "@keyframes bubbleUp5": {
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
            "99%": {
                bottom: '145vh',
                transform: 'translateX(8vw) scale(0.4)',
            },
            "100%": {
                bottom: '145vh',
                transform: 'scale(0.4)'
            },
        },
        "@keyframes bubbleUp6": {
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
            "99%": {
                bottom: '145vh',
                transform: 'translateX(12vw) scale(0.3)',
            },
            "100%": {
                bottom: '145vh',
                transform: 'scale(0.3)'
            },
        },
    };
};


class Bubbles extends Component {

    pop = (e) => {
        e.target.style.visibility = 'hidden';

        // if (this.props.soundContext.soundOn) {
        //     const playPromise = document.getElementById("bubble-pop").play();

        //     if (playPromise !== undefined) {
        //         playPromise
        //             .then(_ => {
        //                 console.log("audio played auto");
        //             })
        //             .catch(error => {
        //                 console.log("playback prevented: ", error);
        //             });
        //     }
        // }
    }

    bubbleStart = (e) => {
        e.target.style.visibility = 'visible';
    }

    render() {
        let { classes } = this.props;

        return [...Array(NUMBUBBLES)].map((e, i) =>
            <img key={i}
                className={`${classes.bubble} ${classes[`bubble${i + 1}`]}`}
                src={bubble} alt='bubble'
                onMouseOver={this.pop}
                onAnimationIteration={this.bubbleStart} />
        )
    }
}

export default withStyles(styles)(Bubbles);
