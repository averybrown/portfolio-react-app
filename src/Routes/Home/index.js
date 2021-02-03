import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';

const styles = theme => {
    return {
        homePage: {
            height: '100%',
            width: '100%',
            overflowY: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute'
        },

        title: {
            fontSize: 'calc(25px + 6vmin) !important',
            marginLeft: theme.spacing(50),
            filter: 'drop-shadow(0 0 0.4rem rgb(216, 88, 168))',
            marginTop: theme.spacing(10),
            transition: 'all .4s ease-in-out',
            // '&:hover': {
            //     transform: 'scale(1.1)',
            //     filter: 'drop-shadow(0 0 0.3rem rgb(216, 88, 168))',
            // },
            [theme.breakpoints.down("md")]: {
                marginTop: 0,
                marginLeft: 0,
            },
            [theme.breakpoints.down("sm")]: {
                fontSize: 'calc(23px + 8vmin) !important',
            },
            fontFamily: `'Playfair Display', sans-serif`,

            fontSize: 'calc(10px + 8vmin) !important',
            color: 'white',
            fontWeight: '200',
            letterSpacing: '-0.05em',
            textShadowColor: '#585858',
            textShadowOffset: { width: 5, height: 5 },
            textShadowRadius: 10,

        },
    };
};


class HomePage extends Component {


    render() {
        let { classes } = this.props;

        return <div className={classes.homePage}>
            <svg className={classes.title} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 500">

                <defs>
                    <clipPath id="theClipPath">
                        <rect class="reveal" x="800" y="100" width="1000" height="250" fill="#000" />
                    </clipPath>
                </defs>

                <line class="reveal" x1="500" y1="150" x2="500" y2="150" stroke-width="1" stroke="white" />

                <g id="clipPathReveal" clip-path="url(#theClipPath)">
                    <text 
                    className={classes.title} 
                    transform="translate(500 250)" fill="#ffffff" text-anchor="middle" font-size="100">avery brown</text>
                </g>
            </svg>
            {/* <Typography className={classes.title} variant="h5">avery brown</Typography> */}
        </div>
    }
}

export default withStyles(styles)(HomePage);
