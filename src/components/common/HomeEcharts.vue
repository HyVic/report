<template>
  <div ref="pieChart" id="main" style="width: 100%; height: 500px"> </div>
</template>
<script setup lang="ts">
import {onMounted, ref} from "vue";
import * as echarts from "echarts";
const props = defineProps({
  sortType: {
    type: String,
  }
})
const pieChart = ref<HTMLElement>();
const myChart2 = ref<any>();
const initPieEcharts = () => {
  myChart2.value=echarts.init(pieChart.value!)
  myChart2.value.setOption({
    title:{
      text:`${props.sortType}`,
      x:'center',
      top:30,
      left:'center'
    },
    tooltip:{
      trigger:'item',
      formatter:'{b}:{c}'
    },
    legend:{
      type:'scroll',
      orient:'horizontal',
      left:'center',
      bottom:30,
      height:150,
      data:['Projects','Species','Cells','Cell types','Samples','Treatment/Diseases']
    },
    color:['#f2d2a2','#54a7de','#76dcfb','#7ea1ed','#5ae05a','#365baa'],
    series:[
      {
        name:'文章分类数量',
        type: 'pie',
        radius: [20, 120],
        center: ['50%', '50%'],
        roseType: 'radius',
        itemStyle: {
          borderRadius: 5
        },
 /*       emphasis: {
          label: {
            show: true
          }
        },*/
        data:[
          {name:'Projects',value:10},
          {name:'Species',value:12},
          {name:'Cells',value:20},
          {name:'Cell types',value:15},
          {name:'Samples',value:13},
          {name:'Treatment/Diseases',value:12}
        ],
        emphasis:{
          itemStyle:{
            shadowBlur:10,
            shadowOffsetX:0,
            shadowColor:'rgba(0,0,0,0.5)'
          }
        },
        label:{
          show:true,
          position:'outside',
          formatter:'{b}:{c}'
        }
      }
    ]
  })
}
onMounted(() => {
  initPieEcharts()
  console.log(props.sortType)
});
</script>
<style scoped lang="scss">

</style>