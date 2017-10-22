<template>
    <div class="tab">
        <router-link class="tab-item" to="/list2">
            <span class="tab-link">second</span>
        </router-link>
        <router-link class="tab-item" to="/list3">
            <span class="tab-link">three</span>
        </router-link>
         <router-link class="tab-item" to="/my">
            <span class="tab-link">search</span>
        </router-link>
    </div>
</template>

<script type="es6">
export default {
  data(){
    return{
      test:'develop代码'
    }
  }
}
</script>

<style secoped>
.tab {
    display: flex;
    height: 44px;
    line-height: 44px;
    font-size: 14px;
}

.tab .tab-item {
    flex: 1;
    text-align: center;
}

.tab .tab-link {
    padding-bottom: 5px;
    color: yellow;
    border-bottom: 2px solid #222;
}

.tab .router-link-active .tab-link {
    color: red;
    border-bottom: 2px solid yellow;
}
</style>


