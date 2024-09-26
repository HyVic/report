<template>
  <div class="common-layout">
<!--     <header>
      <div class="header-outer">
        <div class="header-content">
          <div class="header-bg"></div>
          <div class="logo" @click="handleChoose('/',0)"><img src="../assets/logo.png" alt=""></div>
          <div class="nav">
            <ul class="nav-list">
              <li class="menu_item" v-for="(item,index) in navList" :key="item.name" @click="handleChoose(item.path,index)" :class="{active: chooseIndex===index}">{{item.name}}</li>
            </ul>
            <div class="middle-content">
              <i class="iconfont icon-zhongyingwenqiehuan-yingwen"></i>
              <i class="iconfont icon-denglu" @click="Login"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="system-name">
        <p>{{systemName}}</p>
        <div class="search">
          <input type="text" v-model="searchInput">
          <i class="iconfont icon-linedesign-12"></i>
        </div>
      </div>
    </header>
    <main><router-view></router-view></main>
    <footer>
      <div class="footer-content">
        <div class="footer-left">
          <p>Supported by the National Heart, Lung, and Blood Institute of the National Institutes of Health</p>
          <p>under Award Number U24HL148865</p>
          <p>©2022 CCHMC based upon ©2017 RTI International</p>
        </div>
        <div class="footer-right">
          <div class="common">
            <i class="iconfont icon-feiniao"></i>
          </div>
          <div class="common">
            <i class="iconfont icon-tianchongxing-"></i>
          </div>
        </div>
      </div>
    </footer> -->
    <el-container>
      <el-aside>
        <div class="bg"></div>
        <div class="nav">
          <div class="item-index" :class="{active: chooseIndex===-1}" @click="navChoose(-1)">
            <div class="index-inner">
              <i class="iconfont icon-shouye"></i>首页
            </div>
          </div>
          <el-collapse @change="handleChange" accordion>
            <el-collapse-item :name="index+1" v-for="(item,index) in navList" :key="index">
              <template #title>
                <i class="iconfont" :class="item.icon"></i> {{ item.name }}
              </template>
              <div v-if="item.children" class="children">
                <div v-for="(child,index) in item.children" :key="child.name" class="child" :class="{active: chooseIndex===index}" @click="navChoose(index,child)">
                  <i class="iconfont" :class="child.icon"></i>
                  {{ child.name }}
                </div>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </el-aside>
      <el-container>
        <el-header>
          <!-- <div class="title">DNA检测库</div> -->
          <div class="title">DNA指纹库</div>
          <div class="header-content">
            <div class="common-">
              <i class="iconfont icon-fanhui4"></i><span>返回门户网站</span>
            </div>
            <div class="common-">
              <el-dropdown placement="bottom">
                <span class="current">
                <i class="iconfont icon-zhiwu2"></i>{{ currentSort }}</span>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item @click="handleClick(item)" v-for="item in sortList" :key="item.id">{{ item.name }}</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
            <div class="common-" @click="handleChoose">
              <i class="iconfont icon-shangpinzhonglei"></i><span>品种选择</span>
            </div>
            <div class="common-">
              <i class="iconfont icon-touxiang"></i><span>{{ userName }}</span>
            </div>
          </div>
        </el-header>
        <el-main><router-view></router-view></el-main>
        <el-footer>Copyright © 2024-2029 成都天成未来科技有限公司</el-footer>
      </el-container>
    </el-container>
  </div>
  <sorts-choose v-if="centerDialogVisible" @close="centerDialogVisible = false"></sorts-choose>
