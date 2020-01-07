<template>
  <div id="screen">
    <div class="header">
      <i></i>
      禾云安全能力平台
    </div>
    <div class="body">
      <div class="left">
        <div class="left-top">
          <p style="font-size:1.8rem;">平台能力调度统计</p>
          <div style="padding:1rem 0">
            <span>
              能力调用总数
            </span>
            <span class="font" style="color:#0b66f5;margin-right:1rem;font-size:2.5rem;">10050</span>
            <span>
              能力当天调用总数
            </span>
            <span class="font" style="color:#01c6b2;margin-right:1rem;font-size:2.5rem;">7045</span>
            <span>能力调用分布图</span>
          </div>
          <div id="leftPie"></div>
        </div>
        <div class="left-body">
          <div class="body-wrap">
            <div class="title">安全风险感知</div>
            <div class="gauge-wrap">
              <div>
                <div class="rect">
                  <p>
                    <span class="font" style="font-size:3.6rem">78</span>
                    <span>&nbsp;&nbsp;&nbsp;个</span>
                  </p>
                  <p>
                    资产数量
                  </p>
                </div>
              </div>
              <div>
                <div class="rect">
                  <p>
                    <span class="font" style="font-size:3.6rem">97</span>
                    <span>&nbsp;&nbsp;&nbsp;个</span>
                  </p>
                  <p>
                    网站数量
                  </p>
                </div>
              </div>
              <div>
                <div class="rect">
                  <p>
                    <span class="font" style="font-size:3.6rem">75</span>
                    <span>&nbsp;&nbsp;&nbsp;个</span>
                  </p>
                  <p>
                    漏洞数量
                  </p>
                </div>
              </div>
            </div>
            <!-- 雷达图和list列表 -->
            <div class="radar-wrap">
              <p class="title1">
                最新资产和漏洞
              </p>
              <div style="display:flex;">
                <Radar style="margin:1rem  2.5rem"></Radar>
                <div class="list">
                  <div class="list-header">
                    <ul class="list-body-float clearfix">
                      <li>类型</li>
                      <li>IP</li>
                      <li>时间</li>
                      <li>地域</li>
                    </ul>
                  </div>
                  <div class="list-body" @mouseenter="enter" @mouseleave="leave">
                    <ul ref="con1" :class="{anim:animate==true}">
                      <li v-for="(item,i) in items" :key="i">
                        <ul class="list-body-float clearfix">
                          <li>{{item.type}}</li>
                          <li>{{item.ip}}</li>
                          <li>{{item.time}}</li>
                          <li>{{item.locat}}</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <!-- 柱状图TOP5 -->
            <div class="top5">
              <div>
                <p class="title2">未修复漏洞TOP5</p>
                <div id="barTop5" style="height:10rem"></div>
              </div>
              <div>
                <p class="title2">已修复漏洞TOP5</p>
                <div id="bar1Top5" style="height:10rem"></div>
              </div>
            </div>
            <!-- 恶意网址库 饼图 -->
            <div class="pie-wrap">
              <p class="title1">
                恶意网址库
              </p>
              <div>
                <div>
                  <p class="title6">恶意网址分类统计图</p>
                  <div id="pie1" style="height:10rem;"></div>
                </div>
                <div>
                  <p class="title6">恶意网址地域分布图</p>
                  <div id="pie2" style="height:10rem;"></div>
                </div>

              </div>
            </div>
          </div>

        </div>
        <div class="left-footer">
          <div class="body-wrap" style="position:relative">
            <div class="title">攻防演练</div>
            <test style="transform: scale(0.65,0.7);transform-origin: 0 3rem;"></test>
            <!-- <div class="disflex4">
              <div>
                <div class="timeline">
                  <span>2017</span>
                  <div>
                    <p>2017-05-15</p>
                    <p>世界的繁华</p>
                  </div>
                </div>
              </div>
              <div>2</div>
              <div>3</div>

            </div> -->
          </div>
        </div>
      </div>
      <div class="center">
        <div class="center-top">
          <ul class="clearfix">
            <li>
              <p>漏洞</p>
              <p>
                <span class="font font-right">336</span>
                <span>次</span>
              </p>
            </li>
            <li>
              <p>攻击</p>
              <p>
                <span class="font font-right">336</span>
                <span>次</span>
              </p>
            </li>
            <li>
              <p>资产</p>
              <p>
                <span class="font font-right">336</span>
                <span>次</span>
              </p>
            </li>
            <li>
              <p>违规</p>
              <p>
                <span class="font font-right">336</span>
                <span>次</span>
              </p>
            </li>
            <li>
              <p>终端</p>
              <p>
                <span class="font font-right">336</span>
                <span>次</span>
              </p>
            </li>
            <li>
              <p>情报</p>
              <p>
                <span class="font font-right">336</span>
                <span>次</span>
              </p>
            </li>
            <li>
              <p>流量</p>
              <p>
                <span class="font font-right">336</span>
                <span>次</span>
              </p>
            </li>

          </ul>
        </div>
        <div class="map-wrap">
          <div class="map-top">
            <div>
              <div>钓鱼网址统计</div>
              <p>
                <span>今日发现钓鱼网址</span>
                <span class="font font-right">247</span>
                <span>个</span>
              </p>
              <p>
                <span>累计发现</span>
                <span class="font font-right">247</span>
                <span>万个</span>
              </p>
            </div>
            <div>
              <div>钓鱼网址统计</div>
              <p>
                <span>今日发现钓鱼网址</span>
                <span class="font font-right">247</span>
                <span>个</span>
              </p>
              <p>
                <span>累计发现</span>
                <span class="font font-right">247</span>
                <span>万个</span>
              </p>
            </div>
          </div>
          <echartsgl style="height:50rem;width:100%;"></echartsgl>
          <!-- <div id="map" style="height:50rem"></div> -->
          <div class="map-bottom">
            <div>
              <p class="title4">风险预测</p>
              <div id="warnLine" style="height:8rem;"></div>
            </div>
            <div>
              <p class="title5">高危预警</p>
              <div id="warnLine1" style="height:8rem;"></div>
            </div>
          </div>
        </div>
        <div class="center-footer">
          <div class="body-wrap" style="position:relative">
            <div class="title">数据安全</div>
            <div class="disflex4">
              <div>
                <p class="title6">敏感数据访问占比</p>
                <div id="centerPie" style="height:10rem;"></div>
              </div>
              <div>
                <p class="title6">敏感数据分布</p>
                <div id="centerPie1" style="height:10rem;"></div>
              </div>
              <div>
                <p class="title2">敏感数据访问统计</p>
                <div id="centerBar" style="height:10rem;"></div>
              </div>

            </div>
            <div class="disflex5">
              <div>
                <p class="title3">违规操作数据统计</p>
                <div id="centerLine" style="height:10rem"></div>
              </div>
              <div>
                <p class="title4">警告信息</p>
                <div class="list" style="margin-top:0.5rem;">
                  <div class="list-header">
                    <ul class="list-body-float clearfix">
                      <li>用户</li>
                      <li>时间</li>
                      <li>操作</li>
                      <li>资源</li>
                    </ul>
                  </div>
                  <div class="list-body" style="height:8rem;overflow:hidden">
                    <ul>
                      <li style="border-bottom:1px solid #112279" v-for="(item,i) in items1" :key="i">
                        <ul class="list-body-float clearfix">
                          <li>{{item.type}}</li>
                          <li>{{item.time}}</li>
                          <li>{{item.operate}}</li>
                          <li>{{item.locat}}</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div class="right">
        <div class="right-top">
          <div>
            <ul class="clearfix">
              <li>
                <span>日期</span>
                <span class="font" style="font-size:2.5rem">2019-12-27</span>
              </li>
              <li>
                <span>时间</span>
                <span class="font" style="font-size:2.5rem">12:00:00</span>
              </li>
              <li>
                <span><i class="weather"></i></span>
              </li>
            </ul>
          </div>
          <div style="margin:0.7rem 0">
            <div style="height: 2rem;overflow: hidden;">
              <div :class="{anim:animate1==true}">
                <p v-for="(item,i) in data1" :key="i" style="height: 2rem;line-height:2rem;">
                  <span>{{item.title}} : </span>
                  <span style="color:#0B9CD0">{{item.name}}</span>
                </p>
              </div>

            </div>
          </div>
        </div>
        <div class="right-body">
          <div class="body-wrap">
            <div class="title">安全防护</div>
            <div class="disflex">
              <div>
                <p>当前阻挡攻击数量</p>
                <p>
                  <span class="font" style="margin-right:1rem;">336</span>
                  <span>次</span>
                </p>
              </div>
              <div>
                <p>累计阻挡攻击数量</p>
                <p>
                  <span class="font" style="margin-right:1rem;">1024</span>
                  <span>次</span>
                </p>
              </div>
            </div>
            <div class="top5">
              <div>
                <p class="title2">攻击类型统计图TOP5</p>
                <div id="bar2Top5" style="height:9rem"></div>
              </div>
              <div>
                <p class="title2">攻击来源统计图TOP5</p>
                <div id="bar3Top5" style="height:9rem"></div>
              </div>
            </div>
            <div class="attack-line">
              <p class="title3">攻击趋势统计图</p>
              <div id="attackLine" style="height:10rem"></div>
            </div>
          </div>

        </div>
        <div class="right-footer">
          <div class="body-wrap">
            <div class="title">接入安全</div>
            <div class="disflex1">
              <div>
                <div id="pie3" style="height:12rem;"></div>
              </div>
              <div>
                <div class="disflex2">
                  <div>
                    <p>安连宝实时在线数量</p>
                    <p>
                      <span class="font" style="margin-right:1rem;">2979</span>
                      <span>台</span>
                    </p>
                  </div>
                  <div>
                    <p>接入终端数量</p>
                    <p>
                      <span class="font" style="margin-right:1rem;">3205</span>
                      <span>台</span>
                    </p>
                  </div>
                </div>
                <div class="disflex2">
                  <div>
                    <p>安全管控流量</p>
                    <p>
                      <span class="font" style="margin-right:1rem;">258848</span>
                      <span>G</span>
                    </p>
                  </div>
                  <div>
                    <p>安全管控行为数量</p>
                    <p>
                      <span class="font" style="margin-right:1rem;">176086</span>
                      <span>次</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p class="title1">
                恶意网址检测总量
              </p>
              <div class="disflex3">
                <div>
                  <p>检测总量</p>
                  <p>
                    <span class="font" style="margin-right:1rem;font-size:3.2rem;">609128</span>
                    <span>次</span>
                  </p>
                </div>
                <div>
                  <p>拦截总量</p>
                  <p>
                    <span class="font" style="margin-right:1rem;font-size:3.2rem;">1601</span>
                    <span>次</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="top10">
              <p class="title1">
                拦截恶意网址TOP10
              </p>
              <div id="barTop10" style="height:21rem;margin-top:1.5rem;"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import echarts from 'echarts'
