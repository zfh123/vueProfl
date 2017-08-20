export const USER_SIGNIN = 'USER_SIGNIN' // 登录
export const USER_SIGNOUT = 'USER_SIGNOUT' // 退出
export default {
  state: JSON.parse(sessionStorage.getItem('user') || 'null'),
  mutations: {
    [USER_SIGNIN] (state, loginData) {
      Object.assign(state, loginData)
      sessionStorage.setItem('user', JSON.stringify(state))
    },
    [USER_SIGNOUT] (state) {
      // debugger
      sessionStorage.removeItem('user')
      Object.assign(state, {})
    }
  },
  actions: {
    [USER_SIGNIN] ({ commit }, loginData) {
      commit(USER_SIGNIN, loginData)
    },
    [USER_SIGNOUT] ({ commit }) {
      commit(USER_SIGNOUT)
    }
  }
}
