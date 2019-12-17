import React, { Component } from 'react'
import './ganbatte.css'

class Ganbatte extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isAuth: false,
            clicked: false,

        }
    }
    componentDidMount = () => {

    }




    toggle = (type) => event => {
        this.setState(state => {
            return {
                [type]: !this.state.type
            };
        });
    };





    render() {
        return (
            <>
                <div className={'batteContainer'} >
                    <div className={'contentWrapper'}>

                        <div className={'content'}>





                            <div className={'boxes'}>

                            </div>

                            <div className={'boxes'} >
                            </div>


                            <div className={'boxes'}>3</div>


                            <div className={'boxes'}>4</div>


                            <div className={'boxes'}>5</div>


                            <div className={'boxes'}>3</div>


                            <div className={'boxes'}>4</div>


                            <div className={'boxes'}>5</div>

                            <div className={'boxes'}>3</div>


                            <div className={'boxes'}>4</div>


                            <div className={'boxes'}>5</div>



                        </div>
                    </div>



                </div>
            </>
        )

    }
}


export default Ganbatte