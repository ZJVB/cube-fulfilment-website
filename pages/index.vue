<template>
<div>
  <section class="section-part section-swiper"> 
    <swiper ref="topSwiper">
      <el-carousel trigger="click" :height="bannerHeight+'px'" :interval="3000">
        <el-carousel-item v-for="(item, index) in topSwiperVideo" :key="`video-${index}`">
          <swiper-slide>
            <div class="swiper-content">
              <el-image class="swiper-img" :src="item"/>
              <div class="swiper-text">
                <div class="container-box">
                  <div class="banner-title">{{ $t(`index.swiper.name${index + 1}`) }}<span class="color-yellow">{{ $t(`index.swiper.name${index + 1}1`) }}</span></div>
                  <div class="banner-title">{{ $t(`index.swiper.txt${index + 1}`) }}</div>
                  <div class="banner-description">{{ $t(`index.swiper.description${index + 1}`) }}</div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </el-carousel-item>
      </el-carousel>
    </swiper>
  </section>
  <section class="section-part pt-100 section-quantity">
    <div class="container-box">
      <div class="section-content">
        <el-row :gutter="24">
          <el-col :span="6" v-for="(item, index) in quantityImageList" :key="`quantity-${index}`">
            <div class="quantity-card" >
              <div class="card-content">
                <el-image class="card-img" :src="item" />
                <div class="title color-yellow">
                  <span>{{index==0?num1:index==1?num2:index==2?num3:num4}}</span>
                  <span>{{ $t(`index.quantity.quantity${index + 1}`) }}</span>
                </div>
                <div class="text">{{ $t(`index.quantity.quantityTxt${index + 1}`) }}</div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </section>
  <section class="section-part pt-100 section-introduce">
    <div class="container-box">
      <div class="section-title">
        <div class="title-name">{{ $t('index.introduce.title') }}</div>
        <div class="animation-item animation-item-two"><span style="z-index: 0;position:relative">{{ $t('index.introduce.animationTitle') }}</span></div>
      </div>
    </div>
    <div class="introduce-box">
      <div class="introduce-content">
        <div class="content-right">
            <img class="swiper-img" src="~/assets/images/index/introduce-1.png" />
        </div>
        <div class="content-left">
            <span class="content-left-title">{{$t('index.introduce.itemTitle1')}}</span>
            <div class="mb10 content-left-subTitle">{{$t('index.introduce.itemSubTitle1')}}</div>
            <div class="mb10 content-left-describe">{{$t('index.introduce.itemDescribe11')}}</div>
            <div class="mb10 content-left-describe">{{$t('index.introduce.itemDescribe12')}}</div>
            <div class="content-left-describe">{{$t('index.introduce.itemDescribe13')}}</div>
            <el-button class="content-left-tip" type="primary">{{$t('index.introduce.tip1')}}</el-button>
            <el-button class="content-left-tip" type="primary" plain>{{$t('index.introduce.tip2')}}</el-button>
        </div>
      </div>
    </div>
  </section>
  <section class="section-part section-introduce splice-introduce">
    <div class="introduce-box">
      <div class="introduce-content">
        <div class="content-left">
            <span class="content-left-title">{{$t('index.introduce.itemTitle2')}}</span>
            <div class="mb10 content-left-subTitle">{{$t('index.introduce.itemSubTitle2')}}</div>
            <div class="mb10 content-left-describe">{{$t('index.introduce.itemDescribe21')}}</div>
            <div class="mb10 content-left-describe">{{$t('index.introduce.itemDescribe22')}}</div>
            <div class="content-left-describe">{{$t('index.introduce.itemDescribe23')}}</div>
            <el-button class="content-left-tip" type="primary">{{$t('index.introduce.tip1')}}</el-button>
            <el-button class="content-left-tip" type="primary" plain>{{$t('index.introduce.tip2')}}</el-button>
        </div>
        <div class="content-right">
            <img class="swiper-img" src="~/assets/images/index/introduce-2.png" />
        </div>
      </div>
    </div>
  </section>
  <section class="section-part pt-100 section-service">
    <div class="container-box">
      <div class="section-content">
        <div class="content-left">
            <img class="swiper-img" src="~/assets/images/index/service-1.png" />
        </div>
        <div class="content-right">
          <div class="section-title">
            <span class="title-name">{{ $t('index.service.title') }}</span>
            <div class="title-name animation-item animation-item-two"><span style="z-index: 0;position:relative">{{ $t('index.service.animationTitle') }}</span></div>
          </div>
          <div class="content-right-sub mt-20">
            {{ $t('index.service.subTitle') }}  
          </div>
          <div>
            <el-row :gutter="24">
              <el-col :span="12" v-for="(item, index) in serviceImageList" :key="`service-${index}`" class="content-right-item">
                <el-image class="card-img" :src="item" />
                <div>{{ $t(`index.service.serviceItem${index + 1}`) }}</div>
                <div>
                  {{ $t(`index.service.serviceTxt${index + 1}`) }}
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section-part pt-100 section-solutions">
    <div class="container-box">
      <div class="section-title">
          <div class="title-name">{{ $t('index.solutions.title') }}</div>
          <div class="animation-item animation-item-two"><span style="z-index: 0;position:relative">{{ $t('index.solutions.animationTitle') }}</span></div>
      </div>
      <div class="section-sub mt-20">
        <div class="sub-text">{{ $t('index.solutions.subTitle') }}  </div>
      </div>
      <div class="section-content mt-40">
        <el-row :gutter="48">
          <el-col :span="6" v-for="(item, index) in solutionsImageList" :key="`solutions-${index}`">
            <div class="solutions-card" >
              <div class="card-content">
                <el-image class="card-img" :src="item.img" />
                <div class="flex-row">
                   <el-image class="icon-img" :src="item.icon" />
                  <div>
                    <span class="flex-row-title">{{ $t(`index.solutions.solutionsItem${index + 1}`) }}</span>
                    <div class="flex-row-text">{{ $t(`index.solutions.solutionsTxt${index + 1}`) }}</div>
                  </div>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </section>
  <section class="section-part pt-100 pb-80 section-product">
    <div class="container-box">
      <div class="section-title">
        <div class="title-name">{{ $t('index.product.title') }}</div>
          <div class="animation-item animation-item-two"><span style="z-index: 0;position:relative">{{ $t('index.product.animationTitle') }}</span></div>
      </div>
    </div>
    <div class="section-content mt-40">
      <el-row :gutter="48">
        <el-col v-for="(item, index) in productList" :key="`product-${index}`" :span="productActive==index?12:6" class="card-animate" @mouseover="handleProduct(index)">
          <div class="product-card" :style="`background-image:url(${productActive==index?item.big:item.small})`">
             <div class="card-content" v-show="productActive==index" :class="{'active':productActive==index}">
              <div class="content-box">
                <div class="title">{{ $t(`index.product.productTxt${index + 1}`) }}</div>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </section>
  <section class="section-part pt-100 section-device">
    <div class="container-box">
      <div class="section-title">
        <div class="title-name">{{ $t('index.device.title') }}</div>
          <div class="animation-item animation-item-two"><span style="z-index: 0;position:relative">{{ $t('index.device.animationTitle') }}</span></div>
      </div>
      <div class="section-content mt-40">
        <el-row :gutter="24">
          <el-col :span="8" v-for="(item, index) in deviceImageList" :key="`device-${index}`">
            <div class="device-card" >
              <el-image class="card-img" :src="item" />
              <div class="title animation-item animation-item-two"><span style="z-index: 0;position:relative">{{ $t(`index.device.device${index + 1}`) }}</span></div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </section>
  <section class="section-part pt-100 section-say">
    <div class="container-box">
      <div class="section-title">
          <div class="title-name">{{ $t('index.say.title') }}</div>
          <div class="animation-item animation-item-two"><span style="z-index: 0;position:relative">{{ $t('index.say.animationTitle') }}</span></div><br/>
          <div class="title-name">
            {{ $t('index.say.title1') }}
          </div>
      </div>
      <div class="section-content mt-40">
        <el-row :gutter="30">
          <el-col :span="12" v-for="(item, index) in sayImageList" :key="`say-${index}`">
            <div class="say-card" >
              <div class="title">
                {{ $t(`index.say.say${index + 1}`) }}
              </div>
              <div class="content-box">
                <div>
                  <el-image class="card-img" :src="item" />
                </div>
                <div class="content-box-second">
                  <span class="content-box-second-title">{{ $t(`index.say.name${index + 1}`) }}</span>
                  <div class="content-box-second-address">{{ $t(`index.say.address${index + 1}`) }}</div>
                </div>
                <div class="service-png">
                  <img src="~/assets/images/index/say-icon.png" />
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <img class="animation-img-1" src="~/assets/images/index/say-icon-1.png" />
    <img class="animation-img-2" src="~/assets/images/index/say-icon-1.png" />
    <img class="animation-img-3" src="~/assets/images/index/say-icon-2.png" />
    <img class="animation-img-4" src="~/assets/images/index/say-icon-2.png" />
    <img class="animation-img-5" src="~/assets/images/index/say-icon-1.png" />
  </section>
  <section class="section-part pt-100 section-cooperate">
    <div class="container-box">
      <div class="section-title">
        <div class="title-name">{{ $t('index.cooperate.title') }}</div>
        <div class="animation-item animation-item-two"><span style="z-index: 0;position:relative">{{ $t('index.cooperate.animationTitle') }}</span></div>
      </div>
      <div class="section-sub mt-20">
        <div class="sub-text">{{ $t('index.cooperate.subTitle') }}</div>
      </div>
    </div>
    <div class="cooperate-swiper mt-40">
      <img class="cooperate-swiper-img" src="~/assets/images/index/platform.png" />
    </div>
  </section>
  <section class="section-part pt-100 section-information">
    <div class="container-box">
      <div class="section-title">
        <div class="title-name">{{ $t('index.information.title') }}</div>
        <div class="animation-item animation-item-two"><span style="z-index: 0;position:relative">{{ $t('index.information.animationTitle') }}</span></div>
      </div>
      <div class="mt-80">
      <swiper ref="lineSwiper"
        :modules="[SwiperNavigation]"
        :slides-per-view="4"
        :space-between="0"
        :centered-slides="true"
        :initial-slide="1"
        :navigation="{
          nextEl: '.swiper-right',
          prevEl: '.swiper-left',
        }">
        <swiper-slide v-for="(item, index) in lineData" :key="`line-step-${index}`">
          <div class="swiper-items">
            <img :src="getImageUrl(index)" alt="" />
            <div class="line-title">{{ $t(`index.information.information${index+1}`) }}</div>
            <div class="line-text">{{ $t(`index.information.informationTxt${index+1}`) }}</div>
          </div>
        </swiper-slide>
      </swiper>
      <img class="swiper-left" src="~/assets/images/index/line-btn-l.png" />
      <img class="swiper-right" src="~/assets/images/index/line-btn-r.png" />
    </div>
    </div>
  </section>
   <BaseSectionExperience />
