<template>
  <el-menu class="menu-navs" :default-active="activeIndex" :mode="modeType" :ellipsis="false" router>
    <el-menu-item class="nav-cell" :index="localePath('/')">{{ $t('navbar.menu1') }}</el-menu-item>
    <el-menu-item class="nav-cell" :index="localePath('/service')">{{ $t('navbar.menu2') }}</el-menu-item>
    <el-menu-item class="nav-cell" :index="localePath('/information')">{{ $t('navbar.menu3') }}</el-menu-item>
    <el-menu-item class="nav-cell" :index="localePath('/about')">{{ $t('navbar.menu4') }}</el-menu-item>
  </el-menu>
</template>

<script setup lang="ts" name="menu">
  import type  { EpPropMergeType } from 'element-plus/es/utils/vue/props/types';

  const props = defineProps({
    // 菜单模式
    modeType: {
      type: String as PropType<EpPropMergeType<StringConstructor, 'vertical' | 'horizontal', unknown>>,
      default: 'vertical'
    },
    // 调用组件的来源
    source: {
      type: String,
      default: 'header'
    },
    // 触发的菜单
    active: {
      type: String,
      default: '/'
    }
  });

  // 渲染后监听滚动事件
  onMounted (() => {
    activePage('/');
  });

  // 路由
  const router= useRouter();
  // 当前菜单触发
  const activeIndex = ref('/');
  // 监听弹层显示/隐藏
  watch(() => props.active, (val: string) => {
    activeIndex.value = val;
  });
  // 监听路由
  watch(() => 
    router.currentRoute.value.path,
    (toPath) => {
      //要执行的方法
      activePage(toPath);
      
  },{immediate: true,deep: true})
  
  // 获取当前触发页面
  function activePage (toPath:any) {
    let _arry = toPath.split('/');
    let _active = _arry[_arry.length -1];
    activeIndex.value = `/${_active}`;
  };
    // 国际化跳转
  const localeRoute = useLocaleRoute();
</script>