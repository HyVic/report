<template>
  <div class="dialog">
    <div class="dialog-inner">
      <div class="dialog-top">
        <span>{{ title }}</span>
        <i class="iconfont icon-shanchu1" @click="Close"></i>
      </div>
      <div class="dialog-basic-info common-cont">
        <el-form :model="info">
          <el-form-item v-if="sort=='carousel'" label="外链：">
            <el-input v-model="info.link" />
          </el-form-item>
          <el-form-item v-if="sort=='service' || sort=='product' || sort=='partner'" label="标题：">
            <el-input v-model="info.title" />
          </el-form-item>
          <el-form-item v-if="sort=='service'" label="简述：">
            <el-input type="textarea" v-model="info.describe" />
          </el-form-item>
          <el-form-item label="图片：">
            <Uploadimage :image="info.image"></Uploadimage>
          </el-form-item>
          <el-form-item label="图标：" v-if="sort=='product'">
            <Uploadimage :image="info.icon" :icon-class="'icon'"></Uploadimage>
          </el-form-item>
        </el-form>
      </div>
      <div class="dialog-footer">
        <el-button @click="submit"
          ><i class="iconfont icon-p-footer"></i>提交</el-button
        >
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watchEffect } from "vue";
import Uploadimage from "../common/Uploadimage.vue";
const props = defineProps({
  type: String,
  title: String,
  sort: String,
  rowData: Object,
});

const emits = defineEmits(["close"]);
const Close = () => {
  emits("close");
};
const submit = () => {
  console.log(info.value);
  emits("close");
};
const info = ref({
  image: "",
  icon: "",
  link: "",
  title: '',
  describe: '',
});
watchEffect(() => {
  if (props.type === "edit" && props.rowData) {
    info.value = props.rowData;
    console.log(2222222, info.value);
  } else {
    info.value = { image: "", link: "" };
  }
});
</script>
<style scoped lang="scss">
@mixin layout($align, $justify) {
  display: flex;
  align-items: $align;
  justify-content: $justify;
}
.dialog {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(56, 52, 52, 0.62);
  z-index: 3;
  @include layout(center, center);
  .dialog-inner {
    width: 50%;
    max-width: 800px;
    min-width: 500px;
    height: auto;
    min-height: 400px;
    background-color: white;
    border-radius: 5px;
    .dialog-top {
      height: 50px;
      border-bottom: 1px solid #e6e6e6;
      padding: 0 20px;
      padding-top: 5px;
      font-size: 20px;
      @include layout(center, space-between);
      .iconfont {
        cursor: pointer;
        font-size: 20px;
        transition: all 0.3s;
        &:hover {
          transform: scale(1.2);
        }
      }
    }
    .common-cont {
      width: 100%;
      padding: 20px;
      box-sizing: border-box;
      .title {
        text-align: left;
        padding-bottom: 10px;
      }
    }
    .dialog-basic-info {
      height: auto;
      .icon {
        width: 100%;
        font-size: 25px;
        color: #9f9f9f;
        i {
          font-size: 50px;
          color: #9f9f9f;
        }
      }
      .el-form {
        width: 100%;
        .el-form-item {
          width: 100%;
          margin-bottom: 10px;
          :deep .el-form-item__label {
            // width: 120px;
            justify-content: flex-start;
            font-weight: bold;
            text-align: left;
            /*             &::after {
              color: var(--el-color-danger);
              content: "*";
              font-size: 13px;
            } */
          }
          .el-form-item__content {
            width: calc(100% - 150px);
          }
          .label {
            border: 1px dashed #b3b3b3;
            padding: 0 20px;
            border-radius: 5px;
            width: calc(100% - 0px);
            text-align: left;
          }
          :deep .el-textarea__inner {
            min-height: 100px !important;
          }
        }
      }
    }
    .dialog-footer {
      border-top: 1px solid #e5e5e5;
      padding: 10px 20px;
      text-align: right;
      .iconfont {
        padding-right: 10px;
        font-size: 18px;
      }
      button {
        outline: none;
      }
    }
  }
}
</style>
