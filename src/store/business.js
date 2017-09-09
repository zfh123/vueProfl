export const BUSINESS_LIST = 'BUSINESS_LIST' // 列表
export const BUSINESS_TAB = 'BUSINESS_TAB' // tab
export default {
    state: JSON.parse(localStorage.getItem('business') || '{"address":{},"business":{}}'),
    mutations: {
        [BUSINESS_LIST] (state, orderlist) {
            const business = state;
            business.orderlist = orderlist;
            Object.assign(state, business)
            localStorage.setItem('business', JSON.stringify(state))
        },
        [BUSINESS_TAB] (state, ordertab) {
            const business = state;
            business.ordertab = ordertab;
            Object.assign(state, business)
            localStorage.setItem('business', JSON.stringify(state))
        }
    },
    actions: {
        [BUSINESS_LIST] ({ commit }, orderlist) {
            commit(BUSINESS_LIST, orderlist)
        },
        [BUSINESS_TAB] ({ commit }, ordertab) {
            commit(BUSINESS_TAB, ordertab)
        }
    }
}
