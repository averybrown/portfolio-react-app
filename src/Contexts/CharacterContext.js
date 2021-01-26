import React, { createContext, Component } from 'react';
// import foxBubble from 'Assets/fox-blowing-bubbles.gif';
import foxEnters from 'Assets/flipbook-fox-enter-scene.gif';
import foxEnters2 from 'Assets/flipbook-fox-enter-scene-2.gif';
import bearEnters from 'Assets/flipbook-bear-enter-scene.gif';
import bearEnters2 from 'Assets/flipbook-bear-enter-scene-2.gif';
import foxBubble from 'Assets/flipbook-final.gif';
import foxPlant from 'Assets/flipbook-plant.gif';
import foxIdle from 'Assets/fox-idle.gif';
import bearIdle from 'Assets/flipbook-bear-idle.gif';
import { withRouter } from "react-router-dom";
import bear from 'Assets/bear.png';
import foxExit from 'Assets/flipbook-fox-exit-scene-1.gif';
import bearExit from 'Assets/flipbook-bear-exit-scene-1.gif';


export const CharacterContext = createContext();
export const CharacterConsumer = CharacterContext.Consumer;

const animations = {
    FOXENTRANCE: foxEnters,
    FOXENTRANCE2: foxEnters2,

    FOXBUBBLES: foxBubble,
    FOXPLANTGROWING: foxIdle,
    FOXPLANT: foxPlant,
    FOXEXIT: foxExit,
    BEARENTRANCE: bearEnters,
    BEARENTRANCE2: bearEnters2,
    BEARLEAF: bear,
    BEARIDLE: bearIdle,
    BEAREXIT: bearExit
}

const pages = [
    {
        name: 'home', character: 'fox', states: [
            { animation: animations.FOXENTRANCE, duration: 3000 },
            { animation: animations.FOXENTRANCE2, duration: 2800 },
            { animation: animations.FOXBUBBLES, bubbles: true, cycle: true },
            { animation: animations.FOXEXIT, duration: 2000, exit: true },
            { animation: animations.FOXENTRANCE, duration: 3000, exit: true },
        ]
    },
    {
        name: 'projects', character: 'bear', states: [
            { animation: animations.BEARENTRANCE, duration: 3000 },
            { animation: animations.BEARENTRANCE2, duration: 2000 },
            { animation: animations.BEARIDLE, cycle: true },
            { animation: animations.BEAREXIT, duration: 2000, exit: true },
            { animation: animations.BEARENTRANCE, duration: 3000, exit: true },
        ]
    },
    {
        name: 'resume', character: 'fox', states: [
            { animation: animations.FOXENTRANCE, duration: 3000 },
            { animation: animations.FOXENTRANCE2, duration: 2000 },
            { animation: animations.FOXPLANTGROWING, duration: 1000 },
            { animation: animations.FOXPLANT, duration: 300, cycle: true },
            { animation: animations.FOXEXIT, duration: 2000, exit: true },
            { animation: animations.FOXENTRANCE, duration: 3000, exit: true },
        ]
    },
    {
        name: 'contact', character: 'bear', states: [
            { animation: animations.BEARENTRANCE, duration: 3000 },
            { animation: animations.BEARENTRANCE2, duration: 2000 },
            { animation: animations.BEARIDLE, duration: 300, cycle: true },
            { animation: animations.BEAREXIT, duration: 2000, exit: true },
            { animation: animations.BEARENTRANCE, duration: 3000, exit: true }
        ],
    }
]

let timeout;


