import mitt from 'mitt'
export const emitterKeys = {
  parentToChild: 'parent-to-child',
  childToParent: 'child-to-parent'
}

export const emitter = mitt()
