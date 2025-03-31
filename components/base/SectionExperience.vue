<template>
  <div>
    <section class="section-part section-doforyou">
        <div class="container-box">
            <div class="container-box-left">
            <div class="title">{{ $t('index.doforyou.title') }}</div>
            <div class="sub">{{ $t('index.doforyou.subTitle') }}</div>
            <el-button type="primary">{{$t('index.doforyou.button')}}</el-button>
            </div>
            <div class="container-box-right">
            <img class="doforyou-img" src="~/assets/images/index/doforyou.png" />
            </div>
        </div>
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.section-doforyou{
  width: 100%;
  background: url('~/assets/images/index/doforyou-back.png') no-repeat;
  background-size: cover;
  min-height: 300px;
  position: relative;
  display: flex;
  align-items: center;
  .container-box{
    display: flex;
    justify-content: space-between;
    color: #fff;
    &-left{
      width: 650px;
      .title{
        font-size: 48px;
        font-weight: 700;
        margin-bottom: 16px;
      }
      .sub{
        font-size: 16px;
        font-weight: 400;
        margin-bottom: 40px;
      }
      .el-button{
        width: 120px;
        border-radius: 19px;
        height: 38px;
        line-height: 38px;
      }
    }
    &-right{
      width: 440px;
      height: 100%;
      .doforyou-img{
        position: absolute;
        bottom: 0px;
        width: 430px;
      }
    }
  }
}
</style>