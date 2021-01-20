import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import foxIdle from 'Assets/fox-idle.gif';
import Character from 'Components/Character';



const styles = theme => {
    return {
        projectsPage: {
            height: '100%',
            width: '100%',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            position: 'relative',
            minHeight: '100%',
        },
        title: {
            zIndex: 10, 
            marginTop: theme.spacing(14), 
            visibility: 'hidden',
        }
    };
};


class ProjectsPage extends Component {

    render() {
        let { classes } = this.props;

        return <div className={classes.projectsPage}>
            <Typography className={classes.title} variant="h5">projects</Typography>
        </div>
    }
}

export default withStyles(styles)(ProjectsPage);
