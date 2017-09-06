<template>
    <div class="list">
        <div class="list" @click="Child">list</div>
        <div class="alls" @click="all()" ref="alls">alls</div>
        <input v-model.lazy="query"  />
        <div class="query" v-text="query"></div>
        <input v-model.trim="number" number />
        <div class="query" v-text="number"></div>
        <div class="input1"  @click.stop.prevent="input1" >结算</div>
    </div>
</template>

<script type="es6">
export default {
    data(){
        return{
            query:'',
            number:0
        }
    },
    created(){

    },
    watch:{
        query(newVal){
            console.log(newVal)
        },
        number(newVal){
            console.log(newVal)
        }
    },
    methods:{
        Child(){
            this.$emit('Child','zhang')
        },
        all(){
            var $this = this;
             var arrcis = $this.$refs.alls.clientHeight
            $this.$emit('alls',arrcis)
        },
        input1(){
            alert('@click.stop.prevent')
        },
        childEvent(str){
            alert(str)
        }
    }
}
</script>

<style secoped>
.list {
    text-align: center;
    line-height: 40px;
    color: yellow;
}
</style>


