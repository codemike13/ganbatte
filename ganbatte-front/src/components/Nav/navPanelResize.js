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

  handleDrag = () => {
    const [height, setHeight] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
      setHeight(ref.current.clientHeight);
    }, []);
    this.setState({
      size: height
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
          <ResizePanel value={this.props.value} direction="e">
            <section className={"navTab"}>
              <section className={"slideTabImg"}>
                <div className={"buttonBox"}>
                  <button className={"button"}>click me</button>
                  <button className={"button"}>click me</button>
                </div>
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
