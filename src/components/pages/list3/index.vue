<style>

</style>
<template>
    <div class="list3">
        list3
        <h2>list3</h2>
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
        this._test3()
        console.log(this.user)
        console.log(this.cart)
    },
    mounted () {

    },
    computed: {
        ...mapState({
            user: state => state.user,
            cart: state => state.cart
        })
    },
    methods: {
        ...mapActions([USER_SIGNIN, CART_TEST1, CART_TEST2]),
        _test3 () {
            test1('list3')
            this.CART_TEST2({
                smg: "jdod-328",
                liop: "hdhduw=ehjwk",
                uyr: "jdlwejklw"
            })
        }
    }
}
</script>
