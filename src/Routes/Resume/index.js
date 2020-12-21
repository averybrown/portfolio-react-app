import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Character from 'Components/Character';
import { Link } from "react-router-dom";
import Balloons from "Components/Balloons";
import SpeakerIcon from 'Components/SpeakerIcon';


const styles = theme => {
    return {
        resumePage: {
            height: '100%',
            width: '100%',
            overflowY: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            minHeight: '100%',
        },
        title: {
            zIndex: 10,
            marginTop: theme.spacing(14),
            visibility: 'hidden'
        }
    };
};


class ResumePage extends Component {

    render() {
        let { classes } = this.props;

        return <div className={classes.resumePage}>
            <Typography className={classes.title} variant="h5">resume</Typography>
            <Link style={{textDecoration: 'none'}} to="/resume.pdf" target="_blank" download>
                <Typography className={classes.passage} variant="subtitle2">
                    download resume
                </Typography>
            </Link>
            <Character />
            <Balloons />
            <SpeakerIcon/>
        </div>
    }
}

export default withStyles(styles)(ResumePage);
