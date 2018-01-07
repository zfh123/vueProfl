<style>
ul li {
    list-style: none;
    text-align: center;
    line-height: 20px;
}

.tab {
    display: flex;
    margin-top: 20px;
}

.tab li {
    flex: 1;
    line-height: 35px;
}
</style>
<template>
    <div class="list2">
        <ul class="tab">
            <li>
                <router-link class="tab-item" to="/list2/base1">开始</router-link>
            </li>
            <li>
                <router-link class="tab-item" to="/list2/base2">结束</router-link>
            </li>
        </ul>
        <div class="qrcode" style="width:100px; height:100px; margin-top:15px;background:green"></div>
        <!-- <ul>
                    <li :id="'id-'+item" v-for="item in list" v-text="item" @click="tabs(item)"></li>
                    <li v-text="name"></li>
                </ul>
                <v-list @Child="Child" ref="getChildinfor"></v-list> -->
        <router-view></router-view>        
    </div>
</template>
<script>
import axios from 'axios'
import { mapState, mapActions } from 'vuex'
import { USER_SIGNIN ,USER_DATA} from '../../../store/user'
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
        this._test2()
        // this.getAxoi()
        this.list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0];
        var $this = this;
        setTimeout(function(params) {
            // $this.printCode();
        },3000)
        
    },
    computed: {
        ...mapState({
            user: state => state.user,
            cart: state => state.cart,
            business: state => state.business
        })
    },
    mounted() {
        // debugger
        console.log(this.$refs.getChildinfor);
        
    },
    methods: {
        ...mapActions([USER_SIGNIN, CART_TEST1, CART_TEST2,USER_DATA]),
        Child(data) {
            alert(data)
        },
        tabs(str) {
            alert(str)
        },
        printCode(params) {
            debugger;
            var arr = ['dww', 'eqewer', 'lsjdj', 'r348', 'u89rwi']
            var qrcode = document.getElementsByClassName("qrcode");
            for (var i = 0; i < qrcode.length; i++) {
                var qrcodes = new QRCode(qrcode[i], {
                    width: 100,
                    height: 100,
                    text:arr[i]
                });
                // qrcodes.makeCode(arr[i]);
            }

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
            let obj = {
                shop:{
                    id:'10000001',
                    ip:'',
                },
                shopList:[
                    {
                        id:'1',
                        o:'a'
                    }
                ],
                token:'1111111111111111111111111111',
            }
            this.USER_SIGNIN(obj);
        }
    }
}
</script>