</div>
</template>

<script setup lang="ts">
const getImageUrl = ((index:any)=>{
  return new URL(`../assets/images/index/information-${index+1}.png`, import.meta.url).href;
})
  // 获取当前语言
  const { locale } = useI18n();

  
  const topSwiperLength = [1, 2, 3];
  // 顶部轮播图
  const topSwiperVideo:any = ref([]);
  
  topSwiperLength.forEach(item => {
    topSwiperVideo.value.push(new URL(`../assets/images/index/banner-icon-${item}.png`, import.meta.url).href);
  });
  // 数据统计
  const totalLength = [1, 2, 3, 4];
  // 数量
  const quantityLength = [1, 2, 3, 4];
  const quantityImageList:any = ref([]);
  quantityImageList.value = quantityLength.map(item => {
    return new URL(`../assets/images/index/quantity-icon-${item}.png`, import.meta.url).href
  });

  // 服务
  const serviceLength = [1, 2, 3, 4, 5, 6];
  const serviceImageList:any = ref([]);
  serviceImageList.value = serviceLength.map(item => {
    return new URL(`../assets/images/index/service-icon-${item}.png`, import.meta.url).href
  });

    // 解决办法
  const solutionsLength = [1, 2, 3, 4];
  const solutionsImageList:any = ref([]);
  solutionsImageList.value = solutionsLength.map(item => {
    return{
      img:new URL(`../assets/images/index/solutions-${item}.png`, import.meta.url).href,
      icon:new URL(`../assets/images/index/solutions-icon-${item}.png`, import.meta.url).href
    } 
  });

  // 产品展示
  const productActive = ref(1);
  const productLength = [1, 2, 3];
  const productList:any = ref([]);
  productList.value = productLength.map(item => {
    return{
      big:new URL(`../assets/images/index/product-big-${item}.png`, import.meta.url).href,
      small:new URL(`../assets/images/index/product-small-${item}.png`, import.meta.url).href,
    } 
  });
  function handleProduct (_index: any) {
    if (_index !== productActive.value) {
      nextTick(() => {
        productActive.value = _index;
      });
    };
  };
  
  // 顾客怎么说
  const sayLength = [1, 2];
  const sayImageList:any = ref([]);
  sayImageList.value = sayLength.map(item => {
    return new URL(`../assets/images/index/say-icon-${item}.png`, import.meta.url).href
  });
  const lineData = ref([ [1, 2,3], [1, 2,3], [1, 2,3], [1, 2,3]]);

  let num1:any = ref(0)
  let num2:any = ref(0)
  let num3:any = ref(0)
  let num4:any = ref(0)
  // 轮播图高度随着自适应
  let screenWidth:any = ref(0);
  let bannerHeight:any = ref(0);
  let scrollTop:any = ref(0)
  let boxRef = ref()
  onMounted(() => {
    screenWidth.value = window.innerWidth
    bannerHeight.value = 802 / 2400 * screenWidth.value
    window.onresize = () => {
      return (() => {
        screenWidth.value = window.innerWidth
        bannerHeight.value = 802 / 2400 * screenWidth.value
      })()
    }
    increaseNum1(3)
    increaseNum2(10000)
    increaseNum3(5000)
    increaseNum4(50)
  })
  
  const increaseNum1 = ((num:any)=>{
    let timer = setInterval(() => {
      num1.value = num1.value+0.5;
      if(num1.value > num-0.5){
        num1.value = num
        clearInterval(timer)
      }
    }, 120);
  })
  const increaseNum2 = ((num:any)=>{
    let timer = setInterval(() => {
      num2.value=num2.value+500;
      if(num2.value > num-500){
        num2.value = num
        clearInterval(timer)
      }
    }, 100);
  })
  const increaseNum3 = ((num:any)=>{
    let timer = setInterval(() => {
      num3.value=num3.value+100;
      if(num3.value > num-100){
        num3.value = num
        clearInterval(timer)
      }
    }, 100);
  })
  const increaseNum4 = ((num:any)=>{
    let timer = setInterval(() => {
      num4.value = num4.value+5;
      if(num4.value > num-5){
        num4.value = num
        clearInterval(timer)
      }
    }, 100);
  })

  //仓储设备集合
  const deviceLength = [1, 2, 3, 4, 5, 6];
  const deviceImageList:any = ref([]);
  deviceImageList.value = deviceLength.map(item => {
    return new URL(`../assets/images/index/device-icon-${item}.png`, import.meta.url).href
  });
