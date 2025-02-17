<template>
  <div class="common-layout">
    <el-header>
      <div class="title">靶向捕获测序报告</div>
      <div class="header-content">
        <div class="common-">
          <i class="iconfont icon-touxiang"></i><span>客户单位：XX农业科学院</span>
        </div>
      </div>
    </el-header>
    <el-container>
      <el-aside>
        <div class="nav">
          <p>目录</p>
          <el-anchor :container="containerRef" direction="vertical" type="default" :offset="30" @click="handleClick">
            <el-anchor-link :href="`#${item.id}`" v-for="(item, index) in navList" :key="index" class="list_item">
              {{ item.title }}
              <template #sub-link>
                <el-anchor-link :href="`#${child.id}`" v-for="(child, childIndex) in item.children" :key="childIndex"
                  class="list_item">
                  {{ child.title }}
                  <template #sub-link>
                    <el-anchor-link :href="`#${grandson.id}`" v-for="(grandson, grandsonIndex) in child.children">
                      {{ grandson.title }}
                    </el-anchor-link>
                  </template>
                </el-anchor-link>
              </template>
            </el-anchor-link>
          </el-anchor>
        </div>
      </el-aside>
      <el-main>
        <div ref="containerRef" style="height: 100%; overflow-y: auto">
          <div class="content_cover">
            <div class="before">
              <div class="logo"><img src="../assets/1.png" alt=""></div>
              <div class="title">
                <h1>项目结题报告</h1>
                <h4>项目名称：靶向捕获测序</h4>
                <h4>客户单位：XX农业科学院</h4>
              </div>
              <div class="footer">
                <p>成都天成未来科技有限公司</p>
                <p>服务热线：028-85923313</p>
              </div>
            </div>
            <div class="behind"><img src="../assets/2.png" alt=""></div>
          </div>
          <div class="content">
            <div class="content_first">
              <h3 id="id1">1.项目概况</h3>
              <img src="../assets/report/1.png" alt="">
            </div>
            <div class="content_first">
              <h3 id="id2">2.流程说明</h3>
              <div class="content_second">
                <h4 id="id21">2.1.实验流程</h4>
                <div>
                  <img src="../assets/report/2.1.png" alt="">
                  <div>
                    <h5 id="id211">2.1.1.DNA质检</h5>
                    <p class="cont">①　使用琼脂糖凝胶电泳检测DNA的完整性</p>
                    <p class="cont">②　使用Qubit精确定量浓度</p>
                  </div>
                  <div>
                    <h5 id="id212">2.1.2.文库构建</h5>
                    <div class="cont">DNA质检完成后，取100ng
                      gDNA使用酶切的方式进行片段化，同时将片段化DNA末端补平，并在5’端进行磷酸化，同时对片段化产物进行末端修复加dA尾，并连接通用测序接头。并使用磁珠对其进行纯化及片段分选，保留插入片段为200-300bp的接头链接产物。
                      在连接产物中添加测序引物（带有不同Barcodes，用于区分不同的样品）并使用高保真PCR反应体系进行PCR扩增。经磁珠纯化后的扩增产物为最终的探针捕获预文库，可用于探针捕获实验。
                    </div>
                  </div>
                  <div>
                    <h5 id="id213">2.1.3.探针捕获</h5>
                    <div class="cont">
                      预文库质检完成后，将需要捕获的文库样本以等摩尔量混合，形成DNA文库池。将文库池干燥后，加入捕获探针和捕获试剂使其变性，在60℃下反应2-16h。将杂交捕获后的产物使用链霉亲和素磁珠进行富集、清洗，
                      然后进行PCR扩增并使用磁珠进行纯化，得到最终的捕获文库。
                    </div>
                  </div>
                  <div>
                    <h5 id="id214">2.1.4.文库质检</h5>
                    <p class="cont">①　使用Qubit或qPCR对文库浓度进行定量</p>
                    <p class="cont">①　使用Agilent 4200 or Qseq400精确检测库片段大小</p>
                  </div>
                  <div>
                    <h5 id="id215">2.1.5.双端测序</h5>
                    <div class="cont">使用Qubit或qPCR对捕获文库进行定量，并使用Agilent 4200或Qseq400检测文库片段大小。质检合格后使用DNBSEQ-T7进行测序。
                    </div>
                    <div class="cont">
                      Paired-end方法是指在构建待测DNA文库时，在适配片段两端都加上测序引物结合位点。在第一轮测序完成后，去除第一轮测序的模板链，用配对测序模块(Paired-End
                      Module)引导互补链进行原位再生和扩增，以达到第二轮测序所需的模板量，然后继续进行第二轮互补链的合成测序。
                    </div>
                  </div>
                </div>
              </div>
              <div class="content_second">
                <h4 id="id22">2.2.信息分析流程</h4>
                <p class="cont">
                  在将样本序列比对至参考基因组后，可以依据变异类型的不同，使用不同的统计模型检测出可靠的变异情况。本次检测的变异类型包括单核苷酸多态性(SNP)、小片段插入/缺失(InDel)。信息分析流程如下图所示：
                </p>
                <img src="../assets/report/2.2.png" alt="">
              </div>
            </div>
            <div class="content_first">
              <h3 id="id3">3.数据质控</h3>
              <div class="content_second">
                <h4 id="id31">3.1 测序数据统计</h4>
                <div>
                  <p class="cont">别对每个样品的下机数据进行统计，结果见表2。</p>
                  <h6>表1 测序数据统计</h6>
                  <el-table stripe border :data="sheetTableData1" style="width: 100%; height:400px"
                    header-cell-class-name="my-table-header">
                    <el-table-column fixed property="sample" label="Sample" />
                    <el-table-column property="reads" label="Raw reads" />
                    <el-table-column property="bases" label="Raw bases" />
                    <el-table-column property="qthree" label="Q30(%)" />
                    <el-table-column property="gc" label="GC(%)" />
                    <el-table-column property="duplication" label="Duplication(%)" />
                  </el-table>
                  <div class="tips">
                    <p class="tip">注：</p>
                    <p class="tip">Sample_id：样品名，</p>
                    <p class="tip">Raw_reads：Reads总数，</p>
                    <p class="tip">Raw_bases (bp)：碱基总数，</p>
                    <p class="tip">Q30 %：碱基识别准确率在99.9%以上的碱基所占百分比，</p>
                    <p class="tip">GC %：GC含量，</p>
                    <p class="tip">Duplication%：重复序列比例，</p>
                  </div>
                </div>
                <h4 id="id32">3.2.质量控制</h4>
                <div>
                  <h5 id="id321">3.2.1.质量分布</h5>
                  <div>
                    <div class="cont">采用 fastp对数据进行质量控制。以样品S1的R1端测序为例，具体结果见图1。</div>
                    <div class="echarts">
                      <div style="font-size: 16px;margin: 40px 0 0 20px;">
                        <el-select v-model="value1" style="width: 240px">
                          <el-option v-for="item in options" :key="item.value" :label="item.label"
                            :value="item.value" />
                        </el-select>
                      </div>
                      <div style="width:calc(100% - 300px);">
                        <iframe :src="'/fig1_quality_boxplot/' + value1 + '.html'" width="100%" height="500px"
                          scrolling="no" frameborder="0" ref="fIframe">
                        </iframe>
                      </div>
                    </div>
                    <h6>图1 单碱基质量分布图</h6>
                    <div class="tips">
                      <p class="tip">注：</p>
                      <p class="tip">横坐标是reads碱基位置（5’->3’），</p>
                      <p class="tip">纵坐标是所有reads在该位点碱基Q值统计。</p>
                      <p class="tip">从图中可知，本次数据平均质量较高。</p>
                    </div>
                  </div>
                  <h5 id="id322">3.2.2.Base Content分布</h5>
                  <div>
                    <div class="cont">Base content分布主要用于检测测序数据是否存在AT、GC分离现象，这种现象通常由建库或测序引入，并影响后续的生物信息分析结果。
                      Base content分布结果见图2，结果显示，建库和测序表现出较好的均一度，可以进行后续信息分析。</div>
                    <div class="echarts">
                      <div style="font-size: 16px;margin: 40px 0 0 20px;">
                        <el-select v-model="value2" style="width: 240px">
                          <el-option v-for="item in options2" :key="item.value" :label="item.label"
                            :value="item.value" />
                        </el-select>
                      </div>
                      <div style="width:calc(100% - 300px);">
                        <iframe :src="'/fig2_base_content/' + value2 + '.html'" width="100%" height="500px"
                          scrolling="no" frameborder="0" ref="fIframe">
                        </iframe>
                      </div>
                    </div>
                    <h6>图2 Base content分布图</h6>
                    <div class="tips">
                      <p class="tip">注：</p>
                      <p class="tip">横坐标是reads中碱基位置（5’->3’），</p>
                      <p class="tip">纵坐标是该位点某碱基所占的比例统计。</p>
                      <p class="tip">好的建库和测序样品的四条线应该平行且接近。</p>
                    </div>
                  </div>
                </div>
                <h4 id="id33">3.3.过滤数据统计</h4>
                <div>
                  <div class="cont">测序得到的原始测序序列（Sequenced Reads）或者raw
                    reads，里面含有带接头的、低质量的reads。对于二代测序技术，测序错误率产生有下面两个主要原因：
                  </div>
                  <p class="cont">（1）由于测序过程中化学试剂的消耗，测序序列中碱基位置越靠后的测序错误率越</p>
                  <p class="cont">（2）PCR过程中随机引物和DNA模版的不完全结合可能导致前几个碱基测序错误率较高。为了保证信息分析质量，必须对raw reads过滤，得到clean
                    reads，使用clean reads进行后续分析。</p>
                  <div class="cont">使用软件fastp[2]（version 0.20.0 , 参数：-n 10 -q 20 -u 40）对raw reads进行过滤， 数据处理的步骤如下：
                  </div>
                  <p class="cont">①　去除接头序列(adapter);</p>
                  <p class="cont">②　当测序read中含有的N的含量超过10个碱基时，需要去除此对paired reads；</p>
                  <p class="cont">③　当测序read中含有的低质量（Q ≤20）碱基数超过该条read长度比例的40% 时，需要去除此对paired reads。</p>
                  <div class="cont">数据过滤的基本情况见表3。</div>
                  <h6>表2 数据过滤统计</h6>
                  <el-table stripe border :data="sheetTableData2" style="width: 100%; height:400px"
                    header-cell-class-name="my-table-header">
                    <el-table-column fixed property="sample" label="Sample" />
                    <el-table-column property="reads" label="Clean reads" />
                    <el-table-column property="bases" label="Clean bases" />
                    <el-table-column property="reads_rate" label="Clean reads(%)" />
                    <el-table-column property="bases_rate" label="Clean bases(%)" />
                  </el-table>
                  <div class="tips">
                    <p class="tip">注：</p>
                    <p class="tip">Sample：样品名，</p>
                    <p class="tip">Clean_base (bp)：高质量 reads的碱基数，</p>
                    <p class="tip">Clean_reads：高质量 reads数，</p>
                    <p class="tip">Clean_bases_rate：高质量 reads的碱基比例，</p>
                    <p class="tip">Clean_reads_rate：高质量 reads数比例</p>
                  </div>
                  <div>
                    <div class="echarts">
                      <div style="font-size: 16px;margin: 40px 0 0 20px;">
                        <el-select v-model="value3" style="width: 240px">
                          <el-option v-for="item in options3" :key="item.value" :label="item.label"
                            :value="item.value" />
                        </el-select>
                      </div>
                      <div style="width:calc(100% - 300px);">
                        <iframe :src="'/fig3_piecharts/' + value3 + '.html'" width="100%" height="500px" scrolling="no"
                          frameborder="0" ref="fIframe">
                        </iframe>
                      </div>
                    </div>
                  </div>
                  <h6>图3 数据过滤统计</h6>
                </div>
              </div>
            </div>
            <div class="content_first">
              <h3 id="id4">4.比对分析</h3>
              <div class="content_second">
                <h4 id="id41">4.1 参考基因组信息</h4>
                <div>
                  <div class="cont">该参考基因组总共包含条102条contig序列，基因组的基本信息见表5。</div>
                  <h6>表3 参考基因组基本信息整理</h6>
                  <el-table stripe border :data="sheetTableData3" style="width: 100%; height:400px"
                    header-cell-class-name="my-table-header">
                    <el-table-column fixed property="item" label="Item" />
                    <el-table-column property="number" label="contig number" />
                    <el-table-column property="size" label="Genome Size (bp)" />
                    <el-table-column property="content" label="GC Content %" />
                  </el-table>
                  <div class="tips">
                    <p class="cont">注：</p>
                    <p class="tip">Contig number：基因组contig数，</p>
                    <p class="tip">Genome Size (bp)：基因组大小，</p>
                    <p class="tip">GC Content %：GC 百分含量</p>
                  </div>
                </div>
                <h4 id="id42">4.2.序列比对统计</h4>
                <div>
                  <p class="cont">分别统计每一个样品的平均测序深度和覆盖度，结果见表7。</p>
                  <h6>表4 序列比对统计</h6>
                  <el-table stripe border :data="sheetTableData4" style="width: 100%; height:400px"
                    header-cell-class-name="my-table-header">
                    <el-table-column fixed property="sample" label="Sample" />
                    <el-table-column property="reads" label="[Total] Fraction of Mapped Reads" />
                    <el-table-column property="depth" label="[Target] Average depth" />
                    <el-table-column property="covered4" label="[Target] Fraction Region covered >= 4x" />
                    <el-table-column property="covered10" label="[Target] Fraction Region covered >= 10x" />
                    <el-table-column property="covered30" label="[Target] Fraction Region covered >= 30x" />
                    <el-table-column property="size" label="[flank] flank size" />
                    <el-table-column property="depths" label="[flank] Average depth" />
                  </el-table>
                  <div class="tips">
                    <p class="tip">注：</p>
                    <p class="tip">Sample：样品名，</p>
                    <p class="tip">Mapping Rate %： 比对率，比对至参考基因组上的 reads 数量占总 reads 数，</p>
                    <p class="tip">[Target] Average depth：核心位点平均测序深度，比对至参考基因组的碱基总数除以基因组大小，</p>
                    <p class="tip">[Target] Fracton Region covered >= 4x：参考基因组中至少被 4 条序列覆盖的位点占基因组的百分比，</p>
                    <p class="tip">[Target] Fraction Region covered >= 10x：参考基因组中至少被 4 条序列覆盖的位点占基因组的百分比，</p>
                    <p class="tip">[Target] Fraction Region covered >= 30x：参考基因组中至少被 4 条序列覆盖的位点占基因组的百分比，</p>
                    <p class="tip">[flank] flank size： xxxxxxxxxxxxxxxxxxxx，</p>
                    <p class="tip">[flank] Average depth： xxxxxxxxxx</p>
                  </div>
                  <div>
                    <div class="echarts">
                      <!-- <div class="echarts_nav">
                      <div class="echarts_nav_item" :class="{ 'item_active': value4 === item.value }"
                        v-for="item in options4" :key="item.value" @click="(value4 = item.value)">{{item.value}}
                      </div>
                    </div> -->
                      <div style="font-size: 16px;margin: 40px 0 0 20px;">
                        <el-select v-model="value4" style="width: 240px">
                          <el-option v-for="item in options4" :key="item.value" :label="item.label"
                            :value="item.value" />
                        </el-select>
                      </div>
                      <div style="width:calc(100% - 300px);">
                        <iframe :src="'/fig4_coverage/' + value4 + '.html'" width="100%" height="500px" scrolling="no"
                          frameborder="0" ref="fIframe">
                        </iframe>
                      </div>
                    </div>
                  </div>
                  <h6>图4 样本覆盖率分布</h6>
                  <div class="cont">注:展示了每个样本的覆盖率分布，其中横坐标为覆盖率， 纵坐标为有多少碱基具有该覆盖率。</div>
                </div>
              </div>
            </div>
            <div class="content_first">
              <h3 id="id5">5.SNP分析</h3>
              <div class="content_second">
                <div class="cont">
                  根据单核苷酸在基因中的位置，可以分为基因非编码区SNP，基因间隔区SNP和基因编码区SNP。不在基因编码区的单核苷酸多态（SNP）仍可能影响基因剪接、转录子结合、信使RNA降解或非编码区的RNA序列。
                  基于GATK最佳实践的生物信息分析工具进行变异检测，当有参考基因组的注释文件后，可以在 SNP的数据集基础上进行位置注释。
                </div>
                <h4 id="id51">5.1 SNP统计</h4>
                <div>
                  <p class="cont">对每个样本的位点缺失、突变情况进行统计，统计结果如下：</p>
                  <h6>表5 SNP样本统计</h6>
                  <el-table stripe border :data="sheetTableData5" style="width: 100%; height:400px"
                    header-cell-class-name="my-table-header">
                    <el-table-column fixed property="Sample" label="Sample" />
                    <el-table-column property="nRefHom" label="nRefHom" />
                    <el-table-column property="nNonRefHom" label="nNonRefHom" />
                    <el-table-column property="nHets" label="nHets" />
                    <el-table-column property="nMissing" label="nMissing" />
                    <el-table-column property="nSingletons" label="nSingletons" />
                    <el-table-column property="nTransitions" label="nTransitions" />
                    <el-table-column property="nTransversions" label="nTransversions" />
                  </el-table>
                  <div class="tips">
                    <p class="tip">注：</p>
                    <p class="tip">Sample：样本名，</p>
                    <p class="tip">nRefHom：参考等位基因纯合子数量，</p>
                    <p class="tip">nNonRefHom：非参考等位基因纯合子数量，</p>
                    <p class="tip">nHets：杂合子数量</p>
                    <p class="tip">nIndels：插入/缺失变异数量</p>
                    <p class="tip">nMissing：缺失基因型数量</p>
                    <p class="tip">nTransitions：转变突变数量</p>
                    <p class="tip">nTransversions：颠换突变数量</p>
                    <p class="tip">averageDepth：平均深度</p>
                  </div>
                </div>
                <h4 id="id52">5.2 SNP注释</h4>
                <div>
                  <h5 id="id521">5.2.1分析描述</h5>
                  <h6>表6 SNP 注释结果统计</h6>
                  <el-table stripe border :data="sheetTableData6" style="width: 100%; height:400px"
                    header-cell-class-name="my-table-header">
                    <el-table-column fixed property="Type" label="Type" />
                    <el-table-column property="Downstream" label="Downstream" />
                    <el-table-column property="Exon" label="Exon" />
                    <el-table-column property="Intergenic" label="Intergenic" />
                    <el-table-column property="Intron" label="Intron" />
                    <el-table-column property="Acceptor" label="Splice Site Acceptor" />
                    <el-table-column property="Donor" label="Splice Site Donor" />
                    <el-table-column property="Region" label="Splice Site Region" />
                    <el-table-column property="Transcript" label="Transcript" />
                    <el-table-column property="Upstream" label="Upstream" />
                    <el-table-column property="Prime" label="UTR 3 Prime" />
                  </el-table>
                  <div class="tips">
                    <p class="tip">注：</p>
                    <p class="tip">UTR 3 Prime：变异位于基因3'端UTR区域，</p>
                    <p class="tip">UTR5：变异位于基因5'端UTR区域，</p>
                    <p class="tip">UTR5;UTR3：变异位于基因5'端UTR区域，同时变异位于基因3'端UTR区域，</p>
                    <p class="tip">downstream：变异位于基因下游2Kbp，</p>
                    <p class="tip">exonic：变异位于外显子编码区域，</p>
                    <p class="tip">intergenic：变异位于基因间区，</p>
                    <p class="tip">intronic：变异位于内含子区域，</p>
                    <p class="tip">splicing：变异位于剪接位点（内含子中靠近外显子/内含子边界的2bp），</p>
                    <p class="tip">upstream：变异位于基因上游2Kbp，</p>
                    <p class="tip">
                      upstream;downstream：变异位于基因上游2Kbp，同时变异位于基因下游2Kbp；Type：变异发生在哪些区域，具体释义请参照如下页面的Variant
                      annotaiton details一节。https：//pcingola.github.io/SnpEff/snpeff/inputoutput</p>
                  </div>
                  <div class="echarts">
                    <div style="font-size: 16px;margin: 40px 0 0 20px;">
                      <el-select v-model="value5" style="width: 240px">
                        <el-option v-for="item in options5" :key="item.value" :label="item.label" :value="item.value" />
                      </el-select>
                    </div>
                    <div style="width:calc(100% - 300px);">
                      <iframe :src="'/fig5_snp_anno/' + value5 + '.html'" width="100%" height="500px" scrolling="no"
                        frameborder="0" ref="fIframe">
                      </iframe>
                    </div>
                  </div>
                  <h6>图5 target snp 注释</h6>
                </div>
                <h4 id="id53">5.3.SNP基因型</h4>
                <div>
                  <div class="cont">将目标区域比对结果和变异结果使用自编的脚本对SNP位点的基因型分型信息进行提取，当样品在某个SNP位点的覆盖深度 <i>
                      < </i>
                        5X说明该样品在该位点测序深度不足，为保证基因型分型结果准确，该位点按缺失处理，在表格中以NA表示；杂合基因型中每个等位基因至少要有4个reads支持，则该SNP位点为杂合突变，否则该位点按缺失处理，在表格中以NA表示。
                  </div>
                  <h6>表7 SNP位点基因型</h6>
                  <!-- <iframe src="/show_csv.html" width="100%" height="500px" scrolling="no"
                        frameborder="0" ref="fIframe">
                      </iframe> -->
                  <div ref="tableContainer" class="table_container" @scroll="handleScroll">
                    <table>
                      <thead>
                        <tr>
                          <th>CHROM</th>
                          <th>POS</th>
                          <th>ALT</th>
                          <th>num1</th>
                          <th>num2</th>
                          <th>num3</th>
                          <th>num4</th>
                          <th>num5</th>
                          <th>num6</th>
                          <th>num7</th>
                          <th>num8</th>
                          <th>num9</th>
                          <th>num10</th>
                        </tr>
                      </thead>
                      <tbody ref="tableContainer" class="table_container" @scroll="handleScroll">
                        <tr v-for="item in sheetTableData7" :key="item.id">
                          <td>{{ item.CHROM }}</td>
                          <td>{{ item.POS }}</td>
                          <td>{{ item.ALT }}</td>
                          <td>{{ item.num1 }}</td>
                          <td>{{ item.num2 }}</td>
                          <td>{{ item.num3 }}</td>
                          <td>{{ item.num4 }}</td>
                          <td>{{ item.num5 }}</td>
                          <td>{{ item.num6 }}</td>
                          <td>{{ item.num7 }}</td>
                          <td>{{ item.num8 }}</td>
                          <td>{{ item.num9 }}</td>
                          <td>{{ item.num10 }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!-- <el-table stripe border :data="sheetTableData7" style="width: 100%; height:400px"
                    header-cell-class-name="my-table-header">
                    <el-table-column property="CHROM" label="CHROM" />
                    <el-table-column property="POS" label="POS" />
                    <el-table-column property="ALT" label="ALT" />
                    <el-table-column property="num1" label="16-119" />
                    <el-table-column property="num2" label="16-120" />
                    <el-table-column property="num3" label="16-122" />
                    <el-table-column property="num4" label="16-146" />
                    <el-table-column property="num5" label="16-161" />
                    <el-table-column property="num6" label="16-176" />
                    <el-table-column property="num7" label="16-182" />
                    <el-table-column property="num8" label="16-183" />
                    <el-table-column property="num9" label="16-200" />
                    <el-table-column property="num10" label="16-201" />
                  </el-table> -->
                  <!-- <virtual-scroller :items="sheetTableData7" :item-height="50" class="scroller">
                    <template #default="{ item }">
                      <div class="row">
                        <span>{{ item.CHROM }}</span>
                        <span>{{ item.POS }}</span>
                        <span>{{ item.ALT }}</span>
                      </div>
                    </template>
                  </virtual-scroller> -->
                  <!-- <RecycleScroller class="scroller" :items="sheetTableData7" :item-size="50" key-field="id" v-slot="{ item }">
                    <div class="item">{{ item }}</div>
                  </RecycleScroller> -->
                  <div class="tips">
                    <p class="tip">注：</p>
                    <p class="tip">Chrom：SNP所在的染色体名称，</p>
                    <p class="tip">Position：SNP在染色体上的位置，</p>
                    <p class="tip">Ref：参考基因组上该位点的基因型，</p>
                    <p class="tip">第4列开始是每个样本的基因型结果，该列表头即为所检测的样品名称</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="content_first">
              <h3 id="id6">6.INDEL</h3>
              <div class="content_second">
                <div class="cont">InDel (Insertion-Deletion)是指相对于参考基因组，样本中发生的片段的插入缺失，该插入缺失可能含一个或多个碱基。根据InDel
                  在基因组中的位置，可以分为编码区序列的InDel、基因间区InDel、和非编码区序列的InDel。如果在DNA编码序列中插入或缺失一个或几个碱基（非3的倍数），这种突变称之为移码突变(frame
                  shift
                  mutation)。此类突变会造成插入点或缺失点下游的DNA
                  编码框架全部改变，其结果是突变点以后的氨基酸序列都发生改变。而发生在非编码区（如：内含子区）的InDel，有可能会降低转录的效率和剪切的准确性。InDel的发生也是物种进化的主要原因之一。
                </div>
                <div>
                  <p class="cont">小片段(小于40bp)的InDel，采用GATK最佳实践的生物信息分析工具进行多个样本SNP的检测。 然后自编脚本提取从GATK结果提取InDel基因型;</p>
                  <p class="cont">大于40bp以上的大片段InDel： 对于GenoPlexs的产品，
                    在insertion或者deletion的序列两端分别设计一对特异扩增引物，自编脚本根据每条reads的引物组合来判断基因型。对于GenoBaits的产品，使用过滤后的reads比对参考基因组，
                    根据比对的断点位置情况判断样本的基因型;</p>
                  <p class="cont">将上述比对结果和变异结果使用自编的脚本对InDel位点的基因型分型信息进行提取，当样品在某个InDel位点的覆盖深度<i>
                      <5 </i>说明该样品在该位点测序深度不够，则该位点按缺失处理，在表格中以NA表示；</p>
                  <p class="cont">
                    当样品在某个InDel位点基因型有突变，则需要根据该位点突变频率进行判断，若突变频率≥0.2或者≤0.8则该位点为纯合，若突变频率在0.2-0.8之间，杂合基因型中每个等位基因至少要有4个reads支持，则该InDel位点为杂合突变，否则该位点按缺失处理，在表格中以NA表示；
                  </p>
                  <p class="cont">最终汇总成样品在全部InDel位点的基因型结果。</p>
                </div>
                <h5 id="id61">6.1 InDel 检测</h5>
                <div>
                  <div class="cont">InDel是小型的Insertion和Deletion的总称。我们采用GATK 软件包中的
                    UnifiedGenotyper命令来获取每一个样本的InDel位点，其中，stand_call_conf设置为50，stand_emit_conf设置为30。为了保证InDel位点的可靠性，进一步对获得的InDel位点进行过滤，过滤标准如下：
                  </div>
                  <p class="cont">(1)Fisher test of strand bias (FS) ≤ 200；</p>
                  <p class="cont">(2)Quality Depth (QD) ≥ 2；</p>
                  <p class="cont">(3)ReadPosRankSum ≥ -20。</p>
                  <div class="cont">对每一个样本的InDel位点进行统计，结果见表11。</div>
                  <h6>表8 InDel 结果统计</h6>
                  <el-table stripe border :data="sheetTableData8" style="width: 100%; height:400px"
                    header-cell-class-name="my-table-header">
                    <el-table-column fixed property="Sample" label="Sample" />
                    <el-table-column property="nRefHom" label="nRefHom" />
                    <el-table-column property="nInsHets" label="nInsHets" />
                    <el-table-column property="nDelHets" label="nDelHets" />
                    <el-table-column property="nInsAltHoms" label="nInsAltHoms" />
                    <el-table-column property="nDelAltHoms" label="nDelAltHoms" />
                    <el-table-column property="nMissing" label="nMissing" />
                    <el-table-column property="nSingletons" label="nSingletons" />
                  </el-table>
                  <div class="tips">
                    <p class="tip">注：</p>
                    <p class="tip">Sample：样本名，</p>
                    <p class="tip">Total：表示样本中总的观测数量或数据点的总数。</p>
                    <p class="tip">nRefHom：指的是参考等位基因的纯合子数量（即两个等位基因都是参考等位基因的个体）。</p>
                    <p class="tip">nInsHets：指的是插入变异的杂合子数量（即一个等位基因是参考等位基因，另一个是插入变异的个体）。</p>
                    <p class="tip">nDelHets：指的是缺失变异的杂合子数量（即一个等位基因是参考等位基因，另一个是缺失变异的个体）。</p>
                    <p class="tip">nInsAltHoms：指的是插入变异的纯合子数量（即两个等位基因都是插入变异的个体）。</p>
                    <p class="tip">nDelAltHoms：指的是缺失变异的纯合子数量（即两个等位基因都是缺失变异的个体）。</p>
                    <p class="tip">nMissing：指的是缺失数据的数量（即在样本中未能获得基因型信息的个体数量）。</p>
                    <p class="tip">nSingletons：指的是单一变异的数量（即在样本中只出现一次的变异）。</p>
                  </div>
                </div>
                <h5 id="id62">6.2.InDel 注释</h5>
                <div>
                  <p class="cont">采用Perl脚本对InDel进行功能注释，注释结果见表12，突变效应见表13。</p>
                  <h6>表9 InDel注释结果统计</h6>
                  <el-table stripe border :data="sheetTableData9" style="width: 100%; height:400px"
                    header-cell-class-name="my-table-header">
                    <el-table-column fixed property="Type" label="Type" />
                    <el-table-column property="Downstream" label="Downstream" />
                    <el-table-column property="Exon" label="Exon" />
                    <el-table-column property="Intergenic" label="Intergenic" />
                    <el-table-column property="Intron" label="Intron" />
                    <el-table-column property="Acceptor" label="Splice Site Acceptor" />
                    <el-table-column property="Donor" label="Splice Site Donor" />
                    <el-table-column property="Region" label="Splice Site Region" />
                    <el-table-column property="Transcript" label="Transcript" />
                    <el-table-column property="Upstream" label="Upstream" />
                    <el-table-column property="Prime" label="UTR 3 Prime" />
                  </el-table>
                  <div class="tips">
                    <p class="tip">注：</p>
                    <p class="tip">Sample：样本名，</p>
                    <p class="tip">Count：InDel 的数量</p>
                    <p class="tip">Upstream：转录起始位点上游 1 kb 区域的InDel的数量</p>
                    <p class="tip">Downstream：转录终止位点下游 1 kb 区域的InDel的数量</p>
                    <p class="tip">Upstream;Downstream：转录起始位点上游和下游区域的InDel的数量</p>
                    <p class="tip">Exonic： 非编码区外显子区域的InDel的数量</p>
                    <p class="tip">Intergenic：基因间区域的InDel的数量</p>
                  </div>
                  <div class="echarts">
                    <div style="font-size: 16px;margin: 40px 0 0 20px;">
                      <el-select v-model="value6" style="width: 240px">
                        <el-option v-for="item in options6" :key="item.value" :label="item.label" :value="item.value" />
                      </el-select>
                    </div>
                    <div style="width:calc(100% - 300px);">
                      <iframe :src="'/fig6_indel_anno/' + value6 + '.html'" width="100%" height="500px" scrolling="no"
                        frameborder="0" ref="fIframe">
                      </iframe>
                    </div>
                  </div>
                  <h6>图6 target Indel 注释</h6>
                </div>
              </div>
            </div>
            <div class="content_first">
              <h3 id="id7">参考文献</h3>
              <div class="content_second">
                <p class="cont">[1] Chen, S., Zhou, Y., Chen, Y., & Gu, J. (2018). fastp: an ultra-fast all-in-one
                  FASTQ
                  preprocessor. Bioinformatics, 34(17), i884-i890.</p>
                <p class="cont">[2] Li, H. (2013). Aligning sequence reads, clone sequences and assembly contigs
                  with
                  BWA-MEM. arXiv preprint arXiv:1303.3997.</p>
                <p class="cont">[3] Cingolani, P., Platts, A., Wang, L. L., Coon, M., Nguyen, T., Wang, L., ... &
                  Ruden,
                  D. M. (2012). A program for annotating and predicting the effects of single nucleotide
                  polymorphisms,
                  SnpEff: SNPs in the genome of Drosophila melanogaster strain w1118; iso-2; iso-3. fly, 6(2),
                  80-92.
                </p>
              </div>
            </div>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
  <!-- <el-backtop :right="100" :bottom="100" /> -->
</template>
<script setup lang="ts">
  import { ref, onMounted, nextTick, onUnmounted } from "vue";
  import { commonSheet } from "../utils/read_xlsx";
  const navList = ref([
    {
      id: 'id1',
      title: '1. 项目概况'
    },
    {
      id: 'id2',
      title: '2. 流程说明',
      children: [
        {
          id: 'id21',
          title: '2.1 实验流程',
          children: [
            {
              id: 'id211',
              title: '2.1.1 DNA质检'
            },
            {
              id: 'id212',
              title: '2.1.2 文库构建'
            },
            {
              id: 'id213',
              title: '2.1.3 探针捕获'
            },
            {
              id: 'id214',
              title: '2.1.4 文库质检'
            },
            {
              id: 'id215',
              title: '2.1.5 双端测序'
            }
          ]
        },
        {
          id: 'id22',
          title: '2.2 信息分析流程'
        }
      ]
    },
    {
      id: 'id3',
      title: '3. 数据质控',
      children: [
        {
          id: 'id31',
          title: '3.1 测序数据统计'
        },
        {
          id: 'id32',
          title: '3.2 质控',
          children: [
            {
              id: 'id321',
              title: '3.2.1 质量分布'
            },
            {
              id: 'id322',
              title: '3.2.2 Base Content分布'
            }
          ]
        },
        {
          id: 'id33',
          title: '3.3 过滤数据统计'
        }
      ]
    },
    {
      id: 'id4',
      title: '4. 比对分析',
      children: [
        {
          id: 'id41',
          title: '4.1 参考基因组信息'
        },
        {
          id: 'id42',
          title: '4.2 序列比对统计'
        }
      ]
    },
    {
      id: 'id5',
      title: '5. SNP分析',
      children: [
        {
          id: 'id51',
          title: '5.1 SNP统计'
        },
        {
          id: 'id52',
          title: '5.2 SNP注释',
          children: [{
            id: 'id521',
            title: '5.2.1 分析描述'
          }]
        },
        {
          id: 'id53',
          title: '5.3 SNP基因型'
        }
      ]
    },
    {
      id: 'id6',
      title: '6. INDEL',
      children: [
        {
          id: 'id61',
          title: '6.1 InDel 检测'
        },
        {
          id: 'id62',
          title: '6.2 InDel 注释'
        }
      ]
    },
    {
      id: 'id7',
      title: '参考文献',
    }
  ])
  const currentIndex = ref(1)
  interface table1Info {
    sample: string;
    reads: string;
    bases: string;
    qthree: string;
    gc: string;
    duplication: string;
  }
  interface table2Info {
    sample: string;
    reads: string;
    bases: string;
    reads_rate: string;
    bases_rate: string;
  }
  interface table3Info {
    sample: string;
    number: string;
    size: string;
    content: string;
  }
  interface table4Info {
    sample: string;
    reads: string;
    depth: string;
    covered4: string;
    covered10: string;
    covered30: string;
    size: string;
    depths: string;
  }
  interface table5Info {
    Sample: string;
    nRefHom: string;
    nNonRefHom: string;
    nHets: string;
    nMissing: string;
    nSingletons: string;
    nTransitions: string;
    nTransversions: string;
  }
  interface table6Info {
    Type: string;
    Downstream: string,
    Exon: string,
    Intergenic: string,
    Intron: string,
    Acceptor: string,
    Donor: string,
    Region: string,
    Transcript: string,
    Upstream: string,
    Prime: string,
  }
  interface table7Info {
    sample: string;
    POS: string;
    ALT: string;
    num1: string;
    num2: string;
    num3: string;
    num4: string;
    num5: string;
    num6: string;
    num7: string;
    num8: string;
    num9: string;
    num10: string;
    num11: string;
    num12: string;
    num13: string;
    num14: string;
    num15: string;
    num16: string;
    num17: string;
    num18: string;
    num19: string;
    num20: string;
    num21: string;
    num22: string;
    num23: string;
    num24: string;
    num25: string;
    num26: string;
    num27: string;
    num28: string;
    num29: string;
    num30: string;
    num31: string;
    num32: string;
    num33: string;
    num34: string;
    num35: string;
    num36: string;
    num37: string;
    num38: string;
    num39: string;
    num40: string;
    num41: string;
    num42: string;
    num43: string;
    num44: string;
    num45: string;
  }
  interface table8Info {
    Sample: string;
    nRefHom: string;
    nInsHets: string;
    nDelHets: string;
    nInsAltHoms: string;
    nDelAltHoms: string;
    nMissing: string;
    nSingletons: string;
  }
  const sheetTableData1 = ref < table1Info[] > ([]);
  const sheetTableData2 = ref < table2Info[] > ([]);
  const sheetTableData3 = ref < table3Info[] > ([]);
  const sheetTableData4 = ref < table4Info[] > ([]);
  const sheetTableData5 = ref < table5Info[] > ([]);
  const sheetTableData6 = ref < table6Info[] > ([]);
  const sheetTableData7 = ref < table7Info[] > ([]);
  const sheetTableData8 = ref < table8Info[] > ([]);
  const sheetTableData9 = ref < table6Info[] > ([]);
  const translateField = (data, obj) => {
    let arr = [];
    const cnToEn = obj;
    data.forEach((item) => {
      const arrItem = {};
      Object.keys(item).forEach((key) => {
        arrItem[cnToEn[key]] = item[key];
      });
      arr.push(arrItem);
    });
    return arr;
  };
  const value1 = ref('9-3_quality_boxplot')
  const options = [
    {
      value: '9-3_quality_boxplot',
      label: '9-3_quality_boxplot',
    },
    {
      value: '9-5_quality_boxplot',
      label: '9-5_quality_boxplot',
    },
    {
      value: '9-6_quality_boxplot',
      label: '9-6_quality_boxplot',
    },
    {
      value: '9-16_quality_boxplot',
      label: '9-16_quality_boxplot',
    },
    {
      value: '9-20_quality_boxplot',
      label: '9-20_quality_boxplot',
    },
    {
      value: '9-21_quality_boxplot',
      label: '9-21_quality_boxplot',
    },
    {
      value: '9-26_quality_boxplot',
      label: '9-26_quality_boxplot',
    },
    {
      value: '9-51_quality_boxplot',
      label: '9-51_quality_boxplot',
    },
    {
      value: '9-55_quality_boxplot',
      label: '9-55_quality_boxplot',
    },
    {
      value: '9-56_quality_boxplot',
      label: '9-56_quality_boxplot',
    }
  ]
  const value2 = ref('9-3_base_content')
  const options2 = [
    {
      value: '9-3_base_content',
      label: '9-3_base_content',
    },
    {
      value: '9-5_base_content',
      label: '9-5_base_content',
    },
    {
      value: '9-6_base_content',
      label: '9-6_base_content',
    },
    {
      value: '9-16_base_content',
      label: '9-16_base_content',
    },
    {
      value: '9-20_base_content',
      label: '9-20_base_content',
    },
    {
      value: '9-21_base_content',
      label: '9-21_base_content',
    },
    {
      value: '9-26_base_content',
      label: '9-26_base_content',
    },
    {
      value: '9-51_base_content',
      label: '9-51_base_content',
    },
    {
      value: '9-55_base_content',
      label: '9-55_base_content',
    },
    {
      value: '9-56_base_content',
      label: '9-56_base_content',
    }
  ]
  const value3 = ref('9-3_pie')
  const options3 = [
    {
      value: '9-3_pie',
      label: '9-3_pie',
    },
    {
      value: '9-5_pie',
      label: '9-5_pie',
    },
    {
      value: '9-6_pie',
      label: '9-6_pie',
    },
    {
      value: '9-16_pie',
      label: '9-16_pie',
    },
    {
      value: '9-20_pie',
      label: '9-20_pie',
    },
    {
      value: '9-21_pie',
      label: '9-21_pie',
    },
    {
      value: '9-26_pie',
      label: '9-26_pie',
    },
    {
      value: '9-51_pie',
      label: '9-51_pie',
    },
    {
      value: '9-55_pie',
      label: '9-55_pie',
    },
    {
      value: '9-56_pie',
      label: '9-56_pie',
    }
  ]
  const value4 = ref('9-3_coverage')
  const options4 = [
    {
      value: '9-3_coverage',
      label: '9-3_coverage',
    },
    {
      value: '9-5_coverage',
      label: '9-5_coverage',
    },
    {
      value: '9-6_coverage',
      label: '9-6_coverage',
    },
    {
      value: '9-16_coverage',
      label: '9-16_coverage',
    },
    {
      value: '9-20_coverage',
      label: '9-20_coverage',
    },
    {
      value: '9-21_coverage',
      label: '9-21_coverage',
    },
    {
      value: '9-26_coverage',
      label: '9-26_coverage',
    },
    {
      value: '9-51_coverage',
      label: '9-51_coverage',
    },
    {
      value: '9-55_coverage',
      label: '9-55_coverage',
    },
    {
      value: '9-56_coverage',
      label: '9-56_coverage',
    }
  ]
  const value5 = ref('9-3_snp_anno_pie')
  const options5 = [
    {
      value: '9-3_snp_anno_pie',
      label: '9-3_snp_anno_pie',
    },
    {
      value: '9-5_snp_anno_pie',
      label: '9-5_snp_anno_pie',
    },
    {
      value: '9-6_snp_anno_pie',
      label: '9-6_snp_anno_pie',
    },
    {
      value: '9-16_snp_anno_pie',
      label: '9-16_snp_anno_pie',
    },
    {
      value: '9-20_snp_anno_pie',
      label: '9-20_snp_anno_pie',
    },
    {
      value: '9-21_snp_anno_pie',
      label: '9-21_snp_anno_pie',
    },
    {
      value: '9-26_snp_anno_pie',
      label: '9-26_snp_anno_pie',
    },
    {
      value: '9-51_snp_anno_pie',
      label: '9-51_snp_anno_pie',
    },
    {
      value: '9-55_snp_anno_pie',
      label: '9-55_snp_anno_pie',
    },
    {
      value: '9-56_snp_anno_pie',
      label: '9-56_snp_anno_pie',
    }
  ]
  const value6 = ref('9-3_indel_anno_pie')
  const options6 = [
    {
      value: '9-3_indel_anno_pie',
      label: '9-3_indel_anno_pie',
    },
    {
      value: '9-5_indel_anno_pie',
      label: '9-5_indel_anno_pie',
    },
    {
      value: '9-6_indel_anno_pie',
      label: '9-6_indel_anno_pie',
    },
    {
      value: '9-16_indel_anno_pie',
      label: '9-16_indel_anno_pie',
    },
    {
      value: '9-20_indel_anno_pie',
      label: '9-20_indel_anno_pie',
    },
    {
      value: '9-21_indel_anno_pie',
      label: '9-21_indel_anno_pie',
    },
    {
      value: '9-26_indel_anno_pie',
      label: '9-26_indel_anno_pie',
    },
    {
      value: '9-51_indel_anno_pie',
      label: '9-51_indel_anno_pie',
    },
    {
      value: '9-55_indel_anno_pie',
      label: '9-55_indel_anno_pie',
    },
    {
      value: '9-56_indel_anno_pie',
      label: '9-56_indel_anno_pie',
    }
  ]
  /*   const scrollToSection = (id) => {
      currentIndex.value = id;
      const section = document.getElementById(id);
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } */
  const containerRef = ref < HTMLElement | null > (null)

  const handleClick = (e: MouseEvent) => {
    console.log(e.target);
    e.preventDefault()
  }
  onMounted(() => {
    let arr1 = commonSheet("/tbl1_rawdata.csv", 1);
    let arr2 = commonSheet("/tbl2_cleandata.csv", 2);
    let arr4 = commonSheet("/tbl4_mapdata.csv", 4);
    let arr5 = commonSheet("/tbl5_snpstat.csv", 5);
    let arr6 = commonSheet("/tbl6_snp_anno_stats.csv", 6);
    let arr7 = commonSheet("/tbl7_GT.csv", 7);
    let arr8 = commonSheet("/tbl8_snpstat.csv", 8);
    let arr9 = commonSheet("/tbl9_indel_anno_stats.csv", 6);
    setTimeout(async () => {
      nextTick(() => {
        sheetTableData1.value = translateField(arr1, {
          Sample: 'sample',
          'Raw reads': 'reads',
          'Raw bases': 'bases',
          'Q30(%)': 'qthree',
          'GC(%)': 'gc',
          'Duplication(%)': 'duplication',
        });
        sheetTableData2.value = translateField(arr2, {
          Sample: 'sample',
          'Clean reads': 'reads',
          'Clean bases': 'bases',
          'Clean reads(%)': 'reads_rate',
          'Clean bases(%)': 'bases_rate'
        });
        sheetTableData4.value = translateField(arr4, {
          Sample: 'sample',
          '[Total] Fraction of Mapped Reads': 'reads',
          '[Target] Average depth': 'depth',
          '[Target] Fraction Region covered >= 4x': 'covered4',
          '[Target] Fraction Region covered >= 10x': 'covered10',
          '[Target] Fraction Region covered >= 30x': 'covered30',
          '[flank] flank size': 'size',
          '[flank] Average depth': 'depths'
        });
        sheetTableData5.value = arr5
        sheetTableData6.value = translateField(arr6, {
          Type: 'Type',
          Downstream: 'Downstream',
          Exon: 'Exon',
          Intergenic: 'Intergenic',
          Intron: 'Intron',
          'Splice Site Acceptor': 'Acceptor',
          'Splice Site Donor': 'Donor',
          'Splice Site Region': 'Region',
          Transcript: 'Transcript',
          Upstream: 'Upstream',
          'UTR 3 Prime': 'Prime',
        });
        allItems.value = translateField(arr7, {
          CHROM: 'CHROM',
          POS: 'POS',
          ALT: 'ALT',
          '16-119': 'num1',
          '16-120': 'num2',
          '16-122': 'num3',
          '16-146': 'num4',
          '16-161': 'num5',
          '16-176': 'num6',
          '16-182': 'num7',
          '16-183': 'num8',
          '16-200': 'num9',
          '16-201': 'num10'
        });
        totalPages.value = Math.ceil((allItems.value.length + pageSize) / pageSize); // 计算总页数（初始时）
        loadMoreData(); // 初始加载数据

        sheetTableData8.value = arr8
        sheetTableData9.value = translateField(arr9, {
          Type: 'Type',
          Downstream: 'Downstream',
          Exon: 'Exon',
          Intergenic: 'Intergenic',
          Intron: 'Intron',
          'Splice Site Acceptor': 'Acceptor',
          'Splice Site Donor': 'Donor',
          'Splice Site Region': 'Region',
          Transcript: 'Transcript',
          Upstream: 'Upstream',
          'UTR 3 Prime': 'Prime',
        });
      })
    }, 1000);
  });

  const tableContainer = ref(null);
  const allItems = ref([]); // 存储所有数据项
  //const displayedItems = ref([]); // 存储当前显示的数据项
  const pageSize = 10; // 每页显示的数据量
  let currentPage = 1; // 当前页码
  const totalPages = ref(0); // 总页数，根据数据总量计算得出

  // 模拟从API获取数据
  async function fetchData(page) {
    // 这里应该是你的API调用，例如：
    // const response = await axios.get(`/api/items?page=${page}`);
    // return response.data;
    return new Promise(resolve => {
      setTimeout(() => {
        const fakeData = Array.from({ length: pageSize }, (_, index) => ({
          id: (page - 1) * pageSize + index + 1,
          name: `Name ${(page - 1) * pageSize + index + 1}`,
          email: `email${(page - 1) * pageSize + index + 1}@example.com`
        }));
        resolve(fakeData);
      }, 500); // 模拟延迟
    });
  }

  async function loadMoreData() {
    if (currentPage > totalPages.value) return; // 如果已加载完所有数据，则不执行加载操作
    const newData = await fetchData(currentPage);
    allItems.value.push(...newData); // 添加到所有数据中
    sheetTableData7.value = allItems.value.slice(0, currentPage * pageSize); // 更新显示的数据项
    currentPage++; // 页码增加
  }

  function handleScroll(event) {
    if (event.target.scrollTop + event.target.clientHeight >= event.target.scrollHeight) {
      loadMoreData(); // 滚动到底部时加载更多数据
    }
  }
</script>
<style scoped lang="scss">
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

    .el-container {
      height: calc(100% - 70px);
      background-color: #f9f6ee;

      aside {
        margin: 10px 10px;
        width: 350px;
        position: relative;
        isolation: isolate;
        background-color: #ffffff;
        box-shadow: 1px 1px 5px 0px rgba(89, 89, 89, 0.2784313725);

        .nav {
          height: 100%;
          padding: 25px 20px;
          box-sizing: border-box;
          font-size: 15px;
          text-align: left;

          p {
            margin-top: 0;
            font-size: 18px;
            font-weight: bold;
          }

          .list_item {
            margin: 0 15px;
          }

          .nav_item {
            padding: 5px 0;

            &:hover {
              cursor: pointer;
              color: rgb(0, 140, 255);
            }

            .active {
              color: #008cff
            }
          }
        }
      }

      main {
        margin: 10px 10px 10px 0;
        width: calc(100% - 370px);
        height: calc(100% - 20px);
        background-color: #ffffff;
        box-shadow: 1px 1px 5px 0px rgba(89, 89, 89, 0.2784313725);
        text-align: left;
        padding: 0;

        .content_cover {
          width: 100%;
          height: calc(100vh - 90px);
          display: flex;
          margin-bottom: 100px;
          box-shadow: 0px 3px 10px 5px #ededed70;
          padding: 0 0 0 20px;
          box-sizing: border-box;

          .before {
            width: 55%;
            display: flex;
            flex-direction: column;

            .logo {
              height: 35%;

              img {
                height: 70%;
                padding-top: 20px;
              }
            }

            .title {
              height: 63%;

              h1 {
                color: #616161;
                font-weight: 600;
              }

              h4 {
                margin: 10px 20px;
                color: #4e4e4e;
                font-weight: 500;
              }
            }

            .footer {
              height: 8%;

              p {
                margin: 5px 0;
                font-size: 18px;
              }
            }
          }

          .behind {
            width: 45%;
            height: 100%;
            overflow: hidden;

            img {
              height: 100%;
            }
          }
        }

        .content {
          padding: 0 20px;
        }

        .content_first {
          text-align: left;

          .cont {
            font-size: 15px;
          }

          .tips {
            margin: 15px 0;
            color: cadetblue;
          }

          .tip {
            margin: 0 0 0 10px;
            font-size: 14px;

            &:first-child {
              margin: 0;
            }
          }

          h6 {
            margin: 10px;
            text-align: center;
          }

          .echarts {
            display: flex;
            justify-content: space-between;
            margin: 40px 5px 0;
            box-shadow: 0px 0px 15px 2px #e0e0e057;
            ;

            .echarts_nav {
              width: 300px;
              margin-left: 5px;
              padding: 15px;
              font-size: 16px;
              box-sizing: border-box;
              border-right: 1px solid #e1e1e1;

              .echarts_nav_item {
                margin: 10px 0;
                cursor: pointer;

                &:hover {
                  color: #008cff
                }
              }

              .item_active {
                color: #008cff
              }
            }
          }

          :deep .my-table-header {
            background-color: #647687;
            color: white;
          }
        }

        .table_container {
          height: 400px;
          overflow-y: auto;

          table {
            width: 100%;
            border-collapse: collapse;
            tbody{
              border: 1px solid #ebeef5
            }
            tr{
              border-bottom: 1px solid #ebeef5;
              &:nth-of-type(even){
                background-color: #fafafa;
              }
              &:hover{
                background-color: #cacfdd3d;
              }
            }
            td{
              font-size: 14px;
              padding: 8px 12px;
              border-right: 1px solid #ebeef5;
            }
          }

          thead {
            position: sticky;
            top: 0;
            background: #647687;
            z-index: 100;
            color: white;
            font-size: 14px;
            z-index: 100;
            th{
              padding: 8px 12px;
              border-right: 1px solid #ebeef5;
              &:last-child{
                border: 0;
              }
            }
          }
        }
      }
    }
  }

  :deep .el-anchor .el-anchor__list .el-anchor__item a {
    font-size: 15px;
    color: rgb(93 93 93);
  }

  :deep .el-anchor__link.is-active {
    color: #008cff !important;
  }

  :deep .el-row {
    height: calc(100% - 70px);
  }

  :deep .el-scrollbar__view {
    height: 100% !important;
  }

  .el-backtop {
    z-index: 2000 !important;
    /* 提高 z-index */
  }

  .back-top {
    right: 20px !important;
    bottom: 20px !important;
  }
</style>