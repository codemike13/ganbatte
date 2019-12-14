import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './components/Login/login'


class App extends Component {

    state = {

    }

    render() {
        return (
            <>
                <Login />
            </>
        )

    }

}




ReactDOM.render(<App />, document.getElementById('root'));

