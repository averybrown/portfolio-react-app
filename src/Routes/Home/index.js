import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Character from 'Components/Character';
import SpeakerIcon from 'Components/SpeakerIcon';

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
            marginLeft: theme.spacing(50),
            marginTop: theme.spacing(10), 
            transition: 'all .4s ease-in-out',
            '&:hover': {
                transform: 'scale(1.2)',
              },
            [theme.breakpoints.down("xs")]: {
                marginLeft: 0,
                marginTop: 0
            },
            [theme.breakpoints.down("md")]: {
                marginTop: 0, 
                marginLeft: 0, 
            },
        }
    };
};


class HomePage extends Component {


    render() {
        let { classes } = this.props;

        return <div className={classes.homePage}>
            <Typography className={classes.title} variant="h6">avery brown</Typography>
            <Character />
            <SpeakerIcon/>
        </div>
    }
}

export default withStyles(styles)(HomePage);
