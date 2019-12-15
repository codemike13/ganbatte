import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './components/Login/login'
import Ganbatte from './components/Ganbatte/ganbatte'


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
                <div className={'container'}>

                    {this.state.isAuth ? (
                        <>
                            <Ganbatte
                                auth={this.state.isAuth}
                                appHandleLogout={this.appHandleLogout}
                            />


                        </>
                    ) : (
                            <Login

                                appHandleAuthSubmit={this.appHandleAuthSubmit}
                                appHandleLogout={this.appHandleLogout}
                            />

                        )}


                </div>
            </>
        )

    }

}




ReactDOM.render(<App />, document.getElementById('root'));