class CharacterDataProvider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: undefined,
            currentState: 0,
        }
    }

    checkBubbles = () => {
        const { currentPage, currentState } = this.state;

        if (currentPage !== undefined && currentPage.states[currentState]) {
            return currentPage.states[currentState].bubbles;
        }
    }

    getCharacterType = () => {
        const { currentPage } = this.state;

        if (currentPage !== undefined) {
            return currentPage.character;
        }
    }

    getPage = () => {
        let pathname = window.location.pathname

        return pathname === '/' ?
            pages.find(element => element.name === 'home')
            : pages.find(element => pathname.includes(element.name))
    }

    setCurrentPageState = async (currentPageData) => {
        const { currentPage } = this.state;
        this.setState({ currentPage: currentPageData })
    }

    isNewPage = () => {
        let currentPageData = this.getPage();

        const { currentPage } = this.state;

        return (currentPageData !== undefined && currentPage !== undefined) ?
            currentPageData !== currentPage
            : true
    }

    playNextState = () => {
        const { currentState, currentPage } = this.state;
        let nextStateIndex = currentState + 1;
        let nextStateExists = currentPage.states[nextStateIndex] !== undefined;
        let currentStateCycles = currentPage.states[currentState].cycle

        console.log("playnextstate")

        return nextStateExists && !currentStateCycles
    }

    doesCharacterEnter = () => {
        let currentPageData = this.getPage();

        const { currentPage, currentState } = this.state;

        if (currentPageData !== undefined && currentPage !== undefined) {
            let characterSwitched = currentPageData.character !== currentPage.character;
            let characterDoneEntrance = currentState > 0
            return characterSwitched ? true : !characterDoneEntrance
        } else return true
    }

    isCharacterExiting = () => {
        const { currentPage, currentState } = this.state;

        if (currentPage !== undefined && currentPage.states[currentState]) {
            return currentPage.states[currentState].exit === true
        } else return false
    }

    isEndOfExit = () => {
        const { currentState, currentPage } = this.state;
        let nextStateIndex = currentState + 1;
        let characterExiting = currentPage.states[currentState].exit
        let endOfExit = currentPage.states[nextStateIndex] === undefined;
        console.log(endOfExit && characterExiting)

        return characterExiting && endOfExit;
    }

    startNewPage = nextState => {
        let currentPageData = this.getPage();
        clearTimeout(timeout);

        this.setCurrentPageState(currentPageData).then(() => {
            this.setNextStateIndexAndGif(nextState)
        })
    }

    setNextStateIndexAndGif = nextState => {
        clearTimeout(timeout);

        this.setState({ currentState: nextState, currentGif: this.state.currentPage.states[nextState].animation }, () => {
            if (this.playNextState()) {
                timeout = setTimeout(this.updateCurrentState,
                    this.state.currentPage.states[this.state.currentState].duration)
            } else if (this.isEndOfExit()) {
                let nextStateIndex = 0;
                this.startNewPage(nextStateIndex)
            }
        })
    }


    updateCurrentState = () => {
        const { currentState } = this.state;
        clearTimeout(timeout);

        let nextState = currentState + 1;
        this.setNextStateIndexAndGif(nextState)
    }


    componentWillUnmount() {
        clearTimeout(timeout);
    }

    componentDidMount() {
        let currentPageData = this.getPage();

        this.setCurrentPageState(currentPageData).then(() => {
            if (this.state.currentPage !== undefined) {
                this.setState({ currentGif: this.state.currentPage.states[0].animation })
                let duration = this.state.currentPage.states[0].duration
                timeout = setTimeout(this.updateCurrentState, duration)
            }
        })
    }

    componentDidUpdate(newProps) {
        /* when location changes, character will either exit or stay
         if character is entering, current character must exit
         if character is not exiting, start new page immediately, otherwise after character has exited */

        if (this.props.location !== newProps.location && this.state.currentPage !== undefined) {
            clearTimeout(timeout);

            let doesCharacterEnter = this.doesCharacterEnter()
            let newPageSameCharacter = this.isNewPage() && !doesCharacterEnter
            let exitStateIndex = this.state.currentPage.states.length - 2
            let nextState = newPageSameCharacter ? 2 : exitStateIndex;

            newPageSameCharacter ? this.startNewPage(nextState) : this.setNextStateIndexAndGif(nextState)
        }
    }

    render() {
        return (
            <React.Fragment>
                <CharacterContext.Provider value={{
                    ...this.state,
                    doesCharacterEnter: this.doesCharacterEnter,
                    isCharacterExiting: this.isCharacterExiting,
                    checkBubbles: this.checkBubbles,
                    getCharacterType: this.getCharacterType,
                }}>
                    {this.props.children}
                </CharacterContext.Provider >
            </React.Fragment>
        )
    }
}


export default withRouter(CharacterDataProvider)