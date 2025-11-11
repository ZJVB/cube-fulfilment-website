<template>
  <div style="position:relative">
    <el-menu class="menu-navs" :default-active="activeIndex" :mode="modeType" :ellipsis="false" router>
      <el-menu-item class="nav-cell" :index="localePath('/')">{{ $t('navbar.menu1') }}</el-menu-item>
      <el-menu-item class="nav-cell" @mouseenter="trigger ('product','enter')" @mouseleave="trigger ('product','leave')" @click="jumpPage('/service')">{{ $t('navbar.menu2') }}</el-menu-item>
      <el-menu-item class="nav-cell" :index="localePath('/information')">{{ $t('navbar.menu3') }}</el-menu-item>
      <el-menu-item class="nav-cell"  @mouseenter="trigger ('about','enter')" @mouseleave="trigger ('about','leave')"  @click="jumpPage('/about')">{{ $t('navbar.menu4') }}</el-menu-item>
    </el-menu>
    <div class="popover-box product-popover-box" @mouseenter="trigger ('product','enter')" @mouseleave="trigger ('product','leave')" v-show="productShow">
      <div class="popover-box-menu">
        <div class="menu-item" :class="activeMenu==index+1?'active-menu-item':''" v-for="(item,index) of productImageList"  @mouseenter="changeMenu (index+1)">
          <div class="menu-item-title">
            <el-image class="menu-img" :src="item.icon" />
            <span class="title">{{ $t(`navbar.popover.product${index+1}`) }}</span>
          </div>
          <div class="menu-item-description">{{ $t(`navbar.popover.productTxt${index+1}`) }}</div>
        </div>
      </div>
      <div class="popover-box-flex" v-show="activeMenu==1">
          <div class="popover-box-title" @click="jumpPage('/service')">
            {{ $t(`navbar.popover.card1.title`) }}
            <span>></span>
          </div>
          <div class="popover-box-content" >
              <div class="popover-box-content-item" v-for="(item,index) of wmsImageList" @click="toDetail('/service',item.path)">
                <div class="popover-box-content-item-head"  @click="jumpPage('/service')">
                  <el-image class="popover-img" :src="item.icon" />
                  <span class="hover-item">{{ $t(`navbar.popover.card1.productCardTitle${index+1}`) }}</span>
                </div>
                <span class="hover-item"  @click="jumpPage('/service')">
                  {{ $t(`navbar.popover.card1.productCardTxt${index+1}1`) }}
                </span><br/>
                <span class="hover-item"  @click="jumpPage('/service')">
                  {{ $t(`navbar.popover.card1.productCardTxt${index+1}2`) }}
                </span><br/>
              </div>
          </div>
      </div>
      <div class="popover-box-flex" v-show="activeMenu==2">
          <div class="popover-box-title"  @click="jumpPage('/service')">
            {{ $t(`navbar.popover.card2.title`) }}
            <span>></span>
          </div>
          <div class="popover-box-content" >
              <div class="popover-box-content-item" v-for="(item,index) of tmsImageList">
                <div class="popover-box-content-item-head"  @click="jumpPage('/service')">
                  <el-image class="popover-img" :src="item.icon" />
                  <span class="hover-item">{{ $t(`navbar.popover.card2.productCardTitle${index+1}`) }}</span>
                </div>
                <span class="hover-item"  @click="jumpPage('/service')">
                  {{ $t(`navbar.popover.card2.productCardTxt${index+1}1`) }}
                </span><br/>
                <span class="hover-item"  @click="jumpPage('/service')">
                  {{ $t(`navbar.popover.card2.productCardTxt${index+1}2`) }}
                </span><br/>
              </div>
          </div>
      </div>
      <div class="popover-box-flex" v-show="activeMenu==3">
          <div class="popover-box-title"  @click="jumpPage('/service')">
            {{ $t(`navbar.popover.card3.title`) }}
            <span>></span>
          </div>
          <div class="popover-box-content" >
              <div class="popover-box-content-item" v-for="(item,index) of oceanImageList">
                <div class="popover-box-content-item-head"  @click="jumpPage('/service')">
                  <el-image class="popover-img" :src="item.icon" />
                  <span class="hover-item">{{ $t(`navbar.popover.card3.productCardTitle${index+1}`) }}</span>
                </div>
                <span class="hover-item"  @click="jumpPage('/service')">
                  {{ $t(`navbar.popover.card3.productCardTxt${index+1}1`) }}
                </span><br/>
                <span class="hover-item"  @click="jumpPage('/service')">
                  {{ $t(`navbar.popover.card3.productCardTxt${index+1}2`) }}
                </span><br/>
              </div>
          </div>
      </div>
      <div class="popover-box-flex" v-show="activeMenu==4">
          <div class="popover-box-title"  @click="jumpPage('/service')">
            {{ $t(`navbar.popover.card4.title`) }}
            <span>></span>
          </div>
          <div class="popover-box-content" >
              <div class="popover-box-content-item" v-for="(item,index) of jiyunImageList">
                <div class="popover-box-content-item-head"  @click="jumpPage('/service')">
                  <el-image class="popover-img" :src="item.icon" />
                  <span class="hover-item">{{ $t(`navbar.popover.card4.productCardTitle${index+1}`) }}</span>
                </div>
                <span class="hover-item"  @click="jumpPage('/service')">
                  {{ $t(`navbar.popover.card4.productCardTxt${index+1}1`) }}
                </span><br/>
                <span class="hover-item"  @click="jumpPage('/service')">
                  {{ $t(`navbar.popover.card4.productCardTxt${index+1}2`) }}
                </span><br/>
              </div>
          </div>
      </div>
    </div>
    <div class="popover-box about-popover-box" @mouseenter="trigger ('about','enter')" @mouseleave="trigger ('about','leave')" v-show="aboutShow">
      <div class="popover-box-flex">
        <div class="popover-box-title" @click="toDetail('/about','swiper')">
          {{ $t(`navbar.popover.aboutTitle1`) }}
          <span>></span>
        </div>
        <div class="popover-box-content">
            <div class="popover-box-content-item" @click="toDetail('/about','quantity')">
              {{ $t('navbar.popover.about1') }}
            </div>
            <div class="popover-box-content-item" @click="toDetail('/about','introduce')">
              {{ $t('navbar.popover.about2') }}
            </div>
            <div class="popover-box-content-item" @click="toDetail('/about','timeline')">
              {{ $t('navbar.popover.about3') }}
            </div>
            <div class="popover-box-content-item" @click="toDetail('/about','consult')">
              {{ $t('navbar.popover.about4') }}
            </div>
        </div>
      </div>
      <div class="popover-box-contact">
        <div class="contact-item">
          <span>{{ $t('navbar.popover.aboutContact1') }}</span>
          <span>18516101845</span>
        </div>
        <div class="contact-item">
          <span>{{ $t('navbar.popover.aboutContact2') }}</span>
          <span>18621373216</span>
        </div>
        <div class="contact-item">
          <span>{{ $t('navbar.popover.aboutContact3') }}</span>
          <span>contact@bnj-global.com</span>
        </div>
         <div class="wechat-item">
           <div>
             <img class="wechat-icon" src="~/assets/images/wechat.jpg" />
             <div class="wechat-txt">{{ $t('navbar.popover.aboutContact4') }}</div>
           </div>
           <div>
             <img class="wechat-icon" src="~/assets/images/wechat.jpg" />
             <div class="wechat-txt">{{ $t('navbar.popover.aboutContact5') }}</div>
           </div>
         </div>
      </div>
    </div>
  </div>
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

    // 产品服务菜单
  const productList = ['/wms', '/tms', '/ocean-carriage', '/jiyun'];
  const productImageList:any = ref([]);
  productImageList.value = productList.map((item,index) => {
    return {
      icon:new URL(`../../assets/images/menu-icon-${index+1}.png`, import.meta.url).href,
      path:item,
    }
  });

  const toDetail=((paths:string,_path:string)=>{
    const routePath = localeRoute({ path: paths ,query:{path:_path}})
    if (routePath) {
        return navigateTo(routePath.fullPath)  // 路由跳转
    }
  })
  const wmsList = ['characteristic','/wms','/wms','/wms'];
  const wmsImageList:any = ref([]);
  wmsImageList.value = wmsList.map((item,index) => {
    return {
      icon:new URL(`../../assets/images/wms-icon-${index+1}.png`, import.meta.url).href,
      path:item,
    }
  });
  const tmsList = ['/tms','/tms','/tms','/tms'];
  const tmsImageList:any = ref([]);
  tmsImageList.value = tmsList.map((item,index) => {
    return {
      icon:new URL(`../../assets/images/tms-icon-${index+1}.png`, import.meta.url).href,
      path:item,
    }
  });
  const oceanList = ['/ocean-carriage','/ocean-carriage','/ocean-carriage','/ocean-carriage'];
  const oceanImageList:any = ref([]);
  oceanImageList.value = oceanList.map((item,index) => {
    return {
      icon:new URL(`../../assets/images/ocean-icon-${index+1}.png`, import.meta.url).href,
      path:item,
    }
  });
  const jiyunList = ['/jiyun','/jiyun','/jiyun','/jiyun'];
  const jiyunImageList:any = ref([]);
  jiyunImageList.value = jiyunList.map((item,index) => {
    return {
      icon:new URL(`../../assets/images/jiyun-icon-${index+1}.png`, import.meta.url).href,
      path:item,
    }
  });

    // 国际化跳转
  const localeRoute = useLocaleRoute();

  const productShow = ref(false)
  const aboutShow = ref(false)
  const trigger = ((_value:string,_type:string,)=>{
    if (_value=='product') {
      if (_type=='enter') productShow.value=true
      if (_type=='leave') productShow.value=false
    }
    if (_value=='about') {
      if (_type=='enter') aboutShow.value=true
      if (_type=='leave') aboutShow.value=false
    }
  })

  // 跳转事件
  const jumpPage = ((paths:string,)=>{
    const routePath = localeRoute({ path: paths })
    if (routePath) {
        return navigateTo(routePath.fullPath)  // 路由跳转
    }
  })

  const activeMenu = ref(1)
  const changeMenu =((_index:number)=>{
    activeMenu.value = _index
  })

