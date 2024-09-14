<template>
  <div class="pagination">
    <div class="pagination_total" v-if="showTotal">共有<span class="total">{{total}}</span>条数据</div>
    <div class="pagination_inner">
      <div v-if="show" class="page_count">
        第&nbsp;{{ pageNum }}&nbsp;页，共&nbsp;{{ totalPage }}&nbsp;页（共&nbsp;{{ total }}&nbsp;项）
        <DxSelectBox
            placeholder=""
            v-model:value="pageSize"
            :items="changePageSize"
            @ItemClick="onValueChanged"/>
      </div>
      <div class="page_num">
        <i :class="{disabled: pageNum === 1}" class="iconfont icon-xiangzuo1"
           @click="getPageNum(pageNum-1)"></i>
        <span v-if="totalNum.data[0] > 1" class="num" @click="getPageNum(1)">1</span>
        <span v-if="totalNum.data[0] > 2" class="num">...</span>
        <span
            v-for="item in totalNum.data"
            :key="item"
            :class="{active: choose == item ? 'active' : ''}"
            class="num"
            @click="getPageNum(item)">{{ item }}</span>
        <span v-if="totalNum.data[4] < totalPage" class="num">...</span>
        <span v-if="totalNum.data[4] < totalPage" class="num"
              @click="getPageNum(totalPage)">{{ totalPage }}</span>
        <i :class="{disabled: pageNum >= totalPage}" class="iconfont icon-xiangyou11"
           @click="getPageNum(pageNum+1)"></i>
      </div>
    </div>
  </div>
</template>

<script>
import DxSelectBox from 'devextreme-vue/select-box'
import {defineComponent, onMounted, reactive, ref, watch, watchEffect} from 'vue';

export default defineComponent({
  props: {
    total: Number,  // 总条数
    size: Number,
    show: Boolean,
    equipId: Number,
    getNum: Number,
    changePageSize: { //默认的分页下拉选择框中的数据 10,15,20条数据
      type: Array,
      default() {
        return [10, 15, 20]
      }
    },
    showTotal: {
      type:Boolean,
      default() {
        return true;
      }
    },
    type: Number
  },
  setup(props, context) {
    const choose = ref(1)
    const items = ref(20)
    // 每页条数
    const pageSize = ref('')
    //当前第几页
    const pageNum = ref(1)
    //显示按钮个数
    const btnCount = 5;
    //总页数
    const totalPage = ref()
    //显示的按钮数组
    const totalNum = reactive({
      data: []
    })
    /*     const changePageSize = reactive({
             data: [10, 15, 20]
         })*/
    watchEffect(() => {
      totalNum.data = []
      // 计算总页数
      totalPage.value = Math.ceil(props.total / pageSize.value)
      // 计算起始页码 和 结束页码
      let start = pageNum.value - Math.floor(btnCount / 2);
      let end = start + btnCount - 1;
      //如果起始页码小于1，需要重新计算
      if (start < 1) {
        start = 1;
        end = (start + btnCount - 1) > totalPage.value ? totalPage.value : (start + btnCount - 1);
      }
      // 如果结束页码大于总页数，需要重新计算
      if (end > totalPage.value) {
        end = totalPage.value;
        start = (end - btnCount + 1) < 1 ? 1 : (end - btnCount + 1);
      }
      // 处理完毕 start 和 end 得到按钮数组
      for (let i = start; i <= end; i++) {
        totalNum.data.push(i);
      }
    })
    const getPageNum = (item) => {
      if(item < 1 || item > totalPage.value){
        return ;
      }
      choose.value = item
      pageNum.value = item
      let obj = {
        pageSize: pageSize.value,
        pageNum: pageNum.value,
        equipId: props.equipId
      }
      if(pageNum.value <= totalPage.value){
        context.emit('pageData', obj)
      }
    }
    const onValueChanged = () => {
      pageNum.value = 1
      choose.value = pageNum.value
      let obj = {
        pageSize: pageSize.value,
        pageNum: pageNum.value,
        equipId: props.equipId
      }
      context.emit('pageData', obj)
    }
    function reset(){
      choose.value = 1
      pageNum.value = 1
    }
    watch(totalPage,()=>{
      if((pageNum.value > totalPage.value)&&totalPage.value>0){
        pageNum.value = totalPage.value
        choose.value = pageNum.value
        let obj = {
          pageSize: pageSize.value,
          pageNum: pageNum.value,
        }
        if(props.type !== 1){
          context.emit('pageData', obj)
        }
      }
      if(props.getNum){
        choose.value = props.getNum
        pageNum.value = props.getNum
      }
    })
    onMounted(() => {
      if(props.getNum){
        choose.value = props.getNum
        pageNum.value = props.getNum
      }
      pageSize.value = props.size
    })
    return {
      choose,
      items,
      pageSize,
      pageNum,
      totalPage,
      totalNum,
      // pager,
      getPageNum,
      reset,
      onValueChanged
    }
  },
  components: {
    DxSelectBox
  }
})
</script>

<style scoped lang="scss">
.pagination {
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.pagination_total{
  color: #838383;
  padding: 0 20px;
  .total{
    font-weight: bold;
    margin: 0 5px;
    display: inline-block;
    color: #1890ff;
    font-size: 20px;
  }
}
.pagination_inner {
  width: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.page_count {
  width: auto;
  display: flex;
  align-items: center;
  color: #838383;
}

.page_num {
  width: auto;
}

.page_num .num {
  margin: 0 2px;
  cursor: pointer;
  padding: 8px;
}

.page_num .iconfont {
  margin: 0 5px;
  color: black;
  cursor: pointer;
}

.active {
  background-color: #e4e4e4;
  border-radius: 5px;
}

.disabled {
  cursor: not-allowed !important;
  opacity: 0.4;
}

:deep .dx-dropdownlist-popup-wrapper .dx-popup-content {
  height: 100% !important;
}

:deep .dx-texteditor.dx-editor-outlined {
  height: 25px;
}

:deep .dx-texteditor-input {
  width: 35px;
  min-height: 20px !important;
  padding: 0 0 0 10px !important;
}
</style>