import Radar from '@/components/Radar.vue'
import test from '@/components/test.vue'
import echartsgl from '@/components/charts1.vue'
export default {
  components: {
    Radar,
    echartsgl,
    test
  },
  data () {
    return {
      animate: false,
      animate1: false,
      animate2: false,
      animate3: false,
      timer: null,
      timer1: null,
      items: [
        { type: "新增网站", ip: '203.102.35.1', time: '20191226', locat: '印度' },
        { type: "新增网站", ip: '104.102.111.111', time: '20191226', locat: '新疆' },
        { type: "新增网站", ip: '39.102.96.31', time: '20191226', locat: '北京' },
        { type: "新增网站", ip: '10.62.71.143', time: '20191226', locat: '河北' },
        { type: "新增网站", ip: '27.32.251.61', time: '20191226', locat: '上海' },
        { type: "新增网站", ip: '42.52.131.73', time: '20191226', locat: '美国' },
        { type: "新增网站", ip: '117.132.1.131', time: '20191226', locat: '日本' },
        { type: "新增网站", ip: '13.12.11.31', time: '20191226', locat: '英国' },
        { type: "新增网站", ip: '54.102.51.73', time: '20191226', locat: '法国' },
      ],
      items1: [
        { type: "user0", time: '20191226', operate: 'put', locat: 't1/info' },
        { type: "user1", time: '20191226', operate: 'put', locat: 't1/info' },
        { type: "user2", time: '20191226', operate: 'put', locat: 't1/info' },
        { type: "user3", time: '20191226', operate: 'put', locat: 't1/info' },
        { type: "user4", time: '20191226', operate: 'put', locat: 't1/info' },
        { type: "user5", time: '20191226', operate: 'put', locat: 't1/info' },
        { type: "user6", time: '20191226', operate: 'put', locat: 't1/info' },
        { type: "user7", time: '20191226', operate: 'put', locat: 't1/info' },
        { type: "user8", time: '20191226', operate: 'put', locat: 't1/info' },
      ],
      data1: [
        {
          title: '漏洞名称',
          name: 'NVIDIA Windows GPU Display Driver'
        },
        {
          title: '最新木马名称',
          name: 'Win32/TrojanDownloader.Small.NZM'
        },
        {
          title: '最新恶意链接',
          name: 'http:///www.777888.com'
        },
      ],
      bug: ['ddos漏洞', 'cors漏洞', 'sql漏洞', 'xss漏洞'],
      bug1: ['xxx木马', 'aaa木马', 'bbb木马', 'ccc木马'],
      bug2: ['www.aaa.com', 'www.bbb.com', 'www.ddd.com', 'www.fff.com'],
      barTop5: {
        xData: [{
          name: 'Telnet弱口令',
          value: 221
        }, {
          name: 'IAD200弱口令',
          value: 264
        }, {
          name: 'dahua_weakpass',
          value: 310
        }, {
          name: 'MASJX01',
          value: 376
        }, {
          name: 'GBcomFI',
          value: 391
        }],
        endData: [400, 400, 400, 400, 400],
        startColor: 'rgba(63,189,252,0.2)',
        endColor: 'rgba(63,189,252)'

      },
      bar1Top5: {
        xData: [{
          name: 'SmartGate弱口令',
          value: 157
        }, {
          name: 'GBcom路径暴露',
          value: 232
        }, {
          name: 'CPE设备弱口令',
          value: 340
        }, {
          name: 'FTP弱口令',
          value: 376
        }, {
          name: 'Redis未授权访问',
          value: 391
        }],
        endData: [400, 400, 400, 400, 400],
        startColor: 'rgba(29,61,198,0.4)',
        endColor: 'rgba(29,61,198,1)'

      },
      bar2Top5: {
        xData: [{
          name: 'sql注入',
          value: 221
        }, {
          name: 'xss',
          value: 264
        }, {
          name: '文件上传',
          value: 310
        }, {
          name: '命令注入',
          value: 376
        }, {
          name: 'xxe',
          value: 391
        }],
        endData: [0, 0, 0, 0, 0],
        startColor: 'rgba(40,69,197,0.2)',
        endColor: 'rgba(40,69,197,1)'

      },
      bar3Top5: {
        xData: [{
          name: '荷兰',
          value: 221
        }, {
          name: '美国',
          value: 264
        }, {
          name: '日本',
          value: 310
        }, {
          name: '俄罗斯',
          value: 376
        }, {
          name: '中国',
          value: 391
        }],
        endData: [0, 0, 0, 0, 0],
        startColor: 'rgba(79,213,165,0.2)',
        endColor: 'rgba(79,213,165,1)'

      },
      barTop10: {
        xData: [{
          name: 'www.bo.com',
          value: 221
        }, {
          name: 'www.cmcc.com',
          value: 264
        }, {
          name: 'www.sdfd.com',
          value: 310
        }, {
          name: 'www.dfdgd.com',
          value: 376
        }, {
          name: 'www.fdfgh.cn',
          value: 391
        }, {
          name: 'www.jhkj.com',
          value: 400
        }, {
          name: 'www.reter.com',
          value: 435
        }, {
          name: 'www.nmcvb.com',
          value: 446
        }, {
          name: 'www.aweewte.com',
          value: 479
        }, {
          name: 'www.jhkj.com',
          value: 498
        },],
        endData: [500, 500, 500, 500, 500, 500, 500, 500, 500, 500],
        startColor: 'rgba(85,215,169,0.2)',
        endColor: 'rgba(85,215,169,1)'

      },
      pie1Data: {
        data: [
          {
            name: '钓鱼网站',
            value: 13
          },
          {
            name: '有害程序',
            value: 6
          },
          {
            name: '爬虫网站',
            value: 6
          },
          {
            name: '色情网站',
            value: 8
          },
          {
            name: '其它',
            value: 2
          }
        ],
        color: [
          '#f67951',
          '#a0cbfd',
          '#5d82fa',
          '#5f61fd',
          '#0b67f5',
          '#02c7b3',
          '#00FFFF',
          '#FE2C8A'
        ],
      },
      pie2Data: {
        data: [
          {
            name: '美国',
            value: 13
          },
          {
            name: '中国',
            value: 11
          },
          {
            name: '俄罗斯',
            value: 9
          },
          {
            name: '乌克兰',
            value: 7
          },
          {
            name: '荷兰',
            value: 5
          }
        ],
        color: [
          '#0b66f5',
          '#5f60fd',
          '#5e81fa',
          '#a0cbfd',
          '#6df8f6',
          '#f67951',
          '#5d82fa'
        ],
      },
      pie3Data: {
        data: [
          {
            name: '在线设备',
            value: 13
          },
          {
            name: '离线设备',
            value: 41
          }
        ],
        color: [
          '#f87850',
          '#a1cbfd',
          '#5e81fa',
          '#a0cbfd',
          '#6df8f6',
          '#f67951',
          '#5d82fa'
        ],
      },
      attackLine: {
        xData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        yData: [0, 200, 100, 200, 300, 250, 200],
        yData1: [],
        yColor: '#5e81fa',
        yColor1: '#058cff',
        yName: 'attack',
        yName1: '',
        legend: false
      },
      centerLine: {
        xData: ['01', '02', '03', '04', '05', '06', '07'],
        yData: [0, 200, 100, 200, 300, 250, 200],
        yData1: [100, 150, 100, 200, 100, 300, 150],
        yColor: '#5e81fa',
        yColor1: '#058cff',
        yName: 'attack',
        yName1: 'fdgf',
        legend: false
      },
      violationLine: {
        xData: ['01', '02', '03', '04', '05', '06'],
        yData: [0, 200, 100, 134, 300, 230],
        yData1: [200, 80, 134, 300, 230, 110],
        yColor: '#90a5c9',
        yColor1: '#40afa3',
        yName: 'hBase',
        yName1: 'hdfs',
        legend: true
      },
      warnLine: {
        yData: [10, 50, 30, 60, 40, 80, 50],
        startColor: 'rgba(12, 101, 240, 0.2)',
        endColor: 'rgba(12, 101, 240, 1)'
      },
      warnLine1: {
        yData: [30, 50, 10, 60, 30, 80, 40],
        startColor: 'rgba(239, 98, 54, 0.2)',
        endColor: 'rgba(239, 98, 54, 1)'
      }
    }
  },
  created () {

  },
  mounted () {
    this.scroll()
    this.scroll1()
    this.drawPie()
    this.drawPie1('pie1', this.pie1Data)
    this.drawPie1('pie2', this.pie2Data)
    this.drawPie3('pie3', this.pie3Data)
    this.drawBar('barTop5', this.barTop5)
    this.drawBar('bar1Top5', this.bar1Top5)
    this.drawBar('bar2Top5', this.bar2Top5)
    this.drawBar('bar3Top5', this.bar3Top5)
    this.drawBar('barTop10', this.barTop10)
    this.drawLine('attackLine', this.attackLine)
    this.drawLine('centerLine', this.centerLine)
    this.warn1Line('warnLine', this.warnLine)
    this.warn1Line('warnLine1', this.warnLine1)
    this.centerPie()
    this.centerPie1()
    this.centerBar()
  },
  methods: {
    scroll () {
      this.timer = null
      this.timer = setInterval(() => {
        this.animate = true;    // 因为在消息向上滚动的时候需要添加css3过渡动画，所以这里需要设置true
        setTimeout(() => {      //  这里直接使用了es6的箭头函数，省去了处理this指向偏移问题，代码也比之前简化了很多
          this.items.push(this.items[0]);  // 将数组的第一个元素添加到数组的
          this.items.shift();               //删除数组的第一个元素
          this.animate = false;  // margin-top 为0 的时候取消过渡动画，实现无缝滚动
        }, 500)
      }, 1000)

    },
    enter () {
      clearInterval(this.timer)
    },
    leave () {
      this.scroll()
      // this.timer = setInterval(this.scroll, 1000)
    },
    scroll1 () {
      this.timer1 = null
      this.timer1 = setInterval(() => {
        this.animate1 = true;    // 因为在消息向上滚动的时候需要添加css3过渡动画，所以这里需要设置true
        setTimeout(() => {      //  这里直接使用了es6的箭头函数，省去了处理this指向偏移问题，代码也比之前简化了很多
          this.data1.push(this.data1[0]);  // 将数组的第一个元素添加到数组的
          this.data1.shift();               //删除数组的第一个元素
          this.animate1 = false;  // margin-top 为0 的时候取消过渡动画，实现无缝滚动
        }, 500)
      }, 3000)

    },
    drawPie () {
      let myChart = echarts.init(document.getElementById('leftPie'))
      let option = {
        // tooltip: {
        //   trigger: 'item',
        //   formatter: "{b} : {c} ({d}%)"
        // },
        series: [{
          name: '访问来源',
          type: 'pie',
          hoverOffset: 5,
          radius: ['45%', '60%'],
          center: ['50%', '50%'],
          color: ['#01c6b2', '#0b66f5'], //'#FBFE27','rgb(11,228,96)','#FE5050'
          data: [{
            value: 3600,
            name: '已收佣金',
          },
          {
            value: 5400,
            name: '未收佣金'
          }
          ].sort(function (a, b) {
            return a.value - b.value
          }),
          roseType: 'radius',

          label: {
            show: false
          },
          itemStyle: {
            borderWidth: '10'
          },
          labelLine: {
            show: false
          }
        }]
      };
      myChart.setOption(option)
    },
    drawBar (bar, data) {
      this.$nextTick(() => {
        let myChart = echarts.init(document.getElementById(bar))
        let yData = []
        data.xData.forEach((item, i) => {
          yData.push('TOP' + (i + 1))
        });

        let option = {
          grid: {
            left: '1%',
            right: '2%',
            bottom: '1%',
            top: '1%',
            containLabel: true
          },
          xAxis: {
            type: 'value',
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisLabel: {
              show: false
            }
          },
          yAxis: [
            {
              type: 'category',
              axisTick: {
                show: false
              },
              axisLine: {
                show: false,
                lineStyle: {
                  color: '#363e83'
                }
              },
              axisLabel: {
                inside: false,
                textStyle: {
                  color: '#fff',
                  fontWeight: 'normal',
                  fontSize: 12
                }
              },
              data: yData.reverse()
            },
            {
              type: 'category',
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                show: false
              },
              splitArea: {
                show: false
              },
              splitLine: {
                show: false
              },
              data: yData
            }
          ],
          series: [
            {
              name: '',
              type: 'bar',
              stack: '1',
              yAxisIndex: 0,
              data: data.xData,
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    1,
                    0,
                    [
                      {
                        offset: 0,
                        color: data.startColor // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: data.endColor // 100% 处的颜色
                      }
                    ],
                    false
                  ),
                  barBorderRadius: 12
                }
              },
              label: {
                normal: {
                  show: true,
                  color: '#fff',
                  fontSize: 12,
                  // padding: [0, 0, 0, 20],
                  position: 'insideLeft',
                  distance: 3,
                  offset: [5, 1],
                  formatter: function (params) {
                    return params.data.name
                  }
                }
              },
              barWidth: 12,
              z: 3
            },
            {
              name: '',
              type: 'bar',
              yAxisIndex: 1,
              data: data.endData,
              barWidth: 12,
              itemStyle: {
                color: '#0e2254',
                barBorderRadius: 12
              },
              z: 0
            }
          ]
        }

        myChart.setOption(option)
      })
    },
    drawPie1 (pie, data) {
      let myChart = echarts.init(document.getElementById(pie))
      let option = {
        animation: true,
        legend: {
          show: false,
          width: '90%',
          left: 'center',
          textStyle: {
            color: '#fff',
            fontSize: 12
          },
          icon: 'circle',
          right: '0',
          bottom: '0',
          padding: [5, 5],
          itemGap: 10,
          data: ['恶意URL警告', '异常操作', '异常进程', '未授权访问', '其它']
        },
        series: [
          {
            type: 'pie',
            center: ['50%', '50%'],
            radius: ['40%', '55%'],
            color: data.color,
            startAngle: 135,
            hoverOffset: 5,
            // roseType : 'radius',
            labelLine: {
              normal: {
                length: 4
              }
            },
            label: {
              normal: {
                formatter: '{b|{b} : {d}%} ',
                backgroundColor: 'rgba(255, 147, 38, 0)',
                borderColor: 'transparent',
                borderRadius: 4,
                rich: {
                  b: {
                    color: '#fff',
                    fontSize: 10,
                    lineHeight: 1
                  }
                },
                textStyle: {
                  color: '#fff',
                  fontSize: 12
                }
              }
            },
            emphasis: {
              label: {
                show: true,
                formatter: '{b|{b} : {d}%}',
                backgroundColor: 'rgba(255, 147, 38, 0)',
                borderColor: 'transparent',
                borderRadius: 4,
                rich: {
                  b: {
                    color: '#fff',
                    fontSize: 10,
                    lineHeight: 1
                  }
                }
              }
            },
            data: data.data
          }
        ]
      }

      myChart.setOption(option)
    },
    drawLine (line, data) {
      let charts = echarts.init(document.getElementById(line))
      let option = {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          show: data.legend,
          textStyle: {
            color: '#fff'
          },
          icon: 'rect',
          itemWidth: 14,
          itemHeight: 5,
          itemGap: 13,
          orient: 'horizontal',
          right: 0,
          top: -5,
          data: [data.yName, data.yName1]
        },
        grid: {
          top: '7%',
          left: '1%',
          right: '4%',
          bottom: '1%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisLine: {
            //坐标轴轴线相关设置。数学上的x轴
            show: true,
            lineStyle: {
              color: '#112278'
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#112278'
            }
          },
          axisLabel: {
            //坐标轴刻度标签的相关设置
            textStyle: {
              color: '#d1e6eb',
              margin: 15
            }
          },
          axisTick: {
            show: false
          },
          data: data.xData
        },
        yAxis: {
          type: 'value',
          splitNumber: 3,
          minInterval: 100,
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(255,255,255,0.1)'
            }
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#112278'
            }
          },
          axisLabel: {
            show: true,
            margin: 5,
            textStyle: {
              color: '#d1e6eb'
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#112278'
            }
          },
        },
        series: [
          {
            name: data.yName,
            type: 'line',
            symbol: 'circle',
            symbolSize: 6,
            itemStyle: {
              //折线拐点标志的样式
              color: data.yColor
            },
            lineStyle: {
              color: data.yColor
            },
            data: data.yData
          },
          {
            name: data.yName1,
            type: 'line',
            symbol: 'circle',
            symbolSize: 6,
            itemStyle: {
              //折线拐点标志的样式
              color: data.yColor1
            },
            lineStyle: {
              color: data.yColor1
            },

            data: data.yData1
          }
        ]
      }
      charts.setOption(option)
    },
    warn1Line (line, data) {
      let myChart = echarts.init(document.getElementById(line))
      let option = {
        grid: {
          left: '3%',
          top: '10%',
          right: '5%',
          bottom: '4%',
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          formatter: function (val) {
            if (val[1]) {
              return (
                val[0].seriesName +
                '：' +
                val[0].value +
                '<br>' +
                val[1].seriesName +
                '：' +
                val[1].value
              )
            } else {
              return val[0].seriesName + '：' + val[0].value
            }
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisLabel: {
            show: true,
            textStyle: {
              color: '#fff'
            }
          },
          data: ['01', '02', '04', '04', '05', '06', '07']
        },
        yAxis: {
          splitNumber: 2,
          minInterval: 50,
          axisLine: {
            show: false
          },
          // 控制网格线是否显示
          splitLine: {
            show: true
          },
          // 去除y轴上的刻度线
          axisTick: {
            show: false
          },
          axisLabel: {
            show: true,
            // formatter:function(val){
            //     return val/10000
            // },
            textStyle: {
              color: '#fff'
            }
          },
          type: 'value',
          splitLine: {
            lineStyle: {
              color: 'rgba(87,97,123,0.3)'
              // color: '#57617B'
            }
          },
          splitArea: {
            show: true,
            areaStyle: {
              // 背景色
              color: ['rgba(67,67,67,0.0)']
            }
          }
        },
        series: [
          {
            name: '已修复',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 1,
                color: data.endColor
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: data.endColor
                    },
                    {
                      offset: 1,
                      color: data.startColor
                    }
                  ],
                  false
                ),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
              }
            },
            itemStyle: {
              normal: {
                color: 'rgb(0,136,212)',
                borderColor: 'rgba(0,136,212,0.2)',
                borderWidth: 12
              }
            },
            data: data.yData
          }
        ]
      }

      myChart.setOption(option)
    },
    drawPie3 (pie, data) {
      let myChart = echarts.init(document.getElementById(pie))
      let option = {
        animation: true,
        title: {
          show: true,
          text: '安连宝设备',
          textStyle: {
            color: '#fff',
            fontSize: 14
          },
          left: 0,
          top: 0
        },
        legend: {
          show: true,
          width: '90%',
          left: 'center',
          textStyle: {
            color: '#fff',
            fontSize: 10
          },
          icon: 'circle',
          right: '0',
          bottom: '0',
          padding: [5, 5],
          itemGap: 10,
          itemWidth: 10,
          itemHeight: 10,
          data: data.data
        },
        series: [
          {
            type: 'pie',
            center: ['50%', '50%'],
            radius: ['30%', '45%'],
            color: data.color,
            startAngle: 135,
            hoverOffset: 5,
            // roseType: 'radius',
            labelLine: {
              normal: {
                length: 4,
                length2: 6
              }
            },
            label: {
              normal: {
                formatter: '{b|{b} : {d}%} ',
                backgroundColor: 'rgba(255, 147, 38, 0)',
                borderColor: 'transparent',
                borderRadius: 4,
                rich: {
                  b: {
                    color: '#fff',
                    fontSize: 10,
                    lineHeight: 1
                  }
                },
                textStyle: {
                  color: '#fff',
                  fontSize: 12
                }
              }
            },
            emphasis: {
              label: {
                show: true,
                formatter: '{b|{b} : {d}%}',
                backgroundColor: 'rgba(255, 147, 38, 0)',
                borderColor: 'transparent',
                borderRadius: 4,
                rich: {
                  b: {
                    color: '#fff',
                    fontSize: 10,
                    lineHeight: 1
                  }
                }
              }
            },
            data: data.data
          }
        ]
      }

      myChart.setOption(option)
    },
    centerPie () {
      var myChart = echarts.init(document.getElementById('centerPie'));

      // 指定图表的配置项和数据
      var option = {
        color: ['#F66233', '#0B67F5', '#5F60FD', '#5E81FA'],
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [{
          name: '行业获得融资比例概览',
          type: 'pie',
          radius: ['29%', '65%'],
          roseType: 'area',
          label: {
            normal: {
              show: true,
              formatter: '{b|{b}}',
              rich: {
                b: {
                  fontSize: 8,
                  color: 'rgba(255,255,255,0.8)',
                  align: 'center',
                  padding: 0
                }
              },
              position: 'outside'
            },
            emphasis: {
              show: true
            }
          },
          labelLine: {
            normal: {
              show: true,
              length: 1,
              lineStyle: {
                color: '#AEAFB5',
                width: 1
              }
            },
            emphasis: {
              show: true
            }
          },
          data: [
            {
              value: 32,
              name: '一级敏感'
            },
            {
              value: 20,
              name: '二级敏感'
            },
            {
              value: 16,
              name: '三级敏感'
            },
            {
              value: 19,
              name: '四级敏感'
            }
          ]
        },
        // 边框的设置
        {
          radius: ['16%', '20%'],
          center: ['50%', '50%'],
          type: 'pie',
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: false
            }
          },
          labelLine: {
            normal: {
              show: false
            },
            emphasis: {
              show: false
            }
          },
          animation: false,
          tooltip: {
            show: false
          },
          data: [{
            value: 1,
            itemStyle: {
              color: "#0D2691"
            }
          }]
        }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    centerPie1 () {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('centerPie1'));

      // 指定图表的配置项和数据
      var option = {
        series: [
          {
            type: 'pie',
            color: ['#04A096', '#1468A4'],
            data: [
              {
                name: '国内',
                value: 60
              },
              {
                name: '国外',
                value: 40
              }
            ],
            label: {
              position: 'inside'
            },
            radius: ['0%', '50%'],
            itemStyle: {
              borderWidth: 4,
              borderColor: '#101337'
            },
            clockwise: true,
            animation: false
          },
          {
            type: 'pie',
            color: ['#0B66F5', '#5F60FD', '#6286FE', '#A2CDFA'],
            data: [
              {
                name: '级别1',
                value: 40
              },
              {
                name: '级别2',
                value: 20
              },
              {
                name: '级别3',
                value: 20
              },
              {
                name: '级别4',
                value: 20
              }
            ],
            radius: ['50%', '80%'],
            itemStyle: {
              borderWidth: 4,
              borderColor: '#101337'
            },
            animation: false
          }
        ],
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    centerBar () {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('centerBar'));

      // 指定图表的配置项和数据
      var option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          top: '5%',
          right: '3%',
          left: '10%',
          bottom: '18%'
        },
        xAxis: [{
          type: 'category',
          data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
          axisLine: {
            lineStyle: {
              color: 'rgba(255,255,255,0.12)'
            }
          },
          axisLabel: {
            // margin: 10,
            color: '#fff',
            textStyle: {
              fontSize: 10
            },
          },
        }],
        yAxis: [{
          axisLabel: {
            color: '#fff',
            textStyle: {
              fontSize: 10
            }
          },
          axisLine: {
            show: false
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(255,255,255,0.12)'
            }
          }
        }],
        series: [{
          type: 'bar',
          data: [300, 450, 360, 203, 255, 188, 156, 123, 198, 435],
          barWidth: '5px',
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(0,244,255,1)' // 0% 处的颜色
              }, {
                offset: 1,
                color: 'rgba(0,77,167,1)' // 100% 处的颜色
              }], false),
              barBorderRadius: [30, 30, 30, 30],
              shadowColor: 'rgba(0,160,221,1)',
              shadowBlur: 4
            }
          }
        }]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  },
}
</script>
<style lang="css" scoped>
@import "../assets/common/font/font.css";
.font {
  font-family: "myfont", "Microsoft YaHei";
  font-size: 1.8rem;
  display: inline-block;
  color: #0cbdfb;
}
.font-right {
  margin-right: 0.5rem;
}
/* 请浮动 */
.clearfix:after,
.clearfix:before {
  content: "";
  display: table;
}
.clearfix:after {
  clear: both;
}
.clearfix {
  *zoom: 1;
}
#screen {
  font-size: 1.2rem;
  color: #fff;
  height: 108rem;
  width: 192rem;
  overflow: hidden;
  box-sizing: border-box;
  background: url("../assets/img/screens/bg.png");
}
.header {
  font-size: 4rem;
  color: #00c6ff;
  text-align: center;
  height: 8rem;
  line-height: 7rem;
  width: 192rem;
  min-width: 192rem;
  position: absolute;
  top: 0;
  font-weight: 600;
  letter-spacing: 5px;
  text-shadow: 7px 7px 5px #000;
  background: url("../assets/img/screens/header_01.png");
  background-size: 100% 100%;
}
.header > i {
  display: inline-block;
  width: 4.5rem;
  height: 5rem;
  background: url("../assets/img/screens/logo_03.png");
  background-size: 100% 100%;
  vertical-align: text-bottom;
}
.body {
  display: flex;
  padding-top: 5rem;
}
.left,
.right {
  width: 28%;
  padding: 0 15px;
}
.center {
  width: 44%;
}
/* left */
.left-top,
.right-top {
  border: 1px solid #0e3e65;
  border-radius: 3px;
  padding: 1rem;
  position: relative;
}
#leftPie {
  width: 10rem;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
}
.left-body {
  content: "";
  display: inline-block;
  margin-top: 1rem;
  height: 60rem;
  width: 100%;
  background: url("../assets/img/screens/bigborder_03.png");
  background-size: 100% 100%;
}
.body-wrap {
  width: 94%;
  margin: 0 auto;
}
.title {
  background: url("../assets/img/screens/titleBg_03.png");
  background-size: 100% 100%;
  width: 60%;
  margin: 0.6rem auto;
  font-size: 1.8rem;
  height: 3rem;
  line-height: 3rem;
  text-align: center;
}
.gauge-wrap {
  padding-top: 0.3rem;
  display: flex;
  justify-content: space-between;
}
.gauge-wrap > div {
  width: 30%;
  text-align: center;
}
/* 雷达和list列表 */
.radar-wrap {
  position: relative;
  margin-top: 1rem;
  background: rgba(12, 16, 63, 0.6);
}
.rect {
  padding: 0.5rem 0;
  background: url("../assets/img/screens/rect_03.png");
  background-size: 100% 100%;
}
.title1 {
  font-size: 1.8rem;
}
.title1::before {
  content: "";
  display: inline-block;
  width: 1.6rem;
  height: 1.8rem;
  vertical-align: middle;
  background: url("../assets/img/screens/titlogo_03.png");
  background-size: 100% 100%;
}
.list {
  width: 100%;
}
.list li {
  height: 2rem;
  line-height: 2rem;
}
.list-header > ul {
  background: #1d3779;
}
.list-body {
  height: 10rem;
  overflow: hidden;
  cursor: pointer;
}
.even {
  background: #1d3779;
}
.odd {
  background: #1a1d4d;
}
.list-body > ul > li:hover {
  background: #1a1d4d;
}
/* .list-body > ul > li:nth-child(even) {
  background: #1a1d4d;
}
.list-body > ul > li:nth-child(odd) {
  background: #1d3779;
} */
.list-body-float > li {
  float: left;
  width: 25%;
  text-align: center;
}
.anim {
  transition: all 0.5s;
  margin-top: -2rem;
}
/* 柱状图top5  */
.top5 {
  display: flex;
  margin-top: 1rem;
}
.top5 > div {
  width: 50%;
}
.title2 {
  font-size: 1.4rem;
  margin-bottom: 0.6rem;
}
.title2::before {
  content: "";
  display: inline-block;
  margin-right: 0.5rem;
  width: 1.4rem;
  height: 1.4rem;
  background: url("../assets/img/screens/bar_03.png");
  background-size: 100% 100%;
}
/* 恶意网址库 饼图  */
.pie-wrap {
  margin-top: 1rem;
}
.pie-wrap > div {
  display: flex;
  margin-top: 1rem;
}
.pie-wrap > div > div {
  width: 50%;
}
.title6 {
  font-size: 1.4rem;
  margin-bottom: 0.6rem;
}
.title6::before {
  content: "";
  display: inline-block;
  margin-right: 0.5rem;
  width: 1.4rem;
  height: 1.4rem;
  background: url("../assets/img/screens/pie_03.png");
  background-size: 100% 100%;
}
/* left-footer */
.left-footer {
  content: "";
  display: inline-block;
  width: 100%;
  height: 31rem;
  background: url("../assets/img/screens/bigborder1_03.png");
  background-size: 100% 100%;
  margin: 1rem 0;
}

