import React, { Component } from 'react'
import ChildComponent from './Child'
import { emitterKeys, emitter } from '../emitterKeys'

export class ParentComponent extends Component {
  componentDidMount () {
    setTimeout(() => {
      emitter.emit(emitterKeys.parentToChild, { hello: 'world' })
    }, 2000)

    emitter.on(emitterKeys.childToParent, dt => console.log('Child called the parent', dt))
  }

  componentWillUnmount () {
    emitter.off(emitterKeys.childToParent)
  }

  render () {
    return (
      <div>
        <h1>This is a parent component</h1>
        <ChildComponent />
      </div>
    )
  }
}

export default ParentComponent
