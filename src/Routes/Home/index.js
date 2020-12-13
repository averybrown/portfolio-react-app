import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
// import fox from 'Assets/flipbook-2-big-eyes-2.gif';
// import fox from 'Assets/foxbubbles2.gif';
import bubble from 'Assets/bubble.png';
// import fox from 'Assets/foxbubbles3.gif';
import fox from 'Assets/flipbook-med-eyes.gif';



const styles = theme => {
    return {
        homePage: {
            height: '100%',
            width: '100%',
            overflowY: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative'
        },
        fox: {
            position: 'fixed',
            bottom: '-21%',
            left: '-10%',
            // right: '60%'
            width: '45%',
            // maxWidth: '600px',
            [theme.breakpoints.up("md")]: {
                bottom: '-30%',
            },
            [theme.breakpoints.down("md")]: {
                bottom: '-25%',
            },
            [theme.breakpoints.down("xs")]: {
                bottom: '-22%',
                minWidth: '450px',

            },
        },
        bubble: {
            animation: '$MoveUpDown 10s infinite',
            position: 'absolute',
            maxWidth: '100px',
            bottom: '20%',
            left: '20%'
        },
        "@keyframes MoveUpDown": {
            "0%": {
                bottom: '5%',
                transform: 'scale(0.4)'
            },
            "20%": {
                transform: 'translateX(8vh) scale(1.2)'
            },
            "40%": {
                transform: 'translateX(12vh) scale(1.2)'
            },
            "60%": {
                transform: 'translateX(10vh) scale(1.2)'
            },
            "100%": {
                bottom: '110%',
                transform: 'translateX(5vh) scale(1.2)'
            },
        },
    };
};


class HomePage extends Component {

    render() {
        let { classes } = this.props;

        return <div className={classes.homePage}>
            <Typography variant="h6">avery brown</Typography>
            <img className={classes.fox} src={fox} alt='fox' />
            <img className={classes.bubble} src={bubble} alt='bubble' />
        </div>
    }
}

export default withStyles(styles)(HomePage);
