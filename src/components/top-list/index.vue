<style>
.slide-enter-active,
.slide-leave-active {
    transition: all 0.3s ease;
}


.slide-enter,
.slide-leave-to {
    transform: translate3d(100%, 0, 0);
}

.top {
    position: fixed;
    height: 100%;
    width: 100%;
    left: 0;
    height: 0;
    top: -38px;
    background: #222;
    z-index: 999;
}

.top-header {
    height: 100%;
    width: 100%;
    background: #222;
    position: relative;
    top: 38px;
}

.top-header .back {
    position: absolute;
    bottom: 24px;
    right: 24px;
    color: yellow;
    border-radius: 50%;
    border: 1px solid yellow;
    height: 40px;
    width: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 12px;
}

.tabList {
    display: flex;
    border-bottom: 1px solid #999;
}

.tabList li {
    flex: 1;
    color: #fff;
    text-align: center;
    line-height: 50px;
}

.tabList .actives {
    color: yellow;
}

.tab-scroll {
    position: fixed;
    width: 100%;
    bottom: 0;
    top: 50px;
}

.wrapper {
    height: 100%;
    overflow: hidden;
}

.wrapper .item {
    line-height: 100px;
    text-align: center;
}

.nav {
    display: flex;
}

.nav .nav-item {
    line-height: 40px;
    text-align: center;
    flex: 1;
}
</style>
<template>
    <transition name="slide">
        <div class="top" style="height:100%">
            <div class="top-header">
                <ul class="tabList">
                    <li class="item" :class="{actives:selected==index}" v-for="(item,index) in navlist" @click="Active(index)" v-text="item.id"></li>
                </ul>
                <ul class="nav">
                    <li class="nav-item">
                        <router-link to="/list2/list">
                            list
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/list2/detail">
                            detail
                        </router-link>
                    </li>
                </ul>
                <!-- <div class="tab-scroll" ref="searchList"> -->
                <!--api 传递给其子组件  -->
                <!-- <v-scroll class="wrapper" :listenScroll="listenScroll" :pullup="pullup" @pullUp="pullUp" :downRefish="downRefish" :load="load">
                                <ul>
                                    <li class="item">列表</li>
                                    <li class="item">列表</li>
                                    <li class="item">列表</li>
                                    <li class="item">列表</li>
                                    <li class="item">列表</li>
                                    <li class="item">列表</li>
                                    <li class="item">列表</li>
                                    <li class="item">列表</li>
                                    <li class="item">列表</li>
                                    <li class="item">列表</li>
                                    <li class="item">列表</li>
                                    <li class="item">列表</li>
                                    <li class="item">列表</li>
                                    <li class="item">列表</li>
                                    <li class="item">列表</li>
                                    <li class="item">列表</li>
                                    <li class="item">列表</li>
                                </ul>
                            </v-scroll> -->
                <!-- </div> -->
                <div class="back" @click="back">back</div>
            </div>
            <router-view></router-view>
        </div>
    </transition>
</template>
<script>
import axios from 'axios'
import * as API from 'api/index'
export default {
    data() {
        return {
            navlist: [],
            selected: 0,
            pullup: true,
            downRefish: true,
            load: true,
            listenScroll: true
        }
    },
    watch: {
        '$route': 'test'
    },
    created() {
        this.Axios();

    },
    methods: {
        test() {
            console.log('路由的跳转调用该方法')
        },
        back() {
            this.$router.back()
        },
        Axios() {
            var $this = this;
            axios({
                url: API.navlist,
                method: 'get',
                data: {
                    id: 1
                }
            }).then(function(response) {
                console.log(response.data)
                $this.navlist = response.data
                // $this.BUSINESS_LIST(response.data)
            }).catch(function(err) {
                console.log(err)
            })
        },
        Active(index) {
            this.selected = index;

        },
        pullUp() {
            console.log('上拉加载更多数据')
        }
    }

}
</script>
