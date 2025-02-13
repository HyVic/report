<template>
  <div class="service_introduce">
    <div class="service_introduce_title">
      <button class="btn_add" @click="handleAdd">
        <i class="iconfont icon-xinzeng"></i>新增</button>
    </div>
    <div class="service_introduce_content">
      <el-scrollbar height="100%">
        <el-table :data="tableData" style="width: 100%" @expand-change="expandChange" border>
          <el-table-column type="expand" width="100px" label="操作">
            <template #default="props">
              <div class="edit_content" m="3">
                <div class="edit_content_inner">
                  <div class="top_edit"><span @click="handleEdit(props.row)"><i class="iconfont icon-bianji"></i>{{ text[props.row.id] }}</span></div>
                  <editor-come-pages :row-data="props.row" :is-edit="isEdit[props.row.id]" :type="'edit'" :content="content"></editor-come-pages>
                </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="标题" prop="title" />
          <el-table-column label="创建时间" prop="date" />
        </el-table>
      </el-scrollbar>
    </div>
  </div>
  <add-new-service v-if="showAdd" @close="showAdd=false" :title="'新增转录组测序'" :content="content"></add-new-service>
</template>
<script setup lang="ts">
import { ref } from "vue";
import EditorComePages from "../common/EditorComePages.vue";
import AddNewService from "../common/AddNewService.vue";
const tableData = ref([
  {
    id: 0,
    title: "转录组测序",
    date: "2023-12-27 17:43:03",
    describe: `靶向捕获测序是指通过对靶向细胞进行特异性捕获、分离、染色、检测、鉴定等一系列操作，从而获得靶向细胞的特定信息的过程。`,
    route: "image",
  },
  {
    id: 1,
    title: "转录组测序2",
    date: "2023-12-27 17:43:03",
    describe: `靶向捕获测序是指通过对靶向细胞进行特异性捕获、分离、染色、检测、鉴定等一系列操作，从而获得靶向细胞的特定信息的过程。`,
    route: "image",
  },
]);

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
const showAdd = ref(false);
const isEdit = ref([false, false]);
const text = ref(["编辑", "编辑"]);
const handleAdd = () => {
  showAdd.value = true;
};
const handleEdit = (row: any) => {
  console.log("handleEdit", row,event);
  if (isEdit.value[row.id]) {
    isEdit.value[row.id] = false;
    text.value[row.id] = "编辑";
  } else {
    isEdit.value[row.id] = true;
    text.value[row.id] = "保存";
  }
};
const expandChange = (row: any, expanded: boolean) => {
  console.log('row=====',row, expanded);
  isEdit.value[row.id] = false;
  text.value[row.id] = "编辑";
}
</script>
<style scoped lang="scss">
.service_introduce {
  width: calc(100% - 22px);
  height: calc(100% - 20px);
  margin: 10px;
  box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.1490196078);
  display: flex;
  flex-direction: column;
  .service_introduce_title {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 50px;
    padding: 0 20px;
    box-sizing: border-box;
    box-shadow: 0 2px 4px 1px #dddddd99;
    z-index: 2;
    .btn_add {
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
    }
  }
  .service_introduce_content {
    width: calc(100% - 10px);
    height: calc(100% - 10px);
    margin: 5px;
    border: 1px solid #ddddddbd;
    border-radius: 3px;
    overflow: auto;
    .edit_content {
      width: 100%;
      padding: 0 8px;
      box-sizing: border-box;
      .edit_content_inner {
        width: 100%;
        .top_edit {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          height: 40px;
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
        }
      }
    }
  }
}
:deep .el-table thead {
  color: #000;
}
:deep .el-table__expand-icon > .el-icon {
  font-size: 17px;
  color: green;
}
</style>