</script> 

<style lang="scss" scoped>
.section-swiper {
  :deep(.swiper-pagination) {
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    bottom: 34px;
    width: 100%;
    .swiper-pagination-bullet {
      display: block;
      height: unset;
      opacity: 1;
    }
    .cell-item {
      padding: 24px 46px;
      width: 320px;
      line-height: 20px;
      border-radius: 8px;
      box-sizing: border-box;
      background: #fff;
      color: #39394e;
      font-size: 14px;
      .cell-title {
        display: flex;
        align-items: center;
        margin-bottom: 5px;
        width: 100%;
        .img-icon {
          margin-right: 8px;
          width: 34px;
          height: 34px;
        }
        .name {
          line-height: 22px;
          color: #0e1434;
          font-size: 16px;
          font-weight: 500;
        }
      }
      & + .cell-item {
        margin-left: 20px;
      }
      &.swiper-pagination-bullet-active {
        background: linear-gradient(45deg, #1894EE, #3B47FF);
        color: rgba(255, 255, 255, 0.65);
        .cell-title .name {
          color: #fff;
        }
      }
    }
  }
  .container-box{
    width: 40%;
    margin: auto 0% auto -34% !important
  }
  .swiper-text {
    margin-top: -8px;
    line-height: normal;
    .banner-title {
      font-weight: 1000;
      font-size: 76px;
    }
    .banner-txt{
      color: #434343;
      font-size: 32px;
      font-weight: 510;
      margin-top: 35px;
    }
    .banner-description{
      font-weight: 500;
      font-size: 24px;
    }
  }
}
.section-quantity {
  background-color: #fff;
  .quantity-card {
    position: relative;
    padding: 42px 33px;
    height: 177px;
    box-sizing: border-box;
    background-color: #fff;
    background-size: contain;
    background-position-y: bottom;
    margin-bottom: 10px;
    border-radius: 8px;
    box-shadow: 0px 1px 19.1px 0px rgba(0, 0, 0, 0.11);
    align-items: center;
    display: flex;
    gap: 34px;
    .card-content {
      width: 100%;
      color: #000;
      text-align: center;
      .title {
        font-size: 30px;
        font-weight: 900;
      }
      .text {
        font-weight: 500;
        font-size: 13px;
        margin-top: 4px;
      }
    }
    .card-img {
      width: 54px;
      z-index: 0;
      margin-bottom: 12px;
      :deep(.el-image__inner){
        height: auto;
      }
    }
  }
  :hover.quantity-card{
    transform: scale(1.01);
    box-shadow: 0px 1px 19.1px 0px rgba(0, 0, 0, 0.21);
  }
}
.section-introduce {
  background-color: #fff;
    .introduce-box{
        width: 100%;
        .introduce-content{
            padding: 60px 0px;
            width: 66%;
            margin: 0 auto;
            display: flex;
            .content-left{
                width: calc(100% - 500px);
                padding: 12px 20px;
                position: relative;
                &-title{
                    display: inline-block;
                    padding-bottom: 8px;
                    margin-bottom: 24px;
                    // border-bottom: 4px solid #e0e0e0;
                    color: #000;
                    font-size: 25px;
                    font-weight: 500;
                }
                &-subTitle{
                  color: #000;
                  font-size: 16px;
                  font-weight: 400;
                  margin-bottom: 20px;
                }
                &-describe{
                  font-size: 16px;
                  font-weight: 400;
                  color: rgba(67, 67, 67, 0.70);
                  line-height: 22px;
                }
                &-tip{
                    width: 144px;
                    position: absolute;
                    bottom: 12px;
                    height: 40px;
                    font-size: 16px;
                  &+.content-left-tip{
                    margin-left: 180px;
                  }
                }
            }
            .content-right{
                width: 500px;
                border-radius: 8px;
                background: #FFF;
                box-shadow: 2px 4px 14.3px 0px rgba(0, 0, 0, 0.25);
                padding: 12px;
                position: relative;
            }
            .content-right::before{
              width: 10px;
              height: 249px;
              flex-shrink: 0;
              border-radius: 4px 0px 0px 4px;
              background: #F40;
              position: absolute;
              content: '';
              left: -10px;
              top: 42px
            }
        }
    }
    .section-title{
      line-height: normal;
    }
}
.splice-introduce{
    .introduce-box{
        // background-color: #f8fafa;
        .content-right:before{
            border-radius: 0px 4px 4px 0px !important;
            left: 500px !important;
            top: 52px !important
          }
    }
}
.section-service{
  background: #e8e8e8;
  padding-bottom: 60px;
  .section-content{
    display: flex;
    .content-left{
      width: 500px;
    }
    .content-right{
      width: calc(100% - 500px);
      .section-title{
        line-height: normal;
        text-align: left;
        .title-name{
          display: inline;
        }
      }
      &-sub{
        color: rgba(67, 67, 67, 0.70);
        font-size: 16px;
        font-weight: 400;
        text-align: left;
      }
      &-item{
        margin-top: 30px;
        :nth-child(2){
          color: #000;
          font-size: 20px;
          font-weight: 700;
          margin-top: 20px;
          margin-bottom: 10px;
        }
        :nth-child(3){
          color: #000;
          font-size: 16px;
        }
      }
    }
  }
}
.section-solutions{
  background: #fff;
  padding-bottom: 60px;
  .section-content{
    .solutions-card{
      border-radius: 4px;
      box-shadow: 0px 8px 22.9px 0px rgba(0, 0, 0, 0.11);
      padding: 12px 12px 50px 12px;
      height: 100%;
      .flex-row{
        display: flex;
        gap: 8px;
        align-items: center;
        &-title{
          color: #000;
          font-size: 16px;
          font-weight: 500;
        }
        &-text{
          color: #434343;
          font-size: 14px;
          font-weight: 400;
          margin-top: 8px;
        }
      }
      .card-img{
        width: 100%;
        margin-bottom: 24px;
      }
    }
    :hover.solutions-card{
      transform: scale(1.01);
      box-shadow: 0px 1px 19.1px 0px rgba(0, 0, 0, 0.21);
    }
  }
}
.section-product {
  background: #fff;
  padding-bottom: 60px;
  .container-box {
    text-align: center;
  }
  .section-content {
    padding: 0 42px;
  }
  .card-animate{
    transition: all .6s cubic-bezier(.5, 1, .89, 1);
  }
  .product-card {
    position: relative;
    height: 500px;
    border-radius: 15px;
    cursor: pointer;
    overflow: hidden;
    background-size: 100% 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: 50%;
    color: #fff;
    .card-content {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: linear-gradient(rgba(9, 18, 66, 0), rgba(9, 18, 66, .79));
      .content-box {
        position: absolute;
        bottom: 80px;
        padding: 0 20px;
        width: 100%;
        min-height: 77px;
        box-sizing: border-box;
        text-align: center;
        transition: bottom .6s ease-out;
      }
      .title {
        color: #FFF;
        text-align: center;
        font-size: 71px;
        font-weight: 700;
      }
      &.active {
        top: unset;
        bottom: 0;
        height: 47%;
        background: linear-gradient(rgba(243, 113, 28, 0), rgba(238, 105, 34, .7));
        .text {
          display: block;
        }
      }
    }
  }
}
.section-device {
  background-color: #e8e8e8;
  .device-card {
    position: relative;
    text-align: center;
    box-sizing: border-box;
    margin-bottom: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .title {
      color: #000;
      font-size: 20px;
      font-weight: 400;
      line-height: 24px; /* 120% */
    }
    .card-img {
      width: 100%;
      margin-bottom: 22px;
    }
  }
}
.section-solve {
  background-color: #fff;
  .solve-card {
    position: relative;
    padding: 30px 16px;
    min-height: 396px;
    text-align: center;
    box-sizing: border-box;
    background-color: #fff;
    // box-shadow: 0px 1px 19.1px 0px rgba(0, 0, 0, 0.11);
    border-radius: 8px;
    margin-bottom: 60px;
    .card-content {
       text-align: center;
       line-height: 24px; /* 150% */
       font-size: 16px;
       font-weight: 400;
      .title {
        color: #333;
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 16px;
      }
      .text {
        color: #666;
        margin-bottom: 8px;
      }
      .describe{
        color: #999;
      }
    }
    .card-img-box{
      height: 230px;
      margin: auto;
      .card-img {
        max-width: 240px;
      }
    }
  }
  .el-col:nth-child(5)>.solve-card .card-img-box{
    padding-top: 20px;
  }
  :hover.solve-card{
    transform: scale(1.1);
     box-shadow: 0px 1px 19.1px 0px rgba(0, 0, 0, 0.31);
  }
}
.section-say {
  background-color: #f2f2f2;
  padding-bottom: 60px;
  border-radius: 4px;
  position: relative;
  box-sizing: border-box;
  .say-card {
    background: #fff;
    padding: 20px;
    .title{
      color: #313131;
      font-size: 16px;
      font-weight: 400;
      margin-bottom: 30px;
    }
    .content-box{
      display: flex;
      align-items: center;
      gap: 10px;
      &-second{
        flex: 1;
        &-title{
          color: #000;
          font-size: 18px;
          font-weight: 700;
        }
        &-address{
          color: #777;
          font-size: 16px;
          font-weight: 400;
          margin-top: 10px;
        }
      }
    }
  }
  .animation-img-1{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: absolute;
    bottom: 0;
    left: 20px;
    animation: jumpBoxHandler 25s ease-out infinite;
  }
  @keyframes jumpBoxHandler { /* css事件 */
    0% {
      transform: translateX(0) translateY(0) rotate(0deg) scale(0);
    }
    25% {
        opacity: 1;
        transform: translateX(80px) translateY(-100px) rotate(90deg) scale(1);
    }
    50% {
        transform: translateX(90px) translateY(-300px) rotate(180deg);
    }
    75% {
        opacity: 1;
        transform: translateX(120px) translateY(-400px) rotate(270deg);
    }
    100% {
        opacity: 0;
        transform: translateX(90px) translateY(-450px) rotate(360deg);
    }
  }
  .animation-img-2{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: absolute;
    bottom: 0;
    right: 80px;
    animation: jumpBoxHandler1 25s ease-out infinite;;
  }
  @keyframes jumpBoxHandler1 { /* css事件 */
    0% {
      transform: translateX(0) translateY(0) rotate(0deg) scale(0);
    }
    25% {
        opacity: 1;
        transform: translateX(20px) translateY(-150px) rotate(90deg) scale(1);
    }
    50% {
        transform: translateX(30px) translateY(-300px) rotate(180deg);
    }
    75% {
        opacity: 1;
        transform: translateX(-10px) translateY(-400px) rotate(270deg);
    }
    100% {
        opacity: 0;
        transform: translateX(-30px) translateY(-450px) rotate(360deg);
    }
  }
  .animation-img-3{
      width: 50px;
      height: 50px;
      border-radius: 50%;
      position: absolute;
      bottom: 0;
      right: 80px;
      animation: jumpBoxHandler2 27s ease-out infinite;;
  }
  @keyframes jumpBoxHandler2 { /* css事件 */
    0% {
        transform: translateX(0) translateY(0) rotate(0deg) scale(0);
    }
    25% {
        opacity: 1;
        transform: translateX(-40px) translateY(-210px) rotate(90deg) scale(1);
    }
    50% {
        transform: translateX(-60px) translateY(-320px) rotate(180deg);
    }
    75% {
        opacity: 1;
        transform: translateX(-80px) translateY(-400px) rotate(270deg);
    }
    100% {
        opacity: 0;
        transform: translateX(-100px) translateY(-450px) rotate(360deg);
    }
  }
  .animation-img-4{
      width: 50px;
      height: 50px;
      border-radius: 50%;
      position: absolute;
      bottom: 0;
      left: 80px;
      animation: jumpBoxHandler3 30s ease-out infinite;;
  }
  @keyframes jumpBoxHandler3 { /* css事件 */
    0% {
      transform: translateX(0) translateY(0) rotate(0deg) scale(0);
    }
    25% {
        opacity: 1;
        transform: translateX(-20px) translateY(-150px) rotate(90deg) scale(1);
    }
    50% {
        transform: translateX(20px) translateY(-300px) rotate(180deg);
    }
    75% {
        opacity: 1;
        transform: translateX(0px) translateY(-400px) rotate(270deg);
    }
    100% {
        opacity: 0;
        transform: translateX(20px) translateY(-450px) rotate(360deg);
    }
  }
  .animation-img-5{
      width: 50px;
      height: 50px;
      border-radius: 50%;
      position: absolute;
      bottom: 0;
      right: 80px;
      animation: jumpBoxHandler4 27s ease-out infinite;;
  }
  @keyframes jumpBoxHandler4 { /* css事件 */
    0% {
        transform: translateX(0px) translateY(0) rotate(0deg) scale(0);
    }
    25% {
        opacity: 1;
        transform: translateX(-60px) translateY(-150px) rotate(90deg) scale(1);
    }
    50% {
        transform: translateX(-80px) translateY(-250px) rotate(180deg);
    }
    75% {
        opacity: 1;
        transform: translateX(-40px) translateY(-400px) rotate(270deg);
    }
    100% {
        opacity: 0;
        transform: translateX(0px) translateY(-450px) rotate(360deg);
    }
  }
}
.section-cooperate {
  padding-bottom: 60px;
  background-color: #fff;
  .cooperate-swiper{
    display: flex;
    justify-content: center;
  }
}
.section-information {
  padding-bottom: 100px;
  background-color: #f2f2f2;
  .container-box {
    position: relative;
  }
  .section-title{
    text-align: left;
    .title-name{
      display: block;
      margin-bottom: 20px;
    }
    .animation-item{
      margin-left: 0px;
    }
  }
  .swiper-items{
    position: relative;
    border-radius: 4px;
    background: #FFF;
    box-shadow: 0px 1px 19.1px 0px rgba(0, 0, 0, 0.21);
    margin-left: 30px;
    img{
      width: 100%;
    }
    .line-title{
      position: absolute;
      bottom: 66px;
      left: 16px;
      color: #FFF;
      font-size: 20px;
      font-weight: 700;
    }
    .line-text{
      color: #000;
      font-size: 16px;
      font-weight: 700;
      padding: 16px;
      img{
        width: 20px;
        height: 20px;
        margin-left: 6px;
        transform: translateY(4px);
      }
    }
  }
  .swiper{
    padding-bottom: 16px;
  }
  .swiper-slide {
    position: relative;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    .swiper-content {
      padding: 48px 48px 20px 48px;
      text-align: center;
      overflow: hidden;
      background: #fff;
      .line-title {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        font-size: 24px; 
      }
      .step-line {
        display: none;
        margin: 34px auto 29px auto;
        width: 2px;
        height: 35px;
        background: #262626;
      }
      .line-content {
        padding-top: 50px;
        min-height: 328px;
        line-height: 40px;
        text-align: left;
        color: #656567;
        font-size: 18px;
        &-text {
          position: relative;
          padding-left: 12px;
          &::before {
            content: '';
            position: absolute;
            top: 18px;
            left: 0;
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background: #656567;
          }
        }
      }
    }
    &:hover {
      .swiper-content {
        transform: scale(1.01);
        box-shadow: 0px 1px 19.1px 0px rgba(0, 0, 0, 0.21);
      }
    }
  }
  .swiper-left,
  .swiper-right {
    position: absolute;
    top: 34px;
    margin-left: -18px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    cursor: pointer;
    &.swiper-button-disabled {
      opacity: .6;
      cursor: not-allowed;
    }
  }
  .swiper-right {
    right: -50px;
  }
  .swiper-left {
    right: 0px;
  }
}


</style>