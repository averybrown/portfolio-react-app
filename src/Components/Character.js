import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import { CharacterContext } from 'Contexts/CharacterContext';
import Bubbles from 'Components/Bubbles';
import foxEnterFinalFrame from 'Assets/fox-enter-scene-2-final-frame.png';
import bearEnterFinalFrame from 'Assets/bear-enter-scene-final-frame.png';
import foxPlantGrowingFinalFrame from 'Assets/fox-plant-growing-final-frame.png';


let lastFrame;
let bFirstStaticImageShown;
// let RenderCounter=0;

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

        let NewLastFrame;
        if(bFirstStaticImageShown)
        {
            NewLastFrame = foxPlantGrowingFinalFrame;
        }
        else if(this.context.checkIfPlantGrowing())
        {
            NewLastFrame =foxEnterFinalFrame
        }
        if(lastFrame !== NewLastFrame)
        {
            lastFrame=NewLastFrame;
        }
        this.setState({ currentGif: this.context.currentGif })
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
        // RenderCounter++;
        // console.log("Render:",RenderCounter);
        let { classes } = this.props;
        let { currentGif } = this.state;
        let isCharacterExiting = this.context.isCharacterExiting();
        let doesCharacterEnter = this.context.doesCharacterEnter() && !isCharacterExiting;
        let showBubbles = this.context.checkBubbles();
        let characterType = this.context.getCharacterType();
        let loading = false;
        let contextCurrentGif = this.context.currentGif;
        let isFox = characterType === 'fox';
        let isPlantGrowing = this.context.checkIfPlantGrowing();
        if(bFirstStaticImageShown )
        {
            lastFrame = foxPlantGrowingFinalFrame;
        }
        else
        {
            lastFrame = isFox ? foxEnterFinalFrame : bearEnterFinalFrame
        }
        loading = currentGif !== contextCurrentGif || currentGif === undefined
        let showFinalFrame = this.context.checkPlayFinalFrame()
        if(loading && showFinalFrame && this.context.checkWillPlantGrow())
        {
            bFirstStaticImageShown = true;
        }
        if(loading && isPlantGrowing)
        {
            bFirstStaticImageShown=false;
        }

        return <React.Fragment>
            <div className={doesCharacterEnter ?
                `${classes.characterContainer} ${classes.entrance} ${classes[characterType]}`
                : isCharacterExiting ?
                    `${classes.characterContainer} ${classes.exit} ${classes[characterType]}`
                    : `${classes.characterContainer} ${classes[characterType]}`}>
                <img
                    style={isFox ?
                        {
                            right: 0,
                            visibility: loading && (showFinalFrame || isPlantGrowing) ? "hidden" : "visible"
                        }
                        : {
                            left: 0,
                            visibility: loading && (showFinalFrame || isPlantGrowing) ? "hidden" : "visible"
                        }}
                    className={classes.character}
                    src={contextCurrentGif}
                    onLoad={this.handleImageLoaded}
                    onError={this.handleImageErrored}
                    alt='character' />

                <img
                    style={isFox ?
                        {
                            right: 0,
                            visibility: loading && (showFinalFrame || isPlantGrowing) ? "visible" : "hidden"
                        }
                        : {
                            left: 0,
                            visibility: loading && (showFinalFrame || isPlantGrowing) ? "visible" : "hidden"
                        }}
                    className={loading ? `${classes.character} ${classes.visible}`
                        : `${classes.character} ${classes.hidden}`}
                    src={lastFrame}
                    onError={this.handleImageErrored}
                    alt='character' />

                {showBubbles ? <Bubbles /> : null}

            </div>
        </React.Fragment>

    }
}

export default withStyles(styles)(Character);
