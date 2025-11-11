<template>
  <section class="section-part section-swiper">
    <swiper ref="topSwiper">
      <swiper-slide>
        <div class="swiper-content">
          <img class="swiper-img" src="~/assets/images/information/banner.png" />
          <div class="swiper-img-txt">
            <div class="container-box">
              <div class="box-txt-content">
                <div class="title">{{ $t('information.swiper.title') }}</div>
                <div class="small-sub-title">
                  <span class="color-yellow">{{ $t('information.swiper.subTitle') }}</span>
                  <div class="animation-item animation-item-two"><span style="z-index: 0;position:relative">{{ $t('information.swiper.animationTitle') }}</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </section>
  <section class="section-part pt-100 section-quantity">
    <div class="container-box">
      <div>
          <img src="~/assets/images/service/introduce-icon-2.png" />
          <img src="~/assets/images/service/introduce-icon-2.png" />
          <span>{{$t('information.quantity.subTitle')}}</span>
      </div>
      <el-row>
        <el-col :span="10">
          <div class="section-title">
            <div class="title-name">{{ $t('information.quantity.title') }}</div>
            <div class="animation-item animation-item-two"><span style="z-index: 0;position:relative">{{ $t('information.quantity.animationTitle') }}</span></div>
          </div>
        </el-col>
        <el-col :span="14">
          <div class="description">
          {{ $t('information.quantity.description') }}
          </div>
        </el-col>
      </el-row>
      <div class="section-content">
        <el-row :gutter="24">
          <el-col :span="6" v-for="(item, index) in quantityImageList" :key="`quantity-${index}`">
            <div class="quantity-card" >
              <div class="card-content">
                <el-image class="card-img" :src="item" />
                <div class="title">
                  <span>{{ $t(`information.quantity.quantity${index + 1}`) }}</span>
                </div>
                <div class="text">{{ $t(`information.quantity.quantityTxt${index + 1}`) }}</div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </section>
  <section class="section-part pt-100 section-cooperate">
    <div class="container-box">
      <div class="section-title">
        <div class="title-name">{{ $t('information.cooperate.title') }}</div>
        <div class="animation-item animation-item-two"><span style="z-index: 0;position:relative">{{ $t('information.cooperate.animationTitle') }}</span></div>
        <div class="title-name">
          {{ $t('information.cooperate.title1') }}
        </div>
      </div>
      <div class="section-sub mt-20">
        <div class="sub-text">{{ $t('information.cooperate.subTitle') }}</div>
      </div>
    </div>
    <div class="cooperate-swiper mt-40">
      <el-image class="cooperate-swiper-img" :src="cooperate" />
    </div>
  </section>
  <section class="section-part pt-100 section-process">
    <div class="container-box">
      <div class="section-title">
        <div class="title-name">{{ $t('information.process.title') }}</div>
        <div class="animation-item animation-item-two"><span style="z-index: 0;position:relative">{{ $t('information.process.animationTitle') }}</span></div>
      </div>
      <div class="section-sub mt-20">
        <div class="sub-text">{{ $t('information.process.subTitle') }}</div>
      </div>
      <div class="section-content mt-40">
        <el-row :gutter="24">
          <el-col :span="8" v-for="(item, index) in processImageList" :key="`process-${index}`">
            <div class="process-card" >
              <el-image class="card-img" :src="item" />
              <div class="title">{{ $t(`information.process.process${index + 1}`) }}</div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </section>
  <section class="section-part pt-100 section-advantages">
    <div class="container-box">
      <div class="section-title">
        <div class="title-name">{{ $t('information.advantages.title') }}</div>
        <div class="animation-item animation-item-two"><span style="z-index: 0;position:relative">{{ $t('information.advantages.animationTitle') }}</span></div>
      </div>
      <div class="section-sub mt-20">
        <div class="sub-text">{{ $t('information.advantages.subTitle') }}</div>
      </div>
      <div class="advantages-main mt-40">
        <div class="advantages-row">
          <div v-for="(item, index) in advantagesIconImages" :key="`advantages-${index}`" class="cell-box">
            <div class="advantages-cell" :style="`background-image: url(${advantagesImages[index]})`">
              <!-- <img class="head-img" :src="advantagesImages[index]" /> -->
              <div class="cell-container">
                <div class="head">
                  <img class="head-img" :src="item" />
                  <div class="name">{{ $t(`information.advantages.cellTitle${index+1}`) }}</div>
                </div>
                <div class="content">{{ $t(`information.advantages.cellText${index+1}`) }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </section>
  <section class="section-part pt-70 section-device">
    <div class="container-box">
      <div class="section-title">
        <div class="title-name">{{ $t('information.device.title') }}</div>
        <div class="animation-item animation-item-two"><span style="z-index: 0;position:relative">{{ $t('information.device.animationTitle') }}</span></div>
      </div>
      <div class="section-sub mt-20">
        <div class="sub-text">{{ $t('information.device.subTitle') }}</div>
      </div>
      <div class="section-content mt-40">
        <el-row :gutter="60">
          <el-col :span="6" v-for="(item, index) in deviceImageList" :key="`device-${index}`">
            <div class="device-card" >
              <el-image class="card-img" :src="item" />
              <div class="title">{{ $t(`information.device.device${index + 1}`) }}</div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </section>
  <BaseSectionExperience />
</template>

<script setup lang="ts">
  // 获取当前语言
  const { locale } = useI18n();
  // 中英文图片切换合集
  const cooperate:any = ref();
  cooperate.value = new URL(`../assets/images/information/cooperate-${locale.value}.png`, import.meta.url).href;

  // 数量
  const quantityLength = [1, 2, 3, 4];
  const quantityImageList:any = ref([]);
  quantityImageList.value = quantityLength.map(item => {
    return new URL(`../assets/images/information/quantity-icon-${item}.png`, import.meta.url).href
  });

  //操作流程
  const processLength = [1, 2, 3, 4, 5, 6];
  const processImageList:any = ref([]);
  processImageList.value = processLength.map(item => {
    return new URL(`../assets/images/information/process-icon-${item}.png`, import.meta.url).href
  });

    // 仓储服务优势
  const advantagesLength = [1, 2, 3, 4, 5];
  const advantagesIconImages:any = ref([]);
  const advantagesImages:any = ref([]);
  advantagesLength.forEach(item => {
    advantagesIconImages.value.push(new URL(`../assets/images/information/advantages-icon-${item}.png`, import.meta.url).href);
    advantagesImages.value.push(new URL(`../assets/images/information/advantages-${item}.png`, import.meta.url).href);
  });

  //仓储设备集合
  const deviceLength = [1, 2, 3, 4, 5, 6, 7, 8];
  const deviceImageList:any = ref([]);
  deviceImageList.value = deviceLength.map(item => {
    return new URL(`../assets/images/information/device-icon-${item}.png`, import.meta.url).href
  });

</script>

<style lang="scss" scoped>
.section-swiper {
  .box-txt-content {
    color:#fff;
    .title{
      color: #FFF;
      font-size: 43px;
      font-weight: 700;
      line-height: normal;
    }
    .small-sub-title {
      color:#fff;
      font-size: 28px;
      font-weight: 500;
      margin: 24px 0px;
    }
  }
}
.section-quantity {
  background-color: #fff;
  padding-bottom: 60px;
  .description{
    color: #000;
    font-size: 18px;
    font-weight: 400;
    margin-top: 14px;
    margin-bottom: 70px;
  }
  .section-title{
    text-align: left;
    margin-top: 12px;
    .splice-title{
      display: block;
    }
  }
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
    box-shadow: 0px 10px 36.4px 0px rgba(55, 94, 171, 0.11);
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
        margin: 6px 0px;
      }
      .text {
        color: #262626;
        font-size: 13px;
        font-weight: 500;
      }
    }
    .card-img {
      width: 54px;
      z-index: 0;
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
.section-cooperate {
  padding-bottom: 60px;
  background-color: #fff;
  .cooperate-swiper{
    display: flex;
    justify-content: center;
  }
}
.section-process {
  background-color: #fff;
  .process-card {
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
      font-size: 24px;
      font-weight: 400;
      line-height: 24px; /* 120% */
    }
    .card-img {
      width: 100%;
      margin-bottom: 22px;
    }
  }
}
.section-advantages {
  overflow: hidden;
  padding-bottom: 60px;
  background-color: #fff;
  .advantages-main {
    margin: 0 auto;
    max-width: 1650px;
    min-width: 1280px;
    .advantages-row {
      display: flex;
      margin-left: -16px;
      margin-right: -16px;
      .cell-box {
        flex: 1;
        min-width: 0;
        padding-left: 16px;
        padding-right: 16px;
        box-sizing: border-box;
      }
    }
    .advantages-cell {
      position: relative;
      height: 100%;
      border-radius: 24px;
      overflow: hidden;
      background-repeat: no-repeat;
      background-size: cover;
      .head {
        padding-top: 36px;
        line-height: 0;
        text-align: center;
        .head-img {
          width: 60px;
        }
        .name {
          padding-top: 12px;
          line-height: 34px;
          font-size: 24px;
          font-weight: 600;
        }
      }
      .content {
        padding-top: 38px;
        line-height: 30px;
        color: #656567;
        font-size: 18px;
      }
      .cell-container {
        padding: 24px;
        min-height: 474px;
        box-sizing: border-box;
        cursor: pointer;
        background: #F1F1F3;
        &:hover {
          background: rgba(179, 222, 255, .01);
          .content {
            color: #262626;
          }
        }
      }
    }
  }
}
.section-device {
  background-color: #fff;
  padding-bottom: 60px;
  .el-col:nth-child(2){
    .card-img {
      width: 168px;
    }
  }
   .el-col:nth-child(4){
    .card-img {
      width: 193px;
    }
  }
  .device-card {
    position: relative;
    padding: 52px 33px;
    height: 364px;
    text-align: center;
    box-sizing: border-box;
    background-color: #fff;
    box-shadow: 0px 10px 36.4px 0px rgba(55, 94, 171, 0.11);
    margin-bottom: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .title {
      line-height: 24px;
      font-size: 19px;
      font-weight: 500;
      color: #000;
    }
    .card-img {
      width: 224px;
      margin-bottom: 52px;
    }
  }
  .el-col:nth-child(5)>.device-card,.el-col:nth-child(6)>.device-card,.el-col:nth-child(7)>.device-card,.el-col:nth-child(8)>.device-card{
    margin-bottom: 70px;
  }
  :hover.device-card{
    transform: scale(1.1);
    box-shadow: 0px 10px 36.4px 0px rgba(55, 94, 171, 0.31);
  }
}
</style>