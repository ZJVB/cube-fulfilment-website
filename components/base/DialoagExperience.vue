<template>
   <section>
        <el-dialog
        v-model="dialogShow"
        class="dialoag-experience"
        width="576"
        top="6vh"
        center
        @close="closeDialog">
            <div class="content-title">
                <div class="title-name">{{ $t('common.experience.dialoag.header') }}</div>
                <div class="title-tip">{{ $t('common.experience.dialoag.headerTip') }}</div>
            </div>
            <el-form
                ref="formRef"
                class="dialog-form"
                label-position="top"
                size="large"
                :model="dialogForm"
                :rules="formRules">
                    <el-form-item :label="$t('common.experience.dialoag.label1')" prop="contactName">
                        <el-input :placeholder="$t('common.experience.dialoag.placeholder1')" v-model="dialogForm.contactName" />
                    </el-form-item>
                    <el-form-item :label="$t('common.experience.dialoag.label2')" prop="companyName">
                        <el-input :placeholder="$t('common.experience.dialoag.placeholder2')" v-model="dialogForm.companyName" />
                    </el-form-item>
                    <el-form-item :label="$t('common.experience.dialoag.label3')" prop="contactPhone">
                        <el-input :placeholder="$t('common.experience.dialoag.placeholder3')" v-model="dialogForm.contactPhone" />
                    </el-form-item>
                    <el-form-item :label="$t('common.experience.dialoag.label4')" prop="sysList">
                        <el-checkbox-group class="check-list" v-model="dialogForm.sysList">
                            <el-checkbox-button :value="2" :label="2">
                                <img class="check-img" src="~/assets/images/experience-account-2.png" />
                                <div class="check-name">{{ $t('common.experience.dialoag.sys2') }}</div>
                            </el-checkbox-button>
                            <el-checkbox-button :value="1" :label="1">
                                <img class="check-img" src="~/assets/images/experience-account-1.png" />
                                <div class="check-name">{{ $t('common.experience.dialoag.sys1') }}</div>
                            </el-checkbox-button>
                            <el-checkbox-button :value="3" :label="3">
                                <img class="check-img" src="~/assets/images/experience-account-3.png" />
                                <div class="check-name">{{ $t('common.experience.dialoag.sys3') }}</div>
                            </el-checkbox-button>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item :label="`${$t('common.experience.dialoag.label5')}：`" prop="remarks">
                        <el-input type="textarea" rows="3" v-model="dialogForm.remarks" />
                    </el-form-item>
            </el-form>
            <template #footer>
                <div class="dialog-footer">
                <el-button size="large" type="primary" :loading="dialogLoading" @click="dialogSubmit()">{{ $t('common.experience.dialoag.formBtn') }}</el-button>
                </div>
            </template>
        </el-dialog>
   </section>
</template>

