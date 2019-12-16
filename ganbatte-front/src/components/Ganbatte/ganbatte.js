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
                <div className={'content'}>
                    <div className={'boxes'}>  <button className='btn btn-warning' onClick={this.logOut}>
                        Log out
                        </button></div>
                    <div className={'boxes'}>2</div>
                    <div className={'boxes'}>3</div>
                    <div className={'boxes'}>4</div>
                    <div className={'boxes'}>5</div>
                    <div className={'boxes'}>6</div>
                    <div className={'boxes'}>7</div>
                    <div className={'boxes'}>1</div>
                    <div className={'boxes'}>2</div>
                    <div className={'boxes'}>3</div>
                    <div className={'boxes'}>4</div>
                    <div className={'boxes'}>5</div>
                    <div className={'boxes'}>6</div>
                    <div className={'boxes'}>7</div>

                </div>



            </div>
        )

    }
}


export default Ganbatte