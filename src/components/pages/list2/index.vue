<style>

</style>
<template>
    <div class="list2">
        list2
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import { USER_SIGNIN } from '../../../store/user'
import { CART_TEST1, CART_TEST2 } from '../../../store/cart'
import { test1, test2 } from 'api/list1'
export default {
    data () {
        return {

        }
    },
    created () {
        this._test2()
        console.log(this.user)
        console.log(this.cart)
    },
    computed: {
        ...mapState({
            user: state => state.user,
            cart: state => state.cart
        })
    },
    mounted () {

    },
    methods: {
        ...mapActions([USER_SIGNIN, CART_TEST1, CART_TEST2]),
        _test2 () {
            test1('list2')
            this.USER_SIGNIN({
                name: '63786213876183',
                id: '6472634'
            })
            this.CART_TEST1({
                name:"wo",
                id:"78-90",
                ip:"7482-hks"
            })
        }
    }
}
</script>
