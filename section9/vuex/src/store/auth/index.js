const state = {
  loginUserName: ''
}

const mutations = {
  setLoginUser(state, user) {
    state.loginUserName = user.name
  }
}

const actions = {
  getLoginUser({ commit }, user) {
    commit('setLoginUser', user)
  }
}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}