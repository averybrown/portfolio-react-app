import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import bubble from 'Assets/bubble.png';
import { BUBBLESTART, BUBBLEDELAY, BUBBLEDURATION, NUMBUBBLES } from 'Constants/constants';
import bubblePopPath from 'Assets/bubblepop.mp3';
import { CharacterContext } from 'Contexts/CharacterContext';



const styles = theme => {
    return {
        characterContainer: {
            // visibility: 'hidden',
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column',
            flex: '0 0 auto',
            width: '50vw',
            alignItems: 'stretch',
        },
        character: {
            width: '100%',
            height: 'auto',
        },
        fox: {
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
        bear: {
            bottom: 0,
            right: 0,
            marginRight: '-10%',
            marginBottom: '-17.8%',
            [theme.breakpoints.down("xs")]: {
                marginRight: '-75px',
                marginBottom: '-90px',
                width: '320px',
            },
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


class Character extends Component {
    static contextType = CharacterContext;


    constructor(props) {
        super(props);
        this.state = {
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

    pop = (e) => {
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
                onMouseOver={this.pop}
                onAnimationIteration={this.bubbleStart} />
        )
    }


    render() {
        let { classes } = this.props;
        let doesCharacterEnter = this.context.doesCharacterEnter();
        let showBubbles = this.context.checkBubbles();
        let characterStates = this.context.getCharacterStates()
        let animation = characterStates !== undefined ? characterStates[1].animation : undefined;
        let characterType = this.context.getCharacterType();
        // let flipCharacter = characterType !== this.context.startingCharacter


        return <div className={doesCharacterEnter ?
                `${classes.characterContainer} characterEntrance ${classes[characterType]}`
                : `${classes.characterContainer} ${classes[characterType]}`}>
            <img 
            // style={flipCharacter ? {transform: 'scaleX(-1)'} : {transform: 'scaleX(1)'}} 
            className={classes.character} src={animation} alt='character' />
            {showBubbles ? this.renderBubbles() : null}
        </div>
    }
}

export default withStyles(styles)(Character);
