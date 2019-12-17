import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Login from "./components/Login/login";
import NavPanel from "./components/Nav/navPanelResize";
import Ganbatte from "./components/Ganbatte/ganbatte";
import UploadMonster from "./components/UploadMonster/uploadMonster";
class App extends Component {
  state = {
    isAuth: false,
    pane: 0,
    currentPane: null,
    intro: true
  };

  componentDidMount = () => {
    // setTimeout(() => {
    //   this.setState({
    //     intro: false
    //   });
    // }, 6000);
  };
  appHandleAuthSubmit = () => {
    this.setState({
      isAuth: true
    });
  };

  appHandleLogout = () => {
    this.setState({
      isAuth: false
    });
  };

  b1Clicked = val => {
    switch (val) {
      case 1:
        this.currentPane = <Ganbatte />;
        break;
      case 2:
        this.currentPane = <UploadMonster />;
        break;
      default:
        break;
    }
    this.setState({
      pane: val
    });
  };

  // uploadFile = (...someval) => {
  //   //some api method to upload lets make it
  // };

  render() {
    return (
      <>
        <div
          style={{
            backgroundImage: this.state.intro
              ? 'url("/ganbatteIntro.png")'
              : 'url("/basicFrame2.png")'
          }}
          className={"container"}
        >
          {this.state.isAuth ? (
            <>
              <NavPanel
                bClicked={this.b1Clicked}
                isAuth={this.state.isAuth}
                pane={this.state.pane}
                appHandleLogout={this.appHandleLogout}
              >
                {this.currentPane}
                {/* <Ganbatte /> */}
                {/* <UploadMonster /> */}
              </NavPanel>
            </>
          ) : (
            <Login appHandleAuthSubmit={this.appHandleAuthSubmit} />
          )}
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