</script>
<style lang="scss" scoped>
.popover-box{
  position: fixed;
  width: 880px;
  z-index: 1026;
  background: #fff;
  box-shadow: 0px 10px 36.4px 0px rgba(55, 94, 171, 0.11);
  &-title{
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    padding: 16px 24px;
    color: rgba(17, 31, 44, 0.85);
    font-size: 16px;
    height: 60px;
    line-height: 30px;
  }
  &-content{
    display: flex;
    flex-wrap: wrap;
    &-item{
      width: 50%;
      padding: 20px 24px;
      display: flex;
      align-items: center;
      gap: 16px;
      box-sizing: border-box;
      .title{
        color: #000;
        font-size: 15px;
        font-weight: 500;
      }
      .description{
        color: rgba(0, 0, 0, 0.40);
        font-size: 14px;
        font-weight: 400;
        margin-top: 4px;
      }
    }
    :hover.popover-box-content-item{
      border-bottom: 3px solid #F60;
      background: #F2F2F2;
    }
  }
}
.product-popover-box{
   display: flex;
   .popover-box-title{
     cursor: pointer;
     &:hover{
       color: #f60;
     }
   }
  .popover-box-menu{
    width: 230px;
    background: #f5f6f9;
    .menu-item{
      padding:16px 20px;
      &-title{
        display: flex;
        align-items: center;
        gap: 8px;
      }
      &-description{
        margin-top: 6px;
        font-size: 14px;
        color: #111f2c;
        letter-spacing: 1px;
        opacity: .56;
        line-height: 20px;
      }
      .menu-img{
        width: 20px;
        height: 20px;
      }
    }
    .active-menu-item{
      background: #fff;
    }
  }
  .popover-box-flex{
    flex: 1;
  }
  .popover-box-content{
    &-item{
      width: 25%;
      display:block;
      &-head{
        display: flex;
        align-items: center;
        gap: 4px;
        font-size: 16px;
        margin-bottom: 10px;
        .popover-img{
          width: 28px;
          height: 28px;
        }
        .hover-item{
          margin-left: 0px !important;
          font-size: 16px !important;
          color: #111f2c;
          font-weight: 500;
          position: relative;
        }
      }
      .hover-item{
        margin-left: 32px;
        font-size: 14px;
        color: rgba(17, 31, 44, .85);
        line-height: 32px;
        cursor: pointer;
      }
    }
    :hover.popover-box-content-item{
      border-bottom: none;
      background: transparent;
      
    }
    :hover.hover-item{
        color: #f60;
      }
  }
}
.about-popover-box{
  display: flex;
  .popover-box-content{
    padding-bottom: 36px;
    &-item{
      width: 33%;
      padding: 12px 24px;
      color: rgba(17, 31, 44, .85);
    }
  }
  :hover.popover-box-content-item{
      border-bottom: none;
      background: transparent;
      color: #f60;
      cursor: pointer;
  }
  :hover.popover-box-title{
    color: #f60;
    cursor: pointer;
  }
  .popover-box-contact{
    width: 230px;
    background: #f5f6f9;
    padding: 24px;
    .contact-item{
      margin-bottom: 24px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      & span:first-child{
        opacity: .6;
        font-size: 14px;
        color: #111f2c;
        font-weight: 400;
        line-height: 20px;
      }
      & span:last-child{
        font-size: 16px;
        color: #111f2c;
        font-weight: 500;
        line-height: 22px;
      }
    }
    .wechat-item{
      display: flex;
      justify-content: space-between;
      text-align: center;
      .wechat-icon{
        width: 80px;
        height: 80px;
      }
      .wechat-txt{
        opacity: .6;
        font-size: 14px;
        color: #111f2c;
        font-weight: 400;
        margin-top: 8px;
        line-height: 20px;
      }
    }
  }
  .popover-box-flex{
    flex: 1;
  }
}
</style>