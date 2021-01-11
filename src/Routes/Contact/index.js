import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Character from 'Components/Character';
// import Balloons from "Components/Balloons";
// import SpeakerIcon from 'Components/SpeakerIcon';

const styles = theme => {
    return {
        contactPage: {
            height: '100%',
            width: '100%',
            overflowY: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            position: 'relative',
            minHeight: '100%',
            flexDirection: 'column'
        },
        title: {
            zIndex: 10,
            visibility: 'hidden',
        },
        email: {
            textDecoration: 'none'
        }
    };
};


class ContactPage extends Component {

    render() {
        let { classes } = this.props;

        return <div className={classes.contactPage}>
            <Typography className={classes.title} variant="h5">contact</Typography>
            <a className={classes.email} href={"mailto:avery.brown@mac.com"}><Typography variant="subtitle2">avery.brown@mac.com</Typography></a>
            <Character />
            {/* <Balloons /> 
            <SpeakerIcon /> */}
        </div>
    }
}

export default withStyles(styles)(ContactPage);
