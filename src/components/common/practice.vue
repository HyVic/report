<template>
    <el-button plain @click="dialogVisible = true">
      Click to open the Dialog
    </el-button>
  
    <el-dialog
      v-model="dialogVisible"
      title="Tips"
      width="500"
      :before-close="handleClose"
    >
      <span>This is a message</span>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
        
        </div>
      </template>
    </el-dialog>
  </template>
  
  <script lang="ts" setup>
  import { computed, ref } from 'vue'
  import { ElMessageBox } from 'element-plus'
  const props = defineProps({
    showAdd:Boolean
  })
  const dialogVisible = computed(() => props.showAdd)
  
  const handleClose = (done: () => void) => {
    done()
  }
  </script>
  