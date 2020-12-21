import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import { NUMBALLOONS, BALLOONDURATION } from 'Constants/constants';
import pinkBalloon from 'Assets/balloon-pink.png';
import greenBalloon from 'Assets/balloon-green.png';
import blueBalloon from "Assets/balloon-blue.png";
import { SoundContext } from 'Contexts/SoundContext';



const balloons = [pinkBalloon, greenBalloon, blueBalloon];

const styles = theme => {
    return {
        balloon: {
            position: 'absolute',
            width: '12vw',
            display: 'block',
            animationFillMode: 'both',
            animationDuration: BALLOONDURATION,
            zIndex: 100,
            minWidth: '120px'
        },
        balloon1: {
            animationName: '$Balloon1',
            animationDelay: '0.3s'
        },
        balloon2: {
            animationName: '$Balloon2',
            animationDelay: '0.5s'
        },
        balloon3: {
            animationName: '$Balloon3',
            animationDelay: '2.6s'
        },
        balloon4: {
            animationName: '$Balloon4',
            animationDelay: '2.8s'
        },
        balloon5: {
            animationName: '$Balloon2',
            animationDelay: '2s'
        },
        balloon6: {
            animationName: '$Balloon4',
            animationDelay: '2.5s'
        },
        balloon7: {
            animationName: '$Balloon1',
            animationDelay: '2.7s'
        },
        balloon8: {
            animationName: '$Balloon2',
            animationDelay: '3.2s'
        },
        balloon9: {
            animationName: '$Balloon3',
            animationDelay: '3.7s'
        },
        balloon10: {
            animationName: '$Balloon4',
            animationDelay: '4s'
        },
        balloon11: {
            animationName: '$Balloon4',
            animationDelay: '3.5s'
        },
        balloon12: {
            animationName: '$Balloon4',
            animationDelay: '3.3s'
        },
        balloon13: {
            animationName: '$Balloon4',
            animationDelay: '2.8s'
        },
        balloon14: {
            animationName: '$Balloon4',
            animationDelay: '4.1s'
        },
        balloon15: {
            animationName: '$Balloon4',
            animationDelay: '2.3s'
        },
        balloon16: {
            animationName: '$Balloon4',
            animationDelay: '3.4s'
        },
        balloon17: {
            animationName: '$Balloon4',
            animationDelay: '3.8s'
        },
        balloon18: {
            animationName: '$Balloon4',
            animationDelay: '3.6s'
        },
        balloon19: {
            animationName: '$Balloon4',
            animationDelay: '2.9s'
        },
        balloon20: {
            animationName: '$Balloon4',
            animationDelay: '3.1s'
        },
        balloon21: {
            animationName: '$Balloon4',
            animationDelay: '4.5s'
        },
        balloon22: {
            animationName: '$Balloon4',
            animationDelay: '5.5s'
        },
        balloon23: {
            animationName: '$Balloon4',
            animationDelay: '4.8s'
        },
        balloon24: {
            animationName: '$Balloon4',
            animationDelay: '4.6'
        },
        balloon25: {
            animationName: '$Balloon4',
            animationDelay: '4.3s'
        },
        balloon26: {
            animationName: '$Balloon4',
            animationDelay: '5.2s'
        },
        balloon27: {
            animationName: '$Balloon4',
            animationDelay: '5.7s'
        },
        balloon28: {
            animationName: '$Balloon4',
            animationDelay: '7.3s'
        },
        balloon29: {
            animationName: '$Balloon4',
            animationDelay: '7.5s'
        },
        balloon30: {
            animationName: '$Balloon4',
            animationDelay: '8s'
        },
        "@keyframes Balloon1": {
            "0%": {
                bottom: '-100%',
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
                bottom: '-100%',
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
                bottom: '-100%',
            },
            "20%": {
                transform: 'translateX(6vw)'
            },
            "40%": {
                transform: 'translateX(4vw)'
            },
            "60%": {
                transform: 'translateX(2vw)'
            },
            "100%": {
                bottom: '140vh',
                transform: 'translateX(3vw)'
            },
        },
        "@keyframes Balloon4": {
            "0%": {
                bottom: '-100%',
            },
            "20%": {
                transform: 'translateX(3vw)'
            },
            "40%": {
                transform: 'translateX(1vw)'
            },
            "60%": {
                transform: 'translateX(2vw)'
            },
            "100%": {
                bottom: '140vh',
                transform: 'translateX(1vw)'
            }
        },
    };
};


class Balloons extends Component {
    static contextType = SoundContext;


    popBalloon = (e) => {
        e.target.style.visibility = 'hidden';

        if (this.context.soundOn) {
            const playPromise = document.getElementById("balloon-pop").play();

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


    render() {
        let { classes } = this.props;

        return [...Array(NUMBALLOONS)].map((e, i) => {
            let classNum = (i % 30) + 1;
            let pos = Math.floor(Math.random() * 100) - 10 + '%';
            let balloonIndex = (i % 3);

            return <img key={i}
                style={{ left: pos }}
                className={`${classes.balloon} ${classes[`balloon${classNum}`]}`}
                src={balloons[balloonIndex]}
                alt='balloon'
                onMouseOver={this.popBalloon}
            />
        })
    }
}

export default withStyles(styles)(Balloons);
