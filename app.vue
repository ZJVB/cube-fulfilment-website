<template>
  <div class="app-page">
    <AppHeader/>
    <div class="page-container">
      <NuxtPage ref="childDom"/>
    </div>
    <AppFooter/>
  </div>
</template>

<script setup lang="ts">
  let childDom = ref()
  // 路由
  const route = useRoute();
  const activeIndex = ref('/');
  // 监听路由
  watch(route, () => {
    activePage();
  });
  // 渲染后监听滚动事件
  onMounted (() => {
    activePage();
  });
  // 获取当前触发页面
  function activePage () {
    let _arry = route.path.split('/');
    let _active = _arry[_arry.length -1];
    activeIndex.value = `/${_active}`;
  };
</script>

<style lang="scss" scoped>
.page-container {
  padding: 80px 0px 0px 0px;
  margin: 0;
}
</style>
