import React, { Component } from "react";
import "./uploadMonster.css";
import MonsterPanel from "./MonsterPanel/MonsterPanel";
import { PanelSize } from "./MonsterPanel/MonsterPanel";

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

  render() {
    return (
      <>
        <div className={"batteContainer"}>
          <div className={"contentWrapper"}>
            <div className={"content"}>
              <MonsterPanel direction="s">
                <div className={"slider"}>
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
                        ></div>
                      </>
                    )}
                  </PanelSize.Consumer>
                </div>
              </MonsterPanel>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default UploadMonster;
