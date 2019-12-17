import React, { Component } from "react";
import "./uploadMonster.css";
import MonsterPanel from "./MonsterPanel/MonsterPanel";
import { PanelSize } from "./MonsterPanel/MonsterPanel";
import { apiHandleFileUpload } from "../../api/api";
class UploadMonster extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFile: null,
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

  handleInputOnSubmit = event => {
    event.preventDefault();
    const data = new FormData();
    data.append("file", this.state.selectedFile);

    apiHandleFileUpload(this.state.selectedFile)
      .then(result => {
        console.log(result);
      })
      .catch(errorMessage => {
        console.log(errorMessage);
      });
  };

  onChangeHandler = event => {
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0
    });
  };

  // onClickHandler = () => {
  //   const data = new FormData();
  //   data.append("file", this.state.selectedFile);
  // };

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
                <input
                  type="file"
                  name="file"
                  onChange={this.onChangeHandler}
                />

                <input onClick={this.handleInputOnSubmit} type="submit"></input>
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
