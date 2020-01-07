<template>
  <div id="screen">
    <div class="content">
      <div class="left">
        <div class="left-top">
          <div style="margin:10px 0 0 5px;">
            <span>今日阻断</span>
            <span class="font num">2.24</span>
            <span>万次，累计阻断</span>
            <span class="font addNum">50.78</span>
            <span>万次</span>
          </div>
          <h3 class="bar-title">访客分布TOP5</h3>
          <div id="bar"></div>
        </div>
        <div class="left-middle">
          <dv-border-box-13>
            <h3 class="title">流量趋势</h3>
            <div id="line1"></div>
          </dv-border-box-13>
        </div>
        <div class="left-bottom martop">
          <dv-border-box-12>
            <h3 style="text-align:center;padding-top:15px">关系图</h3>
            <div id="graph"></div>
          </dv-border-box-12>
        </div>
      </div>
      <div class="center">
        <div style="position:relative;margin:15px 0 30px;">
          <dv-decoration-1 style="width:150px;height:40px;position:absolute;top:0px;left:20px;" />
          <h2 style="text-align:center">云安全中台</h2>
          <dv-decoration-1 style="width:150px;height:40px;position:absolute;top:0px;right:20px;" />
        </div>
        <div class="swiper">
          <!-- <Carousel v-model="value" autoplay autoplay-speed="5000"> -->
          <!-- <Carousel v-model="value">
            <CarouselItem>
              <div class="demo-carousel">
                 <img
                  style="height:600px;width:98%;margin:0 auto"
                  src="../assets/img/backg.jpg"
                  alt="ddd"
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div class="demo-carousel">
                <div id="map"></div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div class="demo-carousel">
                <img
                  style="height:600px;width:98%;margin:0 auto"
                  src="../assets/img/1.png"
                  alt="ddd"
                />
              </div>
            </CarouselItem>

            <CarouselItem>
              <div class="demo-carousel">
                <img
                  style="height:600px;width:98%;margin:0 auto"
                  src="../assets/img/2.png"
                  alt="ddd"
                />
              </div>
            </CarouselItem>
          </Carousel>-->
          <!-- <div id="map"></div> -->
          <echartsgl style="width:100%;position:absolute;top:0;"></echartsgl>
        </div>
        <div class="center-bottom">
          <div>
            <h3 style="padding-left: 40px;">安全事件分布</h3>
            <div id="pie" style="height:250px;"></div>
          </div>
          <div>
            <h3>拦截事件</h3>
            <div id="line"></div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="right-top">
          <div>
            <div class="bhref">waf</div>
            <div class="bhref">和盾</div>
          </div>
          <div>
            <div class="bhref">云手</div>
            <div class="bhref">广目</div>
          </div>
          <div>
            <div class="right-data">
              <p class="font" style="font-size:40px;">1024</p>
              <p>防护网站数</p>
            </div>
            <div class="right-data">
              <p class="font" style="font-size:40px;">2345</p>
              <p>高危漏洞数</p>
            </div>
          </div>
          <div>
            <div class="right-data">
              <p class="font" style="font-size:40px;">3254</p>
              <p>当月扫描网站数</p>
            </div>
            <div class="right-data">
              <p class="font" style="font-size:40px;">4543654</p>
              <p>当月扫描系统数</p>
            </div>
          </div>
        </div>
        <div class="right-middle">
          <dv-border-box-13>
            <h3 class="title">漏洞趋势</h3>
            <div id="bugLine" style="height:300px"></div>
          </dv-border-box-13>
        </div>
        <div class="right-bottom martop">
          <h3 style="margin:15px 0">数据列表</h3>
          <dv-scroll-board :config="config" style="width:100%;height:280px" />
        </div>
      </div>
    </div>
    <loading :show="showLoading"></loading>
  </div>
