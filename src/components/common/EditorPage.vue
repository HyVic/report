<!-- <template>
  <div class="w-e-text-container">
    <div class="w-e-toolbar" id="toolbar">
      <Toolbar :editor="editorRef" :defaultConfig="toolbarConfig" mode="default" />
    </div>
    <div id="editor">
      <Editor class="w-e-text" v-model="valueHtml" ref="editor" :defaultConfig="editorConfig" mode="default" @onCreated="handleCreated" @customPaste="customPaste" />
    </div>
  </div>
</template>
  <script setup lang="ts">
// 富文本编辑器文档链接: https://www.wangeditor.com/v5/getting-started.html
// 引入富文本编辑器CSS
import "@wangeditor/editor/dist/css/style.css";
import { onMounted, onBeforeUnmount, ref, shallowRef, watchEffect, nextTick } from "vue";
// 导入富文本编辑器的组件
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";

const props = defineProps({
  isEdit: Boolean,
});
// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef();
// 内容 HTML
const valueHtml = ref(`<p>aaz</p>`);
const toolbarConfig = {
  toolbarKeys: [
        // 菜单 key
        'headerSelect',
        'bold', // 加粗
        'italic', // 斜体
        'through', // 删除线
        'underline', // 下划线
        'bulletedList', // 无序列表
        'numberedList', // 有序列表
        'color', // 文字颜色
        'insertLink', // 插入链接
        'fontSize', // 字体大小
        'lineHeight', // 行高
        'uploadImage', // 上传图片
        'delIndent', // 缩进
        'indent', // 增进
        'deleteImage',//删除图片
        'divider', // 分割线
        'insertTable', // 插入表格
        'justifyCenter', // 居中对齐
        'justifyJustify', // 两端对齐
        'justifyLeft', // 左对齐
        'justifyRight', // 右对齐
        'undo', // 撤销
        'redo', // 重做
        'clearStyle', // 清除格式
    ]
};
const editorConfig = ref({
  placeholder: "请输入内容...",
  MENU_CONF: {},
  readOnly: false,
});

// 自定义图片上传
editorConfig.value.MENU_CONF["uploadImage"] = {
  async customUpload(file, insertFn) {
    console.log("上传图片", file);
    // 将上传的file图片转换为base64
    const base64 = URL.createObjectURL(file);

    // 这里的file为上传的图片对象,insertFn传入
    insertFn(base64, "img");
  },
};

// 自定义视频上传
editorConfig.value.MENU_CONF["uploadVideo"] = {
  async customUpload(file, insertFn) {
    console.log("上传视频", file);
  },
};

// 富文本编辑器生成后触发
const handleCreated = (editor) => {
  editorRef.value = editor; // 记录 editor 实例，重要！
  console.log(editorConfig.value.MENU_CONF, "editorConfig.value");
};

// 监听富文本编辑器粘贴行为
const customPaste = (editor, event, callback) => {
  // 获取粘贴的纯文本
  const text = event.clipboardData.getData("text/plain");
  if (text) {
    editor.insertText(text);
    event.preventDefault();
    callback(false);
  }
};

// 获取富文本html内容
/*   const getEditorHTML = () => {
    console.log(editorRef.value.getHtml());
  }; */
onMounted(() => {
  /*   (document as any).getElementById("editor").style.height = `${
    (document as any).getElementById("toolbar").clientHeight
  }px`;
  console.log(
    "mounted",
    (document as any).getElementById("editor").clientHeight
  ); */
  // getEditorHTML()
});
// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value;
  if (editor == null) return;
  editor.destroy();
});
watchEffect(() => {
  console.log("watchEffect", props.isEdit);
  if(props.isEdit) {
    editorRef.value.enable();
  }else{
    editorRef.value.disable();
  }
});
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
   -->
   <template>
  <!--   <div>
    <div style="border: 1px solid #ccc; margin-top: 10px">
      <Toolbar :editor="editorRef" :defaultConfig="toolbarConfig" :mode="mode" style="border-bottom: 1px solid #ccc" />
      <Editor :defaultConfig="editorConfig" :mode="mode" v-model="valueHtml" style="height: 400px; overflow-y: hidden" @onCreated="handleCreated" @onChange="handleChange" @onDestroyed="handleDestroyed" @onFocus="handleFocus" @onBlur="handleBlur"
        @customAlert="customAlert" @customPaste="customPaste" />
    </div>
  </div> -->
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

// 编辑器实例，必须用 shallowRef，重要！
const props = defineProps({
  isEdit: Boolean,
  type: String,
});
const editorRef = shallowRef();
const mode = ref("default");
// 内容 HTML
const valueHtml = ref("111");

const toolbarConfig = {};
const editorConfig = ref({
  placeholder: "请输入内容...",
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
  setTimeout(() => {
    valueHtml.value = "<p>模拟 Ajax 异步设置内容</p>";
  }, 1500);
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