import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import fox from 'Assets/fox.png';


const styles = theme => {
    return {
        homePage: {
            overflowY: 'hidden'
        },
        fox: {
            position: 'absolute', 
            bottom: '-22%', 
            left: '-10%',
            // right: '60%'
            width: '60%',
            maxWidth: '600px',
            minWidth: '450px', 
            [theme.breakpoints.up("md")]: {
                bottom: '-30%', 
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
