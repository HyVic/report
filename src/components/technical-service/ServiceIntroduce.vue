<template>
  <div class="service_introduce">
    <div class="service_introduce_left">
      <div class="service_introduce_title">标题</div>
      <div class="service_introduce_desc">介绍</div>
    </div>
    <div class="service_introduce_right">
      <div class="service_introduce_title">
        技术服务<span @click="handleEdit"><i class="iconfont icon-bianji"></i>{{ text }}</span>
      </div>
      <editor-page :type="'edit'" :is-edit="isEdit"></editor-page>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import EditorPage from "../common/EditorPage.vue";
const text = ref("编辑");
const isEdit = ref(false);
const handleEdit = () => {
  if (isEdit.value) {
    text.value = "编辑";
    isEdit.value = false;
  } else {
    text.value = "保存";
    isEdit.value = true;
  }
};
</script>
<style scoped lang="scss">
.service_introduce {
  width: calc(100% - 22px);
  height: calc(100% - 20px);
  margin: 10px;
  box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.1490196078);
  display: flex;
  .service_introduce_left {
    width: 299px;
    border-right: 1px solid #dfdfdf;
    .service_introduce_desc {
      height: calc(100% - 51px);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
    }
  }
  .service_introduce_right {
    width: calc(100% - 300px);
    height: 100%;
    .service_introduce_title {
      justify-content: space-between;
      padding: 0 10px;
      span {
        font-size: 14px;
        background-color: #6099a3;
        cursor: pointer;
        outline: none;
        border: none;
        border-radius: 3px;
        color: white;
        padding: 0px 10px;
        height: 25px;
        margin-right: 5px;
        &:hover {
          opacity: 0.8;
        }
      }
      /*       .btn_save {
        font-size: 15px;
        background-color: green;
        cursor: pointer;
        outline: none;
        border: none;
        border-radius: 3px;
        color: white;
        padding: 0px 10px;
        height: 25px;
        &:hover {
          opacity: 0.8;
        }
      } */
    }
  }
  .service_introduce_title {
    height: 50px;
    border-bottom: 1px solid #dfdfdf;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
  }
}
</style>
