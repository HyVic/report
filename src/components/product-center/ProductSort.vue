<template>
  <div class="fingerprint-search">
    <div class="search-box">
      <div class="search-btn">
        <el-button @click="AddCarousel"><i class="iconfont icon-xinzeng"></i>新增</el-button>
      </div>
    </div>
    <div class="search-result">
      <div class="dialog-basic-info common-cont">
        <el-table stripe ref="multipleTableRef" :data="tableData" style="width: 100%" row-key="id" border default-expand-all>
          <el-table-column type="index" label="序号" width="150" />
          <el-table-column property="title" label="类别名" />
          <el-table-column property="link" label="外部链接" />
          <el-table-column property="image" label="图片">
            <template #default="scope">
              <!-- <img class="img_size" :src="scope.row.image" alt="" /> -->
              <el-image v-if="scope.row.image" class="img_size" :src="scope.row.image" :zoom-rate="1.2" :max-scale="7" :min-scale="0.2" :initial-index="4" :preview-src-list="[scope.row.image]" fit="cover" :preview-teleported="true" />
            </template>
          </el-table-column>
          <el-table-column align="center" label="操作">
            <template #default="scope">
              <div class="handle" titlt="新增"><i v-if="scope.row.add" class="iconfont icon-xinzeng add" @click="AddData(scope.row)"></i></div>
              <div class="handle" titlt="编辑"><i class="iconfont icon-bianji edit" @click="handleClick(scope.row, 'edit')"></i></div>
              <div class="handle" titlt="删除"><i class="iconfont icon-shanchu delete" @click="handleClick(scope.row, 'delete')"></i></div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <el-pagination :pageNum="pagination.pageNum" :page-size="pagination.pageSize" :total="pagination.total" @current-change="handlePagination"></el-pagination>
  </div>
  <add-new-service v-if="showAddEditor" @close="showAddEditor=false" :title="dialog.title" :content="content" :row-data="rowData"></add-new-service>
  <EditCarousel v-if="showEditCarouselVisible" :type="dialog.type" :title="dialog.title" :sort="dialog.sort" :row-data="rowData" @close="showEditCarouselVisible = false"></EditCarousel>
