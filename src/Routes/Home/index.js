import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import bubble from 'Assets/bubble.png';
// import fox from 'Assets/homepage-fox.gif';
import fox from 'Assets/homepage-fox-2.gif';
// import fox from 'Assets/fox-bubbles2.gif';
// import fox from 'Assets/fox-bubbles3.gif';
// import fox from 'Assets/fox-bubbles4.gif';



const styles = theme => {
    return {
        homePage: {
            height: '100%',
            width: '100%',
            overflowY: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            // position: 'relative'
        },
        foxbubble: {
            position: 'absolute',
            display: 'flex',
            width: 'auto',
            bottom: 0,
            left: 0,
            marginLeft: '-10%',
            marginBottom: '-20%',
        },
        fox: {
            width: '50vw',
            [theme.breakpoints.down("xs")]: {
                marginLeft: 'calc(450/2)',
                minWidth: '450px',
            },
        },
        bubble1: {
            animation: '$BubbleUp1 7.2s 0.2s infinite',
            position: 'absolute',
            maxWidth: '100px',
            bottom: '53%',
            left: '66%',
            animationFillMode: 'both'
        },
        bubble2: {
            animation: '$BubbleUp2 7.2s 1.4s infinite',
            position: 'absolute',
            maxWidth: '100px',
            bottom: '53%',
            left: '66%',
            animationFillMode: 'both'
        },
        bubble3: {
            animation: '$BubbleUp3 7.2s 2.6s infinite',
            position: 'absolute',
            maxWidth: '100px',
            bottom: '53%',
            left: '66%',
            animationFillMode: 'both'
        },
        bubble4: {
            animation: '$BubbleUp4 7.2s 3.8s infinite',
            position: 'absolute',
            maxWidth: '100px',
            bottom: '53%',
            left: '66%',
            animationFillMode: 'both'

        },
        bubble5: {
            animation: '$BubbleUp5 7.2s 5s infinite',
            position: 'absolute',
            maxWidth: '100px',
            bottom: '53%',
            left: '66%',
            animationFillMode: 'both'

        },
        bubble6: {
            animation: '$BubbleUp6 7.2s 6.2s infinite',
            position: 'absolute',
            maxWidth: '100px',
            bottom: '20%',
            left: '66%',
            animationFillMode: 'both'

        },
        "@keyframes BubbleUp1": {
            "0%": {
                bottom: '53%',
                opacity: 0,
                transform: 'scale(0.4)'
            },
            "1%": {
                opacity: 100
            },
            "20%": {
                transform: 'translateX(10vh) scale(1.2)'
            },
            "40%": {
                transform: 'translateX(14vh) scale(1.2)'
            },
            "60%": {
                transform: 'translateX(10vh) scale(1.2)'
            },
            "100%": {
                bottom: '145vh',
                transform: 'translateX(5vh) scale(1.2)'
            },
        },
        "@keyframes BubbleUp2": {
            "0%": {
                bottom: '53%',
                opacity: 0,
                transform: 'scale(0.3)'
            },
            "1%": {
                opacity: 100
            },
            "20%": {
                transform: 'translateX(8vh) scale(1)'
            },
            "40%": {
                transform: 'translateX(12vh) scale(1)'
            },
            "60%": {
                transform: 'translateX(8vh) scale(1)'
            },
            "100%": {
                bottom: '145vh',
                transform: 'translateX(12vh) scale(1)'
            },
        },
        "@keyframes BubbleUp3": {
            "0%": {
                bottom: '53%',
                opacity: 0,
                transform: 'scale(0.2)'
            },
            "1%": {
                opacity: 100
            },
            "20%": {
                transform: 'translateX(6vh) scale(0.8)'
            },
            "40%": {
                transform: 'translateX(4vh) scale(0.8)'
            },
            "60%": {
                transform: 'translateX(6vh) scale(0.8)'
            },
            "100%": {
                bottom: '145vh',
                transform: 'translateX(8vh) scale(0.8)'
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
                transform: 'translateX(8vh) scale(0.7)'
            },
            "40%": {
                transform: 'translateX(12vh) scale(0.7)'
            },
            "60%": {
                transform: 'translateX(10vh) scale(0.7)'
            },
            "100%": {
                bottom: '145vh',
                transform: 'translateX(5vh) scale(0.7)'
            },
        },
        "@keyframes BubbleUp5": {
            "0%": {
                bottom: '53%',
                opacity: 0,
                transform: 'scale(0.4)'
            },
            "1%": {
                opacity: 100
            },
            "20%": {
                transform: 'translateX(10vh) scale(1.2)'
            },
            "40%": {
                transform: 'translateX(14vh) scale(1.2)'
            },
            "60%": {
                transform: 'translateX(10vh) scale(1.2)'
            },
            "100%": {
                bottom: '145vh',
                transform: 'translateX(5vh) scale(1.2)'
            },
        },
        "@keyframes BubbleUp6": {
            "0%": {
                bottom: '53%',
                opacity: 0,
                transform: 'scale(0.3)'
            },
            "1%": {
                opacity: 100
            },
            "20%": {
                transform: 'translateX(9vh) scale(1)'
            },
            "40%": {
                transform: 'translateX(12vh) scale(1)'
            },
            "60%": {
                transform: 'translateX(7vh) scale(1)'
            },
            "100%": {
                bottom: '145vh',
                transform: 'translateX(12vh) scale(1)'
            },
        },
    };
};


class HomePage extends Component {

    render() {
        let { classes } = this.props;

        return <div className={classes.homePage}>
            <Typography style={{zIndex: 5}} variant="h6">avery brown</Typography>
            <div className={classes.foxbubble}>
                <img className={classes.fox} src={fox} alt='fox' />
                <img className={classes.bubble1} src={bubble} alt='bubble' />
                <img className={classes.bubble2} src={bubble} alt='bubble' />
                <img className={classes.bubble3} src={bubble} alt='bubble' />
                <img className={classes.bubble4} src={bubble} alt='bubble' />
                <img className={classes.bubble5} src={bubble} alt='bubble' />
                <img className={classes.bubble6} src={bubble} alt='bubble' />
            </div>
        </div>
    }
}

export default withStyles(styles)(HomePage);
