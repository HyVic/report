<template>
  <div class="upload_image">
    <div class="upload_image_img_wrap" v-if="exitImage && fileList.length == 0">
      <div class="mask">
        <div class="mask_icon">
          <i class="iconfont icon-yanjing edit" @click="handlePreview"></i>
          <i class="iconfont icon-shanchu delete" @click="removeExitImage"></i>
        </div>
      </div>
      <img
        class="upload_image_img"
        :class="iconClass"
        :src="exitImage"
        alt=""
      />
    </div>

    <el-upload
      v-else
      action="#"
      v-model:file-list="fileList"
      list-type="picture-card"
      :auto-upload="false"
      :limit="1"
      :class="{ hide: hideUpload }"
      :on-change="handleChange"
    >
      <i class="iconfont icon-tianjia"></i>

      <template #file="{ file }">
        <div>
          <img
            class="el-upload-list__item-thumbnail"
            :src="file.url || image"
            alt=""
          />
          <span class="el-upload-list__item-actions">
            <span
              class="el-upload-list__item-preview"
              @click="handlePictureCardPreview(file)"
            >
              <el-icon><i class="iconfont icon-yanjing edit"></i></el-icon>
            </span>
            <span
              class="el-upload-list__item-delete"
              @click="handleRemove(file)"
            >
              <el-icon><i class="iconfont icon-shanchu delete"></i></el-icon>
            </span>
          </span>
        </div>
      </template>
    </el-upload>
    <el-dialog v-model="dialogVisible">
      <img w-full :src="dialogImageUrl" />
    </el-dialog>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, watchEffect, computed } from "vue";
const props = defineProps({
  image: String,
  iconClass: String,
});
const emits = defineEmits(["close"]);
import type { UploadFile } from "element-plus";
const dialogImageUrl = ref("");
const dialogVisible = ref(false);
const exitImage = ref("");
const hideUpload = computed(() => fileList.value.length > 0);
const fileList = ref<UploadFile[]>([]);
const handleRemove = (file: UploadFile) => {
  fileList.value = [];
};
const removeExitImage = () => {
  exitImage.value = "";
  fileList.value = [];
};
const handlePreview = () => {
  console.log("handlePreview");
  dialogImageUrl.value = exitImage.value;
  dialogVisible.value = true;
};
const handlePictureCardPreview = (file: UploadFile) => {
  dialogImageUrl.value = file.url!;
  dialogVisible.value = true;
};
const handleChange = (file: UploadFile, list: UploadFile[]) => {
  console.log("fileList1111", list);
  console.log("file", file);
  fileList.value = list;
};
watchEffect(() => {});

onMounted(() => {
  console.log("props.image", props.image);
  exitImage.value = props.image ? props.image : "";
});
</script>
<style lang="scss" scoped>
.upload_image {
  display: flex;
  align-items: flex-start;
  .upload_image_img_wrap {
    position: relative;
    width: 150px;
    height: 148px;
    margin-right: 10px;
    .mask {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      background-color: rgba(0, 0, 0, 0.192);
      display: none;
      z-index: 1;
      .mask_icon {
        width: 50%;
        height: 100%;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: space-around;
        color: white;
        cursor: pointer;
      }
    }
    &:hover .mask {
      display: block;
    }
    .upload_image_img {
      width: 100%;
      height: auto;
      object-fit: cover;
      border-radius: 7px;
      position: absolute;
      top: 0;
      left: 0;
    }
    .icon {
      background-color: #00000047;
      padding: 20px;
      box-sizing: border-box;
    }
  }
  .edit {
    font-size: 23px;
  }
  .delete {
    font-size: 20px;
  }
}
:deep .hide .el-upload--picture-card {
  display: none;
}
</style>
