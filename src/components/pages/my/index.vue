<style>
    .childRout{
        margin: 40px 60px;
    }
</style>
<template>
    <div class="my" @click="Trefs">
        <v-search @search="search" ref="Vsearch"></v-search>
        <div class="childRout" @click="childRout" >子组件</div>
        <router-view></router-view>
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
    watch:{
        '$route':'test'
    },
    computed: {
        ...mapState({
            user: state => state.user,
            cart: state => state.cart
        })
    },
    methods: {
        ...mapActions([USER_SIGNIN, CART_TEST1, CART_TEST2]),
        test(){
            console.log('------------------对路由的监控------------------')
        },
        _test3 () {
            test1('my')
        },
        Trefs(){
            // this.$refs.Vsearch.Quest()
        },
        search(val){
            console.log(val)
        },
        childRout(){
            this.$router.push({
                path: `/my/${5}`
            })
        }
    }
}
</script>
