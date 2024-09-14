<template>
  <div class="dialog">
    <div class="dialog-inner">
      <div class="dialog-top">
        <span>Upload Project Data</span>
        <i class="iconfont icon-close" @click="Close(false)"></i>
      </div>
      <div class="dialog-basic-info common-cont">
        <el-form :model="formInfo">
          <el-form-item label="Title">
            <el-input v-model="formInfo.Title" autocomplete="off" />
          </el-form-item>
          <el-form-item label="Species">
            <el-select v-model="formInfo.Species" placeholder="Please select a Species">
              <el-option v-for="item in SpeciesList" :key="item.value" :label="item.label" :value="item.value"/>
            </el-select>
          </el-form-item>
          <el-form-item label="Tissue">
            <el-input v-model="formInfo.Tissue" autocomplete="off" />
          </el-form-item>
          <el-form-item label="Datatype">
            <el-select v-model="formInfo.Datatype" placeholder="Please select a Datatype">
              <el-option v-for="item in DatatypeList" :key="item.value" :label="item.label" :value="item.value"/>
            </el-select>
          </el-form-item>
          <el-form-item label="Description">
            <el-input v-model="formInfo.Description" type="textarea" />
          </el-form-item>
        </el-form>
        <div class="dialog-footer">
          <el-button @click="Close(false)">Cancel</el-button>
          <el-button type="primary" @click="Close(true)">
            Confirm
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
const dialogFormVisible = ref(true)
const formInfo = ref({
  Title: '',
  Species: '',
  Tissue: '',
  Datatype: '',
  Description: '',
})
const SpeciesList = ref([
  {
    label: 'Human',
    value:'Human'
  },
  {
    label: 'Mouse',
    value: 'Mouse'
  },
  {
    label: 'Monkey',
    value: 'Monkey'
  }
])
const DatatypeList = ref([
  {
    label: 'scRNAseq',
    value:'scRNAseq'
  },
  {
    label: 'RNAseq',
    value: 'RNAseq'
  }
])
const emits = defineEmits(['cancel'])
const Close = (type: boolean) => {
  emits('cancel',type?formInfo.value:'')
}
onMounted(() => {
  console.log(1111111,dialogFormVisible.value)
})
defineExpose({formInfo})
</script>


<style scoped lang="scss">
@mixin layout($align,$justify){
  display: flex;
  align-items: $align;
  justify-content: $justify;
}
.dialog{
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(56, 52, 52, 0.62);
  z-index: 3;
  @include layout(center,center);
  .dialog-inner{
    width: 60%;
    min-width: 800px;
    height: auto;
    min-height: 400px;
    background-color: white;
    border-radius: 5px;
    .dialog-top{
      height: 50px;
      border-bottom: 1px solid #e6e6e6;
      padding: 0 30px;
      padding-top: 5px;
      @include layout(center,space-between);
      .iconfont{
        cursor: pointer;
      }
    }
    .common-cont{
      width: 100%;
      padding: 30px;
      box-sizing: border-box;
      .title{
        text-align: left;
        padding-bottom: 10px;
      }
    }
    .dialog-basic-info{
      height: auto;
      .el-form {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        border: 1px dashed #b3b3b3;
        padding: 20px 20px 10px;
        box-sizing: border-box;
        border-radius: 10px;
        .el-form-item {
          width: 45%;
          margin-right: 10%;
          margin-bottom: 10px;
          :deep .el-form-item__label{
            width: 100px;
            justify-content: flex-start;
            font-weight: bold;
          }
          .el-form-item__content{
            width: calc(100% - 100px);
          }
          .label{
            border: 1px dashed #b3b3b3;
            padding: 0 20px;
            border-radius: 5px;
            width: calc(100% - 0px);
            text-align: left;
          }
          &:nth-child(2n) {
            margin-right: 0;
          }
          &:last-child{
            width: 100%;
            margin-right: 0;
            .label{
              line-height: 1.5;
              padding: 10px 20px
            }
          }
        }
      }
      .dialog-footer{
        margin-top: 30px;
        text-align: right;
        button{
          outline: none;
        }
      }
    }
  }
}
</style>