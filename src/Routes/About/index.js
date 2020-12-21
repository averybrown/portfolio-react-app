import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import bubble from 'Assets/bubble.png';
import { NUMBALLOONS } from 'Constants/constants';
import Character from 'Components/Character';


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
        },
        title: {
            zIndex: 10,
            marginTop: theme.spacing(14), 
            visibility: 'hidden'
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
            animationDelay: '0.4s'
        },
        balloon3: {
            animationName: '$Balloon3',
            animationDelay: '0.7s'
        },
        balloon4: {
            animationName: '$Balloon4',
            animationDelay: '1s'
        },
        balloon5: {
            animationName: '$Balloon2',
            animationDelay: '1.2s'
        },
        balloon6: {
            animationName: '$Balloon4',
            animationDelay: '1.4s'
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

    popBalloon = (e) => {
        e.target.style.visibility = 'hidden';

        const playPromise = document.getElementById("audio").play();

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

    renderBalloons = () => {
        let { classes } = this.props;

        return [...Array(NUMBALLOONS)].map((e, i) => {
            let classNum = (i % 6) + 1;
            let pos = Math.floor(Math.random() * 100) + 1 + '%';
            return <img key={i}
                style={{ left: pos }}
                className={`${classes.balloon} ${classes[`balloon${classNum}`]}`}
                src={bubble}
                alt='bubble'
                onMouseOver={this.popBalloon}
            />
        }
        )
    }

    render() {
        let { classes } = this.props;

        return <div className={classes.aboutPage}>
            <Typography className={classes.title} variant="h5">about me</Typography>
            <Character />
            {this.renderBalloons()}
        </div>
    }
}

export default withStyles(styles)(AboutPage);
