<template>
  <footer class="page-footer">
    <div class="container-box">
      <div class="footer-box">
        <el-row>
          <el-col :span="8">
            <div class="cell-head">{{ $t('footer.cellTitle1') }}</div>
            <div class="cell-main">
              <div class="menu-list">
                <BaseMenu source="footer"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="cell-head">{{ $t('footer.cellTitle2') }}</div>
            <div class="cell-main">
              <div class="menu-list">
                <BaseFooterMenu />
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="cell-head">{{ $t('footer.cellTitle3') }}</div>
            <div class="cell-main cell-contact">
              <div v-for="(item, index) in contactImageList" :key="`b-contact-${item}`" class="contact-row">
                <el-image class="card-img" :src="item" />
                <div class="row-txt">{{ $t(`footer.contact.txt${index+1}`) }}</div>
              </div>
              <div class="contact-icon">
                <img src="~/assets/images/contact-icon-3.png" />
                <img src="~/assets/images/contact-icon-4.png" />
                <img src="~/assets/images/contact-icon-5.png" />
              </div>
            </div>
          </el-col>
        </el-row>
        <div class="row-line"><a href="https://beian.miit.gov.cn/" target="_blank">沪ICP备2023017517号-1</a></div>
      </div>
    </div>
  </footer>
  <!-- <div class="fixed-service">
    <div class="service-png"><img src="~/assets/images/contact.png" /></div>
    <div class="service-warp">
      <div class="show-more">
        <div class="value-txt">{{ $t('footer.service.txt1') }}</div>
        <div class="value-txt mt-5">{{ $t('footer.service.txt2') }} </div>
      </div>
    </div>
  </div>
  <div class="fixed-wechat">
    <el-tooltip placement="left" effect="light">
      <template #content>
        <img src="~/assets/images/wechat.jpg" class="fixed-wechat-icon"/>
      </template>
      <img class="wechat-png" src="~/assets/images/wechat.png" />
    </el-tooltip>
  </div>
  <div class="fixed-backtop" v-show="scrollTop>800">
    <el-tooltip class="item" effect="dark" :content="$t('footer.backTop')" placement="left">
      <div class="backtop-png" @click="backTop"><img src="~/assets/images/back-top.png" /></div>
    </el-tooltip>
  </div> -->
</template>

<script setup lang="ts">
  // 路由
  const route = useRoute();
  // 联系信息
  const contactLength = [1, 2];
  const contactImageList:any = ref([]);
  contactImageList.value = contactLength.map(item => {
    return new URL(`../assets/images/contact-icon-${item}.png`, import.meta.url).href
  });
  // 回到顶部
  onMounted(() => {
      // 监听滚动事件
    window.addEventListener('scroll', handleScroll)
  })
  var scrollTop:any = ref(0)
  const handleScroll = () => {
    scrollTop.value = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop
  }
  var timer:any = ref(null);
  const backTop = (()=>{
    timer = setInterval(function fn(){
      let oTop = document.body.scrollTop || document.documentElement.scrollTop;
      if(oTop > 0){
        scrollTo(0,oTop-50);
      }else{
        clearInterval(timer);
      } 
    },10);
  })
</script>

<style lang="scss" scoped>
.page-footer {
  padding-top: 40px;
  padding-bottom: 50px;
  font-size: 16px;
  background-color: #fff;
  :deep(.menu-navs) {
    min-width: 0;
    height: unset;
    border-right: none;
    background: unset;
    .nav-cell {
      padding: 0; 
      height: 22px;
      line-height: 22px;
      font-weight: 400;
      color: #676767;
      font-size: 20px;
      & + .nav-cell {
        margin-top: 32px;
      }
      &:hover,
      &.is-active,
      &.active {
        font-weight: 600;
      }
    }
    .el-dropdown{
      margin-top: 12px;
    }
  }
  .cell-head {
    margin-bottom: 20px;
    color: #F40;
    font-size: 26px;
    font-weight: 700;
    text-transform: uppercase;
  }
  .cell-main {
    .contact-row {
      display: flex;
      align-items: center;
      line-height: 22px;
      color: #595959;
      font-size: 15px;
      font-weight: 400;
      .row-name {
        margin-right: 12px;
      }
      .row-txt {
        flex: 1;
        min-width: 0;
      }
      & + .contact-row {
        margin-top: 12px;
      }
    }
    .contact-icon{
      margin-top: 32px;
      img{
        margin-right: 24px;
      }
    }
  }
  .row-line {
    padding-top: 30px;
    line-height: 22px;
    text-align: center;
    color: #595959;
    font-size: 16px;
  }
}
.fixed-service {
  position: fixed;
  right: 20px;
  bottom: 250px;
  z-index: 9990;
  width: 70px;
  height: 70px;
  border-radius: 54px;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(97,132,255,.07), 0 4px 8px rgba(97,132,255,.0417), 0 2px 4px rgba(97,132,255,.0283);
  transform: translateY(50%);
  background-color: #fff;
  display: flex;
  align-items: center;
  transition: width 0.6s;
  .service-png{
    min-width: 70px;
    height: 70px;
    border-radius: 50%;
    background: linear-gradient(124deg, #BAE7FF 12.8%, #2F54EB 88.6%);
    filter: drop-shadow(0px 3px 9.1px rgba(0, 0, 0, 0.29));
    display: flex;
    align-items: center;
    justify-content: center;
    img{
      width: 50px;
    }
  }
  .show-more {
    margin-left: 8px;
    display: none;
    .value-txt{
      color: #595959;
      font-size: 14px;
      font-weight: 400;
    }
  }
}
.fixed-wechat{
  position: fixed;
  right: 20px;
  bottom: 126px;
  z-index: 9990;
  width: 70px;
  height: 70px;
  &-icon{
    width: 150px;
  }
  .wechat-png{
    width: 70px;
    height: 70px;
  }
}
.fixed-service:hover{
  width: 310px;
  .show-more {
    display: block;
    overflow: hidden; /* 超出部分隐藏 */
    white-space: nowrap; /* 文本不换行 */
  }
}
.fixed-backtop{
  position: fixed;
  right: 20px;
  bottom: 80px;
  z-index: 9990;
  width: 70px;
  height: 70px;
  border-radius: 54px;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(97,132,255,.07), 0 4px 8px rgba(97,132,255,.0417), 0 2px 4px rgba(97,132,255,.0283);
  transform: translateY(50%);
  display: flex;
  align-items: center;
  scroll-behavior: smooth;
  .backtop-png{
    img{
      width: 70px;
      height: 70px;
    }
  }
}
</style>