/* right */
.right-top li {
  float: left;
  width: 33.33%;
  height: 3.4rem;
  line-height: 3.4rem;
}
.right-top li > span:nth-child(1) {
  margin-right: 1rem;
}
.weather {
  display: inline-block;
  width: 2.8rem;
  height: 2.8rem;
  background: url("../assets/img/screens/duoyun.png");
  background-size: 100% 100%;
}
.right-body {
  content: "";
  display: inline-block;
  margin-top: 1rem;
  height: 36rem;
  width: 100%;
  background: url("../assets/img/screens/bigborder2_03.png");
  background-size: 100% 100%;
}
.scroll {
  display: inline-block;
  height: 2rem;
  line-height: 2rem;
  overflow: hidden;
  vertical-align: text-top;
  color: #0cbdfb;
}
.disflex {
  margin-top: 0.8rem;
  display: flex;
  justify-content: space-around;
}
.disflex > div {
  text-align: center;
  width: 30%;
  background: linear-gradient(-45deg, transparent 10px, #1c2054 0);
}
.disflex > div > p {
  height: 2.5rem;
  line-height: 2.5rem;
}
.attack-line {
  background: #0f1533ed;
}
.title3 {
  font-size: 1.4rem;
  margin-bottom: 0.6rem;
}
.title3::before {
  content: "";
  display: inline-block;
  margin-right: 0.5rem;
  width: 1.4rem;
  height: 1.4rem;
  vertical-align: middle;
  background: url("../assets/img/screens/line_03.png");
  background-size: 100% 100%;
}
/* right footer */
.right-footer {
  content: "";
  display: inline-block;
  width: 100%;
  height: 54.5rem;
  background: url("../assets/img/screens/bigborder3_03.png");
  background-size: 100% 100%;
  margin: 1rem 0;
}
.disflex1 {
  display: flex;
}
.disflex1 > div {
  width: 50%;
}
.disflex2 {
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
}
.disflex2 > div {
  width: 46%;
  text-align: center;
  background: linear-gradient(-45deg, transparent 10px, #1c2054 0);
}
.disflex2 > div > p {
  height: 2.5rem;
  line-height: 2.5rem;
}
.disflex3 {
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-around;
}
.disflex3 > div {
  width: 30%;
  text-align: center;
  height: 6rem;
}
.disflex3 > div > p {
  font-size: 1.4rem;
  height: 3rem;
  line-height: 3rem;
}

.top10 {
  margin-top: 1.5rem;
}

/* center */
.center {
  margin-top: 5rem;
}
.center-top li {
  text-align: center;
  float: left;
  width: 13%;
  background: linear-gradient(-45deg, transparent 10px, #103787 0);
  margin-right: 1%;
}
.center-top li:nth-child(1) {
  margin-left: 1%;
}
.center-top li > p {
  font-size: 1.2rem;
  height: 2rem;
  line-height: 2rem;
}
.map-wrap {
  position: relative;
  height: 61rem;
}
.map-top {
  position: absolute;
  top: 3%;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.map-top > div {
  width: 24%;
  background: rgba(15, 19, 81, 0.8);
  border-left: 0.2rem solid #1343a3;
  padding: 1rem;
}
.map-top > div > div {
  font-size: 1.4rem;
  height: 2rem;
  line-height: 2rem;
}
.map-top > div > p {
  height: 2rem;
  line-height: 2rem;
}
.map-top > div > p > span:nth-child(1) {
  display: inline-block;
  width: 60%;
}
.map-bottom {
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  background: url("../assets/img/screens/bigborder4_03.png");
  background-size: 100% 100%;
  height: 12rem;
}
.map-bottom > div {
  width: 50%;
  padding-top: 1rem;
  padding-left: 1rem;
}
.title4 {
  font-size: 1.4rem;
}
.title4::before {
  content: "";
  display: inline-block;
  width: 1.4rem;
  height: 1.4rem;
  margin-right: 0.5rem;
  background: url("../assets/img/screens/warn_03.png");
  background-size: 100% 100%;
}
.title5 {
  font-size: 1.4rem;
}
.title5::before {
  content: "";
  display: inline-block;
  width: 1.4rem;
  height: 1.4rem;
  margin-right: 0.5rem;
  background: url("../assets/img/screens/warn1_03.png");
  background-size: 100% 100%;
}

.center-footer {
  content: "";
  display: inline-block;
  width: 100%;
  height: 31rem;
  background: url("../assets/img/screens/bigborder5_03.png");
  background-size: 100% 100%;
  margin: 1rem 0;
}
.disflex4 {
  display: flex;
}
.disflex4 > div {
  width: 33.33%;
}
.disflex5 {
  display: flex;
}
.disflex5 > div {
  width: 50%;
}
</style>