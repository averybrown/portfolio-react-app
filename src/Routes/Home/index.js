import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import fox from 'Assets/foxbubbles2.gif';


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
            position: 'absolute', 
            bottom: '-21%', 
            left: '-10%',
            // right: '60%'
            width: '60%',
            maxWidth: '600px',
            minWidth: '450px', 
            [theme.breakpoints.up("md")]: {
                bottom: '-30%', 
            },
            [theme.breakpoints.down("md")]: {
                bottom: '-25%', 
            },
            [theme.breakpoints.down("xs")]: {
                bottom: '-22%', 
            },
        },
    };
};


class HomePage extends Component {

    render() {
        let { classes } = this.props;

        return <div className={classes.homePage}>
            <Typography variant="h6">avery brown</Typography>
            <img className={classes.fox} src={fox} alt='fox'/>
        </div>
    }
}

export default withStyles(styles)(HomePage);
