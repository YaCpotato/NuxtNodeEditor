export const state = () => ({
  drawMode: ['line', 'rect', 'circle', 'text', 'node'],
  drawActionLock: false,
  selectedDrawMode: ''
})

export const getters = {
  drawMode: (state) => state.drawMode,
  selectedDrawMode: (state) => state.selectedDrawMode
}

export const mutations = {
  setDrawMode(state, drawModeString) {
    state.selectedDrawMode = drawModeString
  },
  ReverseDrawActionClick(state) {
    state.drawActionLock = !state.drawActionLock
  }
}
