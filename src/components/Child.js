
import React, { Component } from 'react'
import { emitterKeys, emitter } from '../emitterKeys'

export class ChildComponent extends Component {
  state = {
    hello: "wow",
  };

  setData = (dt) => {
    console.log("Parent called the child", dt);
    this.setState({ hello: dt.hello });
  };

  componentDidMount() {
    emitter.on(emitterKeys.parentToChild, this.setData);
    setTimeout(() => {
      emitter.emit(emitterKeys.childToParent, { hello: "world" });
    }, 3000);
  }

  componentWillUnmount() {
    emitter.off(emitterKeys.parentToChild);
  }

  render() {
    return (
      <div>
        <h1>This is a child component</h1>
      </div>
    );
  }
}
export default ChildComponent