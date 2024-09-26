<template>
    <div class="dialog">
      <div class="dialog-inner">
        <div class="dialog-top">
          <span>账户
            详情</span>
          <i class="iconfont icon-cha1" @click="Close"></i>
        </div>
        <div class="dialog-basic-info common-cont">
            <el-form :model="row">
                <el-form-item label="位点编号：">
                    <el-input v-model="row.siteNumner" autocomplete="off" />
                </el-form-item>
                <el-form-item label="染色体：">
                    <el-input v-model="row.chromosome" autocomplete="off" />
                </el-form-item>
                <el-form-item label="物理位置：">
                    <el-input v-model="row.physicalPosition" autocomplete="off" />
                </el-form-item>
                <el-form-item label="等位变异及侧翼序列：">
                    <el-input v-model="row.variantSequence" type="textarea" />
                </el-form-item>
            </el-form>
        </div>
        <div class="dialog-footer">
            <el-button @click="Close"><i class="iconfont icon-p-footer" ></i>关闭</el-button>
        </div>
      </div>
    </div>
  </template>
  <script setup lang="ts">
  import type { TableInstance } from 'element-plus'
  import { ref, onMounted } from 'vue'
  const props = defineProps<{
    row: any,
  }>()
  const dialogFormVisible = ref(true)
  const emits = defineEmits(['close'])
  const Close = () => {
    emits('close')
  }

  onMounted(() => {
    console.log(1111111,props.row)
  })
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
      width: 50%;
      max-width: 800px;
      min-width: 500px;
      height: auto;
      min-height: 500px;
      background-color: white;
      border-radius: 5px;
      .dialog-top{
        height: 50px;
        border-bottom: 1px solid #e6e6e6;
        padding: 0 20px;
        padding-top: 5px;
        font-size: 20px;
        @include layout(center,space-between);
        .iconfont{
          cursor: pointer;
          font-size: 28px;
        }
      }
      .common-cont{
        width: 100%;
        padding: 20px;
        box-sizing: border-box;
        .title{
          text-align: left;
          padding-bottom: 10px;
        }
      }
      .dialog-basic-info{
        height: auto;
        :deep .el-table{
            border: 1px solid #e5e5e5;
            border-radius: 2px;
        }
        .el-form {
        width: 100%;
        .el-form-item {
          width: 100%;
          margin-bottom: 10px;
          :deep .el-form-item__label{
            width: 160px;
            justify-content: flex-start;
            font-weight: bold;
            text-align: left;
            &::after{
                color: var(--el-color-danger);
                content: "*";
                font-size: 13px;
            }
          }
          .el-form-item__content{
            width: calc(100% - 160px);
          }
          .label{
            border: 1px dashed #b3b3b3;
            padding: 0 20px;
            border-radius: 5px;
            width: calc(100% - 0px);
            text-align: left;
          }
          :deep .el-textarea__inner{
            min-height: 200px !important;
          }
        }
      }
      }
      .dialog-footer{
          border-top: 1px solid #e5e5e5;
          padding: 10px 20px;
          text-align: right;
          .iconfont{
            padding-right: 10px;
            font-size: 18px;
          }
          button{
            outline: none;
          }
        }
    }
  }
  </style>