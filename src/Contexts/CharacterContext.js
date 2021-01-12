import React, { createContext, Component } from 'react';
// import foxBubble from 'Assets/fox-blowing-bubbles.gif';
import foxEnters from 'Assets/flipbook-fox-enter-scene.gif';
import foxEnters2 from 'Assets/flipbook-fox-enter-scene-2.gif';
import foxBubble from 'Assets/flipbook-final.gif';
import foxIdle from 'Assets/fox-idle.gif';
import { withRouter } from "react-router-dom";
// import bear from 'Assets/bear.png';
import bear from 'Assets/bear.png';


export const CharacterContext = createContext();
export const CharacterConsumer = CharacterContext.Consumer;

const animations = {
    FOXENTRANCE: foxEnters,
    FOXENTRANCE2: foxEnters2,
    BEARENTRANCE: 'bear enter',
    FOXBUBBLES: foxBubble,
    FOXPLANTGROWING: foxIdle,
    FOXPLANT: foxIdle,
    FOXPHONE: 'fox phone',
    BEARWAVE: bear,
    BEARLEAF: bear,
}

const pages = [
    {
        name: 'home', character: 'fox', states: [
            { animation: animations.FOXENTRANCE, duration: 1800 },
            { animation: animations.FOXENTRANCE2, duration: 200 },
            { animation: animations.FOXBUBBLES, bubbles: true }
        ]
    },
    {
        name: 'projects', character: 'bear', states: [
            { animation: animations.BEARENTRANCE, duration: 1800 },
            { animation: animations.BEARWAVE }
        ]
    },
    {
        name: 'resume', character: 'fox', states: [
            { animation: animations.FOXENTRANCE, duration: 1800 },
            { animation: animations.FOXENTRANCE2, duration: 200 },
            { animation: animations.FOXPLANT, duration: 400 },
            { animation: animations.FOXPLANTGROWING, duration: 300 }
        ]
    },
    {
        name: 'contact', character: 'bear', states: [
            { animation: animations.BEARENTRANCE, duration: 1800 },
            { animation: animations.BEARLEAF, duration: 300 }]
    }
]


class CharacterDataProvider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: undefined,
            lastPage: undefined,
            currentState: 0,
            timeout: null
        }
    }

    doesCharacterEnter = () => {
        const { currentPage, lastPage } = this.state;

        return (currentPage !== undefined && lastPage !== undefined) ?
            currentPage.character !== lastPage.character
            : true
    }

    isNewPage = () => {
        const { currentPage, lastPage } = this.state;

        return (currentPage !== undefined && lastPage !== undefined) ?
            currentPage !== lastPage
            : true
    }

    getCharacterAnimation = () => {
        const { currentPage, currentState } = this.state;

        if (currentPage !== undefined && currentPage.states[currentState] !== undefined) {
            return (currentPage.states[currentState].animation)
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

        currentPage === undefined ?
            this.setState({ currentPage: currentPageData })
            : this.setState({ currentPage: currentPageData, lastPage: currentPage })
    }

    isNextState = () => {
        const { currentPage, currentState } = this.state;
        let nextState = currentState + 1

        return currentPage.states[nextState] !== undefined
    }

    updateCurrentState = () => {
        const { currentState, currentPage } = this.state;
        let nextState = currentState + 1

        this.setState({ currentState: nextState }, () => {
            console.log(this.state.currentState)
            if (this.isNextState()) {
                let duration = currentPage.states[this.state.currentState].duration
                this.setState({ timeout: setTimeout(this.updateCurrentState, duration) })
            }
        })

    }

    componentDidMount() {
        let currentPageData = this.getPage();

        this.setCurrentPageState(currentPageData).then(() => {
            if (this.state.currentPage !== undefined) {
                let duration = this.state.currentPage.states[0].duration
                this.setState({ timeout: setTimeout(this.updateCurrentState, duration) })
            }
        })
    }

    componentDidUpdate(newProps) {
        const { timeout } = this.state;

        if (this.props.location !== newProps.location) {
            let currentPageData = this.getPage();

            this.setCurrentPageState(currentPageData).then(() => {
                let newPageAndCharacterEnters = this.isNewPage() && this.doesCharacterEnter()
                let newPage = this.isNewPage() && !this.doesCharacterEnter()
                let currentState = newPage ? 2 : newPageAndCharacterEnters ? 0 : 2;

                this.setState({ currentState: currentState }, () => {
                    console.log(this.state.currentState, this.state.currentPage.states[this.state.currentState].duration)
                    clearTimeout(timeout);
                    if (this.state.currentPage !== undefined && this.isNextState()) {
                        this.setState(
                            {
                                timeout: setTimeout(this.updateCurrentState,
                                    this.state.currentPage.states[this.state.currentState].duration)
                            })
                    }
                })
            })
        }
    }

    render() {
        return (
            <CharacterContext.Provider value={{
                ...this.state,
                doesCharacterEnter: this.doesCharacterEnter,
                checkBubbles: this.checkBubbles,
                getCharacterAnimation: this.getCharacterAnimation,
                getCharacterType: this.getCharacterType,
            }}>
                {this.props.children}
            </CharacterContext.Provider >
        )
    }
}


export default withRouter(CharacterDataProvider)