</template>
<script setup lang="ts">
import ElPagination from "../common/ElPagination.vue";
import { ref } from "vue";
import image from "../../assets/service-bg.jpg";
import EditCarousel from "../common/UploadData.vue";
import AddNewService from "../common/AddNewService.vue";
interface DataType {
  id: number;
  title: String;
  image?: String;
  link?: String;
  add: boolean;
  describe: String;
  children?: DataType[];
  type: string;
  feature?: string;
  application?: string;
  date?: string;
}
const tableData: DataType[] = [
  {
    title: "作物",
    id: 1,
    image: "",
    add: true,
    describe: "作物",
    type: "one",
    link: "http://www.tcuni.com/t/44.jpg",
    children: [
      {
        title: "小麦",
        id: 11,
        image: image,
        add: true,
        describe: "小麦",
        type: "two",
        link: "http://www.tcuni.com/t/44.jpg",
        children: [
          {
            title: "45K芯片",
            id: 111,
            add: false,
            type: "three",
            describe: "45K芯片描述",
            feature: "45K芯片特点",
            application: '45K芯片应用',
            date: "2022-01-01"
          },
          {
            title: "60K芯片",
            id: 112,
            add: false,
            type: "three",
            describe: "60K芯片描述",
            feature: "60K芯片特点",
            application: '60K芯片应用',
            date: "2024-01-01"
          },
        ],
      },
      {
        title: "水稻",
        id: 12,
        image: image,
        add: true,
        describe: "水稻",
        type: "two",
        link: "http://www.tcuni.com/t/44.jpg",
      },
      {
        title: "玉米",
        id: 13,
        image: image,
        add: true,
        describe: "玉米",
        type: "two",
        link: "http://www.tcuni.com/t/44.jpg",
        children: [
          {
            title: "45K芯片",
            id: 131,
            add: false,
            type: "three",
            describe: "45K芯片描述",
            feature: "45K芯片特点",
            application: '45K芯片应用'
          },
          {
            title: "60K芯片",
            id: 132,
            add: false,
            type: "three",
            describe: "60K芯片描述",
            feature: "60K芯片特点",
            application: '60K芯片应用'
          },
        ],
      },
      {
        title: "大豆",
        id: 14,
        image: image,
        add: true,
        describe: "大豆",
        type: "two",
        link: "http://www.tcuni.com/t/44.jpg",
      },
      {
        title: "燕麦",
        id: 15,
        image: image,
        add: true,
        describe: "燕麦",
        type: "two",
        link: "http://www.tcuni.com/t/44.jpg",
      },
      {
        title: "棉花",
        id: 16,
        image: image,
        add: true,
        describe: "棉花",
        type: "two",
        link: "http://www.tcuni.com/t/44.jpg",
      },
      {
        title: "大麦",
        id: 17,
        image: image,
        add: true,
        describe: "大麦",
        type: "two",
        link: "http://www.tcuni.com/t/44.jpg",
      },
      {
        title: "辣椒",
        id: 18,
        image: image,
        add: true,
        describe: "辣椒",
        type: "two",
        link: "http://www.tcuni.com/t/44.jpg",
      },
      {
        title: "马铃薯",
        id: 19,
        image: image,
        add: true,
        describe: "马铃薯",
        type: "two",
        link: "http://www.tcuni.com/t/44.jpg",
      },
    ],
  },
  {
    title: "动物",
    id: 2,
    image: "",
    add: true,
    describe: "动物",
    type: "one",
    link: "http://www.tcuni.com/t/20.jpg",
    children: [
      {
        title: "动物",
        id: 21,
        image: image,
        add: true,
        describe: "动物",
        type: "two",
        link: "http://www.tcuni.com/t/44.jpg",
      },
      {
        title: "动物",
        id: 22,
        image: image,
        add: true,
        describe: "动物",
        type: "two",
        link: "http://www.tcuni.com/t/44.jpg",
      },
      {
        title: "动物",
        id: 23,
        image: image,
        add: true,
        describe: "动物",
        type: "two",
        link: "http://www.tcuni.com/t/44.jpg",
      },
    ],
  },
  {
    title: "定制",
    id: 3,
    image: "",
    add: true,
    describe: "定制",
    type: "one",
    link: "http://www.tcuni.com/t/18.jpg",
  },
];
const centerDialogVisible = ref(false);
const handleClick = (row: any, ch: string) => {
  centerDialogVisible.value = true;
  if (ch === "edit" && row.type !== "three") {
    showEditCarouselVisible.value = true;
    rowData.value = row;
    dialog.value.type = "edit";
    dialog.value.title = row.type == "one" ? "修改一级内容" : "修改二级内容";
  } else if (ch === "edit" && row.type === "three") {
    showAddEditor.value = true;
    console.log('row',row);
    rowData.value = row;
    dialog.value.title = "修改三级内容";
  }
};
const pagination = ref<any>({
  pageNum: 1,
  pageSize: 10,
  total: 1000,
});
const handlePagination = (currentPage: any) => {
  pagination.value.pageNum = currentPage.pageNum;
  pagination.value.pageSize = currentPage.pageSize;
};
const dialog = ref<any>({
  type: "",
  title: "",
  sort: "ClassA",
});
const rowData = ref<any>();
const showEditCarouselVisible = ref(false);
const AddCarousel = () => {
  showEditCarouselVisible.value = true;
  dialog.value.type = "add";
  dialog.value.title = "新增一级内容";
};
const showAddEditor = ref(false);
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
    title: "产品简介",
    content: "",
  },
  {
    title: "产品特点",
    content: "",
  },
  {
    title: "产品应用",
    content: "",
  },
]);
const AddData = (row: any) => {
  if (row.type === "one") {
    showEditCarouselVisible.value = true;
    dialog.value.type = "add";
    dialog.value.title = "新增二级内容";
  } else if (row.type === "two") {
    showAddEditor.value = true;
    dialog.value.title = "新增三级内容";
  }
};
</script>
<style scoped lang="scss">
@mixin layout($align-items, $justify-content) {
  display: flex;
  align-items: $align-items;
  justify-content: $justify-content;
}
@mixin size($width, $height) {
  width: $width;
  height: $height;
  margin: 10px;
}
.fingerprint-search {
  @include size(calc(100% - 22px), calc(100% - 20px));
  box-shadow: 0 2px 10px 1px #00000026;
  .search-box {
    @include size(calc(100% - 20px), 55px);
    @include layout(flex-end, flex-end);

    .search-btn {
      button {
        color: white;
        border: 0;
        height: 30px;
        &:first-child {
          background-color: green;
        }
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
  .search-result {
    @include size(calc(100% - 20px), calc(100% - 130px));
    border: 1px solid #efefef;
    border-radius: 5px;
    .common-cont {
      width: 100%;
      padding: 10px;
      box-sizing: border-box;
      .title {
        text-align: left;
        padding-bottom: 10px;
      }
    }
    .dialog-basic-info {
      height: auto;
      :deep .el-table {
        border: 1px solid #e5e5e5;
        border-radius: 2px;
        .handle {
          width: 30px;
        }
        .iconfont {
          font-size: 20px;
          cursor: pointer;
          margin: 0 5px;
        }
        .iconfont:hover {
          opacity: 0.8;
        }
        .add {
          color: green;
          font-size: 17px;
        }
        .edit {
          color: #f1b21d;
        }
        .delete {
          color: red;
        }
        .img_size {
          height: 30px;
        }
      }
    }
  }
  .paging {
    height: 55px;
    padding: 10px;
    box-sizing: border-box;
  }
}
:deep .el-table th.el-table__cell {
  color: #656565 !important;
}
:deep .el-table .cell {
  display: flex;
  align-items: center;
}
</style>
