import React, { Component } from 'react'
import './login.css'
import { apiHandleSignUpAndLogIn } from '../../api/api';
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
            formValid: false,
            emailValid: true,
            passValid: true,
            errorMessage: false,
            errorToggle: false,
            pane: "url('/ganbatteFrame.png')"
        }
    }

    updateDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    };
    componentDidMount = () => {
        window.addEventListener('resize', this.updateDimensions);
        // this.setPane()

    }

    handleInputOnChange = (event) => {
        let name = event.target.name
        let value = event.target.value
        this.setState({
            [name]: value
        }, () => {
            this.validateField(name, value)
        })
    }
    validateField(name, value) {

        let pValid, eValid
        const emailCheck = RegExp(/^([\w .%+-]+)@([\w-]+\.)+([\w]{2,})$/)

        let noErrorPane = "url('/ganbatteFrame.png')"
        let eNotVal = "url('/wrongEmail.png')"
        let pNotVal = "url('/wrongPass.png')"
        // let notVal = "url('/shallNotPass.png')"

        switch (name) {
            case 'email':
                eValid = emailCheck.test(value)
                this.setState({
                    emailValid: eValid,
                    pane: eValid ? noErrorPane : eNotVal
                }, () => {
                    this.validateForm()
                    console.log('Email Valid : ', eValid)
                });
                break;
            case 'password':
                pValid = value.length >= 6;
                this.setState({
                    passValid: pValid,
                    pane: pValid ? noErrorPane : pNotVal
                }, () => {
                    this.validateForm()
                    console.log("Password Valid : ", pValid)

                });

                break;
            default:
                break;
        }

    }

    validateForm = () => {
        this.setState({ formValid: this.state.emailValid && this.state.passValid });

    }


    handleInputOnSubmit = (event) => {
        event.preventDefault()



        if (this.state.formValid) {
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
        } else if (!this.state.formValid) {
            this.setState({
                pane: "url('/shallNotPass.png')"
            });
        }


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

    changeImage = () => {
        this.setState({
            touched: !this.state.touched
        }, () => {
            setTimeout(() => {

                this.setState({
                    touched: !this.state.touched
                })
            }, 200);
        })
    }

    incorrectEmail = () => {
        return (
            <div className="error"> </div>
        )

    }


    render() {
        console.log(this.state.pane);

        let touched = this.state.touched ? "submit touched" : "submit";
        return (
            <>
                <div style={{ backgroundImage: this.state.pane }} className={'loginContainer'}>
                    {/* <div style={styles.loginContainer}> */}


                    {/* {!this.state.emailValid ? this.incorrectEmail() : ""} */}
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

                        {/* <span>Window size: {this.state.width} x {this.state.height}</span> */}
                        <div className={'loginButton'} >
                            <button onClick={this.changeImage} className={touched}> </button>
                        </div>

                    </form>

                </div >
            </>
        )
    }
}
const styles = {
    loginContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundImage: "url('/ganbatteFrame.png')",
        backgroundPosition: 'center',
        backgroundSize: '99% 99%',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
        overFlow: 'hidden',

    }
}


export default Login
