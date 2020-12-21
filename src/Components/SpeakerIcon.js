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
            width: '5vw',
            bottom: '2%',
            display: 'block',
            zIndex: 15,
            cursor: 'pointer',
            [theme.breakpoints.down("xs")]: {
                minWidth: '60px',
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
        let fox = character === 'fox'
        

        return <button style={{visibility: 'hidden'}} className={classes.speaker} onClick={this.context.switchSoundOn}>
            <img style={fox ? {right: '2%'} : {left: '2%'} } className={classes.speaker} src={soundOn ? muteIcon : speakerIcon} alt='speaker' />
        </button>
    }
}

export default withSoundContext(withStyles(styles)(SpeakerIcon));
