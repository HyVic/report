<template>
    <div class="paging">
        <el-pagination
            v-model:current-page="pagination.pageNum"
            v-model:page-size="pagination.pageSize"
            :page-sizes="[10, 30, 100, 200]"
            :disabled="disabled"
            :background="background"
            layout="total, sizes, prev, pager, next"
            :total="pagination.total"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
        />
    </div>
</template>
<script setup lang="ts">
    import { ref } from 'vue';
    const props = defineProps({
        pageNum: Number,
        pageSize: Number,
        total: Number
    })
    const pagination = ref({
        pageNum:1,
        pageSize:10,
        total:100
    })
    const background = ref(false)
    const disabled = ref(false)
    const handleSizeChange = (val: number) => {
        console.log(`${val} items per page`)
    }
    const handleCurrentChange = (val: number) => {
        console.log(`current page: ${val}`)
    }
    defineExpose({
        pagination,
    })
</script>
<style lang="scss" scoped>  
.paging{
    height: 55px;
    padding: 10px;
    box-sizing: border-box;
  }
</style>