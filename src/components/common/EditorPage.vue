<template>
  <div class="w-e-text-container">
    <div class="w-e-toolbar" id="toolbar">
      <Toolbar :editor="editorRef" :defaultConfig="toolbarConfig" :mode="mode" />
    </div>
    <div id="editor">
      <Editor class="w-e-text" :defaultConfig="editorConfig" :mode="mode" v-model="valueHtml" style="height: 400px; overflow-y: hidden" @onCreated="handleCreated" />
    </div>
  </div>
</template>
  
<script setup lang="ts">
import "@wangeditor/editor/dist/css/style.css";
import { onBeforeUnmount, ref, shallowRef, onMounted, watchEffect } from "vue";
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
import { content } from "html2canvas/dist/types/css/property-descriptors/content";

// 编辑器实例，必须用 shallowRef，重要！
const props = defineProps({
  isEdit: Boolean,
  type: String,
  cont: String,
});
const editorRef = shallowRef();
const mode = ref("default");
// 内容 HTML
const valueHtml = ref("");

const toolbarConfig = {};
const editorConfig = ref({
  placeholder: "",
  MENU_CONF: {},
});

// 自定义图片上传
editorConfig.value.MENU_CONF["uploadImage"] = {
  async customUpload(file: Blob | MediaSource, insertFn: (arg0: string, arg1: string) => void) {
    console.log("上传图片", file);
    // 将上传的file图片转换为base64
    const base64 = URL.createObjectURL(file);

    // 这里的file为上传的图片对象,insertFn传入
    insertFn(base64, "img");
  },
};
// 模拟 ajax 异步获取内容
onMounted(() => {
  // valueHtml.value = props.cont || '';
  console.log("props.cont",props.cont);
  setTimeout(() => {
    valueHtml.value = props.cont||'';
  }, 100);
});
// 组件销毁时，也及时销毁编辑器，重要！
onBeforeUnmount(() => {
  const editor = editorRef.value;
  if (editor == null) return;

  editor.destroy();
});

// 编辑器回调函数
const handleCreated = (editor: any) => {
  editorRef.value = editor; // 记录 editor 实例，重要！
};
const disable = () => {
  const editor = editorRef.value;
  if (editor == null) return;
  editor.disable();
};

watchEffect(() => {
      console.log("编辑模式",props.isEdit);
  if (props.type === "edit") {
    if (!props.isEdit) {
      disable();
    } else {
      console.log("editorRef.value",editorRef.value);
      editorRef.value.enable();
    }
  }
});
defineExpose({
  valueHtml
})
</script>
<style scoped lang="scss">
.w-e-text-container {
  height: calc(100% - 60px);
  margin: 3px;
  border: 1px solid #ebebeb;
  border-radius: 4px;
  overflow: hidden;
}
.w-e-toolbar {
  box-shadow: 0 3px 5px 0px #dddddd5c;
  z-index: 1;
}
.w-e-text {
  height: 100%;
  padding: 20px 0;
}
#editor {
  height: auto !important;
  min-height: 200px;
  max-height: 100%;
  overflow: auto;
}
</style>