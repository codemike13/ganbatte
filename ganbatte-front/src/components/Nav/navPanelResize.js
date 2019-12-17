import React, { Component, useState, useEffect, useRef } from "react";
import ResizePanel from "../rPanel/ResizePanel";
import setAuthJWT from "../../api/setAuthJWT";

import "./navPanel.css";

class NavPanel extends Component {
  state = {
    isOpen: false,
    size: 0
  };
  consume(e) {
    e.containerElem.style.display = "none";
  }

  logOut = () => {
    this.setState(
      {
        isAuth: false
      },
      () => {
        this.props.appHandleLogout();

        localStorage.removeItem("jwtToken");

        setAuthJWT(null);
      }
    );
  };

  update = (type, value) => event => {
    this.setState(state => {
      return {
        [type]: value
      };
    });
  };

  render() {
    return (
      <>
        <div
          onDrag={this.handleDrag}
          className={"slider"}
          size={this.state.size}
        >
          <ResizePanel value={this.props.isAuth} direction="e">
            <section className={"navTab"}>
              <section className={"slideTabImg"}>
                <div className={"buttonBox"}>
                  <button
                    onClick={() => {
                      this.props.bClicked(1);
                    }}
                    className={"button"}
                  >
                    Ganbatte Reel
                  </button>
                  <button
                    onClick={() => {
                      this.props.bClicked(2);
                    }}
                    className={"button"}
                  >
                    Profile
                  </button>
                </div>
                <div className={"square"}>here</div>
              </section>
            </section>
          </ResizePanel>
          {this.props.children}
        </div>
      </>
    );
  }
}
export default NavPanel;
