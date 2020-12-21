import React, { createContext, Component } from 'react';


export const SoundContext = createContext();
export const SoundConsumer = SoundContext.Consumer;


export class SoundProvider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            soundOn: false,
        }
    }

    switchSoundOn = () => {
        const { soundOn } = this.state;
        this.setState({ soundOn: !soundOn })
    }

    render() {
        return (
            <SoundContext.Provider value={{
                ...this.state,
                switchSoundOn: this.switchSoundOn,
            }}>
                {this.props.children}
            </SoundContext.Provider >
        )
    }
}

export const withSoundContext = Component => props => (
    <SoundConsumer>
        {value => <Component soundContext={value} {...props} />}
    </SoundConsumer>
) 