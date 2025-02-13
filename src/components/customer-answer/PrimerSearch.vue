<template>
    <div class="fingerprint-search">
      <div class="search-box">
        <div class="search-input">
          <el-input
            v-model="searchNumber"
            type="text"
            style="width: 250px"
            placeholder="请输入引物名称"
          />
        </div>
        <div class="search-btn">
          <el-button @click="submitSearch"
            ><i class="iconfont icon-chanpinchaxun"></i>检索</el-button
          >
          <el-button @click="reset"
            ><i class="iconfont icon-initial"></i>重置</el-button
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
          >
            <el-table-column type="index" label="序号" width="80"/>
            <el-table-column property="primerName" label="引物名称" />
            <el-table-column property="chromosomePosition" label="染色体位置" />
            <el-table-column property="repetitiveSequence" label="重复序列" />
            <el-table-column property="isComparison" label="是否参与比对" />
            <el-table-column property="isGenerateGraph" label="是否生成图谱" />
            <el-table-column align="center" label="操作">
              <template #default="scope">
                <i
                  class="iconfont icon-yanjing"
                  titlt="详情"
                  @click="handleClick(scope.row)"
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
    <row-detail
      v-if="centerDialogVisible"
      @close="centerDialogVisible = false"
      :row="currentRow"
    ></row-detail>
  </template>
  <script setup lang="ts">
  //   import RowDetail from '../information-search/RowDetail.vue'
  // import type { ComponentSize } from 'element-plus'
  import ElPagination from "../common/ElPagination.vue";
  import { ref } from "vue";
  const searchNumber = ref("");
  const submitSearch = () => {};
  const reset = () => {};
  interface DataType {
    primerName: string;
    chromosomePosition: number;
    repetitiveSequence: string;
    isComparison: string;
    isGenerateGraph: string;
  }
  const tableData: DataType[] = [
    {
      primerName: "bnlg 1520k1",
      chromosomePosition: 2.09,
      repetitiveSequence: "(AG22)",
      isComparison: "参与",
      isGenerateGraph: "是",
    },
    {
      primerName: "bnlg 1520k1",
      chromosomePosition: 2.09,
      repetitiveSequence: "(AG22)",
      isComparison: "参与",
      isGenerateGraph: "是",
    },
    {
      primerName: "bnlg 1520k1",
      chromosomePosition: 2.09,
      repetitiveSequence: "(AG22)",
      isComparison: "参与",
      isGenerateGraph: "是",
    },
  ];
  const centerDialogVisible = ref(false);
  const currentRow = ref<DataType>();
  const handleClick = (row: any) => {
    centerDialogVisible.value = true;
    currentRow.value = row;
    console.log(row);
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
  .search-btn {
    button {
      color: white;
      border: 0;
      height: 30px;
      &:first-child {
        background-color: green;
      }
      &:last-child {
        background-color: #fc9700;
      }
      &:hover {
        opacity: 0.8;
      }
    }
  }
  .fingerprint-search {
    @include size(calc(100% - 20px), calc(100% - 20px));
    box-shadow: 0 2px 10px 1px #00000026;
    .search-box {
      @include size(calc(100% - 20px), 55px);
      @include layout(flex-end, space-between);
      .search-input {
        :deep .el-input {
          margin-right: 10px;
          height: 40px;
        }
      }
      .search-btn {
        @include layout(center, flex-end);
        button:first-child {
          margin-right: 10px;
        }
        .iconfont {
          padding-right: 10px;
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
          .iconfont {
            color: #00b700;
            font-size: 18px;
            cursor: pointer;
            &:hover {
              color: #00e700;
            }
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
  </style>
  