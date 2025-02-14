<template>
    <div>
        <el-row>
            <el-col :span="6">
                <el-anchor :container="containerRef" direction="vertical" type="default" :offset="30"
                    @click="handleClick">
                    <el-anchor-link href="#id1" title="part1" />
                    <el-anchor-link href="#id2" title="part2" />
                    <el-anchor-link href="#id3" title="part3" />
                </el-anchor>
                <!-- <el-anchor :container="containerRef" direction="vertical" type="default" :offset="30"
                    @click="handleClick">
                    <el-anchor-link :href="`#${item.id}`" v-for="(item, index) in navList" :key="index"
                        class="list_item">
                        {{ item.title }}
                        <template #sub-link>
                            <el-anchor-link :href="`#${child.id}`" v-for="(child, childIndex) in item.children"
                                :key="childIndex" class="list_item">
                                {{ child.title }}
                                <template #sub-link>
                                    <el-anchor-link :href="`#${grandson.id}`"
                                        v-for="(grandson, grandsonIndex) in child.children">
                                        {{ grandson.title }}
                                    </el-anchor-link>
                                </template>
                            </el-anchor-link>
                        </template>
                    </el-anchor-link>
                </el-anchor> -->
            </el-col>
            <el-col :span="18">
                <div ref="containerRef" style="height: 400px; overflow-y: auto">
                    <div id="id1" style="
                height: 400px;
                background: rgba(255, 0, 0, 0.02);
                margin-top: 30px;
              ">
                        part1
                    </div>
                    <div id="id2" style="
                height: 400px;
                background: rgba(0, 255, 0, 0.02);
                margin-top: 30px;
              ">
                        part2
                    </div>
                    <div id="id3" style="
                height: 400px;
                background: rgba(0, 0, 255, 0.02);
                margin-top: 30px;
              ">
                        part3
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    const containerRef = ref < HTMLElement | null > (null)
    const navList = ref([
        {
            id: '1',
            title: '1. 项目概况'
        },
        {
            id: '2',
            title: '2. 流程说明',
            children: [
                {
                    id: '21',
                    title: '2.1 实验流程',
                    children: [
                        {
                            id: '211',
                            title: '2.1.1 DNA质检'
                        },
                        {
                            id: '212',
                            title: '2.1.2 文库构建'
                        },
                        {
                            id: '213',
                            title: '2.1.3 探针捕获'
                        },
                        {
                            id: '214',
                            title: '2.1.4 文库质检'
                        },
                        {
                            id: '215',
                            title: '2.1.5 双端测序'
                        }
                    ]
                },
                {
                    id: '22',
                    title: '2.2 信息分析流程'
                }
            ]
        },
        {
            id: '3',
            title: '3. 数据质控',
            children: [
                {
                    id: '31',
                    title: '3.1 测序数据统计'
                },
                {
                    id: '32',
                    title: '3.2 质控',
                    children: [
                        {
                            id: '321',
                            title: '3.2.1 质量分布'
                        },
                        {
                            id: '322',
                            title: '3.2.2 Base Content分布'
                        }
                    ]
                },
                {
                    id: '33',
                    title: '3.3 过滤数据统计'
                }
            ]
        },
        {
            id: '4',
            title: '4. 比对分析',
            children: [
                {
                    id: '41',
                    title: '4.1 参考基因组信息'
                },
                {
                    id: '42',
                    title: '4.2 序列比对统计'
                }
            ]
        },
        {
            id: '5',
            title: '5. SNP分析',
            children: [
                {
                    id: '51',
                    title: '5.1 SNP统计'
                },
                {
                    id: '52',
                    title: '5.2 SNP注释',
                    children: [{
                        id: '521',
                        title: '5.2.1 分析描述'
                    }]
                },
                {
                    id: '53',
                    title: '5.3 SNP基因型'
                }
            ]
        },
        {
            id: '6',
            title: '6. INDEL',
            children: [
                {
                    id: '61',
                    title: '6.1 InDel 检测'
                },
                {
                    id: '62',
                    title: '6.2 InDel 注释'
                }
            ]
        },
        {
            id: '7',
            title: '参考文献',
        }
    ])
    const handleClick = (e: MouseEvent) => {
        e.preventDefault()
    }
</script>