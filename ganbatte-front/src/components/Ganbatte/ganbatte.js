import React, { Component } from 'react'
import './ganbatte.css'
import NavPanel from '../Nav/navPanel'
import setAuthJWT from '../../api/setAuthJWT'
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';


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

    dropped(e) {
        e.containerElem.style.visibility = 'hidden';
    }


    render() {
        return (
            <div className={'batteContainer'}>
                <div className={'contentWrapper'}>

                    <DropTarget
                        targetKey="foo"
                        onHit={this.dropped}
                        on>
                        <section className={'enlarge'}>
                            enlarger zone
                        </section>
                    </DropTarget>
                    <div className={'content'}>


                        <DragDropContainer
                            size={this.props.size}
                            targetKey='foo'
                        >
                            <div className={'boxes'}>  <button className='btn btn-warning' onClick={this.logOut}>
                                Log out
                        </button></div>
                        </DragDropContainer>
                        <DragDropContainer>
                            <div className={'boxes'}>2</div>

                        </DragDropContainer>
                        <DragDropContainer>
                            <div className={'boxes'}>3</div>

                        </DragDropContainer>
                        <DragDropContainer>
                            <div className={'boxes'}>4</div>

                        </DragDropContainer>
                        <DragDropContainer>
                            <div className={'boxes'}>5</div>

                        </DragDropContainer>



                    </div>
                </div>



            </div>
        )

    }
}


export default Ganbatte