</template>
<script setup lang="ts">
import SortsChoose from '../components/common/SortsChoose.vue'
import {watchEffect,onMounted, ref} from "vue";
import { useRouter } from 'vue-router'
const router = useRouter()
const userName = ref('admin')
const centerDialogVisible = ref(false)
const navList = ref([
  {
    name: '信息查询', 
    icon: 'icon--zhuantishujufenxi',
    children: [
      {name: '指纹图谱查询', icon: 'icon-zhiwenshibie', path: '/fingerprint'},
      {name: 'SNP标记查询', icon: 'icon-icon4', path: '/snpmarker'},
      {name: '品种相似度分析', icon: 'icon-shujufenxi', path: '/varietysimilarityanalysis'},
      {name: '品种差异分析', icon: 'icon-shujufenxi', path: '/varietydifferenceanalysis'},
      {name: '杂交亲本预测', icon: 'icon-shujufenxi', path: '/predictionofhybridparents'}
    ]
  },
  {
    name: '账户信息管理', 
    icon: 'icon-a-97_qiyezhanghuguanli',
    children: [
      {name: '企业账户管理', icon: 'icon-jichuxinxiguanli', path: '/information-management'}
    ]
  },
])
const sortList = ref([{
  id: 1,
  name: '玉米'
},{
  id: 1,
  name: '大豆'
},{
  id: 1,
  name: '小麦'
},{
  id: 1,
  name: '水稻'
},{
  id: 1,
  name: '棉花'
},{
  id: 1,
  name: '油葵'
},{
  id: 1,
  name: '向日葵'
},{
  id: 1,
  name: '甜瓜'
},{
  id: 1,
  name: '黄瓜'
},{
  id: 1,
  name: '西瓜'
},{
  id: 1,
  name: '番茄'
}])
const currentSort = ref<string>('玉米')
const handleChange = (val: any) => {
  console.log(11111,val)
}
const handleClick = (value: any) => {
  console.log(222222,value)
  currentSort.value = value.name
}
const handleChoose = () =>{
  centerDialogVisible.value = true
}
const chooseIndex = ref(-1)
const navChoose = (num: number, child?: any) => {
  console.log(221,num)
  chooseIndex.value = num
  if(child){
    console.log(child.path)
    router.push(child.path)
  } else {
    router.push('/')
    console.log(11111,document.getElementsByClassName('el-collapse-item'))
    // document.getElementsByClassName('.el-collapse-item').classList.remove('is-active')
  }
}
watchEffect(() => {

})
onMounted(() => {

})
</script>
<style scoped lang="scss">
$color-red: #6d1d29;
$color-blue: #365baa;
@mixin layout($align,$justify){
  display: flex;
  align-items: $align;
  justify-content: $justify;
}
@mixin size($width,$height){
  width: $width;
  height: $height;
  margin: 0 auto;
}
.common-layout{
  width: 100%;
  height: 100%;
  section{
    height: 100%;
  }
  aside{
    width: 250px;
    position: relative;
    isolation: isolate;
    box-shadow: 2px 1px 10px 0px #59595947;
    .bg{
      position: absolute;
      top: 0;
      left: 0;
      @include size(100%,100%);
      background: url("../assets/zuowu4.jpg") repeat;
      background-size: 100% 100%;
      z-index: -1;
      opacity: 0.8;
      overflow: hidden;
    }
    .nav{
      @include size(100%,100%);
      position: absolute;
      top: 0;
      left: 0;
      background-color: #09253757;
      .iconfont{
        font-size: 16px;
        padding-right: 10px;
      }
      .item-index{
        color: white;
        border-radius: unset;
        padding: 5px 10px;
        font-size: 16px;
        text-align: left;
        height: 59px;
        @include layout(center, flex-start);
        .index-inner{
          width: 100%;
          height: calc(100% - 10px);
          // background-color: #ffffff29;
          padding: 0 10px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          cursor: pointer;
          &:hover, &:visited{
            background-color: #ffffff2e;
          }
        }
      }
      .item-index.active{
        .index-inner{
          background-color: #ffffff47;
        }
      }
      :deep .el-collapse{
        border-color: #ffffff57;
        border: 0;
        padding: 0 10px;
        .el-collapse-item{
          margin-bottom: 10px;
        }
      }
      :deep .el-collapse-item__header, :deep .el-collapse-item__wrap{
        background-color: unset;
        color: white;
        border-radius: unset;
        padding: 5px 10px;
        font-size: 16px;
        border: 0;
      }
      :deep .el-collapse-item__wrap{
        padding: 5px 0;
      }
      :deep .el-collapse-item__header{
        height: 50px;
        border: 0;
        border-radius: 4px;
      }
      :deep button:hover {
        background-color: #ffffff2e;
      }
      :deep .el-collapse-item__content{
        color: white;
      }
      :deep .is-active{
        .el-collapse-item__header{
          background-color: #ffffff47;
        }
      }
      .child{
        @include layout(center, flex-start);
        @include size(100%,48px);
        padding-left: 25px;
        box-sizing: border-box;
        border-radius: 4px;
        cursor: pointer;
        margin: 5px 0 10px 0;
        &:hover{
          background-color: #ffffff2e;
        }
      }
      .child.active{
        background-color: #ffffff2e;
      }
    }
  }
  header{
    height: 70px;
    background-color: #fff;
    // border-bottom: 1px solid #d7d7d7;
    box-shadow: 0px 0px 10px 2px #0000003d;
    z-index: 1;
    @include layout(center, space-between);
    .title{
      font-weight: bold;
      font-size: 28px;
    }
    .header-content{
      @include layout(center, flex-end);
      .common-{
        height: 70%;
        font-size: 16px;
        border-right: 1px solid rgb(70, 70, 70);
        margin-left: 20px;
        padding-right: 20px;
        cursor: pointer;
        @include layout(center, flex-start);
        .current{
          outline: none;
          font-size: 16px;
        }
        .iconfont{
          padding-right: 10px;
          color: green;
        }
        &:last-child{
          border: 0;
        }
      }
    }
  }
  main{
    height: auto;
    min-height: calc(100% - 110px);
    padding: 0;
  }
  footer{
    height: 40px;
    width: 100%;
    font-size: 15px;
    border-top: 1px solid #d7d7d72b ;
    margin: 0 auto;
    @include layout(center, center);
  }
}
.popover{
  position: fixed;
  right: 20px;
  bottom: 20px;
}
</style>