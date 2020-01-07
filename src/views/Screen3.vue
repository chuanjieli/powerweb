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
            <span class="font" style="color:#0b66f5;width: 6rem;">150</span>
            <span>
              能力当天调用总数
            </span>
            <span class="font" style="color:#01c6b2;width: 6rem;">135</span>
            <span>能力调用分布图</span>
          </div>
          <div id="leftPie"></div>
        </div>
        <div class="left-body">
          <div class="title">安全风险感知</div>
          <div class="gauge-wrap">
            <div>
              <div id="gauge" style="height:10rem;width:60%"></div>
              <div>
                <p class="mt">
                  <span class="font" style="font-size:5rem">97</span>
                  <span>&nbsp;&nbsp;&nbsp;个</span>
                </p>
                <p>
                  风险数量
                </p>
              </div>
            </div>
            <div>
              <div id="gauge1" style="height:10rem;width:60%"></div>
              <div>
                <p class="mt">
                  <span class="font" style="font-size:5rem">98</span>
                  <span>&nbsp;&nbsp;&nbsp;个</span>
                </p>
                <p>
                  网站数量
                </p>
              </div>
            </div>
          </div>
          <div class="radar-wrap">
            <Radar></Radar>
          </div>
        </div>
      </div>
      <div class="center"></div>
      <div class="right"></div>
    </div>
  </div>
</template>
<script>
import echarts from 'echarts'
import Radar from '@/components/Radar.vue'
export default {
  components: {
    Radar
  },
  data () {
    return {

    }
  },
  created () {

  },
  mounted () {
    this.drawPie()
    this.drawGauge('gauge', 40)
    this.drawGauge('gauge1', 80)
  },
  methods: {
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
    drawGauge (id, val) {
      let myChart = echarts.init(document.getElementById(id))
      var highlight = 'white';

      var demoData = [

        {
          name: '时钟',
          value: val,
          unit: '%',
          pos: ['50%', '70%'],
          range: [0, 100],
          colora: 'rgba(193,136,244,0.9)',
          colorb: 'rgba(242,166,200,0.6)'
        }

      ];

      let option = {
        series: (function () {
          var result = [];

          demoData.forEach(function (item) {
            result.push(
              // 内侧指针、数值显示
              {
                name: item.name,
                type: 'gauge',
                center: item.pos,
                radius: '120%',
                startAngle: 200,
                endAngle: -20,
                min: 0,
                max: 100,
                axisLine: {
                  show: true,
                  lineStyle: {
                    width: 2,
                    color: [
                      [
                        item.value / 100, new echarts.graphic.LinearGradient(
                          0, 0, 1, 0, [{
                            offset: 0,
                            color: '#5e81fa',
                          },
                          {
                            offset: 1,
                            color: '#5e81fa',
                          }
                        ]
                        )
                      ],
                      [
                        1, '#5e81fa'
                      ]
                    ]
                  }
                },
                axisTick: {
                  show: 0,
                },
                splitLine: {
                  show: 0,
                },
                axisLabel: {
                  show: 0
                },
                pointer: {
                  show: 0,
                },
                detail: {
                  show: 0
                },
                data: [{
                  value: item.value,
                }]
              },
              // 外围刻度
              {
                type: 'gauge',
                center: item.pos,
                radius: '75%', // 1行3个
                splitNumber: 5,
                min: 0,
                max: 100,
                startAngle: 200,
                endAngle: -20,
                axisLine: {
                  show: true,
                  lineStyle: {
                    width: 1,
                    color: [
                      [1, 'rgba(0,0,0,0)']
                    ]
                  }
                }, //仪表盘轴线
                axisTick: {
                  show: true,
                  lineStyle: {
                    color: 'rgba(255,255,255,0.6)',
                    width: 1
                  },
                  length: -4
                }, //刻度样式
                splitLine: {
                  show: false,
                  length: 4,
                  lineStyle: {
                    color: 'rgba(255,255,255,0.6)'
                  }
                }, //分隔线样式
                axisLabel: {
                  show: false,
                  distance: 2,
                  textStyle: {
                    color: highlight,
                    fontSize: '12',
                    fontWeight: 'bold'
                  }
                },
                pointer: {
                  show: 0
                },
                detail: {
                  show: 0
                }
              },

              // 内侧指针、数值显示
              {
                name: item.name,
                type: 'gauge',
                center: item.pos,
                radius: '105%',
                startAngle: 200,
                endAngle: -20,
                min: 0,
                max: 100,
                axisLine: {
                  show: true,
                  lineStyle: {
                    width: 8,
                    color: [
                      [
                        item.value / 100, new echarts.graphic.LinearGradient(
                          0, 0, 1, 0, [{
                            offset: 0,
                            color: '#2259c0',
                          },
                          {
                            offset: 1,
                            color: '#de6143',
                          }
                        ]
                        )
                      ],
                      [
                        1, '#133d80'
                      ]
                    ]
                  }
                },
                axisTick: {
                  show: 0,
                },
                splitLine: {
                  show: 0,
                },
                axisLabel: {
                  show: 0
                },
                pointer: {
                  show: true,
                  length: '90%',
                  width: 3
                },
                itemStyle: {
                  color: '#1fa2ff'
                },
                title: {
                  show: false,
                  offsetCenter: [0, '65%'],
                  color: 'white',
                  fontSize: 20,
                  /* backgroundColor: "#D8d8d8",*/
                  borderRadius: 21,
                  padding: 5
                },
                detail: {
                  show: false,
                  offsetCenter: [0, 0],
                  textStyle: {
                    fontSize: 25,
                    color: '#fff'
                  },
                  formatter: [
                    '{value}' + (item.unit || ''),
                    /* '{name|' + item.name + '}'*/
                  ].join('\n'),
                  rich: {
                    name: {
                      fontSize: 20,
                      lineHeight: 10,
                      color: '#ddd',
                      padding: [30, 0, 0, 0]
                    }
                  }
                },
                data: [{
                  value: item.value,
                  name: item.name
                }]
              }
            );
          });

          return result;
        })()
      };

      myChart.setOption(option)
    }

  },
}
</script>
<style lang="css" scoped>
@import "../assets/common/font/font.css";
.font {
  font-family: "myfont", "Microsoft YaHei";
  font-size: 2.3rem;
  display: inline-block;
  color: #0cbdfb;
}
#screen {
  font-size: 1rem;
  color: #fff;
  /* height: 100vh; */
  min-width: 1920px;
  box-sizing: border-box;
  background: url("../assets/img/screens/bg.png");
}
.header {
  font-size: 4rem;
  color: #00c6ff;
  text-align: center;
  height: 8rem;
  line-height: 7rem;
  width: 100%;
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
.left-top {
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
  margin-top: 2rem;
  height: 60rem;
  width: 100%;
  background: url("../assets/img/screens/border_03.png");
  background-size: 100% 100%;
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
  display: flex;
}
.gauge-wrap > div {
  width: 50%;
  display: flex;
  text-align: center;
  font-size: 1.4rem;
}
.mt {
  margin-top: 2rem;
}
.radar-wrap {
  position: relative;
}
</style>