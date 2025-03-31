<template>
  <el-menu class="menu-navs" mode="vertical" :ellipsis="false">
    <el-menu-item class="nav-cell" index="1" @click="handleShow(1)">{{ $t('footer.menu.menu1') }}</el-menu-item>
    <el-menu-item class="nav-cell" index="2" @click="handleShow(2)">{{ $t('footer.menu.menu2') }}</el-menu-item>
    <el-menu-item class="nav-cell" index="3" @click="handleShow(3)">{{ $t('footer.menu.menu3') }}</el-menu-item>
    <el-menu-item class="nav-cell" index="4" @click="handleShow(4)">{{ $t('footer.menu.menu4') }}</el-menu-item>
    <!-- <el-menu-item class="nav-cell" index="5" @click="handleShow(5)">{{ $t('footer.menu.menu5') }}</el-menu-item> -->
  </el-menu>
</template>

<script setup lang="ts" name="BaseFooterMenu">
const router = useRouter();

function handleShow (_type:number) {
  switch (_type) {
    case 1:
      window.open('https://www.17track.net/zh-cn', '_blank');
      break;
    case 2:
      window.open('https://www.51tracking.com/', '_blank');
      break;
    case 3:
      window.open('https://www.baidu.com/s?wd=%E6%B1%87%E7%8E%87%E6%9F%A5%E8%AF%A2&rsv_spt=1&rsv_iqid=0xc8c7745100041167&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&rqlang=cn&tn=baiduhome_pg&rsv_dl=tb&rsv_enter=1&oq=%25E8%2588%25AA%25E7%258F%25AD%25E4%25BF%25A1%25E6%2581%25AF%25E5%258A%25A8%25E6%2580%2581%25E6%259F%25A5%25E8%25AF%25A2&rsv_btype=t&inputT=2983&rsv_t=a280GD5rbxQpX8PD3n0vtPXpReMQ3rCXfZ3YlXFB5puaMI044VkUoBAyqeyrXFYD%2Bw5t&rsv_pq=be21887300224fec&rsv_sug3=22&rsv_sug1=15&rsv_sug7=100&rsv_sug2=0&rsv_sug4=2983', '_blank');
      break;
    case 4:
      window.open('https://zh.flightaware.com/live/', '_blank');
      break;
    case 5:
      window.open('http://www.hsbianma.com/', '_blank');
      break;
  };
};
</script>

<style lang="scss" scoped>
:deep(.menu-navs) {
  min-width: 0;
  height: unset;
  border-right: none;
  background: unset;
  .nav-cell {
    padding: 0; 
    height: 22px;
    line-height: 22px;
    color: rgba(255, 255, 255, 1);
    font-size: 16px;
    font-weight: 400;
    & + .nav-cell {
      margin-top: 16px;
    }
    &:hover,
    &.is-active,
    &.active {
      font-weight: 600;
    }
  }
}

</style>