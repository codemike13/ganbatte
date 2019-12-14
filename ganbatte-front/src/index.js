import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './components/Login/login'


class App extends Component {

    state = {
        isAuth: false
    }
    appHandleAuthSubmit = () => {
        this.setState({
            isAuth: true
        })
    }

    appHandleLogout = () => {
        this.setState({
            isAuth: false
        })
    }
    render() {
        return (
            <>
                <Login
                    appHandleAuthSubmit={this.appHandleAuthSubmit}
                    appHandleLogout={this.appHandleLogout}
                />
            </>
        )

    }

}




ReactDOM.render(<App />, document.getElementById('root'));

