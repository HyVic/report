<template>
  <div class="dialog">
    <div class="dialog-inner">
      <div class="dialog-top">
        <span>{{ title }}</span>
        <i class="iconfont icon-shanchu1" @click="Close"></i>
      </div>
      <div class="dialog-basic-info common-cont">
        <el-scrollbar height="100%">
          <editor-come-pages :type="'add'" :row-data="rowData" :is-edit="true" :content="content"></editor-come-pages>
        </el-scrollbar>
      </div>
      <div class="dialog-footer">
        <el-button @click="submit"><i class="iconfont icon-p-footer"></i>提交</el-button>
      </div>
    </div>
  </div>
</template>
  <script setup lang="ts">
import { ref, watch } from "vue";
import EditorComePages from "../common/EditorComePages.vue";
const props = defineProps({
  isEdit: Boolean,
  title: String,
  content: Array as () => any,
  rowData: Object as () => any,
});

const emits = defineEmits(["close"]);
const Close = () => {
  emits("close");
};
const submit = () => {
  emits("close");
  console.log('提交==', props.content);
};
const info = ref({
  image: "",
  icon: "",
  link: "",
  title: "",
  describe: "",
});
watch(props.content, (newVal) => {
  // console.log('props.content=====', newVal);
})
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
    width: 80%;
    min-width: 500px;
    min-height: 400px;
    height: 90%;
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
      height: calc(100% - 115px);
      overflow: auto;
      .icon {
        width: 100%;
        font-size: 25px;
        color: #9f9f9f;
        i {
          font-size: 50px;
          color: #9f9f9f;
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
  