<template>
  <div class="fingerprint-search">
    <div class="search-box">
      <div class="search-btn">
        <el-button @click="AddCarousel"><i class="iconfont icon-xinzeng"></i>新增</el-button>
      </div>
    </div>
    <div class="search-result">
      <div class="dialog-basic-info common-cont">
        <el-table stripe ref="multipleTableRef" :data="tableData" style="width: 100%" border>
          <el-table-column type="index" label="序号" width="150" />
          <el-table-column property="link" label="外部链接" />
          <el-table-column property="image" label="图片">
            <template #default="scope">
              <!-- <img class="img_size" :src="scope.row.image" alt="" /> -->
              <el-image class="img_size" :src="scope.row.image" :zoom-rate="1.2" :max-scale="7" :min-scale="0.2" :initial-index="4" :preview-src-list="[scope.row.image]" fit="cover" :preview-teleported="true" />
            </template>
          </el-table-column>
          <el-table-column align="center" label="操作">
            <template #default="scope">
              <i class="iconfont icon-bianji edit" titlt="编辑" @click="handleClick(scope.row, 'edit')"></i>
              <i class="iconfont icon-shanchu delete" titlt="删除" @click="handleClick(scope.row, 'delete')"></i>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <el-pagination :pageNum="pagination.pageNum" :page-size="pagination.pageSize" :total="pagination.total" @current-change="handlePagination"></el-pagination>
  </div>
  <EditCarousel v-if="showEditCarouselVisible" :type="dialog.type" :title="dialog.title" :sort="dialog.sort" :row-data="rowData" @close="showEditCarouselVisible = false"></EditCarousel>
  <practice :show-add="showAdd"></practice>
</template>
<script setup lang="ts">
import ElPagination from "../common/ElPagination.vue";
import practice from "../common/practice.vue";
import { ref } from "vue";
import image from "../../assets/service-bg.jpg";
import image2 from "../../assets/product-bg.jpg";
import image3 from "../../assets/resource-bg.jpg";
import EditCarousel from "../common/UploadData.vue";
interface DataType {
  id: string;
  image: String;
  link: String;
}
const tableData: DataType[] = [
  {
    id: "bnlg 1520k1",
    image: image,
    link: "http://www.tcuni.com/t/44.jpg",
  },
  {
    id: "bnlg 1520k1",
    image: image2,
    link: "http://www.tcuni.com/t/20.jpg",
  },
  {
    id: "bnlg 1520k1",
    image: image3,
    link: "http://www.tcuni.com/t/18.jpg",
  },
];
const centerDialogVisible = ref(false);
const handleClick = (row: any, ch: string) => {
  centerDialogVisible.value = true;
  console.log(row);
  if (ch === "edit") {
    showEditCarouselVisible.value = true;
    rowData.value = row;
    dialog.value.type = "edit";
    dialog.value.title = "编辑轮播图";
  } else if (ch === "delete") {
    console.log("delete");
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
  sort: "carousel",
});
const rowData = ref<any>();
const showEditCarouselVisible = ref(false);
const showAdd = ref(false);
const AddCarousel = () => {
  showAdd.value = true;
  dialog.value.type = "add";
  dialog.value.title = "新增轮播图";
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
        .edit {
          color: #f1b21d;
        }
        .delete {
          color: red;
        }
        .iconfont {
          font-size: 20px;
          cursor: pointer;
          margin: 0 5px;
        }
        .iconfont:hover {
          opacity: 0.8;
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
