<template>
  <section class="section-part section-swiper">
    <swiper ref="topSwiper">
      <swiper-slide>
        <div class="swiper-content">
          <img class="swiper-img" src="~/assets/images/information/banner.png" />
          <div class="swiper-img-txt">
            <div class="container-box">
              <div class="box-txt-content">
                <div class="title">{{ $t('service.swiper.title') }}</div>
                <div class="small-sub-title">
                  <span class="color-yellow">{{ $t('service.swiper.subTitle') }}</span>
                  <div class="animation-item animation-item-two"><span style="z-index: 0;position:relative">{{ $t('service.swiper.animationTitle') }}</span></div>
                </div>
                <div class="description">{{ $t('service.swiper.description') }}</div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </section>
  <section class="section-part pt-100 section-ecommerce">
    <div class="container-box">
      <div class="section-title">
        <div class="title-name">{{ $t('service.ecommerce.title') }}</div>
        <div class="animation-item animation-item-two"><span style="z-index: 0;position:relative">{{ $t('service.ecommerce.animationTitle') }}</span></div>
      </div>
      <div class="section-sub mt-20">
        <div class="sub-text">{{ $t('service.ecommerce.description') }}</div>
      </div>
      <div class="ecommerce-swiper mt-40">
        <el-row :gutter="30">
          <el-col :span="10">
            <div class="ecommerce-swiper-quation">
              <div class="answer">
                {{ $t('service.ecommerce.answer') }}
              </div>
            </div>
            <el-button class="ecommerce-swiper-button" type="primary">{{$t('service.ecommerce.button')}}</el-button>
          </el-col>
          <el-col :span="14" >
            <div class="ecommerce-swiper-img">
              <img src="~/assets/images/service/map.png" />
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </section>
  <section class="section-part section-quantity">
    <div class="container-box">
      <div class="quantity-left">
        {{ $t('service.quantity.titleLeft') }}
      </div>
      <div class="quantity-right">
        <el-row :gutter="30">
          <el-col :span="6" v-for="(item, index) in quantityList" :key="`quantity-${index}`">
            <div class="quantity-card" >
              <div class="card-content">
                <div class="title">
                  {{ $t(`service.quantity.titleRight${index + 1}`) }}
                </div>
                <div class="text">{{ $t(`service.quantity.titleRightTxt${index + 1}`) }}</div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </section>
  <section class="section-part section-introduce">
    <div class="introduce-box">
      <div class="introduce-content">
        <div class="content-left">
            <img class="swiper-img" src="~/assets/images/service/introduce-1.png" />
        </div>
        <div class="content-right">
            <div class="content-right-head">
              <img src="~/assets/images/service/introduce-icon-2.png" />
              <img src="~/assets/images/service/introduce-icon-2.png" />
              <span>{{$t('service.introduct.subTitle')}}</span>
            </div>
            <div class="content-right-title">
              <div>{{$t('service.introduct.title1')}}</div>
              <div>{{$t('service.introduct.title11')}}</div>
            </div>
            <div class="content-right-description">
              <div>{{$t('service.introduct.description1')}}</div>
            </div>
            <div class="content-right-item">
              <img src="~/assets/images/service/introduce-icon-1.png" />
              <span>{{$t('service.introduct.txt11')}}</span>
            </div>
            <div class="content-right-item">
              <img src="~/assets/images/service/introduce-icon-1.png" />
              <span>{{$t('service.introduct.txt12')}}</span>
            </div>
            <div class="content-right-item">
              <img src="~/assets/images/service/introduce-icon-1.png" />
              <span>{{$t('service.introduct.txt13')}}</span>
            </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section-part section-introduce splice-introduce">
    <div class="introduce-box">
      <div class="introduce-content">
        <div class="content-right">
            <div class="content-right-head">
              <img src="~/assets/images/service/introduce-icon-2.png" />
              <img src="~/assets/images/service/introduce-icon-2.png" />
              <span>{{$t('service.introduct.subTitle')}}</span>
            </div>
            <div class="content-right-title">
              <div>{{$t('service.introduct.title2')}}</div>
              <div>{{$t('service.introduct.title21')}}</div>
            </div>
            <div class="content-right-description">
              <div>{{$t('service.introduct.description2')}}</div>
            </div>
            <div class="content-right-item">
              <img src="~/assets/images/service/introduce-icon-1.png" />
              <span>{{$t('service.introduct.txt21')}}</span>
            </div>
            <div class="content-right-item">
              <img src="~/assets/images/service/introduce-icon-1.png" />
              <span>{{$t('service.introduct.txt22')}}</span>
            </div>
            <div class="content-right-item">
              <img src="~/assets/images/service/introduce-icon-1.png" />
              <span>{{$t('service.introduct.txt23')}}</span>
            </div>
        </div>
        <div class="content-left">
            <img class="swiper-img" src="~/assets/images/service/introduce-2.png" />
        </div>
      </div>
    </div>
  </section>
  <section class="section-part section-introduce">
    <div class="introduce-box">
      <div class="introduce-content">
        <div class="content-left">
            <img class="swiper-img" src="~/assets/images/service/introduce-3.png" />
        </div>
        <div class="content-right">
            <div class="content-right-head">
              <img src="~/assets/images/service/introduce-icon-2.png" />
              <img src="~/assets/images/service/introduce-icon-2.png" />
              <span>{{$t('service.introduct.subTitle')}}</span>
            </div>
            <div class="content-right-title">
              <div>{{$t('service.introduct.title3')}}</div>
              <div>{{$t('service.introduct.title31')}}</div>
            </div>
            <div class="content-right-description">
              <div>{{$t('service.introduct.description3')}}</div>
            </div>
            <div class="content-right-item">
              <img src="~/assets/images/service/introduce-icon-1.png" />
              <span>{{$t('service.introduct.txt31')}}</span>
            </div>
            <div class="content-right-item">
              <img src="~/assets/images/service/introduce-icon-1.png" />
              <span>{{$t('service.introduct.txt32')}}</span>
            </div>
            <div class="content-right-item">
              <img src="~/assets/images/service/introduce-icon-1.png" />
              <span>{{$t('service.introduct.txt33')}}</span>
            </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section-part pt-100 section-solve">
    <div class="container-box">
      <div class="section-title">
        <div class="title-name">{{ $t('service.solve.title') }}</div>
      </div>
      <div class="section-content mt-40">
        <el-row :gutter="32">
          <el-col :span="6" v-for="(item, index) in solveImageList" :key="`solve-${index}`">
            <div class="solve-card" >
              <div class="card-img-box">
                <el-image class="card-img" :src="item" />
              </div>
              <div class="card-content">
                <div class="title">{{ $t(`service.solve.solve${index + 1}`) }}</div>
                <div class="text">{{ $t(`service.solve.solveTxt${index + 1}`) }}</div>
              </div>
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
  // 数量
  const quantityList = [1, 2, 3, 4];

    //我们能解决您的问题
  const solveLength = [1, 2, 3, 4, 5, 6,7,8];
  const solveImageList:any = ref([]);
  solveImageList.value = solveLength.map(item => {
    return new URL(`../assets/images/index/solve-icon-${item}.png`, import.meta.url).href
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
    .description{
      color: #FFF;
      font-size: 18px;
      font-weight: 400;
      margin-top: 0px;
    }
  }
}
.section-ecommerce {
  padding-bottom: 60px;
  background-color: #fff;
  .section-title,.section-sub{
    z-index: 1;
    position: relative;
  }
  .ecommerce-swiper{
    .ecommerce-swiper-quation{
      width: 464px;
      padding: 40px 20px;
      border-radius: 12px;
      background: #FFF;
      box-shadow: 2.909px 2.909px 18.036px 4.364px rgba(0, 0, 0, 0.09);
      .quation{
        color: #000;
        font-size: 27px;
        font-weight: 500;
        margin-bottom: 24px;
      }
      .answer{
        color: rgba(0, 0, 0, 0.70);
        font-size: 20px;
        font-weight: 400;
      }
    }
    .ecommerce-swiper-button{
      width: 460px;
      padding: 20px 180px;
      border-radius: 100px;
      margin-top: 60px;
    }
    .ecommerce-swiper-img{
      position: relative;
      min-height: 600px;
      img{
        position: absolute;
        bottom: -40px;
        left: 0px;
      }
    }
  }
}
.section-quantity{
  background: url('~/assets/images/service/quantity-back.png') no-repeat;
  background-color: #3290fa;
  background-size: cover;
  min-height: 180px;
  display: flex;
  align-items: center;
  .container-box{
    display: flex;
    gap: 100px;
    align-items: center;
    .quantity-left{
      color: #FFF;
      font-size: 40px;
      font-weight: 900;
      width: 30%;
    }
    .quantity-right{
      color: #FFF;
      flex: 1;
      text-align: center;

      .title{
        font-size: 34px;
        font-weight: 900;
      }
      .text{
        font-size: 16px;
        font-weight: 500;
        margin-top: 20px;
      }
    }
  }
}
.section-introduce {
  background-color: #e7e7e7;
  padding-bottom: 80px;
    .introduce-box{
        width: 100%;
        .introduce-content{
            padding: 100px 0px;
            width: 66%;
            margin: 0 auto;
            display: flex;
            position: relative;
            .content-right{
                width: 50%;
                background: #fff;
                padding: 52px;
                position: absolute;
                right: 50px;
                top: 180px;
                border-radius: 8px;
                box-shadow: 4px 4px 45.2px 2px rgba(0, 0, 0, 0.11);
              &-head{
                img{
                  width: 12px;
                }
                span{
                  color: #000;
                  font-size: 14px;
                  font-weight: 400;
                  margin-left: 4px;
                }
              }
              &-title{
                margin-top: 16px;
                div{
                  color: #000;
                  font-size: 34px;
                  font-weight: 700;
                }
              }
              &-description{
                margin: 24px 0px;
                color: #000;
                font-size: 16px;
                font-weight: 400;
              }
              &-item{
                display: flex;
                align-items: center;
                gap: 16px;
                margin-bottom: 10px;
              }
            }
            .content-left{
                margin-left: 50px;
                width: 50%;
                border-radius: 8px;
                position: relative;
            }
        }
    }
    .section-title{
      line-height: normal;
    }
}
.splice-introduce{
   background-color: #fff;
   .content-left{
     margin-left: calc(50% - 50px) !important;
     margin-right: 50px;
   }
   .content-right{
     left: 50px;
     z-index: 99;
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
</style>