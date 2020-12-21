import React, { createContext, Component } from 'react';
// import { useLocation } from 'react-router-dom';
import foxBubble from 'Assets/fox-blowing-bubbles.gif';
import foxIdle from 'Assets/fox-idle.gif';


export const CharacterContext = createContext();
export const CharacterConsumer = CharacterContext.Consumer;

const animations = {
    FOXENTRANCE: 'enter',
    BEARENTRANCE: 'bear enter',
    FOXBUBBLES: foxBubble,
    FOXIDLE: foxIdle,
    BEARBALLOONS: 'bear balloons',
    FOXPHONE: 'fox phone',
    BEARWAVE: 'bear wave'
}

const pages = [
    { name: 'home', character: 'fox', bubbles: true, states: [{ animation: animations.FOXENTRANCE }, { animation: animations.FOXBUBBLES }] },
    { name: 'projects', character: 'bear', states: [{ animation: animations.BEARENTRANCE }, { animation: animations.FOXIDLE }] },
    { name: 'resume', character: 'bear', states: [{ animation: animations.FOXENTRANCE }, { animation: animations.FOXIDLE }] },
    { name: 'contact', character: 'fox', states: [{ animation: animations.BEARENTRANCE }, { animation: animations.FOXIDLE }] }
]


export class CharacterDataProvider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: undefined,
            lastPage: undefined,
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

    componentDidMount() {
        let currentPageData = this.getPage();
        this.setCurrentPageState(currentPageData).then(() => console.log(this.state.currentPage))
    }

    componentDidUpdate() {
        console.log("update")
        const { currentPage } = this.state;
        if (currentPage !== undefined) {
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


export const withCharacterContext = Component => props => (
    <CharacterConsumer>
        {value => <Component CharacterContext={value} {...props} />}
    </CharacterConsumer>
) 