import React, { Component } from 'react';
import ResizePanel from "react-resize-panel";
import Drawer from 'react-drag-drawer'

import { Rnd } from 'react-rnd'
import './navPanel.css';



export default class FoodBox extends Component {

    state = {
        openBox: false
    }

    openBox = () => {
        this.setState({
            openBox: !this.state.openBox,
        })
    }

    toggle = (type, value) => event => {
        this.setState(state => {
            return {
                [type]: value
            };
        });
    };


    render() {

        const {
            openBox
        } = this.state;


        return (
            <>
                <div onClick={this.toggle("openBox", true)}> Click </div>
                <Drawer
                    containerOpacity={0.9}
                    open={openBox}
                    onRequestClose={this.toggle("openBox", false)}
                    direction={'bottom'}
                >
                    <div className={'fileUpload'}>
                        I'm in a drawer!
            <button onClick={this.toggle("openBox", false)}>
                            Close drawer
            </button>
                    </div>
                </Drawer>

            </>
        )
    }
}


// const styles = {
//     container: {
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         border: '1px solid black',
//     },
//     card: {
//         height: '200px',
//         width: '200px',
//         alignItems: "center",
//         justifyContent: "center",
//         border: '1px solid black',
//         margin: '40px auto;'

//     }
// }





















    // <TransitionGroup
            //     transitionEnterTimeout={500}
            // >
            //     <div
            //         className={"fileUpload "}
            //         onClick={this.openBox}
            //     > Click to load food.. I mean File
            //     {this.state.openBox && <div> HEres some food</div>}
            //     </div>
            //     <div className={'dropZone'}>
            //         <File></File>
            //     </div>
            // </TransitionGroup>
            // <ReactGridLayout className="layout" cols={12} rowHeight={30}>
            //     <div key={1} _grid={{ x: 0, y: 0, w: 1, h: 2 }}>1</div>
            //     <div key={2} _grid={{ x: 9, y: 0, w: 1, h: 2 }}>2</div>
            //     <div key={3} _grid={{ x: 5, y: 0, w: 1, h: 2 }}>3</div>
            // </ReactGridLayout>
            // <div className={'fileUpload'}>

            //     <Rnd
            //         disableDragging={true}
            //         style={styles.container}
            //         size={{ width: this.state.width, height: this.state.height }}
            //         maxHeight={200}
            //         onResizeStop={(e, direction, ref, delta, position) => {
            //             this.setState({
            //                 width: ref.style.width,
            //                 height: ref.style.height,
            //             });
            //         }}
            //     >
            //         rnd
            //     </Rnd>
            // </div>