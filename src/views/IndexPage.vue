<template>
  <div class="common-layout">
    <el-header>
      <!-- <div class="title">DNA检测库</div> -->
      <div class="title">官网后台管理系统</div>
      <div class="header-content">
        <div class="common-" @click="() => router.push('/')">
          <i class="iconfont icon-touxiang"></i><span>{{ userName }}</span>
        </div>
      </div>
    </el-header>
    <el-container>
      <el-aside>
        <div class="bg"></div>
        <div class="nav">
          <div class="el-collapse">
            <div class="el-collapse-item" v-for="(item, index) in navList" :class="{ 'is-active': chooseIndex === item.order }" :key="index">
              <button class="el-collapse-item__header" @click="navChoose(item.order, '1', item)">
                <span> <i class="iconfont" :class="item.icon"></i> {{ item.name }}</span><img src="../assets/arrow.png" class="arrow" :class="{ 'is-active': chooseIndex === item.order }" v-if="item.children" />
              </button>
              <div class="el-collapse-item__wrap" v-if="item.children">
                <div class="children">
                  <div v-for="(child, i) in item.children" :key="child.name" class="child" :class="{ active: chooseChildIndex === child.order }" @click="child.order !== undefined ? navChoose(child.order, '2', child) : null">
                    <div class="child_inner">
                      <i class="iconfont" :class="child.icon"></i>
                      {{ child.name }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-aside>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import { watchEffect, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { contentList } from "../utils/contentList";
const router = useRouter();
const userName = ref("admin");
const navList = ref(contentList);
const chooseIndex = ref(1);
const chooseChildIndex = ref<number>();
const navChoose = (num: number, level: string, item: any) => {
  if (level === "1") {
    chooseIndex.value = num;
    router.push({
      name: item.route,
    });
    if (item.children) {
      chooseChildIndex.value = 0;
    } else {
      chooseChildIndex.value = -1;
    }
  } else if (level === "2") {
    chooseChildIndex.value = num;
    router.push({
      name: item.route,
    });
  }
};
watchEffect(() => {
  navList.value.forEach((item) => {
    if (router.currentRoute.value.path.includes(item.label)) {
      chooseIndex.value = item.order;
    }
    if (item.children) {
      item.children.forEach((child) => {
        if (router.currentRoute.value.path.includes(child.label)) {
          chooseChildIndex.value = child.order;
        }
      });
    }
  });
});
onMounted(() => {});
</script>
<style scoped lang="scss">
$color-red: #6d1d29;
$color-blue: #365baa;

@mixin layout($align, $justify) {
  display: flex;
  align-items: $align;
  justify-content: $justify;
}

@mixin size($width, $height) {
  width: $width;
  height: $height;
  margin: 0 auto;
}

.common-layout {
  width: 100%;
  height: 100%;

  .el-container {
    height: calc(100% - 70px);
  }

  /*   section {
    height: 100%;
  } */
  aside {
    width: 250px;
    position: relative;
    isolation: isolate;
    box-shadow: 2px 1px 10px 0px #59595947;

    .bg {
      position: absolute;
      top: 0;
      left: 0;
      @include size(100%, 100%);
      // background: url("../assets/zuowu5.jpg") repeat;
      background-size: 100% 100%;
      z-index: -1;
      opacity: 0.8;
      overflow: hidden;
    }

    .nav {
      @include size(100%, 100%);
      position: absolute;
      top: 0;
      left: 0;
      background-color: #f7f7f7cf;

      .iconfont {
        font-size: 16px;
        padding-right: 10px;
      }

      .item-index {
        // color: white;
        border-radius: unset;
        padding: 5px 10px;
        font-size: 16px;
        text-align: left;
        height: 59px;
        @include layout(center, flex-start);

        .index-inner {
          width: 100%;
          height: calc(100% - 10px);
          // background-color: #ffffff29;
          padding: 0 10px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          cursor: pointer;

          &:hover,
          &:visited {
            background-color: #ffffff2e;
          }
        }
      }

      .item-index.active {
        .index-inner {
          background-color: #ffffff47;
        }
      }

      :deep .el-collapse {
        border-color: #ffffff57;
        border: 0;
        padding: 10px;

        .el-collapse-item {
          margin-bottom: 10px;
        }
      }

      :deep .el-collapse-item__header,
      :deep .el-collapse-item__wrap {
        background-color: unset;
        // color: white;
        border-radius: unset;
        padding: 5px 10px;
        font-size: 16px;
        border: 0;
      }

      :deep .el-collapse-item__wrap {
        padding: 5px 0;
        display: none;
      }

      .is-active {
        .el-collapse-item__wrap {
          display: block;
          transition: all 0.3s ease;
        }
      }

      :deep .el-collapse-item__header {
        height: 50px;
        border: 0;
        border-radius: 4px;
        @include layout(center, space-between);

        .arrow {
          width: 16px;
          height: 16px;
          color: gainsboro;
          transition: all 0.3s ease;
          transform: rotate(0deg);
        }

        .arrow.is-active {
          transform: rotate(90deg);
        }
      }

      :deep button:hover {
        background-color: #ffffff2e;
      }

      :deep .el-collapse-item__content {
        color: white;
      }

      :deep .is-active {
        .el-collapse-item__header {
          background-color: #ffffff47;
        }
      }

      .child {
        margin: 5px 0 10px 0;

        /*         &:hover {
          background-color: #ffffff2e;
        } */
        .child_inner {
          @include layout(center, flex-start);
          @include size(100%, 48px);
          padding-left: 25px;
          box-sizing: border-box;
          border-radius: 4px;
          cursor: pointer;

          &:hover {
            background-color: #ffffff2e;
          }
        }

        .line {
          @include size(100%, 1px);
          background-color: #ffffff1a;
        }

        .sort {
          font-size: 15px;
          margin-left: 50px;
          text-align: left;
          color: #c9c9c9;
        }
      }

      .child.active {
        background-color: #bfbfbf2e;
      }
    }
  }

  header {
    height: 70px;
    background-color: #083a55;
    color: #fff;
    // border-bottom: 1px solid #d7d7d7;
    box-shadow: 0px 0px 10px 2px #0000003d;
    z-index: 1;
    @include layout(center, space-between);

    .title {
      font-weight: bold;
      font-size: 28px;
    }

    .header-content {
      @include layout(center, flex-end);

      .common- {
        height: 70%;
        font-size: 18px;
        border-right: 1px solid rgb(70, 70, 70);
        margin-left: 20px;
        padding-right: 20px;
        cursor: pointer;
        @include layout(center, flex-start);

        .current {
          outline: none;
          font-size: 16px;
        }

        .iconfont {
          padding-right: 10px;
          color: #ffffff;
        }

        &:last-child {
          border: 0;
        }
      }
    }
  }

  main {
    height: auto;
    min-height: calc(100% - 110px);
    padding: 0;
  }

  footer {
    height: 40px;
    width: 100%;
    font-size: 15px;
    border-top: 1px solid #d7d7d72b;
    margin: 0 auto;
    @include layout(center, center);
  }
}

.popover {
  position: fixed;
  right: 20px;
  bottom: 20px;
}
</style>
