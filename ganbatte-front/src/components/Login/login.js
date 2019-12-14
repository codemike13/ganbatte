import React, { Component, useState } from 'react'
import './login.css'
import { apiAuth, apiHandleSignUpAndLogIn } from '../../api/api';
import setAuthJWT from '../../api/setAuthJWT'


class Login extends Component {
    constructor(props) {
        super(props)


        this.state = {
            width: 0,
            height: 0,
            touched: false,
            email: '',
            password: '',
            isAuth: false,
            loggedInEmail: '',
            errorMessage: false,
            errorToggle: false
        }
    }

    updateDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    };
    componentDidMount = () => {
        window.addEventListener('resize', this.updateDimensions);
        apiAuth()
            .then(userObj => {
                this.setState({
                    isAuth: true,
                    loggedInEmail: userObj.email
                }, () => {
                    this.props.appHandleAuthSubmit()
                })
            })
            .catch(err => console.log(err))

    }

    handleInputOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleInputOnSubmit = (event) => {
        event.preventDefault()

        apiHandleSignUpAndLogIn({
            email: this.state.email,
            password: this.state.password
        })
            .then(result => {
                const { email } = result

                this.setState({
                    isAuth: true,
                    loggedInEmail: email,
                    email: '',
                    password: '',
                    errorToggle: false,
                    errorMessage: false
                }, () => {
                    this.props.appHandleAuthSubmit()
                })
            })
            .catch(errorMessage => {
                this.setState({
                    errorToggle: true,
                    errorMessage: errorMessage
                })
            })
    }

    logOut = () => {
        this.setState({
            isAuth: false
        }, () => {
            this.props.appHandleLogout()

            localStorage.removeItem('jwtToken')

            setAuthJWT(null)
        })
    }





    render() {
        let btn_class = this.state.touched ? "submit2" : "submit";
        console.log(window.innerWidth)
        return (
            <>
                {this.state.isAuth ? (
                    <>
                        <span>
                            {this.state.loggedInEmail}
                        </span>
                        <button
                            className='btn btn-warning'
                            onClick={this.logOut}
                        >
                            Log out
                        </button>
                    </>


                ) : (
                        <div className={'container'}>

                            <form onSubmit={this.handleInputOnSubmit}>
                                <div className={'login'} >

                                    <input
                                        type='text'
                                        name='email'
                                        placeholder='Username'
                                        className={'input1'}
                                        onChange={this.handleInputOnChange}

                                    />
                                    <input
                                        type='text'
                                        name='password'
                                        placeholder='Password'
                                        className={'input2'}
                                        onChange={this.handleInputOnChange}

                                    />

                                </div>

                            </form>
                            {/* <span>Window size: {this.state.width} x {this.state.height}</span> */}
                            <div className={'loginButton'} >
                                <div onClick={this.changeImage} className={btn_class}> </div>
                            </div>
                        </div >


                    )
                }



            </>
        )
    }
}

export default Login
