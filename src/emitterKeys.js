import mitt from 'mitt'
export const emitterKeys = {
  parentToChild: 'parent-to-child',
  childToParent: 'child-to-parent',
  ON_SET_TITLE: 'set_title'
}

export const emitter = mitt()
