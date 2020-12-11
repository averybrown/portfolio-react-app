import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";


const styles = theme => {
    return {
        homePage:{
            height: '100%'
        },
        myName: {
            fontFamily: `"Mukta", sans-serif`,
            fontSize: 'calc(10px + 10vmin)'
        },
    };
};


class HomePage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let { classes } = this.props;

        return <React.Fragment>
            <div className={classes.homePage}>
                <p className={classes.myName}> avery brown </p>
            </div>
        </React.Fragment>
    }
}

export default withStyles(styles)(HomePage);
