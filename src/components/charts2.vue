<template>
  <div id="slider">
    <div id="container" style="height:600px;box-sizing: border-box;"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
import 'echarts-gl'
import 'echarts/map/js/world.js'
export default {
  data () {
    return {
      bgimg: require('../assets/img/charts/bg.jpg'),
      bgimg1: require('../assets/img/charts/bg1.jpg'),
      bgimg2: require('../assets/img/charts/bg2.jpg'),
      mychart: null
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      let that = this
      let canvas = document.createElement('canvas')
      let mapChart = echarts.init(canvas, null, {
        width: 4096,
        height: 2048
      })
      let pOp = {
        geo: {
          map: 'china',
          label: {
            fontSize: 12
          },
          itemStyle: {
            areaColor: 'transparent',
            borderColor: '#00FDFF'
          },
          emphasis: {
            areaColor: 'transparent'
          },
          regions: [
            {
              name: '南海诸岛',
              value: 0,
              itemStyle: {
                normal: {
                  opacity: 0,
                  label: {
                    show: false
                  }
                }
              }
            }
          ],
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          boundingCoords: [
            [-180, 90],
            [180, -90]
          ]
        },
        data: []
      }
      mapChart.setOption(pOp)
      let option = {
        backgroundColor: '#333',
        legend: {
          show: false,
          orient: 'vertical',
          textStyle: {
            color: '#fff'
          },
          data: ['lines3D', '景区'],
          bottom: 0,
          right: 0
        },
        visualMap: [
          {
            show: false,
            type: 'continuous',
            seriesIndex: 0,
            text: ['scatter3D'],
            textStyle: {
              color: '#fff'
            },
            calculable: true,
            max: 3000,
            inRange: {
              color: ['#87aa66', '#eba438', '#d94d4c'],
              symbolSize: [8, 30]
            }
          }
        ],
        globe: {
          baseTexture: that.bgimg2,
          heightTexture: that.bgimg1,
          displacementScale: 0.04,
          shading: 'lambert',
          // environment: that.bgimg,
          light: {
            // 光照阴影
            main: {
              color: '#fff', // 光照颜色
              intensity: 1.2, // 光照强度
              shadow: false, // 是否显示阴影
              alpha: 40,
              beta: -30
            },
            ambient: {
              intensity: 0.5
            }
          },
          viewControl: {
            projection: 'perspective',
            alpha: 90,
            beta: 0,
            center: [0, 0, 0], // 视角
            targetCoord: [110.46, 10.92],
            autoRotate: true,
            autoRotateSpeed: 4,
            autoRotateAfterStill: 10,
            distance: 150 // 视距
          },
          postEffectL: {
            enable: true,
            depthOfFieldL: {
              enable: true,
              focalDistance: 1000,
              fstop: 100
            }
          },
          layers: [
            {
              type: 'blend',
              texture: mapChart
            }
          ]
        },
        series: [
          {
            name: 'lines3D',
            type: 'lines3D',
            coordinateSystem: 'globe',
            effect: {
              show: true,
              period: 2,
              trailWidth: 1,
              trailLength: 0.5,
              trailOpacity: 1,
              trailColor: '#0087f4'
            },
            blendMode: 'lighter',
            lineStyle: {
              width: 1,
              color: '#0087f4',
              opacity: 0.2
            },
            data: [],
            //		        data: [{
            //		            from: 'A',
            //		            to: 'B',
            //		            coords: [
            //		                [-83.69501541554166, -75.76453333240994],
            //						[105.18, 37.51]
            //		            ],
            //		            value:"2013.48"
            //		        }, {
            //		            from: 'A',
            //		            to: 'C',
            //		            coords: [
            //		                [118.377173, 31.337123],
            //		                [105.18, 37.51]
            //		            ],
            //		            value:"2013.48"
            //		        }],
            silent: false
          }, { //点
            name: '景区',
            //		        type: 'effectScatter',
            //		        coordinateSystem: 'bmap',
            type: 'scatter3D',
            blendMode: 'lighter',
            coordinateSystem: 'globe',
            showEffectOn: 'render',
            zlevel: 2,
            effectType: "ripple",
            symbolSize: 15,
            rippleEffect: {
              period: 4,
              scale: 4,
              brushType: 'fill'
            },

            //		        showEffectOn: 'hover',
            hoverAnimation: true,
            label: {
              normal: {
                show: true,
                position: 'right',
                //			                formatter: '{b}',
                formatter: function (params) {
                  if (params.dataIndex == 1) {
                    return '南京'
                  } else if (params.dataIndex == 2) {
                    return '沈阳'
                  } else if (params.dataIndex == 3) {
                    return '太原'
                  } else if (params.dataIndex == 4) {
                    return '日本'
                  } else if (params.dataIndex == 5) {
                    return '雅加达'
                  } else if (params.dataIndex == 0) {
                    return '徐州'
                  } else if (params.dataIndex == 6) {
                    return '昆明'
                  }
                },
                textStyle: {
                  fontSize: 18,
                  color: '#f5d909',
                  fontWeight: 'bold',
                  //			                    backgroundColor:'rgba(255,255,255,0.2)'
                  backgroundColor: 'transparent'
                }
              }
            },
            itemStyle: {
              normal: {
                color: 'rgb(29,183,255)'
              }
            },
            //		        data: [{
            //		            'name': 'A',
            //		            'value': [105.18, 37.51, 1500]
            //		        }, {
            //		            'name': 'B',
            //		            'value': [118.393252, 31.15576, 1500]
            //		        }, {
            //		            'name': 'C',
            //		            'value': [117.989662, 31.293115, 1500]
            //		        }]
            data: [
              [117.11, 34.15],
              [118.58, 32.01],
              [123.38, 41.8],
              [112.01, 38.01],
              [139.46, 35.42],
              [116.58, 6.10],
              [102.90, 25.31]
            ]

          }
        ]
      }

      for (let i = 0; i < 50; i++) {
        option.series[0].data = option.series[0].data.concat(getRandomData())
      }

      that.mychart = echarts.init(document.getElementById('container'))
      that.mychart.setOption(option)
      function getRandomData () {
        return {
          coords: [
            [Math.random() * 135.2, Math.random() * 53.33],
            [121.51585, 31.23045]
          ],
          value: (Math.random() * 30).toFixed(2)
        }
      }
    }
  },
  destroyed () {
    console.log(222)

    this.mychart.clear()
    this.mychart.dispose()
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
#slider {
  position: relative;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  height: 1000px;
  background: #000;
}
</style>
