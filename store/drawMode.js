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
  SET_DRAW_MODE(state, { drawModeString }) {
    state.selectedDrawMode = drawModeString
  },
  REVERSE_DRAW_ACTION_LOCK(state) {
    state.drawActionLock = !state.drawActionLock
  }
}

export const actions = {
  fetchDrawMode({ commit, drawMode }) {
    commit('SET_DRAW_MODE', { drawMode })
  },
  fetchDrawActionClick({ commit }) {
    commit('REVERSE_DRAW_ACTION_LOCK')
  }
}
