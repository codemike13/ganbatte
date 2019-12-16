import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './components/Login/login'
import Ganbatte from './components/Ganbatte/ganbatte'
import NavPanel from './components/Nav/navPanelResize'


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
                    <>
                        <NavPanel >
                            <Ganbatte
                                auth={this.state.isAuth}
                                appHandleLogout={this.appHandleLogout}
                            />


                        </NavPanel>



                    </>
                    {/* 
                    {this.state.isAuth ? (
                        <>
                            <NavPanel >
                                <Ganbatte
                                    auth={this.state.isAuth}
                                    appHandleLogout={this.appHandleLogout}
                                />


                            </NavPanel>



                        </>
                    ) : (
                            <Login

                                appHandleAuthSubmit={this.appHandleAuthSubmit}
                                appHandleLogout={this.appHandleLogout}
                            />

                        )} */}


                </div>
            </>
        )

    }

}




ReactDOM.render(<App />, document.getElementById('root'));

