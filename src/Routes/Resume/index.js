import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import bubble from 'Assets/bubble.png';
import foxIdle from 'Assets/fox-idle.gif';
import { NUMBALLOONS } from 'Constants/constants';



const styles = theme => {
    return {
        resumePage: {
            height: '100%',
            width: '100%',
            overflowY: 'hidden',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            position: 'relative',
            minHeight: '100%',
            marginTop: theme.spacing(8)
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
                marginBottom: '-120px',
                width: '320px',
            }
        },
        fox: {
            width: '100%',
            height: 'auto',
        },
    };
};


class ResumePage extends Component {


    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {
        let { classes } = this.props;

        return <div className={classes.resumePage}>
            <Typography style={{ zIndex: 10 }} variant="h5">resume</Typography>
            <div className={classes.foxContainer}>
                <img className={classes.fox} src={foxIdle} alt='fox' />
            </div>
        </div>
    }
}

export default withStyles(styles)(ResumePage);
