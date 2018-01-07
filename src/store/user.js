export const USER_SIGNIN = 'USER_SIGNIN' // 登录
export const USER_SIGNOUT = 'USER_SIGNOUT' // 退出
export const USER_DATA = 'USER_DATA' // 退出
export const USER_UPDATA = 'USER_UPDATA' // 退出
export default {
  state: JSON.parse(localStorage.getItem('user') || 'null'),
  mutations: {
    [USER_SIGNIN] (state, loginData) {
      Object.assign(state, loginData);
      localStorage.setItem('user', JSON.stringify(state));
    },
    [USER_SIGNOUT] (state) {
      localStorage.removeItem('user')
      Object.assign(state, {})
    },
    [USER_UPDATA] (state,data) {
      const user = state;
      user.shop = data;
      localStorage.setItem('user', JSON.stringify(user))
    },
    [USER_DATA] (state) {
      localStorage.removeItem('user')
      Object.assign(state, {})
    }
  },
  actions: {
    [USER_SIGNIN] ({ commit }, loginData) {
      commit(USER_SIGNIN, loginData)
    },
    [USER_SIGNOUT] ({ commit }) {
      commit(USER_SIGNOUT)
    },
    [USER_UPDATA] ({ commit },data) {
      commit(USER_UPDATA,data)
    },
    [USER_DATA] ({ commit }) {
      commit(USER_DATA)
    }
  }
}
