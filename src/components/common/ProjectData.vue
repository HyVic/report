<script setup lang="ts">
import {reactive, ref} from "vue";
const formInfo = reactive([
  {
    title: 'Species',
    label: 'Human',
  },
  {
    title: 'Tissue',
    label: 'Lung',
  },
  {
    title: 'Datatype',
    label: 'scRNAseq',
  },
  {
    title: 'samples',
    label: 'scRNAseq',
  },
  {
    title: 'Description',
    label: `Airway (trachea and bronchus) brushing specimens were collected from 14 healthy,
    female non-smokers with ages ranging from 20 to 60 years. Bulk RNA sequencing was performed on all the specimens (n = 28).
    Airway cell types and their relative proportions were estimated using CIBERSORTx.
    The cell type proportions were compared between the younger (age 20–40) and elder group (age 40–60) in the trachea and bronchus
    respectively. The linear association between cell type proportion and age was assessed using the Pearson correlation coefficient.
    Differentially expressed genes (DEGs) between the two age groups were identified using DESeq2. Three kinds of enrichment analysis
    of the age-related DEGs were performed, including Gene ontology (GO) enrichment, Kyoto Encyclopedia of Genes and Genomes (KEGG)
    pathway enrichment, and disease enrichment analysis.`,
  },
])
const editableTabsValue = ref('1')
const editableTabs = ref([
  {
    title: 'CellInfo vs GeneExpr',
    name: '1',
    content: 'CellInfo vs GeneExpr content',
  },
  {
    title: 'CellInfo vs CellInfo',
    name: '2',
    content: 'CellInfo vs CellInfo content',
  },
  {
    title: 'GeneExpr vs GeneExpr',
    name: '3',
    content: 'GeneExpr vs GeneExpr content',
  },
  {
    title: 'Gene coexpression',
    name: '4',
    content: 'Gene coexpression content',
  },
  {
    title: 'Violinplot/Boxplot',
    name: '5',
    content: 'Violinplot/Boxplot content',
  },
  {
    title: 'Propoption plot',
    name: '6',
    content: 'Propoption plot content',
  },
  {
    title: 'Bubbleplot/Heatmap',
    name: '7',
    content: 'Bubbleplot/Heatmap content',
  },
])
const emits = defineEmits(['close'])
const Close = () => {
  emits('close')
}
</script>

<template>
  <div class="dialog">
    <div class="dialog-inner">
      <div class="dialog-top">
        <span>Project Data Detail</span>
        <i class="iconfont icon-close" @click="Close"></i>
      </div>
      <div class="dialog-basic-info common-cont">
        <div class="title">MDA5+ ILD snRNA-seq</div>
        <el-form :model="formInfo">
          <el-form-item v-for="(item,index) in formInfo" :label="item.title" :key="index">
            <div class="label">{{item.label}}</div>
            <!--                <el-input v-model="item.label" autocomplete="off" />-->
          </el-form-item>
        </el-form>
      </div>
      <div class="dialog-content common-cont">
        <div class="title">
          MDA5 Pbmc Single Cell Data
        </div>
        <div class="bottom-content">
          <el-tabs type="border-card" v-model="editableTabsValue" class="demo-tabs">
            <el-tab-pane v-for="item in editableTabs" :key="item.name" :label="item.title" :name="item.name">
              <div class="content-item">
                {{item.content}}
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
<!--      <div class="dialog-bottom common-cont">
        <div class="title">Macrophages of Normal Lung</div>
      </div>-->
    </div>
  </div>
</template>

<style scoped lang="scss">
$color-red: #6d1d29;
$color-blue: #365baa;
@mixin layout($align,$justify){
  display: flex;
  align-items: $align;
  justify-content: $justify;
}
.dialog{
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #00000063;
  z-index: 3;
  @include layout(center,center);
  .dialog-inner{
    width: 80%;
    height: 80%;
    background-color: white;
    border-radius: 10px;
    .dialog-top{
      height: 50px;
      border-bottom: 1px solid #e6e6e6;
      padding: 0 30px;
      @include layout(center,space-between);
      .iconfont{
        cursor: pointer;
      }
    }
    .common-cont{
      width: 100%;
      padding: 30px;
      box-sizing: border-box;
      .title{
        text-align: left;
        padding-bottom: 10px;
      }
    }
    .dialog-basic-info{
      height: auto;
      .el-form {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        border: 1px dashed #b3b3b3;
        padding: 20px 20px 10px;
        box-sizing: border-box;
        border-radius: 10px;
        .el-form-item {
          width: 45%;
          margin-right: 10%;
          margin-bottom: 10px;
          :deep .el-form-item__label{
            width: 150px;
            justify-content: flex-start;
            font-weight: bold;
          }
          .el-form-item__content{
            width: calc(100% - 150px);
          }
          .label{
            border: 1px dashed #b3b3b3;
            padding: 0 20px;
            border-radius: 5px;
            width: calc(100% - 0px);
            text-align: left;
          }
          &:nth-child(2n) {
            margin-right: 0;
          }
          &:last-child{
            width: 100%;
            margin-right: 0;
            .label{
              line-height: 1.5;
              padding: 10px 20px
            }
          }
        }
      }
    }
    .dialog-content{
      .bottom-content{

      }
    }
  }
}
</style>