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
            maxWidth: '45vw',
            paddingTop: '45%',
            bottom: 0,
            marginBottom: '-18%',
            zIndex: 100,
            [theme.breakpoints.up("lg")]: {
                height: '650px',
                paddingTop: 0,
                maxWidth: '650px',
                marginBottom: '-260px'
            },
            [theme.breakpoints.down("xs")]: {
                height: '305px',
                paddingTop: 0
            },
            [theme.breakpoints.up("xlg")]: {
                height: '850px !important',
                paddingTop: 0,
                marginBottom: '-340px !important', 
                maxWidth: '850px !important',
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
            [theme.breakpoints.up("lg")]: {
                marginLeft: '-145px',
                marginBottom: '-260px',
                width: '650px',
            },
            [theme.breakpoints.up("xlg")]: {
                marginLeft: '-145px !important',
                marginBottom: '-340px !important',
                width: '850px !important',
            },
            [theme.breakpoints.down("xs")]: {
                marginLeft: '-75px',
                marginBottom: '-120px',
                width: '305px',
            }
        },
        bear: {
            right: 0,
            marginRight: '-14%',
            [theme.breakpoints.up("lg")]: {
                marginRight: '-200px',
                marginBottom: '-250px',
                width: '650px',
            },
            [theme.breakpoints.down("xs")]: {
                marginRight: '-87px',
                marginBottom: '-120px',
                width: '305px',
            },
            [theme.breakpoints.up("xlg")]: {
                marginLeft: '-250px !important',
                marginBottom: '-340px !important',
                width: '850px !important',
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
                bottom: '-55%',
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
                bottom: '-45%',
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

    componentDidUpdate(newProps) {
        if (this.props.location !== newProps.location) {
            console.log("New page: boolean false")
            bFirstStaticImageShown = false;
        }
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
        if(isCharacterExiting || doesCharacterEnter)
        {
            bFirstStaticImageShown=false;
        }
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