<script setup lang="ts" name="menu">
  import { ElMessageBox,ElMessage } from 'element-plus'
  // 获取当前语言
  const { locale } = useI18n();
  const { proxy } = getCurrentInstance();
  const dialogShow = ref(false);
  const props = defineProps({
    // 调用组件的来源
    contactPhone: {
      type: String,
      default: ''
    },
    show:{
      type: Boolean,
      default: false,
    }
  });
  var checkPhone = (rule:any, value:any, callback:any) => {
    if (!value) {
      if (rule.required) {
        let _errorMsg = rule.message || '手机号不能为空';
        callback(new Error(_errorMsg));
      } else {
        return callback();
      };
    } else {
      const RegExp = /^0?(13[0-9]|14[0-9]|15[0-9]|16[0-9]|17[0-9]|18[0-9]|19[0-9])[0-9]{8}$/;
      if (RegExp.test(value)) {
        callback();
      } else {
        return callback(new Error('手机号格式不正确'));
      }
    };
  };
  var checkName =  (rule:any, value:any, callback:any) => {
    if (!value) {
      if (rule.required) {
        let _errorMsg = rule.message || '姓名不能为空';
        callback(new Error(_errorMsg));
      } else {
        return callback();
      };
    } else {
      const RegExp = /^[\u4E00-\u9FA5]{2,}$/;
      if (RegExp.test(value)) {
        callback();
      } else {
        return callback(new Error('只能输入中文且不能少于两位'));
      }
    };
  };
  var checkCompany =  (rule:any, value:any, callback:any) => {
    if (!value) {
      if (rule.required) {
        let _errorMsg = rule.message || '公司名称不能为空';
        callback(new Error(_errorMsg));
      } else {
        return callback();
      };
    } else {
      const RegExp = /^[\u4E00-\u9FA5]{4,}$/;
      if (RegExp.test(value)) {
        callback();
      } else {
        return callback(new Error('只能输入中文且不能少于四位'));
      }
    };
  };
  watch(()=>props.show,(newa)=>{
      dialogShow.value = newa
      if (proxy.$refs.formRef) {
        proxy.$refs.formRef.resetFields();
      };
      if (props.contactPhone) {
          dialogForm.contactPhone = props.contactPhone;
      }
  })
  // 表单数据及规则
  interface FormValue {
    contactName?: string,
    companyName?: string,
    contactPhone?: string,
    sysList?: [],
    remarks?: string
  };
  let dialogForm = reactive<FormValue>({
    // 姓名
    contactName: '',
    // 公司名称
    companyName: '',
    // 手机号
    contactPhone: '',
    // 想体验的系统
    sysList: [],
    // 备注
    remarks: ''
  });
  const formRules = {
    contactName: [
      { required: true, validator: checkName, trigger: ['blur', 'change'] }
    ],
    companyName: [
      { required: true, validator: checkCompany, trigger: ['blur', 'change'] }
    ],
    contactPhone: [
      { required: true, validator: checkPhone, trigger: ['blur', 'change'] }
    ],
    sysList:[
      { required: true, message: '请选择系统', trigger: ['blur', 'change'] }
    ],
  };
  // 按钮加载动画
  const dialogLoading = ref(false);

  const emits = defineEmits(['update']);
  const closeDialog =(()=>{
     emits('update',false)
  });
  // 体验账号申请提交
  function dialogSubmit () {
    proxy.$refs.formRef.validate(async (valid:any) => {
      if (valid) {
        dialogLoading.value = true;
        let {
          contactName,
          companyName,
          contactPhone,
          sysList,
          remarks
        } = JSON.parse(JSON.stringify(dialogForm));
        let params = {
          sysName: sysList.join(','),
          contactName,
          companyName,
          contactPhone,
          remarks
        };
        const response = await useFetch('/archives-service/arc/customerTrial/addCustomerTrial', {
          // server: false, // 不开启服务端渲染
          method: 'post',
          baseURL: '/api',
          headers: {
            'Content-Type': 'application/json',
            'Accept-Language': locale.value === 'zh' ? 'zh-CN' : locale.value === 'en' ? 'en-US' : ''
          },
          body: params
        });
        const { success, message } = response.data.value;
        if (success) {
          ElMessageBox.confirm('申请成功，我们将尽快联系您！', '', {
            confirmButtonText: '确定',
            showCancelButton: false,
            type: 'success'
          }).then(() => {
          }).catch(() => {
          });
          dialogShow.value = false;
        } else {
          ElMessage.error(message);
        };
        dialogLoading.value = false;
      } else {
        console.log('error submit!!');
        return false;
      };
    });
  };
</script>

<style lang="scss">
.dialoag-experience {
  .el-dialog__header {
    padding: 30px;
  }
  .el-dialog__close {
    width: 40px;
    height: 40px;
    svg {
      width: 30px;
      height: 30px;
      color: #000;
      font-size: 30px;
      font-weight: 700;
    }
  }
  .content-title {
    text-align: center;
    .title-name {
      padding-bottom: 16px;
      line-height: 25px;
      color: #000;
      font-size: 18px;
      font-weight: 600;
    }
    .title-tip {
      line-height: 17px;
      color: #747474;
      font-size: 12px;
    }
  }
  .el-dialog__body {
    padding: 0 97px;
  }
  .dialog-form {
    padding: 16px 0 0 0;
    .el-form-item {
      margin-bottom: 18px;
      .el-form-item__label {
        margin-bottom: 8px;
        line-height: 20px;
        color: #000;
        font-size: 14px;
      }
      &.is-required {
        .el-form-item__label {
          &::before {
            display: none;
          }
          &::after {
            content: "*";
            color: #FF4A59;
            font-size: 14px;
          }
        }
      }
    }
    .el-checkbox-group{
      display: flex;
      .el-checkbox-button:nth-child(2){
        .el-checkbox-button__inner {
          .check-img{
            width: 56px;
          }
        }
      }
      .el-checkbox-button:nth-child(3){
        .el-checkbox-button__inner {
          .check-img{
            margin-top: 10px;
          }
        }
      }
      .el-checkbox-button {
        &__inner {
          width: 120px;
          height: 156px;
          padding: 30px 0px;
          // padding: 0px;
          line-height: 0;
          border: solid 2px transparent;
          border-radius: 4px;
          box-shadow: 0px 1px 6px 0px rgba(150, 150, 150, 0.25) !important;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .check-img {
            margin: 0 auto 7px auto;
            width: 48px;
          }
          .check-name {
            line-height: 20px;
            min-height: 20px;
            color: #000;
            font-size: 14px;
          }
        }
        & + .el-checkbox-button {
          margin-left: 8px;
        }
        &.is-checked {
          .el-checkbox-button__inner {
            background: #fff;
            border-color: #1890FF;
          }
        }
      }
    }
    
  }
  .dialog-footer {
    padding-bottom: 20px;
    .el-button {
      display: flex;
      margin: auto;
      width: 380px;
      font-size: 16px;
    }
  }
}
.el-message-box__btns{
  padding: 20px 15px 0px
}
.el-message-box__content{
  margin-top: 16px;
}
</style>