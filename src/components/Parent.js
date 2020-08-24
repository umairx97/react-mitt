import React, { Component } from 'react'
import { emitterKeys, emitter } from '../emitterKeys'
import { connect } from 'react-redux'

export class ParentComponent extends Component {
  componentDidMount () {
    setTimeout(() => {
      emitter.emit(emitterKeys.ON_SET_TITLE, { title: 'I was changed through a event' })
    }, 2000)
  }

  componentWillUnmount () {
    emitter.off(emitterKeys.ON_SET_TITLE)
  }

  render () {
    return (
      <div>
        <h1>This is a parent component</h1>
        {this.props.title}
      </div>
    )
  }
}

export default connect((state) => ({ title: state.title }))(ParentComponent)
