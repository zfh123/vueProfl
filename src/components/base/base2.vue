<template>
  <div class="list2">
    <ul class="base2-item">
      <li>
        <div class="list-item"></div>
        <div class="item"></div>
      </li>
      <li>
        <div class="list-item"></div>
        <div class="item"></div>
      </li>
      <li>
        <div class="list-item"></div>
        <div class="item"></div>
      </li>
      <li>
        <div class="list-item"></div>
        <div class="item"></div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {

}
</script>
<style>
.base2-item li {
  display: flex;
  height: 50px;
  margin-top: 10px;
}

.base2-item .list-item {
  flex: 0 0 20%;
  background: yellow
}
.base2-item .item {
  flex: 1;
  background: green;
}
</style>

