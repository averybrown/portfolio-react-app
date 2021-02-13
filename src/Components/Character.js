import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import { CharacterContext } from 'Contexts/CharacterContext';
import Bubbles from 'Components/Bubbles';


const styles = theme => {
    return {
        characterContainer: {
            position: 'absolute',
            width: '45vw',
            paddingTop: '45%',
            bottom: 0,
            marginBottom: '-18%',
            zIndex: 100,
            [theme.breakpoints.down("xs")]: {
                height: '305px',
                paddingTop: 0
            },
        },
        character: {
            width: '100%',
            height: 'auto',
            position: 'absolute',
            bottom: 0,
        },
        visible: {
            visibility: 'visible',
            opacity: 1,
            display: 'block'
        },
        hidden: {
            visibility: 'hidden',
            display: 'none',
            opacity: 0
        },
        fox: {
            marginLeft: '-10%',
            [theme.breakpoints.down("xs")]: {
                marginLeft: '-75px',
                marginBottom: '-120px',
                width: '305px',
            }
        },
        bear: {
            right: 0,
            marginRight: '-14%',
            [theme.breakpoints.down("xs")]: {
                marginRight: '-87px',
                marginBottom: '-120px',
                width: '305px',
            },
        },
        entrance: {
            animationName: '$entrance',
            animationFillMode: 'both',
            animationDuration: '3000ms'
        },
        exit: {
            animationName: '$exit',
            animationFillMode: 'both',
            animationDuration: '3000ms'
        },
        "@keyframes entrance": {
            "0%": {
                bottom: '-38%',
            },
            "100%": {
                bottom: 0,
            },
        },
        "@keyframes exit": {
            "0%": {
                bottom: 0,
            },
            "100%": {
                bottom: '-38%',
            },
        },
    };
};


class Character extends Component {
    static contextType = CharacterContext;

    constructor(props) {
        super(props);
        this.state = {
            currentGif: undefined
        };
    }


    handleImageLoaded = () => {
        this.setState({ currentGif: this.context.currentGif });
    }

    handleImageErrored = () => {
        console.log("error loading image")
    }

    componentDidMount() {
        this.setState({ currentGif: this.context.currentGif })
    }

    componentDidUpdate() {
        if (this.state.currentGif === undefined && this.context.currentGif !== undefined) {
            this.setState({ currentGif: this.context.currentGif })
        }
    }


    render() {
        let { classes } = this.props;
        let isCharacterExiting = this.context.isCharacterExiting();
        let doesCharacterEnter = this.context.doesCharacterEnter() && !isCharacterExiting;
        let showBubbles = this.context.checkBubbles();
        let nextGif = this.context.currentGif;
        let characterType = this.context.getCharacterType();
        // let characterEntrance = characterType + 'Entrance';
        // let characterExit = characterType + 'Exit';
        let loading = false;
        let isFox = characterType === 'fox';
        loading = this.state.currentGif !== this.context.currentGif || this.state.currentGif === undefined


        return <React.Fragment>
            <div className={doesCharacterEnter ?
                `${classes.characterContainer} ${classes.entrance} ${classes[characterType]}`
                : isCharacterExiting ?
                    `${classes.characterContainer} ${classes.exit} ${classes[characterType]}`
                    : `${classes.characterContainer} ${classes[characterType]}`}>
                <img
                    style={isFox ? { right: 0 } : { left: 0 }}
                    className={classes.character}
                    src={this.state.currentGif}
                    onLoad={this.handleImageLoading}
                    onError={this.handleImageErrored}
                    alt='character' />

                <img
                    style={isFox ?
                        {
                            right: 0,
                            visibility: loading ? "hidden" : "visible" 
                        }
                        : {
                            left: 0,
                             visibility: loading ? "hidden" : "visible" 
                        }}
                    className={loading ? `${classes.character} ${classes.hidden}`
                        : `${classes.character} ${classes.visible}`}
                    src={nextGif}
                    onLoad={this.handleImageLoaded}
                    onError={this.handleImageErrored}
                    alt='character' />

                {showBubbles ? <Bubbles /> : null}

            </div>
        </React.Fragment>

    }
}

export default withStyles(styles)(Character);
