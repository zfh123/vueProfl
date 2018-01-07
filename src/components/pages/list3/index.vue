<style>

</style>
<template>
    <div class="list3">
        list3
        <h2>list3</h2>

        <!-- <v-list @alls="alls" ref="parenTochild"></v-list> -->
        <!-- <div class="pTc" @click="parTochild">父组件触发子组件</div> -->
    </div>
</template>
<script>
import axios from 'axios'
import * as API from 'api/index'
import { mapState, mapActions } from 'vuex'
import { USER_SIGNIN,USER_UPDATA } from '../../../store/user'
import { CART_TEST1, CART_TEST2 } from '../../../store/cart'
import { BUSINESS_LIST} from '../../../store/business'
import { test1, test2 } from 'api/list1'
export default {
    data() {
        return {

        }
    },
    created() {
        this._test3()
        this.Axios()
        this.USER_UPDATA({
            id:'653645365365',
            ip:'rtuwgedbwhdw',
        })
    },
    mounted() {
        
    },
    computed: {
        ...mapState({
            user: state => state.user,
            cart: state => state.cart,
            business: state => state.business
        })
    },
    methods: {
        ...mapActions([USER_SIGNIN, CART_TEST1, CART_TEST2,BUSINESS_LIST,USER_UPDATA]),
        Axios() {
            var $this =this;
            axios({
                url: '/api/'+'/BaUsersStaff/LoginStaff',
                method: 'post',
                data: {
                    id: 1
                }
            }).then(function(response) { 
                console.log(response)
                $this.BUSINESS_LIST(response.data)
            }).catch(function(err) {
                console.log(err)
            })
        },
        _test3() {
            test1('list3')
            this.CART_TEST2({
                smg: "jdod-328",
                liop: "hdhduw=ehjwk",
                uyr: "jdlwejklw"
            })
        },
        alls(str) {
            alert(str)
        },
        parTochild() {
            this.$refs.parenTochild.childEvent('p-t-c')
        }
    }
}
</script>
