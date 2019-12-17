import React, { Component } from "react";

import { DraggableCore } from "react-draggable";
import debounce from "lodash.debounce";
import $ from "cash-dom";
import classNames from "classnames/bind";
import style from "./MonsterPanel.css";
const PanelSize = React.createContext(null);
export { PanelSize };

let cx = classNames.bind(style);

class MonsterPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 480,
      openLid: false
    };

    this.validateSize = debounce(this.validateSize, 100).bind(this);
  }

  isHorizontal = () =>
    this.props.direction === "w" || this.props.direction === "e";

  componentDidMount() {
    const { content } = this.refs;
    const actualContent = content.children[0];

    // Initialize the size value based on the content's current size
    this.setState({
      size: this.isHorizontal()
        ? $(actualContent).outerWidth(true)
        : $(actualContent).outerHeight(true)
    });
  }

  validateSize() {
    const isHorizontal = this.isHorizontal();
    const { content, wrapper } = this.refs;
    const actualContent = content.children[0];
    let containerParent = wrapper.parentElement;

    // If our resizing has left the parent container's content overflowing
    // then we need to shrink back down to fit
    let overflow = isHorizontal
      ? containerParent.scrollWidth - containerParent.clientWidth
      : containerParent.scrollHeight - containerParent.clientHeight;
    if (overflow) {
      this.setState({
        ...this.state,
        size: isHorizontal
          ? actualContent.clientWidth - overflow
          : actualContent.clientHeight - overflow
      });
    }

    //
    // Or if our size doesn't equal the actual content size, then we
    // must have pushed past the min size of the content, so resize back
    let minSize = isHorizontal
      ? $(actualContent).outerWidth(true)
      : $(actualContent).outerHeight(true);
    if (this.state.size !== minSize) {
      this.setState({
        ...this.state,
        size: minSize
      });
    }
  }

  handleDrag = (e, ui) => {
    const { direction } = this.props;
    const factor = direction === "e" || direction === "s" ? -1 : 1;

    // modify the size based on the drag delta
    let delta = this.isHorizontal() ? ui.deltaX : ui.deltaY;
    this.setState((s, p) => ({ size: Math.max(10, s.size - delta * factor) }));
  };

  handleDragEnd = (e, ui) => {
    this.validateSize();
  };

  returnSize = () => {
    return this.state.size;
  };

  render() {
    const dragHandlers = {
      onDrag: this.handleDrag,
      onStop: this.handleDragEnd
    };

    let size = this.state.size;
    return (
      <PanelSize.Provider value={this.state.size}>
        <div
          value={this.state.size}
          ref="wrapper"
          className={"ContainerVertical"}
        >
          <div
            key="content"
            ref="content"
            className={"ResizeContentVertical"}
            style={{ height: this.state.size + "px" }}
          >
            {React.Children.only(this.props.children)}
            <DraggableCore key="handle" {...dragHandlers}>
              <div className={"ResizeBarVertical"}>
                <img className={"monsterImg"} src={"/hands.png"} alt=""></img>
                <img
                  src={size <= 410 ? "/down2Feed.png" : "/slide.png"}
                  className={"slideImg"}
                  alt=""
                ></img>
              </div>
            </DraggableCore>
          </div>
        </div>
      </PanelSize.Provider>
    );
  }
}

export default MonsterPanel;