</template>
<script>
import echarts from 'echarts'
// import 'echarts/map/js/world.js'
// import 'echarts/map/js/china.js'
// import geoCoordMap from '../assets/js/mapjson'
import echartsgl from '@/components/charts1.vue'
import loading from '@/components/Loading.vue'
export default {
  components: {
    echartsgl,
    loading
  },
  data () {
    return {
      value: 0,
      showLoading: true,
      data: [
        {
          toName: '上海',
          fromName: '齐齐哈尔',
          hazard_level: 'H'
        },
        {
          toName: '上海',
          fromName: '石家庄',
          hazard_level: 'M'
        },
        {
          toName: '福州',
          fromName: '包头',
          hazard_level: 'L'
        },
        {
          toName: '福建',
          fromName: '新疆',
          hazard_level: 'H'
        }
      ],
      config: {
        header: ['列1', '列2', '列3'],
        data: [
          ['行1列1', '行1列2', '行1列3'],
          ['行2列1', '行2列2', '行2列3'],
          ['行3列1', '行3列2', '行3列3'],
          ['行4列1', '行4列2', '行4列3'],
          ['行5列1', '行5列2', '行5列3'],
          ['行6列1', '行6列2', '行6列3'],
          ['行7列1', '行7列2', '行7列3'],
          ['行8列1', '行8列2', '行8列3'],
          ['行9列1', '行9列2', '行9列3'],
          ['行10列1', '行10列2', '行10列3']
        ],
        rowNum: 7,
        headerBGC: 'rgba(85, 184, 243, 0.5)',
        oddRowBGC: 'rgba(0,0,0,0)',
        evenRowBGC: 'rgba(85, 184, 243, 0.2)'
      }
    }
  },
  created () {
    // this.wrapline()
  },
  mounted () {
    this.drawLine()
    this.drawLine1()
    // this.drawMap()
    this.drawGraph()
    this.drawBar()
    this.drawBugLine()
    this.drawPie()
    setTimeout(() => {
      this.showLoading = false
    }, 4000)
  },
  methods: {
    drawLine1 () {
      let line = document.getElementById('line1')
      let charts = echarts.init(line)
      let option = {
        title: {
          show: false,
          text: 'Step Line',
          textStyle: {
            color: '#fff'
          }
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          textStyle: {
            color: '#fff'
          },
          icon: 'rect',
          itemWidth: 14,
          itemHeight: 5,
          itemGap: 13,
          orient: 'horizontal',
          right: 0,
          top: 10,
          data: ['Start', 'End']
        },
        grid: {
          top: '10%',
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          axisLine: {
            //坐标轴轴线相关设置。数学上的x轴
            show: true,
            lineStyle: {
              color: 'rgba(255,255,255,0.4)'
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
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value',
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(255,255,255,0.1)'
            }
          },
          axisLine: {
            show: false
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
          }
        },
        series: [
          {
            name: 'Start',
            type: 'line',
            itemStyle: {
              //折线拐点标志的样式
              color: '#02D3C7'
            },
            lineStyle: {
              color: '#02D3C7'
            },
            step: 'start',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: 'End',
            type: 'line',
            itemStyle: {
              //折线拐点标志的样式
              color: '#058cff'
            },
            lineStyle: {
              color: '#058cff'
            },
            step: 'end',
            data: [450, 432, 401, 454, 590, 530, 510]
          }
        ]
      }
      charts.setOption(option)
    },
    drawLine () {
      let line = document.getElementById('line')
      let charts = echarts.init(line)
      let option = {
        backgroundColor: 'rgba(0,0,0,0)',
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            lineStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgba(255,255,255,0)' // 0% 处的颜色
                  },
                  {
                    offset: 0.5,
                    color: 'rgba(255,255,255,1)' // 100% 处的颜色
                  },
                  {
                    offset: 1,
                    color: 'rgba(255,255,255,0)' // 100% 处的颜色
                  }
                ],
                global: false // 缺省为 false
              }
            }
          }
        },
        grid: {
          top: '8%',
          left: '8%',
          right: '3%',
          bottom: '12%'
          // containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: true,
            axisLine: {
              //坐标轴轴线相关设置。数学上的x轴
              show: true,
              lineStyle: {
                color: 'rgba(255,255,255,0.4)'
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
            data: ['2014', '2015', '2016', '2017', '2018', '2019']
          }
        ],
        yAxis: [
          {
            type: 'value',
            min: 0,
            // max: 140,
            splitNumber: 4,
            splitLine: {
              show: true,
              lineStyle: {
                color: 'rgba(255,255,255,0.1)'
              }
            },
            axisLine: {
              show: false
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
            }
          }
        ],
        series: [
          {
            name: '注册总量',
            type: 'line',
            // smooth: true, //是否平滑曲线显示
            // 			symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
            showAllSymbol: true,
            // symbol: 'image://./static/images/guang-circle.png',
            symbolSize: 8,
            lineStyle: {
              normal: {
                color: '#53fdfe' // 线条颜色
              },
              borderColor: '#f0f'
            },
            label: {
              show: true,
              position: 'top',
              textStyle: {
                color: '#fff'
              }
            },
            itemStyle: {
              normal: {
                color: 'rgba(255,255,255,1)'
              }
            },
            tooltip: {
              show: false
            },
            areaStyle: {
              //区域填充样式
              normal: {
                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: 'rgba(0,150,239,0.3)'
                    },
                    {
                      offset: 1,
                      color: 'rgba(0,253,252,0)'
                    }
                  ],
                  false
                ),
                shadowColor: 'rgba(53,142,215, 0.9)', //阴影颜色
                shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
              }
            },
            data: [150, 200, 259, 360, 378, 450, 450]
          }
        ]
      }
      charts.setOption(option)
    },
    drawBar () {
      this.$nextTick(() => {
        var myChart = echarts.init(document.getElementById('bar'))
        var yData = ['河南', '福建', '浙江', '广东', '江苏']
        var data = [211, 264, 310, 376, 391]
        var color = ['#6BF1BF', '#C7F895', '#E6D349', '#F8A065', '#FF6B5F']
        var seriesData = []
        data.map((item, index) => {
          seriesData.push({
            name: '',
            value: item
            // itemStyle: {
            //   normal: {
            //     color: color[index],
            //     barBorderRadius: 12
            //   }
            // }
          })
        })
        var option = {
          // backgroundColor: '#001a2b',
          title: {
            show: false,
            text: '访客分布TOP5',
            top: 0,
            left: 0,
            textStyle: {
              color: '#fff',
              fontSize: 16
            }
          },
          legend: {
            show: false
          },
          grid: {
            left: '2%',
            right: '15%',
            bottom: '8%',
            top: '3%',
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
                  fontSize: 14
                }
              },
              data: yData
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
              data: seriesData,
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
                        color: 'rgba(0,244,255,0.7)' // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: 'rgba(0,77,167,0.8)' // 100% 处的颜色
                      }
                    ],
                    false
                  ),
                  barBorderRadius: 12
                }
              },
              // color: ['#6BF1BF', '#C7F895', '#E6D349', '#F8A065', '#FF6B5F'],
              barWidth: 12,
              z: 3
            },
            {
              name: '',
              type: 'bar',
              yAxisIndex: 1,
              data: [400, 400, 400, 400, 400],
              barWidth: 12,
              itemStyle: {
                color: 'rgba(0,0,0,0.5)',
                barBorderRadius: 12
              },
              label: {
                normal: {
                  show: true,
                  color: '#fff',
                  fontSize: 14,
                  padding: [0, 0, 0, 20],
                  position: 'right',
                  formatter: function (params) {
                    return data[params.dataIndex]
                  }
                }
              },
              z: 0
            }
          ]
        }

        myChart.setOption(option)
      })
    },
    convertData (data) {
      var arrData = []
      var arr = []
      var arr1 = []
      var arr2 = []
      var arr3 = []
      for (var i = 0; i < data.length; i++) {
        var level = data[i].hazard_level
        switch (level) {
          case 'H':
            level = 4
            break
          case 'M':
            level = 3
            break
          case 'L':
            level = 2
            break
          default:
            level = 4
        }

        arr.push([
          {
            coord: geoCoordMap[data[i].fromName],
            value: level
          },
          {
            coord: geoCoordMap[data[i].toName]
          }
        ])
        arr1.push(data[i].toName)
        arr3.push({
          name: data[i].fromName,
          value: geoCoordMap[data[i].fromName].concat(level)
        })
      }

      for (let i = 0; i < arr1.length; i++) {
        arr2.push({
          name: arr1[i],
          value: geoCoordMap[arr1[i]].concat(0)
        })
      }

      arrData.push(arr)
      arrData.push(arr2)
      arrData.push(arr3)
      return arrData
    },
    drawMap () {
      this.$nextTick(() => {
        var map_data = this.convertData(this.data)
        var myChart2 = echarts.init(document.getElementById('map'))
        var option2 = {
          tooltip: {
            show: false,
            trigger: 'item'
          },
          backgroundColor: 'rgba(0,0,0,0)',
          visualMap: {
            // 图例值控制
            type: 'piecewise',
            splitNumber: 4,
            min: 0,
            max: 4,
            calculable: true,
            show: false,
            // seriesIndex:3,
            color: ['red', '#65b742', '#fc9700', '#f9282a'].reverse(),
            // color: ['#fff'],
            textStyle: {
              color: '#fff'
            }
          },
          geo: [
            {
              map: 'china',
              left: '9%',
              right: '9%',
              zoom: 1,
              zlevel: 8,
              label: {
                emphasis: {
                  show: false
                }
              },
              roam: false, // 是否允许缩放
              aspectScale: 0.75, // 地图长宽比例
              layoutCenter: ['48%', '50%'], // 地图位置
              //   layoutSize: '110%',
              itemStyle: {
                normal: {
                  color: 'rgba(22,32,47,0)', // 地图背景色
                  borderColor: '#0fcbd1', // 省市边界线
                  borderWidth: 1
                },
                emphasis: {
                  color: 'rgba(37, 43, 61, .7)' // 悬浮背景
                }
              }
            }
          ],
          series: [
            {
              type: 'lines',
              zlevel: 12,
              effect: {
                show: true,
                period: 4, // 箭头指向速度，值越小速度越快
                trailLength: 0.3, // 特效尾迹长度[0,1]值越大，尾迹越长重
                symbol: 'arrow', // 箭头图标
                symbolSize: 5 // 图标大小
              },
              lineStyle: {
                normal: {
                  width: 1, // 尾迹线条宽度
                  opacity: 0, // 尾迹线条透明度
                  curveness: 0.3 // 尾迹线条曲直度
                }
              },
              data: map_data[0]
            },
            {
              type: 'effectScatter',
              coordinateSystem: 'geo',
              zlevel: 12,
              rippleEffect: {
                // 涟漪特效
                period: 4, // 动画时间，值越小速度越快
                brushType: 'stroke', // 波纹绘制方式 stroke, fill
                scale: 4 // 波纹圆环最大限制，值越大波纹越大
              },
              label: {
                normal: {
                  show: true,
                  position: 'right', // 显示位置
                  offset: [5, 0], // 偏移设置
                  formatter: function (params) {
                    // 圆环显示文字
                    // return params.data.name;
                    return ' '
                  },
                  fontSize: 13
                },
                emphasis: {
                  show: true,
                  formatter: function (params) {
                    // 圆环显示文字
                    return params.data.name
                  }
                }
              },
              symbol: 'circle',
              symbolSize: function (val) {
                return 8 // 圆环大小
              },
              itemStyle: {
                normal: {
                  show: false,
                  color: '#f00'
                }
              },
              data: map_data[2]
            },
            // 被攻击点
            {
              type: 'effectScatter',
              coordinateSystem: 'geo',
              zlevel: 12,
              rippleEffect: {
                period: 4,
                brushType: 'stroke',
                scale: 4
              },
              label: {
                normal: {
                  show: true,
                  position: 'right',
                  offset: [5, 0],
                  color: 'red',
                  formatter: function (param) {
                    return param.name
                  },
                  textStyle: {
                    color: 'red'
                  }
                },
                emphasis: {
                  show: true
                }
              },
              symbol: 'circle',
              symbolSize: 10,
              itemStyle: {
                normal: {
                  show: true,
                  color: '#0ff'
                }
              },
              data: map_data[1]
            }
          ]
        }
        // if (site === 'china') {
        //   option2.geo[0].aspectScale = 0.8
        //   option2.geo[1].aspectScale = 0.8
        //   option2.geo[0].layoutSize = '110%'
        //   option2.geo[1].layoutSize = '110%'
        // }
        // window.onresize = function() {
        //   myChart2.resize();
        // };
        myChart2.setOption(option2)
      })
    },
    drawGraph () {
      var myChart1 = echarts.init(document.getElementById('graph'))
      let option = {
        backgroundColor: 'rgba(0,0,0,0)',
        // color:[],
        title: {
          show: false,
          text: '数据',
          subtext: 'ZBH',
          top: 'top',
          left: 'center'
        },
        tooltip: {},
        // legend: [
        //   {
        //     formatter: function(name) {
        //       return echarts.format.truncateText(
        //         name,
        //         40,
        //         '14px Microsoft Yahei',
        //         '…'
        //       )
        //     },
        //     tooltip: {
        //       show: true
        //     },
        //     selectedMode: 'false',
        //     bottom: 20,
        //     data: [
        //       '2层',
        //       '2层a',
        //       '2层b'
        //     ]
        //   }
        // ],
        // toolbox: {
        //   show: true,
        //   feature: {
        //     dataView: {
        //       show: true,
        //       readOnly: true
        //     },
        //     restore: {
        //       show: true
        //     },
        //     saveAsImage: {
        //       show: true
        //     }
        //   }
        // },
        animationDuration: 3000,
        animationEasingUpdate: 'quinticInOut',
        series: [
          {
            name: '数据',
            type: 'graph',
            layout: 'force',
            force: {
              repulsion: 200,
              edgeLength: 30
            },
            data: [
              {
                name: '数据',
                // "x": 0,
                // y: 0,
                symbolSize: 40,
                draggable: 'true',
                value: 27
              },
              {
                name: '2层',
                value: 15,
                symbolSize: 30,
                category: '2层',
                draggable: 'true'
              },
              {
                name: '3层',
                symbolSize: 15,
                category: '2层',
                draggable: 'true',
                value: 1
              },
              {
                name: '3层a',
                symbolSize: 15,
                category: '2层',
                draggable: 'true',
                value: 1
              },
              {
                name: '3层b',
                symbolSize: 15,
                category: '2层',
                draggable: 'true',
                value: 1
              },
              {
                name: '2层a',
                value: 20,
                symbolSize: 30,
                category: '2层a',
                draggable: 'true'
              },
              {
                name: '3层c',
                symbolSize: 15,
                category: '2层a',
                draggable: 'true',
                value: 1
              },
              {
                name: '3层d',
                symbolSize: 15,
                category: '2层a',
                draggable: 'true',
                value: 1
              },
              {
                name: '2层b',
                value: 5,
                symbolSize: 30,
                category: '2层b',
                draggable: 'true'
              },
              {
                name: '3层e',
                symbolSize: 15,
                category: '2层b',
                draggable: 'true',
                value: 1
              },
              {
                name: '3层f',
                symbolSize: 15,
                category: '2层b',
                draggable: 'true',
                value: 1
              }
            ],
            links: [
              {
                source: '数据',
                target: '2层'
              },
              {
                source: '2层',
                target: '3层'
              },
              {
                source: '2层',
                target: '3层a'
              },
              {
                source: '2层',
                target: '3层b'
              },
              {
                source: '数据',
                target: '2层a'
              },
              {
                source: '2层a',
                target: '3层c'
              },
              {
                source: '2层a',
                target: '3层d'
              },
              {
                source: '数据',
                target: '2层b'
              },
              {
                source: '2层b',
                target: '3层e'
              },
              {
                source: '2层b',
                target: '3层f'
              }
            ],
            categories: [
              {
                name: '2层'
              },
              {
                name: '2层a'
              },
              {
                name: '2层b'
              }
            ],
            focusNodeAdjacency: true,
            // roam: true,
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            lineStyle: {
              normal: {
                color: 'source',
                curveness: 0.3,
                type: 'solid'
              }
            }
          }
        ]
      }
      myChart1.setOption(option)
    },
    drawBugLine () {
      var myChart = echarts.init(document.getElementById('bugLine'))
      var option = {
        title: {
          // text: '漏洞趋势',
          // textStyle:{
          //     fontWeight:500,
          //     color:'#d4edf4',
          //     fontSize:16,
          // },
          show: false,
          subtext: '漏洞',
          subtextStyle: {
            color: '#fff'
          }
        },
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
        legend: {
          icon: 'rect',
          itemWidth: 14,
          itemHeight: 5,
          itemGap: 13,
          orient: 'horizontal',
          right: 10,
          top: 5,
          data: [
            {
              name: '已修复',
              textStyle: {
                fontSize: 12,
                color: '#fff'
              }
            },
            {
              name: '未修复',
              textStyle: {
                fontSize: 12,
                color: '#fff'
              }
            }
          ]
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
          data: ['1月', '2月', '3月', '4月', '5月']
        },
        yAxis: {
          // name: '( 万 )',
          // nameLocation: 'end',
          // nameTextStyle: {
          //   color: '#fff'
          // },
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
                width: 1
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
                      color: 'rgba(0, 136, 212, 0.8)'
                    },
                    {
                      offset: 0.8,
                      color: 'rgba(0, 136, 212, 0.2)'
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
            data: [100, 200, 250, 300, 400]
          },
          {
            name: '未修复',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 1
              }
            },
            // 红色
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
                      color: 'rgba(219, 50, 51, 0.3)'
                    },
                    {
                      offset: 0.8,
                      color: 'rgba(219, 50, 51, 0.1)'
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
                color: 'rgb(219,50,51)',
                borderColor: 'rgba(219,50,51,0.27)',
                borderWidth: 12
              }
            },
            data: [50, 100, 150, 200, 250]
          }
        ]
      }

      myChart.setOption(option)
    },
    drawPie () {
      let myChart = echarts.init(document.getElementById('pie'))
      let option = {
        // backgroundColor: '#000',
        animation: true,
        title: {
          show: false,
          text: '安全事件分布',
          // subtext: '未授权访问',
          x: 'center',
          y: 'center',
          textStyle: {
            color: '#fff',
            fontSize: 16,
            fontWeight: 'normal',
            align: 'center',
            width: '100px'
          },
          subtextStyle: {
            color: '#fff',
            fontSize: 14,
            fontWeight: 'normal',
            align: 'center'
          }
        },
        legend: {
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
            color: [
              '#FEE449',
              '#00FFA8',
              '#9F17FF',
              '#F76F01',
              '#01A4F7',
              '#FFE400',
              '#00FFFF',
              '#FE2C8A'
            ],
            startAngle: 135,
            labelLine: {
              normal: {
                length: 10
              }
            },
            label: {
              normal: {
                formatter: '{b|{b}:}{per|{d}%} ',
                backgroundColor: 'rgba(255, 147, 38, 0)',
                borderColor: 'transparent',
                borderRadius: 4,
                rich: {
                  a: {
                    color: '#999',
                    lineHeight: 22,
                    align: 'center'
                  },
                  hr: {
                    borderColor: '#aaa',
                    width: '100%',
                    borderWidth: 1,
                    height: 0
                  },
                  b: {
                    color: '#b3e5ff',
                    fontSize: 12,
                    lineHeight: 1
                  },
                  c: {
                    fontSize: 14,
                    color: '#eee'
                  },
                  per: {
                    color: '#FDF44E',
                    fontSize: 12,
                    padding: [1, 2],
                    borderRadius: 2
                  }
                },
                textStyle: {
                  color: '#fff',
                  fontSize: 16
                }
              }
            },
            emphasis: {
              label: {
                show: true,
                formatter: '{b|{b}:}{per|{d}%}  ',
                backgroundColor: 'rgba(255, 147, 38, 0)',
                borderColor: 'transparent',
                borderRadius: 4,
                rich: {
                  a: {
                    color: '#999',
                    lineHeight: 22,
                    align: 'center'
                  },
                  hr: {
                    borderColor: '#aaa',
                    width: '100%',
                    borderWidth: 1,
                    height: 0
                  },
                  b: {
                    color: '#fff',
                    fontSize: 14,
                    lineHeight: 1
                  },
                  c: {
                    fontSize: 14,
                    color: '#eee'
                  },
                  per: {
                    color: '#FDF44E',
                    fontSize: 14,
                    padding: [1, 2],
                    borderRadius: 2
                  }
                }
              }
            },
            data: [
              {
                name: '恶意URL警告',
                value: 3
              },
              {
                name: '异常操作',
                value: 6
              },
              {
                name: '异常进程',
                value: 13
              },
              {
                name: '未授权访问',
                value: 8
              },
              {
                name: '其它',
                value: 2
              }
            ]
          }
          // {
          //   type: 'pie',
          //   center: ['50%', '50%'],
          //   radius: ['35%', '36%'],
          //   label: {
          //     show: false
          //   },
          //   data: [
          //     {
          //       value: 78,
          //       name: '实例1',
          //       itemStyle: {
          //         normal: {
          //           color: {
          //             x: 0,
          //             y: 0,
          //             x2: 1,
          //             y2: 0,
          //             type: 'linear',
          //             global: false,
          //             colorStops: [
          //               {
          //                 offset: 0,
          //                 color: '#9F17FF'
          //               },
          //               {
          //                 offset: 0.2,
          //                 color: '#01A4F7'
          //               },
          //               {
          //                 offset: 0.5,
          //                 color: '#FE2C8A'
          //               },
          //               {
          //                 offset: 0.8,
          //                 color: '#FEE449'
          //               },
          //               {
          //                 offset: 1,
          //                 color: '#00FFA8'
          //               }
          //             ]
          //           }
          //         }
          //       }
          //     }
          //   ]
          // }
        ]
      }

      myChart.setOption(option)
    }
  }
}
</script>
<style lang="css" scoped>
@import "../assets/common/font/font.css";
.font {
  font-family: "myfont", "Microsoft YaHei";
  color: #0cbdfb;
}
#screen {
  min-width: 1850px;
  height: 100%;
  background: url("../assets/img/screen/back.png") no-repeat;
  background-size: cover;
  color: #fff;
}
.content {
  width: 1800px;
  margin: 0 auto;
  padding: 15px 0;
  display: flex;
}
.left,
.right {
  width: 22%;
  /* border: 1px dashed #fff; */
}
.left > div,
.right > div {
  height: 350px;
  width: 100%;
  border: 1px solid transparent;
  box-sizing: border-box;
}
.left-top {
  color: #0cbdfb;
  font-size: 16px;
}
.left-top .num {
  font-size: 30px;
  color: #ef5c5a;
}
.bar-title {
  color: #fff;
  margin: 15px 5px 10px;
}
.left-top .addNum {
  font-size: 30px;
}
.title {
  padding: 20px 0 5px;
  text-align: center;
}
#bar {
  height: 250px;
}
#map {
  height: 650px;
}
#line {
  margin: 0 auto;
  height: 300px;
}
#line1 {
  width: 98%;
  margin: 0 auto;
  height: 300px;
}
#graph {
  height: 300px;
}
.center {
  width: 56%;
  /* border: 1px dashed #fff; */
}
.swiper {
  position: relative;
  height: 650px;
  width: 100%;
}
.center-bottom {
  width: 99%;
  margin: 0 auto;
  height: 300px;
  display: flex;
  margin-top: 35px;
}
.center-bottom > div {
  width: 50%;
  height: 100%;
}
.right-top > div {
  margin: 15px 0;
  display: flex;
  justify-content: space-around;
}
.right-data {
  text-align: center;
  height: 100px;
  width: 45%;
  border-radius: 5px;
  border: 1px solid #0e66ca;
  box-shadow: inset 0 0 30px 0 rgba(44, 116, 205, 0.5);
}
.right-data > p {
  margin: 15px 0;
}
.bhref {
  cursor: pointer;
  width: 45%;
  text-align: center;
  height: 35px;
  line-height: 35px;
  border-radius: 3px;
  border: 1px solid #0e66ca;
  box-shadow: inset 0 0 30px 0 rgba(44, 116, 205, 0.5);
}
.bhref:hover {
  background: rgba(44, 116, 205, 0.3);
}
.martop {
  margin-top: 40px;
}
</style>