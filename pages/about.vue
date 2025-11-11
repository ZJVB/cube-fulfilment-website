<template>
  <section class="section-part section-swiper" ref="swiperRef">
    <swiper ref="topSwiper">
      <swiper-slide>
        <div class="swiper-content">
          <img class="swiper-img" src="~/assets/images/about/banner.png" />
          <div class="swiper-img-txt">
            <div class="container-box">
              <div class="box-txt-content">
                <div class="title color-yellow">{{ $t('about.swiper.title') }}</div>
                <div class="description">
                  {{ $t('about.swiper.subTitle') }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </section>
  <section class="section-part pt-100 section-quantity" ref="quantityRef">
    <div class="container-box">
      <div class="section-title">
        <div class="title-name">{{ $t('about.quantity.title') }}</div>
        <div class="animation-item animation-item-two"><span style="z-index: 0;position:relative">{{ $t('about.quantity.animationTitle') }}</span></div>
      </div>
      <div class="section-content mt-40">
        <el-row :gutter="32">
          <el-col :span="8" v-for="(item, index) in quantityImageList" :key="`quantity-${index}`">
            <div class="quantity-card" >
              <div class="card-content">
                <el-image class="card-img" :src="item" />
                <div class="title">
                  {{ $t(`about.quantity.title${index + 1}`) }}
                </div>
                <div class="sub-title">{{ $t(`about.quantity.subTitle${index + 1}`) }}</div>
                <div class="description">
                  {{ $t(`about.quantity.description${index + 1}`) }}
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </section>
  <section class="section-part pt-100 section-introduce" ref="introduceRef">
    <div class="introduce-box">
      <div class="introduce-content">
        <div class="content-right">
            <img class="swiper-img" src="~/assets/images/about/map.png" />
        </div>
        <div class="content-left">
          <div>
            <span class="content-left-title">{{$t('about.introduce.title')}}</span>
            <div class="mb10 content-left-description">{{$t('about.introduce.description')}}</div>
          </div>
          <div>
              <div v-for="(item, index) in contactImageList" :key="`b-contact-${item}`" class="contact-row">
                <el-image class="card-img" :src="item" />
                <div class="row-txt">{{ $t(`footer.contact.txt${index+1}`) }}</div>
              </div>
              <div class="contact-icon">
                <img class="" src="~/assets/images/contact-icon-3.png" />
                <img src="~/assets/images/contact-icon-4.png" />
                <img src="~/assets/images/contact-icon-5.png" />
              </div>
            </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section-part pt-100 section-timeline" ref="timelineRef">
    <div class="container-box">
      <div class="section-title">
        <div class="title-name">{{ $t('about.timeline.title') }}</div>
        <div class="animation-item animation-item-two"><span style="z-index: 0;position:relative">{{ $t('about.timeline.animationTitle') }}</span></div>
      </div>
      <div class="timeline-box">
        <el-row>
          <el-col :span="4" v-for="(item, index) in timeLineList" :key="`time-${item}`"  class="timeline-card">
            <div class="title">
              {{ $t(`about.timeline.time${index+1}`) }}
            </div>
            <div class="left-border"></div>
            <div class="description">
              {{ $t(`about.timeline.description${index+1}`) }}
            </div>
          </el-col>
        </el-row>
        <img class="swiper-img" src="~/assets/images/about/timeline.png" />
      </div>
    </div>
  </section>
  <BaseSectionExperience />
  <section class="section-part pt-70 section-consult" ref="consultRef">
      <div class="container-box">
          <div class="section-content mt-40">
              <el-row :gutter="30">
                  <el-col :span="8" v-for="(item, index) in consultImageList" :key="`consult-${index}`" style="position: relative;" class="consult-col">
                      <div class="consult-card">
                          <el-image class="card-img" :src="item" />
                          <div class="card-content">
                              <div class="title">
                                {{ $t(`about.consult.title${index+1}`) }}
                              </div>
                              <div class="description">
                                {{ $t(`about.consult.description${index+1}`) }}
                              </div>
                          </div>
                      </div>
                      <div class="detail-card">
                        <div class="title">
                          {{ $t(`about.consult.detail${index+1}1`) }}
                        </div>
                        <div class="title">
                          {{ $t(`about.consult.detail${index+1}2`) }}
                        </div>
                        <div class="description">
                          {{ $t(`about.consult.detailTxt${index+1}`) }}
                        </div>
                      </div>
                  </el-col>
              </el-row>
          </div>
      </div>
  </section>
</template>
<script setup lang="ts">
let swiperRef = ref();
let introduceRef = ref();
let consultRef = ref();
let quantityRef = ref();
let timelineRef = ref();
  // 获取当前语言
    // 数量
  const quantityLength = [1, 2, 3];
  const quantityImageList:any = ref([]);
  quantityImageList.value = quantityLength.map(item => {
    return new URL(`../assets/images/about/quantity-icon-${item}.png`, import.meta.url).href
  });

  // 联系信息
  const contactLength = [1, 2];
  const contactImageList:any = ref([]);
  contactImageList.value = contactLength.map(item => {
    return new URL(`../assets/images/contact-icon-${item}.png`, import.meta.url).href
  });

  // 时间线
  const timeLineList = [1, 2, 3, 4, 5, 6];

  // 资讯
  const consultList = [1, 2, 3];
  const consultImageList:any = ref([]);
  consultImageList.value = consultList.map(item => {
    return new URL(`../assets/images/about/consult-${item}.png`, import.meta.url).href
  });
  
  const route = useRoute(); // 获取当前路由对象

watch(() => route.query, (newValue, oldValue) => {
    if (newValue.path == 'quantity') {
      setTimeout(()=>{
        quantityRef.value.scrollIntoView({ behavior: 'smooth' })
      },0)
    }else if(newValue.path == 'swiper'){
      setTimeout(()=>{
        swiperRef.value.scrollIntoView({ behavior: 'smooth' })
      },0)
    }else if(newValue.path == 'introduce'){
      setTimeout(()=>{
        introduceRef.value.scrollIntoView({ behavior: 'smooth' })
      },0)
    }else if(newValue.path == 'consult'){
      setTimeout(()=>{
        consultRef.value.scrollIntoView({ behavior: 'smooth' })
      },0)
    }else if(newValue.path == 'timeline'){
      setTimeout(()=>{
        timelineRef.value.scrollIntoView({ behavior: 'smooth' })
      },0)
    }
}, { immediate: true });
</script>

<style lang="scss" scoped>
.section-swiper {
  .box-txt-content {
    color:#fff;
    .title{
      color: #F40;
      font-size: 64px;
      font-weight: 700;
      line-height: normal;
    }
    .description {
      color: #FFF;
      font-size: 16px;
      font-weight: 400;
    }
  }
}
.section-quantity {
  background-color: #f4f4f4;
  padding-bottom: 60px;
  .quantity-card {
    position: relative;
    padding: 24px 34px;
    height: 100%;
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
      .sub-title {
        color: #262626;
        font-size: 24px;
        font-weight: 500;
        margin-top: 6px;
        margin-bottom: 12px;
      }
      .description{
        color: #262626;
        text-align: center;
        font-size: 13px;
        font-weight: 500;
      }
    }
    .card-img {
      width: 54px;
      z-index: 0;
      margin-bottom: 6px;
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
                padding: 2px 20px;
                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                &-title{
                    color: #F40;
                    font-size: 40px;
                    font-weight: 700;
                }
                &-description{
                  color: rgba(0, 0, 0, 0.61);
                  font-size: 20px;
                  font-weight: 400;
                  line-height: 30px;
                  margin-top: 18px;
                }
                .contact-row{
                  display: flex;
                  align-items: center;
                  gap: 10px;
                  color: #676767;
                  font-size: 20px;
                  font-weight: 400;
                  line-height: 28px; 
                  margin-bottom: 24px;
                }
                .contact-icon img{
                  margin-right: 20px;
                }
            }
            .content-right{
                width: 500px;
                position: relative;
            }
        }
    }
    .section-title{
      line-height: normal;
    }
}
.section-timeline{
  padding-bottom: 100px;
  background-color: #f8fafa;
  .container-box{
    .section-title{
      text-align: left;
    }
    .timeline-card{
      position: relative;
      .title{
        color: #F40;
        font-size: 45px;
        font-weight: 700;
      }
      .left-border{
        height: 60px;
        width: 1px;
        background: #000;
        position: absolute;
        bottom: -90px;
      }
      .description{
        position: absolute;
        bottom: -200px;
        color: rgba(0, 0, 0, 0.61);
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
      }
    }
    .timeline-card:nth-child(2) .left-border,
    .timeline-card:nth-child(4) .left-border,
    .timeline-card:nth-child(6) .left-border{
      top: -70px;
    }
     .timeline-card:nth-child(2) .description,
    .timeline-card:nth-child(4) .description,
    .timeline-card:nth-child(6) .description{
      top: -180px;
    }
    .timeline-box{
      height: 600px;
      padding-top: 270px;
    }
  }
}
.section-consult {
  background-color: #f8fafa;
  padding-bottom: 60px;
  .consult-card {
    opacity: 1;
    position: relative;
    text-align: center;
    box-sizing: border-box;
    border-top:4px solid #F40;
    border-radius: 0px 0px 8px 8px;
    box-shadow: 2.909px 2.909px 18.036px 4.364px rgba(0, 0, 0, 0.09);
    .card-content {
       color: #000;
       text-align: left;
       padding: 16px 18px;
       cursor: pointer;
       background: #FFF;
       border-radius: 8px;
      .title{
        color: #000;
        font-size: 18px;
        font-weight: 400;
      }
      .title::after{
        content: "";
        width: 128px;
        height: 3px;
        background: #F40;
        display: block;
        margin-top: 6px;
      }
      .description {
        color: rgba(0, 0, 0, 0.50);
        font-size: 12px;
        font-weight: 400;
        margin-top: 12px;
        line-height: 16px;
      }
      .more{
        color: #F40;
        font-size: 12px;
        font-weight: 400;
        margin-top: 20px;
        display: flex;
        align-items: center;
        img{
          margin-left: 4px;
        }
      }
    }
    .card-img {
      width:100%;
      height: 240px;
    }
  }
  .detail-card{
    border-left:8px solid #F40;
    padding-left: 20px;
    padding-bottom: 6px;
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;
    width: calc(100% - 20px);
    opacity: 0;
    height: 100%;
    .title{
      color: #000;
      font-size: 53px;
      font-weight: 1000;
    }
    .description{
      color: rgba(0, 0, 0, 0.61);
      font-size: 20px;
      font-weight: 400;
      line-height: 28px;
      margin-top: 24px;
    }
    .more{
      padding: 20px 0px;
      width: 100%;
      border-radius: 100px;
      border: 2px solid #F40;
      color: #F40;
      font-size: 26px;
      font-weight: 500;
      text-align: center;
      margin-top: 40px;
    }
  }
  .consult-col:hover .consult-card{
    opacity: 0;
    transition: opacity .5s ease-in-out;
  }
  .consult-col:hover .detail-card{
    opacity: 1;
    transition: opacity .5s ease-in-out;
  }
  
}
</style>