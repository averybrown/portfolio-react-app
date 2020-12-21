import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Character from 'Components/Character';


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
            zIndex: 10,
            marginTop: theme.spacing(15)
        }
    };
};


class HomePage extends Component {


    render() {
        let { classes } = this.props;

        return <div className={classes.homePage}>
            <Typography className="name" variant="h6">avery brown</Typography>
            <Character />
        </div>
    }
}

export default withStyles(styles)(HomePage);
