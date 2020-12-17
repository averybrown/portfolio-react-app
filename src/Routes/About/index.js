import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';


const styles = theme => {
    return {
        aboutPage: {
            height: '100%',
            width: '100%',
            overflowY: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            minHeight: '100%'
        },
        bearContainer: {
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column',
            flex: '0 0 auto',
            width: '50vw',
            alignItems: 'stretch',
            bottom: 0,
            left: 0,
            marginLeft: '-10%',
            marginBottom: '-20%',
            [theme.breakpoints.down("xs")]: {
                marginLeft: '-75px',
                marginBottom: '-120px',
                width: '320px',
            }
        },
        bear: {
            width: '100%',
            height: 'auto'
        },

    };
};




class AboutPage extends Component {


    constructor(props) {
        super(props);
        this.state = {
        }
    }

    // componentDidMount() {
    //     setInterval(this.updateFoxState, 12800);
    //   }


    render() {
        let { classes } = this.props;

        return <div className={classes.aboutPage}>
        </div>
    }
}

export default withStyles(styles)(AboutPage);
