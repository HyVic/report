<template>
  <!-- <div class="service_introduce">
    <div class="service_introduce_left">
      <div class="service_introduce_title">标题</div>
      <div class="service_introduce_desc">介绍</div>
    </div>
    <div class="service_introduce_right">
      <div class="service_introduce_title">
        技术服务<button class="btn_save">保存</button>
      </div>
      <editor-page></editor-page>
    </div>
  </div> -->
  <div class="table_outer">
    <table>
      <tr v-for="(item,index) in content" :key="index">
        <td class="title">{{item.title}}</td>
        <td class="content" v-if="index==0"><input v-model="item.content" :placeholder="'请输入'+item.title" :disabled="!isEdit" /></td>
        <td class="content date" v-else-if="index==1">
          <el-date-picker v-model="item.content" type="date" :placeholder="'请输入'+item.title" placement="bottom-start" :disabled="!isEdit" />
        </td>
        <td class="content" v-else>
          <editor-page :is-edit="isEdit" :type="type" ref="editorPage"></editor-page>
        </td>
      </tr>
    </table>
  </div>

</template>
<script setup lang="ts">
import { onMounted, ref, watchEffect, watch } from "vue";
import EditorPage from "../common/EditorPage.vue";
const props = defineProps({
  rowData: Object as () => any,
  isEdit: Boolean,
  type: String,
});
const editorPage = ref(null);
const content = ref([
  {
    title: "标题",
    content: "",
  },
  {
    title: "创建时间",
    content: "",
  },
  {
    title: "介绍",
    content: "",
  },
  {
    title: "技术路线",
    content: "",
  },
]);
onMounted(() => {
  console.log(props);
  if (props.rowData) {
    content.value[0].content = props.rowData.title;
    content.value[1].content = props.rowData.date;
    content.value[2].content = props.rowData.describe;
    content.value[3].content = props.rowData.route;
  }
});
watchEffect(() => {
  console.log(1, props.isEdit);
});
watch(
  () => [editorPage.value?.[0]?.valueHtml, editorPage.value?.[1]?.valueHtml],
  (newValue, oldValue) => {
    if (newValue) {
      console.log("ref=========", editorPage.value?.[0]?.valueHtml);
      console.log("ref=========", editorPage.value?.[1]?.valueHtml);
    }
  }
);
</script>
<style scoped lang="scss">
.table_outer {
  width: calc(100% - 5px);
  height: 100%;
  border-radius: 3px;
  box-shadow: 0px 1px 10px 0px #002f492b;
  margin-right: 5px;
}
table {
  width: 100%;
  border-collapse: collapse;
  font-size: 15px;
  color: #4e4e4e;
  td {
    padding: 10px;
    border: 1px solid #dfdfdf5e;
  }
  .title {
    width: 20%;
  }
  .content {
    width: 80%;
    padding: 0;
    text-align: left;
  }
  input {
    width: calc(100% - 20px);
    height: 100%;
    outline: none;
    resize: none;
    padding: 10px 5px;
    margin: 3px;
    border: 1px solid #ebebeb8a;
    font-size: 15px;
    border-radius: 3px;
  }
  .date {
    width: 100%;
    height: 100%;
    :deep .el-date-editor {
      width: 100%;
      height: 100%;
      padding: 3px;
    }
    :deep .el-input__wrapper {
      box-shadow: none;
      border: 1px solid #ebebeb8a;
    }
  }
}
:deep .el-input.is-disabled .el-input__wrapper {
  background-color: #fafafa;
}
</style>
