import React, { Component } from "react";
import "./ganbatte.css";

class Ganbatte extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuth: false,
      clicked: false
    };
  }

  toggle = type => event => {
    this.setState(state => {
      return {
        [type]: !this.state.type
      };
    });
  };

  handlePlayGif() {
    this.currentGif.play();
  }

  handlePauseGif() {
    this.currentGif.pause();
  }

  render() {
    return (
      <>
        <div className={"batteContainer"}>
          <div className={"contentWrapper"}>
            <div className={"content"}>
              <div
                style={{ backgroundImage: 'url("/treeImp.gif")' }}
                className={"boxes"}
              >
                <img className={"gifFrame"} src={"/gifFrame.png"}></img>
              </div>

              <div
                style={{ backgroundImage: 'url("/Conversion.gif")' }}
                className={"boxes"}
              >
                <img className={"gifFrame"} src={"/gifFrame.png"}></img>
              </div>

              <div
                style={{ backgroundImage: 'url("/eleConversion.gif")' }}
                className={"boxes"}
              >
                <img className={"gifFrame"} src={"/gifFrame.png"}></img>
              </div>

              <div
                style={{ backgroundImage: 'url("/eleConversionFinal.gif")' }}
                className={"boxes"}
              >
                <img className={"gifFrame"} src={"/gifFrame.png"}></img>
              </div>

              <div
                style={{ backgroundImage: 'url("/thePlugBug.gif")' }}
                className={"boxes"}
              >
                <img className={"gifFrame"} src={"/gifFrame.png"}></img>
              </div>

              <div className={"boxes"}>
                <img className={"gifFrame"} src={"/gifFrame.png"}></img>
              </div>

              <div className={"boxes"}>
                <img className={"gifFrame"} src={"/gifFrame.png"}></img>
              </div>

              <div className={"boxes"}>
                <img className={"gifFrame"} src={"/gifFrame.png"}></img>
              </div>

              <div className={"boxes"}>
                <img className={"gifFrame"} src={"/gifFrame.png"}></img>
              </div>

              <div className={"boxes"}>
                <img className={"gifFrame"} src={"/gifFrame.png"}></img>
              </div>

              <div className={"boxes"}>
                <img className={"gifFrame"} src={"/gifFrame.png"}></img>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Ganbatte;
