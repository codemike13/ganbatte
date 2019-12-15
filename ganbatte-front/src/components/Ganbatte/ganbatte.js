import React, { Component } from 'react'
import './ganbatte.css'
import NavPanel from '../Nav/navPanel'
import setAuthJWT from '../../api/setAuthJWT'

class Ganbatte extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isAuth: false,
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


    render() {
        return (
            <div className={'batteContainer'}>
                <>
                    <NavPanel />
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


            </div>
        )

    }
}


export default Ganbatte