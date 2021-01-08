import React, { createContext, Component } from 'react';
// import foxBubble from 'Assets/fox-blowing-bubbles.gif';
import foxBubble from 'Assets/flipbook-final.gif';
import foxIdle from 'Assets/fox-idle.gif';
import { withRouter } from "react-router-dom";
// import bear from 'Assets/bear.png';
import bear from 'Assets/bear2.png';


export const CharacterContext = createContext();
export const CharacterConsumer = CharacterContext.Consumer;

const animations = {
    FOXENTRANCE: 'enter',
    BEARENTRANCE: 'bear enter',
    FOXBUBBLES: foxBubble,
    FOXPLANTGROWING: 'plant growing', 
    FOXPLANT: foxIdle,
    FOXPHONE: 'fox phone',
    BEARWAVE: bear, 
    BEARLEAF: bear, 
}

const pages = [
    {
        name: 'home', character: 'fox', bubbles: true, states: [
            { animation: animations.FOXENTRANCE, duration: 300 },
            { animation: animations.FOXBUBBLES }
        ]
    },
    {
        name: 'projects', character: 'bear', states: [
            { animation: animations.BEARENTRANCE, duration: 300 },
            { animation: animations.BEARWAVE }
        ]
    },
    {
        name: 'resume', character: 'fox', states: [
            { animation: animations.FOXENTRANCE, duration: 300 },
            { animation: animations.FOXPLANT, duration: 400 },
            { animation: animations.FOXPLANTGROWING, duration: 300 }]
    },
    {
        name: 'contact', character: 'bear', states: [
            { animation: animations.BEARENTRANCE, duration: 400 },
            { animation: animations.BEARLEAF, duration: 300 }]
    }
]


class CharacterDataProvider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: undefined,
            lastPage: undefined,
            startingCharacter: undefined
        }
    }

    doesCharacterEnter = () => {
        const { currentPage, lastPage } = this.state;
        return (currentPage !== undefined && lastPage !== undefined) ?
            currentPage.character !== lastPage.character
            : true
    }

    getCharacterStates = () => {
        const { currentPage } = this.state;
        if (currentPage !== undefined) return currentPage.states
    }

    checkBubbles = () => {
        const { currentPage } = this.state;
        if (currentPage !== undefined) {
            return currentPage.bubbles;
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

    setStartingCharacter = async (currentPageData) => {
        if (currentPageData !== undefined) {
            this.setState({ startingCharacter: currentPageData.character })
        }
    }

    componentDidMount() {
        let currentPageData = this.getPage();
        this.setCurrentPageState(currentPageData)
        this.setStartingCharacter(currentPageData)
    }

    componentDidUpdate(newProps) {
        const { currentPage } = this.state;

        if (this.props.location !== newProps.location) {
            let currentPageData = this.getPage();
            if (currentPageData !== currentPage) {
                this.setCurrentPageState(currentPageData)
            }
        }
    }

    render() {
        return (
            <CharacterContext.Provider value={{
                ...this.state,
                doesCharacterEnter: this.doesCharacterEnter,
                checkBubbles: this.checkBubbles,
                getCharacterStates: this.getCharacterStates,
                getCharacterType: this.getCharacterType
            }}>
                {this.props.children}
            </CharacterContext.Provider >
        )
    }
}


export default withRouter(CharacterDataProvider)