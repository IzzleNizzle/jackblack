import React, { Component } from 'react'

const MyContext = React.createContext();

export class MyProvider extends Component {
    state = {
        handOne: '',
        handTwo: '',
        handThree: '',
        handFour: '',
    }
    cleanInp = val => {
        switch (val) {
            case 'KING':
                return 12
            case 'QUEEN':
                return 11
            case 'JACK':
                return 10
            case 'ACE':
                return 11
            default:
                return val
        }
    }
    render() {
        return (
            <MyContext.Provider value={{
                state: this.state,
                setHandOne: (val) => {
                    val = this.cleanInp(val)
                    this.setState({
                        handOne: val
                    })
                },
                setHandTwo: (val) => {
                    val = this.cleanInp(val)
                    this.setState({
                        handTwo: val
                    })
                },
                setHandThree: (val) => {
                    val = this.cleanInp(val)
                    this.setState({
                        handThree: val
                    })
                },
                setHandFour: (val) => {
                    val = this.cleanInp(val)
                    this.setState({
                        handFour: val
                    })
                }
            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export const withContext = Component => {
    return props => {
        return (
            <MyContext.Consumer>
                {globalState => {
                    return <Component {...globalState} {...props} />;
                }}
            </MyContext.Consumer>
        );
    };
};
