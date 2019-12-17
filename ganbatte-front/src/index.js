import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Login from "./components/Login/login";
import NavPanel from "./components/Nav/navPanelResize";
import Ganbatte from "./components/Ganbatte/ganbatte";
import UploadMonster from "./components/UploadMonster/uploadMonster";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuth: false,
      pane: 0
    };
    this.currentPane = null;
  }
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
  componentDidUpdate() {
    if (this.state.isAuth) {
    }
  }

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

  uploadFile = (...someval) => {
    //some api method to upload lets make it
  };

  render() {
    return (
      <>
        <NavPanel
          bClicked={this.b1Clicked}
          isAuth={this.state.isAuth}
          pane={this.state.pane}
        >
          {this.currentPane}
          {/* <Ganbatte /> */}
          {/* <UploadMonster /> */}
        </NavPanel>
      </>
      // <>
      //   <div className={"container"}>
      //     {this.state.isAuth ? (
      //       <>
      //         <>
      //           <NavPanel>
      //             {/* <Ganbatte /> */}
      //             <UploadMonster />
      //           </NavPanel>
      //         </>
      //       </>
      //     ) : (
      //       <Login
      //         appHandleAuthSubmit={this.appHandleAuthSubmit}
      //         appHandleLogout={this.appHandleLogout}
      //       />
      //     )}
      //   </div>
      // </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
