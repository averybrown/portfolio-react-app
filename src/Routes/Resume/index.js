import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Character from 'Components/Character';
import { Link } from "react-router-dom";
import Balloons from "Components/Balloons";
import SpeakerIcon from 'Components/SpeakerIcon';
import Divider from '@material-ui/core/Divider';
import GetAppIcon from '@material-ui/icons/GetApp';


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
        },
        content: {
            display: 'grid',
            height: '100%',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: 'auto auto',
            alignContent: 'space-evenly',
            // marginTop: '-8%',
            justifyItems: 'stretch',
            marginLeft: theme.spacing(10),
            marginRight: theme.spacing(10),
            gridGap: theme.spacing(10)
        },
        divider: {
            height: '5px',
            width: 'calc(9px + 8vmin)',
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1)
        },
        resumeLink: {
            cursor: 'pointer',
            zIndex: 100, 
            display: 'flex', 
            flexDirection: 'row', 
            justifyContent: 'center', 
            alignItems: 'center', 
        },
        heading: {
            textAlign: 'start'
        },
        body: {
            display: 'flex',
            justifyContent: 'space-between'
        },
        date: {
            fontWeight: 600,
            textAlign: 'end'
        }, 
        downloadIcon: {
            color: 'black', 
            marginLeft: theme.spacing(1)/2
        }
    };
};


class ResumePage extends Component {

    render() {
        let { classes } = this.props;

        return <div className={classes.resumePage}>
            <Typography className={classes.title} variant="h5">resume</Typography>
            <Link className={classes.resumeLink} style={{ textDecoration: 'none' }} to="/resume.pdf" target="_blank" download>
                <Typography variant="subtitle1">
                    download full resume
                </Typography>
                <GetAppIcon className={classes.downloadIcon}/>
            </Link>
            <div className={classes.content}>
                <div>
                    <Typography className={classes.heading} variant="body1">
                        Education
                </Typography>
                    <Divider className={classes.divider} />
                    <div className={classes.body}>
                        <Typography className={classes.heading} variant="body2">
                            Univerisity of British Columbia
                </Typography>
                        <Typography className={classes.date} variant="body2">
                            2015-2019
                </Typography>
                    </div>
                </div>
                <div>
                    <Typography className={classes.heading} variant="body1" >
                        Technical Skills
                </Typography>
                    <Divider className={classes.divider} />
                    <div className={classes.body}>
                        <Typography className={classes.heading} variant="body2">
                            Java, JavaScript, Python, C++, Node.js, Database Design and SQL, AWS development tools, HTML, CSS, React.JS, 
                            Google Analytics, Photoshop, Figma, InVision, Confluence
                </Typography>
                    </div>

                </div>
                <div>
                    <Typography className={classes.heading}>
                        Experience
                </Typography>
                    <Divider className={classes.divider} />
                    <div className={classes.body}>
                        <Typography className={classes.heading} variant="body2">
                            Front-end Developer, Clotech
                </Typography>
                        <Typography className={classes.date} variant="body2">
                            Sept. 2019- April 2020
                </Typography>
                    </div>
                </div>
            </div>
            <Character />
            <Balloons />
            <SpeakerIcon />
        </div>
    }
}

export default withStyles(styles)(ResumePage);
