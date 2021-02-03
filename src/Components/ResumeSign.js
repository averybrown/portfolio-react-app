import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import sign from 'Assets/sign.png';


const styles = theme => {
    return {
        signContainer: {
            position: 'absolute',
            right: '4%',
            pointerEvents: 'auto',
            zIndex: 101,
            animationName: '$signEntrance',
            animationDelay: '5s',
            animationFillMode: 'both',
            animationDuration: '5000ms',
            '&:hover': {
                cursor: 'pointer',
            },
            width: '18%',
            height: 'auto',
            marginBottom: 0,
            minWidth: '200px',
            [theme.breakpoints.down("xs")]: {
                width: '45%',
                right: 0, 
                marginRight: '5%', 
            },
        },
        sign: {
            zIndex: 100,
            transition: 'all 0.2s ease-in',
            filter: 'drop-shadow(0 0 0.1rem rgb(2, 208, 194))',

            '&:hover': {
                cursor: 'pointer',
                transform: 'scale(1.05)',
                transform: 'rotate(3deg)',
                transformOrigin: '50% 50%',
                transition: 'all 0.2s ease-in',
                filter: 'drop-shadow(0 0 0.5rem rgb(2, 208, 194))'
            },
            width: '100%',
            height: 'auto'
        },
        "@keyframes signEntrance": {
            "0%": {
                bottom: '-50%',
            },
            "100%": {
                bottom: '-10px',
            },
        },
    };
};


class Sign extends Component {


    render() {
        let { classes } = this.props;

        return <div className={classes.signContainer}>
            <a className={classes.resumeLink} href="/resume.pdf" style={{ textDecoration: 'none' }} download="Avery Brown Resume">
                <img className={classes.sign} src={sign} width='300px' height='300px' alt='sign' />
            </a>
        </div>
    }
}

export default withStyles(styles)(Sign);
