import React, { Component } from 'react'
// import { DropTarget } from 'react-drag-drop-container';
import ResizePanel from '../rPanel/ResizePanel';
// import { PanelSize } from '../ResizePanel/ResizePanel'

import './navPanel.css';


class NavPanel extends Component {

    state = {
        size: 0,
        isOpen: false
    }
    consume(e) {
        e.containerElem.style.display = 'none';
    }



    update = (type, value) => event => {
        this.setState(state => {
            return {
                [type]: value
            };
        });
    };

    handleDrag = (e, ui) => {

        this.setState((s, p) => ({ size: Math.max(10, this.state.size - (ui.deltaY * -1)) }))
    }

    onChangeValueHandler = (val) => {
        this.setState({ value: val.target.value })
        console.log(val);

    }

    render() {



        return (

            <>
                <div className={'slider'}>

                    <ResizePanel value={this.props.value} onChangeValue={this.onChangeValueHandler} onDrag={this.handleDrag} direction="e">


                        <section className={'div2'}>
                            <img className={'slideTabImg'} src='./navPaneClear.png' alt=""></img>

                        </section>
                    </ResizePanel>
                    {React.Children.only(this.props.children)}

                </div>
            </>

        )
    }
}
export default NavPanel

// const styles = {
//     monster: {
//         backgroundImage: 'url("/MonsterHandsDown.png")'
//     }
