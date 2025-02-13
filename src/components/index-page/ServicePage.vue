<template>
  <div class="fingerprint-search">
    <div class="search-box">
      <div class="search-btn">
        <el-button @click="AddCarousel"
          ><i class="iconfont icon-xinzeng"></i>新增</el-button
        >
      </div>
    </div>
    <div class="search-result">
      <div class="dialog-basic-info common-cont">
        <el-table
          stripe
          ref="multipleTableRef"
          :data="tableData"
          style="width: 100%"
          border
        >
          <el-table-column type="index" label="序号" width="150" />
          <el-table-column property="title" label="标题" width="150" />
          <el-table-column property="describe" label="简述" />
          <el-table-column property="image" label="图片" width="150">
            <template #default="scope">
              <!-- <img class="img_size" :src="scope.row.image" alt="" /> -->
              <el-image
                class="img_size"
                :src="scope.row.image"
                :zoom-rate="1.2"
                :max-scale="7"
                :min-scale="0.2"
                :initial-index="4"
                :preview-src-list="[scope.row.image]"
                fit="cover"
                :preview-teleported="true"
              />
            </template>
          </el-table-column>
          <el-table-column align="center" label="操作" width="150">
            <template #default="scope">
              <i
                class="iconfont icon-bianji edit"
                titlt="编辑"
                @click="handleClick(scope.row, 'edit')"
              ></i>
              <i
                class="iconfont icon-shanchu delete"
                titlt="删除"
                @click="handleClick(scope.row, 'delete')"
              ></i>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <el-pagination
      :pageNum="pagination.pageNum"
      :page-size="pagination.pageSize"
      :total="pagination.total"
      @current-change="handlePagination"
    ></el-pagination>
  </div>
  <EditCarousel
    v-if="showEditCarouselVisible"
    :type="dialog.type"
    :title="dialog.title"
    :sort="dialog.sort"
    :row-data="rowData"
    @close="showEditCarouselVisible = false"
  ></EditCarousel>
</template>
<script setup lang="ts">
import ElPagination from "../common/ElPagination.vue";
import { ref } from "vue";
import image from "../../assets/service/1.png";
import image2 from "../../assets/service/2.png";
import image3 from "../../assets/service/3.png";
import image4 from "../../assets/service/4.png";
import EditCarousel from "../common/UploadData.vue";
interface DataType {
  id: string;
  image: String;
  title: String;
  describe: String;
}
const tableData: DataType[] = [
  {
    id: "1",
    image: image,
    title: "捕获测序",
    describe: "将目标基因组区域定制成特异性探针与基因组DNA进行杂交富集后再利用二代测序进行检测的技术",
  },
  {
    id: "2",
    image: image2,
    title: "重测序",
    describe: "对已知基因组序列的物种进行不同个体的基因组测序，并在此基础上对个体或群体进行差异性分析",
  },
  {
    id: "3",
    image: image3,
    title: "转录组测序",
    describe: "基于高通量测序技术对cDNA进行测序，获取某一物种特定细胞在某一状态下的所有转录本的信息",
  },
  {
    id: "4",
    image: image4,
    title: "数据服务",
    describe: "联合国家超算成都中心为科研工及育种工作者提供大规模的计算生物学服务",
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
    dialog.value.title = "编辑技术";
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
  sort: "service",
});
const rowData = ref<any>();
const showEditCarouselVisible = ref(false);
const AddCarousel = () => {
  showEditCarouselVisible.value = true;
  dialog.value.type = "add";
  dialog.value.title = "新增技术";
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
  @include size(calc(100% - 20px), calc(100% - 20px));
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
:deep .el-table .cell{
  display: flex;
  align-items: center;
}
</style>
