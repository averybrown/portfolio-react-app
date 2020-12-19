import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import foxIdle from 'Assets/fox-idle.gif';



const styles = theme => {
    return {
        contactPage: {
            height: '100%',
            width: '100%',
            overflowY: 'hidden',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            minHeight: 0,
        },
        title: {
            zIndex: 10, 
            marginTop: theme.spacing(10)
        },
        foxContainer: {
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column',
            flex: '0 0 auto',
            width: '50vw',
            alignItems: 'stretch',
            bottom: 0,
            left: 0,
            marginLeft: '-10%',
            marginBottom: '-17.8%',
            [theme.breakpoints.down("xs")]: {
                marginLeft: '-75px',
                marginBottom: '-90px',
                width: '320px',
            }
        },
        fox: {
            width: '100%',
            height: 'auto',
        },
    };
};


class ContactPage extends Component {


    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {
        let { classes } = this.props;

        return <div className={classes.contactPage}>
            <Typography className={classes.title} variant="h5">contact</Typography>
            <div className={classes.foxContainer}>
                <img className={`${classes.fox} character`} src={foxIdle} alt='fox' />
            </div>
        </div>
    }
}

export default withStyles(styles)(ContactPage);
