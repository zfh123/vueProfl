export const CART_TEST1 = 'CART_TEST1' // 登录
export const CART_TEST2 = 'CART_TEST2' // 退出
export default {
    state: JSON.parse(sessionStorage.getItem('cart') || '{"address":{},"business":{}}'),
    mutations: {
        [CART_TEST1] (state, address) {
            const cart = state;
            cart.address = address;
            Object.assign(state, cart)
            sessionStorage.setItem('cart', JSON.stringify(state))
        },
        [CART_TEST2] (state, business) {
            const cart = state;
            cart.business = business;
            Object.assign(state, cart)
            sessionStorage.setItem('cart', JSON.stringify(state))
        }
    },
    actions: {
        [CART_TEST1] ({ commit }, loginData) {
            commit(CART_TEST1, loginData)
        },
        [CART_TEST2] ({ commit }, address) {
            commit(CART_TEST2, address)
        }
    }
}
