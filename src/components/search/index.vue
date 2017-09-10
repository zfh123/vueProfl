<template>
    <div class="search-box">
        <i class="icon-search">&#xe63e;</i>
        <input ref="query" v-model="query" class="box" :placeholder="placeholder" />
        <i  v-show="query" @click="clearVal" class="icon-dismiss">x</i>
    </div>
</template>

<script type="es6">
export default {
    data(){
        return{
            placeholder:'搜索喜欢',
            query:''
        }
    },
    watch:{
        query(newVal,oldVal){
            console.log(newVal)
            this.$emit('search',this.query)
        }
    },
    methods:{
        clearVal(){
            this.query = '';
            
        },
        Quest(){
            console.log('Quest')
        }
    }
}
</script>

<style secoped>
.search-box {
    /* display: -webkit-box; */
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    box-sizing: border-box;
    width: 90%;
    padding: 0 6px;
    height: 34px;
    background: #333;
    border-radius: 6px;
    margin: 0 auto;
}

.search-box .icon-search {
    font-size: 24px;
    color: #222;
}

.search-box .box {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    margin: 0 13px;
    line-height: 18px;
    background: #333;
    color: #fff;
    font-size: 14px;
    border: none;
    outline: none;
}

.search-box .icon-dismiss {
    font-size: 16px;
    color: #fff;
}
</style>


