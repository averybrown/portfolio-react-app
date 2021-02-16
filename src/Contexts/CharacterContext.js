import React, { createContext, Component } from 'react';
import foxEnters from 'Assets/flipbook-fox-enter-scene.gif';
import foxEnters2 from 'Assets/flipbook-fox-enter-scene-2.gif';
import bearEnters from 'Assets/flipbook-bear-enter-scene.gif';
import bearEnters2 from 'Assets/flipbook-bear-enter-scene-2.gif';
import foxBubble from 'Assets/flipbook-final.gif';
import foxPlant from 'Assets/flipbook-plant.gif';
import bearIdle from 'Assets/flipbook-bear-idle.gif';
import { withRouter } from "react-router-dom";
import foxExit from 'Assets/flipbook-fox-exit-scene-1.gif';
import foxExitPlant from 'Assets/flipbook-fox-exit-scene-plant.gif';
import bearExit from 'Assets/flipbook-bear-exit-scene-1.gif';
import foxPlantGrowing from 'Assets/flipbook-plant-growing.gif';


// Create context object
export const CharacterContext = createContext();
// Component for consuming function components to subscribe to context changes
export const CharacterConsumer = CharacterContext.Consumer;

// Pages array contains information regarding each webpage, including the name of the page, 
// the character featured on the page, as well as the characters various animation states. 
// States indicate which gif to display, and the duration that the gif is displayed for, 
// as well as whether of not the gif is part of the character's exit animation, 
// whether the gif cycles indefinitely until the page is changed and the character exits, 
// as well as whether or not bubbles should be displayed.  
const pages = [
    {
        name: 'home', character: 'fox', states: [
            { animation: foxEnters, duration: 3000 },
            { animation: foxEnters2, duration: 3000 },
            { animation: foxBubble, bubbles: true, cycle: true },
            { animation: foxExit, duration: 2000, exit: true },
            { animation: foxEnters, duration: 3000, exit: true },
        ]
    },
    {
        name: 'projects', character: 'bear', states: [
            { animation: bearEnters, duration: 3000 },
            { animation: bearEnters2, duration: 4000 },
            { animation: bearIdle, cycle: true },
            { animation: bearExit, duration: 2000, exit: true },
            { animation: bearEnters, duration: 3000, exit: true },
        ]
    },
    {
        name: 'resume', character: 'fox', states: [
            { animation: foxEnters, duration: 3000 },
            { animation: foxEnters2, duration: 3000 },
            { animation: foxPlantGrowing, duration: 3000 },
            { animation: foxPlant, duration: 300, cycle: true },
            { animation: foxExitPlant, duration: 2000, exit: true },
            { animation: foxEnters, duration: 3000, exit: true },
        ]
    },
    {
        name: 'contact', character: 'bear', states: [
            { animation: bearEnters, duration: 3000 },
            { animation: bearEnters2, duration: 4000 },
            { animation: bearIdle, duration: 300, cycle: true },
            { animation: bearExit, duration: 2000, exit: true },
            { animation: bearEnters, duration: 3000, exit: true }
        ],
    }
]

let timeout;

