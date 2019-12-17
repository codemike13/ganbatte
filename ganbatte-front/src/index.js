import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Login from "./components/Login/login";
import NavPanel from "./components/Nav/navPanelResize";
import Ganbatte from "./components/Ganbatte/ganbatte";
import UploadMonster from "./components/UploadMonster/uploadMonster";
class App extends Component {
  state = {
    isAuth: false
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
  componentDidUpdate() {
    if (this.state.isAuth) {
    }
  }

  render() {
    return (
      <>
        <div className={"container"}>
          {this.state.isAuth ? (
            <>
              <>
                <NavPanel>
                  {/* <Ganbatte /> */}
                  <UploadMonster />
                </NavPanel>
              </>
            </>
          ) : (
            <Login
              appHandleAuthSubmit={this.appHandleAuthSubmit}
              appHandleLogout={this.appHandleLogout}
            />
          )}
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
