import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import foxIdle from 'Assets/fox-idle.gif';



const styles = theme => {
    return {
        projectsPage: {
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
        bearContainer: {
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column',
            flex: '0 0 auto',
            width: '50vw',
            alignItems: 'stretch',
            bottom: 0,
            right: 0,
            marginRight: '-10%',
            marginBottom: '-17.8%',
            [theme.breakpoints.down("xs")]: {
                marginRight: '-75px',
                marginBottom: '-90px',
                width: '320px',
            }
        },
        bear: {
            width: '100%',
            height: 'auto',
            transform: 'scaleX(-1)'
        },
    };
};


class ProjectsPage extends Component {


    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {
        let { classes } = this.props;

        return <div className={classes.projectsPage}>
            <Typography style={{ zIndex: 10 }} variant="h5">projects</Typography>
            <div className={classes.bearContainer}>
                <img className={`${classes.bear} character`} src={foxIdle} alt='fox' />
            </div>
        </div>
    }
}

export default withStyles(styles)(ProjectsPage);