class CharacterDataProvider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            /* The current page the user is on, updated only once the character 
             of the last page has exited the screen, if the character changes. */
            currentPage: undefined,
            /* The current index used to determine 
            which animation gif of the current page's character's states to display. */
            currentState: 0,
            /* The character animation gif that is currently playing, 
            retrieved from the current page's states array using the currentState index. */
            currentGif: undefined
        }
    }

    checkBubbles = () => {
        /* Returns true or false depending on if the current page's character's
        current state contains the bubbles flag */
        const { currentPage, currentState } = this.state;

        if (currentPage !== undefined && currentPage.states[currentState]) {
            return currentPage.states[currentState].bubbles;
        }
    }

    checkIfPlantGrowing = () => {
        const { currentPage, currentState } = this.state;
        let isPlantGrowing = false

        if (currentPage !== undefined) {
            let isResumePage = currentPage.name === 'resume';
            isPlantGrowing = isResumePage && currentState === 3
        }
        return isPlantGrowing
    }

    checkWillPlantGrow = () => {
        const { currentPage, currentState } = this.state;
        let willPlantGrow = false

        if (currentPage !== undefined) {
            let isResumePage = currentPage.name === 'resume';
            willPlantGrow = isResumePage && currentState === 2
        }
        return willPlantGrow
    }

    checkPlayFinalFrame = () => {
        const { currentPage, currentState } = this.state;
        let playFinalFrame = false;

        if (currentPage !== undefined) {
            playFinalFrame =  currentState === 2
        }
        return playFinalFrame
    }

    getCharacterType = () => {
        /* Returns fox or bear string depending on the current page */
        const { currentPage } = this.state;

        if (currentPage !== undefined) {
            return currentPage.character;
        }
    }

    getPage = () => {
        /* Returns the page from the pages array whose name attribute matches the current location pathname */
        let pathname = window.location.pathname

        return pathname === '/' ?
            pages.find(element => element.name === 'home')
            : pages.find(element => pathname.includes(element.name))
    }

    setCurrentPageState = async (currentPageData) => {
        /* Sets the currentPage state object */
        this.setState({ currentPage: currentPageData })
    }

    isNewPage = () => {
        /* Returns true if the currentPage state object has not been updated by the new location path, 
        false otherwise   */
        let currentPageData = this.getPage();

        const { currentPage } = this.state;

        return (currentPageData !== undefined && currentPage !== undefined) ?
            currentPageData !== currentPage
            : true
    }

    playNextState = () => {
        /* Checks if there is a state after the current one finishes for the current page,
        and whether or not that state should play. If the current state is meant to cycle 
        until the page changes, then it will return false, otherwise, if there is another 
        state then the function returns true */
        const { currentState, currentPage } = this.state;
        let nextStateIndex = currentState + 1;
        let nextStateExists = currentPage.states[nextStateIndex] !== undefined;
        let currentStateCycles = currentPage.states[currentState].cycle

        return nextStateExists && !currentStateCycles
    }

    isSameCharacter = () => {
        /* Checks to see if the new page selected has the same character as the last or not.
        Returns true if the character remains the same, otherwise false. */
        const { currentPage } = this.state;
        let currentPageData = this.getPage();

        if (currentPageData !== undefined && currentPage !== undefined) {
            return currentPageData.character === currentPage.character;
        }
    }

    isSameCharacterCurrentlyEntering = () => {
        /* Determines during a page change while a character is entering 
        whether the new page features the same character, in which case the function returns 
        true in order to avoid triggering an exit animation, otherwise false.  */
        let currentPageData = this.getPage();

        const { currentPage, currentState } = this.state;

        if (currentPageData !== undefined && currentPage !== undefined) {
            let isSameCharacter = this.isSameCharacter()
            let characterDoneEntrance = currentState > 1
            return isSameCharacter && !characterDoneEntrance
        } else return false
    }

    doesCharacterEnter = () => {
        /* Determines whether the entrance animations should play for the character entering the screen. 
        Returns true if there is a character change, otherwise checks if the character is on the second 
        state of the entrance, in which case it returns false */
        let currentPageData = this.getPage();
        const { currentPage, currentState } = this.state;

        if (currentPageData !== undefined && currentPage !== undefined) {
            let characterSwitched = !this.isSameCharacter()
            let characterDoneEntrance = currentState > 0
            return characterSwitched ? true : !characterDoneEntrance
        } else return true
    }

    isCharacterExiting = () => {
        /* Returns true if the current animation playing is an exit animation */
        const { currentPage, currentState } = this.state;

        if (currentPage !== undefined && currentPage.states[currentState]) {
            return currentPage.states[currentState].exit === true
        } else return false
    }

    isEndOfExit = () => {
        /* Determines if the exit animations are done playing and there are no more states to display.
        Returns true if there are no more states and the current state is an exit animation. */
        const { currentState, currentPage } = this.state;
        let nextStateIndex = currentState + 1;
        let characterExiting = currentPage.states[currentState].exit
        let endOfExit = currentPage.states[nextStateIndex] === undefined;

        return characterExiting && endOfExit;
    }

    startNewPage = (nextState) => {
        /* Calls setCurrentPageState to update the currentPage state object, 
        and then calls setNextStateIndexAndGif, passing the parameter 
        nextState to update the current Gif playing */
        let currentPageData = this.getPage();
        clearTimeout(timeout);

        this.setCurrentPageState(currentPageData).then(() => {
            this.setNextStateIndexAndGif(nextState)
        })
    }

    setNextStateIndexAndGif = (nextState) => {
        /* Updates the currentState index as well as the currentGif state object 
        to change the gif currently playing. Then, check whether or not the next state animation should
        play or not by calling playNextState. If the playNextState function returns true, call setTimeout 
        to ensure that the next animation will play after the current animation plays for its duration. 
        If the playNextState function returns false, check if the character is finishing exiting with 
        the function isEndOfExit. If isEndOfExit returns true, then update the currentPage state object 
        by calling startNewPage
         */
        clearTimeout(timeout);


        this.setState({ currentState: nextState, currentGif: this.state.currentPage.states[nextState].animation }, () => {
            if (this.playNextState()) {
                let duration = this.state.currentPage.states[this.state.currentState].duration
                timeout = setTimeout(this.updateCurrentState, duration)
            } else if (this.isEndOfExit()) {
                let nextStateIndex = 0;
                this.startNewPage(nextStateIndex)
            }
        })
    }


    updateCurrentState = () => {
        /* When setTimeout finishes, this function is called in order to clearTimeout 
        and increment the currentState index and update the currentGif object 
        by calling setNextStateIndexAndGif */
        const { currentState } = this.state;
        clearTimeout(timeout);

        let nextState = currentState + 1;
        /*if(MyCharacter !== undefined)
        {
            let nextGif = this.state.currentPage.states[nextState].animation;
            MyCharacter.SetCurrentStateAndGifForCharacter(nextGif);
        }*/
        this.setNextStateIndexAndGif(nextState);
    }


    componentWillUnmount() {
        clearTimeout(timeout);
    }

    componentDidMount() {
        /* When component mounts, set the state objects, first by calling setCurrentPageState 
        to update currentPage, then by updating the currentGif object with the animation of 
        the current page at index 0 */
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
        /* When the location changes, the character will either exit or stay.
         If the character is entering, the current character must exit first. 
         If the character is not exiting, start new page immediately, 
         otherwise after the character exit animation has played. */

        if (this.props.location !== newProps.location && this.state.currentPage !== undefined) {
            clearTimeout(timeout);

            // If the new page will have the same character entering, don't play the character's exit animation.
            let newPageSameCharacter = this.isNewPage() && this.isSameCharacter()
            let isSamePage = !this.isNewPage()
            let sameCharacterEntering = this.isSameCharacterCurrentlyEntering()
            // Index of the start of the exit animation state.
            let exitStateIndex = this.state.currentPage.states.length - 2
            // If the location is a new page with same character, and the character is not in the 
            // middle of its entrance animation states, 
            // skip to index 2, after the entrance animations. 
            let nextState = newPageSameCharacter && !sameCharacterEntering ?
                2 : sameCharacterEntering || isSamePage ?
                    this.state.currentState
                    : exitStateIndex;


            // If no character is exiting, meaning the new page features the same character, 
            // which may be in the middle of its entrance animation, then update  
            // the currentPageObject by calling startNewPage. Otherwise, the character
            // must exit first before the new character enters the scene, and 
            // setNextStateIndexAndGif must be called in order to play the exit animations.
            newPageSameCharacter || sameCharacterEntering ? this.startNewPage(nextState) : this.setNextStateIndexAndGif(nextState)
        }
    }


    render() {
        return (
            //  Component allows consuming components to subscribe to context changes
            <CharacterContext.Provider value={{
                ...this.state,
                doesCharacterEnter: this.doesCharacterEnter,
                isCharacterExiting: this.isCharacterExiting,
                checkBubbles: this.checkBubbles,
                getCharacterType: this.getCharacterType,
                getMyCharacter: this.getMyCharacter,
                setMyCharacter: this.setMyCharacter,
                setNextStateIndexAndGif: this.setNextStateIndexAndGif,
                checkIfPlantGrowing: this.checkIfPlantGrowing, 
                checkPlayFinalFrame: this.checkPlayFinalFrame,
                checkWillPlantGrow: this.checkWillPlantGrow
            }}>
                {this.props.children}
            </CharacterContext.Provider >
        )
    }
}


export default withRouter(CharacterDataProvider)