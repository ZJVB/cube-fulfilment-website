<template>
  <header class="page-header white-navbar">
    <div class="container-box">
      <div class="header-box">
        <div class="header-l">
          <NuxtLink class="top-logo" :to="localeRoute('/')">
            <img class="logo-img" :src="topWhite?logo:logoWhite" />
          </NuxtLink>
          <BaseMenu modeType="horizontal"/>
        </div>
        <div class="header-r">
          <el-dropdown class="text-btn" :hide-on-click="false" @command="handleCommand" popper-class="dropDownStyle">
            <span class="dropdown-text">
              {{ locale == 'zh' ? '中文' : 'English' }}
              <el-icon><ArrowDownBold class="text-icon"/></el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="zh">中文 </el-dropdown-item>
                <el-dropdown-item command="en">English</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
  import YSF from '@neysf/qiyu-web-sdk';
  import {ArrowDownBold} from "@element-plus/icons";

  // 路由
  const route = useRoute();

  // 页面数据
  const topWhite = ref(false);
  const { locale } = useI18n();
  const logo = ref(new URL(`../assets/images/top-logo.png`, import.meta.url).href);
  const logoWhite = ref(new URL(`../assets/images/top-logo.png`, import.meta.url).href);

  /**
    * @date2024/02/08
    * @author wolfMan
    * @description {页面渲染前}
  */
  onBeforeMount(() => {
    ysfInit();
  });
  // 渲染后监听滚动事件
  onMounted (() => {
    // 监听页面滚动事件
    window.addEventListener('scroll', scrolling);
  });
  function ysfInit () {
    YSF.init('91effec83909b926f2f5cd43261fa933', {
      hidden: 0 // 是否隐藏访客端默认入口
    }, 'overseas').then((ysf: any) => {
      ysf('config', {
        language: locale.value === 'zh' ? 'zh-cn' : 'en' // 当前接入的语言
      });
    }).catch((error: any) => {
      console.log('sdk加载失败---', error);
    });
  };
  // 页面滚动
  function scrolling () {
    // 滚动条距文档顶部的距离
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    nextTick(() => {
      topWhite.value = scrollTop > 70;
    });
  };

  // 切换语言
  const localeRoute = useLocaleRoute();
  async function handleCommand (_name: any) {
    locale.value = _name;
    const routePath = localeRoute({ path: route.fullPath, query: { ...route.query } });
    if (routePath) {
      return navigateTo(routePath.fullPath);
    };
  };
  onUnmounted(() => {
    window.removeEventListener('scroll', scrolling, true);
  })
</script>

<style lang="scss" scoped>
.page-header {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  padding: 0;
  height: 80px !important;
  box-sizing: border-box;
  overflow-y: auto;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */
  &::-webkit-scrollbar {
    display: none;
  }
  .header-box {
    display: flex;
    align-items: center;
    margin: auto;
    .header-l,
    .header-r {
      display: flex;
      align-items: center;
    }
    .header-l {
      flex: 1;
    }
    .top-logo {
      display: inline-block;
      padding: 0;
      margin-right: 10px;
      width: 116px;
      line-height: 0;
      cursor: pointer;
      .logo-img {
        width: 100%;
      }
    }
    :deep(.menu-navs) {
      min-width: 0;
      height: unset;
      border-bottom: none;
      background: unset;
      .nav-cell {
        padding: 0; 
        min-width: 100px;
        height: 80px;
        line-height: 68px;
        border-top: 6px solid transparent;
        border-bottom: 6px solid transparent;
        box-sizing: border-box;
        color: #fff;
        font-size: 16px;
        font-weight: 400;
        &:hover,
        &.is-active,
        &.active {
          color: #fff !important;
          font-weight: 600;
        }
        & + .nav-cell {
          margin-left: 25px;
        }
      }
      .dropdown-item{
        margin-left: 25px;
        justify-content: center;
      }
    }
    .text-btn {
      position: relative;
      color: #fff;
      font-size: 16px;
      &::before {
        content: '';
        position: absolute;
        top: 3px;
        left: 0;
        width: 1px;
        height: 14px;
        background: rgba(255, 255, 255, 0.3);
      }
      .dropdown-text {
        cursor: pointer;
        outline: none;
      }
      & + .text-btn {
        margin-left: 28px;
      }
    }
  }
  &.white-navbar {
    background: #fff;
    .header-box {
      :deep(.menu-navs) {
        .nav-cell {
          color: #424444;
          &:hover,
          &.is-active,
          &.active {
            color: #ff4400 !important;
          }
        }
      }
      .text-btn {
        color: #424444;
        .text-icon{
          transform: translateY(2px);
        }
      }
    }
  }
}

:global(.dropDownStyle .el-dropdown-menu__item) {
    width: 100px;
}
 
:global(.dropDownStyle .el-dropdown-menu__item:hover) {
    background-color: rgba(255,68,0,0.04) !important;
    color: #ff4400 !important;

}
</style>