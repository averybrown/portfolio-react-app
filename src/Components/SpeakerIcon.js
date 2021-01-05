import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import speakerIcon from 'Assets/speaker.png';
import muteIcon from 'Assets/mute.png';
import { withSoundContext } from 'Contexts/SoundContext';
import { CharacterContext } from 'Contexts/CharacterContext';


const styles = theme => {
    return {
        speaker: {
            visibility: 'visible',
            position: 'fixed',
            width: '3vw',
            bottom: '2%',
            display: 'block',
            zIndex: 15,
            cursor: 'pointer',
            [theme.breakpoints.down("xs")]: {
                minWidth: '30px',
            },
        }
    };
};


class SpeakerIcon extends Component {
    static contextType = CharacterContext;


    render() {
        let { classes } = this.props;
        const { soundOn } = this.props.soundContext;
        let character = this.context.getCharacterType();
        let fox = (character === 'fox')


        return <img
            style={fox ? { right: '1.5%' } : { left: '1.5%' }}
            className={classes.speaker}
            src={soundOn ? muteIcon : speakerIcon}
            alt='speaker' onClick={this.props.soundContext.switchSoundOn} />
    }
}

export default withSoundContext(withStyles(styles)(SpeakerIcon));
