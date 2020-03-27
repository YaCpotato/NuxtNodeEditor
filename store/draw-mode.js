export const state = () => ({
  drawMode: ['line', 'rect', 'circle', 'text', 'node'],
  drawActionLock: false,
  selectedDrawMode: ''
})

export const getters = {
  drawMode: (state) => state.drawMode,
  selectedDrawMode: (state) => state.selectedDrawMode,
  drawActionLock: (state) => state.drawActionLock
}

export const mutations = {
  setDrawMode(state, drawModeString) {
    state.selectedDrawMode = drawModeString
  },
  ReverseDrawActionClick(state) {
    state.drawActionLock = !state.drawActionLock
  }
}
