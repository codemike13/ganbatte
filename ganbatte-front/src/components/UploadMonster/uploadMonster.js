import React, { Component, useState, useEffect, useContext } from "react";
import "./uploadMonster.css";
import MonsterPanel from "./MonsterPanel/MonsterPanel";
import { PanelSize } from "./MonsterPanel/MonsterPanel";

const PanelContext = React.createContext(PanelSize);
class UploadMonster extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuth: false,
      clicked: false
    };
  }
  componentDidMount = () => {};

  toggle = type => event => {
    this.setState(state => {
      return {
        [type]: !this.state.type
      };
    });
  };

  console = () => {
    console.log("here");
  };
  componentDidUpdate = () => {
    this.console();
  };
  render() {
    return (
      <>
        <div className={"batteContainer"}>
          <div className={"contentWrapper"}>
            <div className={"content"}>
              <MonsterPanel direction="s">
                <div className={"sliderM"}>
                  <PanelSize.Consumer>
                    {value => (
                      <>
                        <div
                          style={{
                            backgroundImage:
                              value <= 410
                                ? 'url("/mouthOpen.png")'
                                : 'url("/HandsDown.png")'
                          }}
                          className={"hands"}
                          onDrag={this.handleDrag}
                        >
                          {this.console}
                        </div>
                      </>
                    )}
                  </PanelSize.Consumer>
                </div>
              </MonsterPanel>
              <div className={"fileSelect"}>
                <form
                  action="fileupload"
                  method="post"
                  enctype="multipart/form-data"
                >
                  <input type="file" name="fileToUpload" />
                  <input type="submit"></input>
                </form>
              </div>
              <div id="dropzone" className={"dropZone"}>
                {/* <File></File> */}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default UploadMonster;
