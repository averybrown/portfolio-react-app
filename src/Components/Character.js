import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import bubble from 'Assets/bubble.png';
import { BUBBLESTART, BUBBLEDELAY, BUBBLEDURATION, NUMBUBBLES } from 'Constants/constants';
import { CharacterContext } from 'Contexts/CharacterContext';
import Bubbles from 'Components/Bubbles';


const styles = theme => {
    return {
        characterContainer: {
            position: 'absolute',
            width: '45vw',
            paddingTop: '45%',
            bottom: 0,
            marginBottom: '-18%',
            [theme.breakpoints.down("xs")]: {
                height: '305px',
                paddingTop: 0
            }, 
        },
        character: {
            width: '100%',
            height: 'auto',
            position: 'absolute',
            bottom: 0,
        },
        fox: {
            marginLeft: '-10%',
            [theme.breakpoints.down("xs")]: {
                marginLeft: '-75px',
                marginBottom: '-120px',
                width: '305px',
            }
        },
        bear: {
            right: 0,
            marginRight: '-14%',
            [theme.breakpoints.down("xs")]: {
                marginRight: '-87px',
                marginBottom: '-120px',
                width: '305px',
            },
        },
        foxEntrance: {
            animationName: '$foxEntrance',
            animationFillMode: 'both',
            animationDuration: '3000ms'
        },
        bearEntrance: {
            animationName: '$bearEntrance',
            animationFillMode: 'both',
            animationDuration: '3000ms'
        },
        bubble: {
            position: 'absolute',
            width: '7vw',
            bottom: '-50%',
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
        "@keyframes foxEntrance": {
            "0%": {
                bottom: '-32%',
            },
            "100%": {
                bottom: 0,
            },
        },
        "@keyframes bearEntrance": {
            "0%": {
                bottom: '-38%',
            },
            "100%": {
                bottom: 0,
            },
        },
        "@keyframes BubbleUp1": {
            "0%": {
                bottom: '-50%',
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
                bottom: '-50%',
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
                bottom: '-50%',
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
                bottom: '-50%',
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
                bottom: '-50%',
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
                bottom: '-50%',
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
            imageStatus: "loading",
            currentGif: undefined
        };
    }

    pop = (e) => {
        e.target.style.visibility = 'hidden';

        if (this.props.soundContext.soundOn) {
            const playPromise = document.getElementById("bubble-pop").play();

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
    }

    bubbleStart = (e) => {
        e.target.style.visibility = 'visible';
    }

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

    componentWillUnmount(){
        console.log("unmounted")
    }

    handleImageLoaded = () => {
        this.setState({ imageStatus: "loaded", currentGif: this.context.currentGif });
    }

    handleImageErrored = () => {
        this.setState({ imageStatus: "failed to load" });
    }

    componentDidMount() {
        this.setState({ currentGif: this.context.currentGif })
    }

    componentDidUpdate() {
        if (this.state.currentGif === undefined && this.context.currentGif !== undefined) {
            this.setState({ currentGif: this.context.currentGif })
        }
    }


    render() {
        let { classes } = this.props;
        let doesCharacterEnter = this.context.doesCharacterEnter();
        let showBubbles = this.context.checkBubbles();
        let nextGif = this.context.currentGif;
        let characterType = this.context.getCharacterType();
        let characterEntrance = characterType + 'Entrance';
        let loading = false;
        let isFox = characterType === 'fox';
        loading = this.state.currentGif !== this.context.currentGif || this.state.currentGif === undefined


        return <React.Fragment>
            <div className={doesCharacterEnter ?
                `${classes.characterContainer} ${classes[characterEntrance]} ${classes[characterType]}`
                : `${classes.characterContainer} ${classes[characterType]}`}>
                <img
                    style={isFox ? { right: 0 } : { left: 0 }}
                    className={classes.character}
                    src={this.state.currentGif}
                    onLoad={this.handleImageLoading}
                    onError={this.handleImageErrored}
                    alt='character' />

                <img
                    style={isFox ?
                        { right: 0, visibility: loading ? "hidden" : "visible" }
                        : { left: 0, visibility: loading ? "hidden" : "visible" }}
                    className={classes.character}
                    src={nextGif}
                    onLoad={this.handleImageLoaded}
                    onError={this.handleImageErrored}
                    alt='character' />

                {showBubbles ? <Bubbles /> : null}
                
            </div>
        </React.Fragment>

    }
}

export default withStyles(styles)(Character);
