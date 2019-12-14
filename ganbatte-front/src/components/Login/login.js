import React, { Component, useState } from 'react'
import './login.css'

class Login extends Component {
    state = {

    }
    render() {
        console.log(window.innerWidth)
        return (
            <>
                <div className={'container'}>

                    <div className={'login'} >
                        <input type='text' placeholder={'       Username'} className={'input1'} />
                        <input placeholder={'       Password'} className={'input2'} />

                    </div>
                    <div>
                        <button className={'loginButton'}> Here</button>
                    </div>
                </div>

            </>
        )
    }
}

export default Login
