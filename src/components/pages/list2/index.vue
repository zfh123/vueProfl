<style>
ul li {
    list-style: none;
    text-align: center;
    line-height: 20px;
}
</style>
<template>
    <div class="list2">
        <ul>
            <li :id="'id-'+item" v-for="item in list" v-text="item" @click="tabs(item)"></li>
            <li v-text="name"></li>
        </ul>
        <v-list @Child="Child" ref="getChildinfor"></v-list>
    </div>
</template>
<script>
import axios from 'axios'
import { mapState, mapActions } from 'vuex'
import { USER_SIGNIN } from '../../../store/user'
import { CART_TEST1, CART_TEST2 } from '../../../store/cart'
import { test1, test2 } from 'api/list1'
import * as API from 'api/index'

export default {
    data() {
        return {
            list: [],
            capitalizes: 'zhangfuhang',
            arr: [],
            name: '111'
        }
    },
    created() {
        console.log(API)
        this._test2()
        this.getAxoi()
        this.list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0]
    },
    computed: {
        ...mapState({
            user: state => state.user,
            cart: state => state.cart,
            business:state => state.business
        })
    },
    mounted() {
        // debugger
        console.log(this.$refs.getChildinfor)
    },
    methods: {
        ...mapActions([USER_SIGNIN, CART_TEST1, CART_TEST2]),
        Child(data) {
            alert(data)
        },
        tabs(str) {
            alert(str)
        },
        getAxoi() {
            $.ajax({
                type: "GET",
                url: API.logo,
                data: {},
                dataType: "json",
                success: function(data) {
                    console.log(data)
                }
            });
        },
        _test2() {
            test1('list2')
            this.USER_SIGNIN({
                name: '63786213876183',
                id: '6472634'
            })
            this.CART_TEST1({
                name: "wo",
                id: "78-90",
                ip: "7482-hks"
            })
        }
    }
}
</script>
