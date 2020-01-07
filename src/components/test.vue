<template>
  <div id="test">
    <div class="wrap">
      <div class="left">
        <div class="left-top">
          <i></i>
          <span>北京</span>
        </div>

        <div style="position:relative;">
          <div class="line"></div>
          <div class="timeline" style="margin-top:0">
            <span>2017</span>
            <div>
              <i></i>
              <p>2017-05-24</p>
              <p>将颠覆国但是</p>
            </div>
          </div>
          <div class="timeline">
            <span>2018</span>
            <div>
              <i></i>
              <p>2018-05-24</p>
              <p>将颠覆国但是</p>
            </div>
          </div>
          <div class="timeline">
            <span>2019</span>
            <div>
              <i></i>
              <p>2019-05-24</p>
              <p>将颠覆国但是</p>
            </div>
          </div>
        </div>

      </div>
      <div class="center">
        <div id="map" style="height:30rem;"></div>
      </div>
      <div class="right">
        <div class="right-top">
          <div>
            <p class="font">2345</p>
            <p>4G峰值流量</p>
          </div>
          <div>
            <p class="font"> 8848</p>
            <p>8省攻击源分布</p>
          </div>
        </div>
        <div class="right-footer">
          <div id="pie" style="height:20rem;"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import echarts from 'echarts'
import 'echarts/map/js/china.js'
export default {
  data () {
    return {
      pie1Data: {
        data: [
          {
            name: 'UDP Flood',
            value: 13
          },
          {
            name: 'SYN Flood',
            value: 6
          },
          {
            name: 'ICMP Flood',
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
      }
    }
  },
  mounted () {
    this.drawMap()
    this.drawPie1('pie', this.pie1Data)
  },
  methods: {
    drawMap () {
      let myChart = echarts.init(document.getElementById('map'))
      function colorAreaObj (name, color) {
        this.name = name;
        this.itemStyle = {
          normal: {
            color: color,
            show: false,
          },
          emphasis: {
            color: color,
            show: false,
          }
        };
        this.label = {
          normal: {
            show: true,
          },
          emphasis: {
            show: true,
          }
        }
      }

      var colorAreaConfig = [
        //西北
        {
          name: '甘肃',
          color: "#8ebc8e"
        },
        {
          name: '新疆',
          color: "#8ebc8e"
        },
        {
          name: '青海',
          color: "#8ebc8e"
        },
        //北方
        {
          name: '宁夏',
          color: "#8ebc8e"
        },
        {
          name: '内蒙古',
          color: "#8ebc8e"
        },
        {
          name: '河北',
          color: "#01c6b2"
        },
        {
          name: '北京',
          color: "#01c6b2"
        },
        {
          name: '天津',
          color: "#01c6b2"
        },
        //东北
        {
          name: '黑龙江',
          color: "#8ebc8e"
        },
        {
          name: '吉林',
          color: "#01c6b2"
        },
        {
          name: '辽宁',
          color: "#01c6b2"
        },
        //中部
        {
          name: '山西',
          color: "#8ebc8e"
        },
        {
          name: '湖北',
          color: "#8ebc8e"
        },
        {
          name: '陕西',
          color: "#8ebc8e"
        },
        {
          name: '湖南',
          color: "#01c6b2"
        },
        {
          name: '河南',
          color: "#8ebc8e"
        },
        //南方
        {
          name: '广西',
          color: "#01c6b2"
        },
        {
          name: '广东',
          color: "#01c6b2"
        },
        {
          name: '海南',
          color: "#01c6b2"
        },
        //西南
        {
          name: '四川',
          color: "#8ebc8e"
        },
        {
          name: '重庆',
          color: "#8ebc8e"
        },
        {
          name: '云南',
          color: "#8ebc8e"
        },
        {
          name: '贵州',
          color: "#8ebc8e"
        },
        {
          name: '西藏',
          color: "#f87850"
        },
        //东部
        {
          name: '江苏',
          color: "#01c6b2"
        },
        {
          name: '江西',
          color: "#01c6b2"
        },
        {
          name: '安徽',
          color: "#01c6b2"
        },
        {
          name: '山东',
          color: "#01c6b2"
        },
        {
          name: '福建',
          color: "#01c6b2"
        },
        {
          name: '浙江',
          color: "#01c6b2"
        },
        {
          name: '上海',
          color: "#01c6b2"
        },
        {
          name: '台湾',
          color: "#01c6b2"
        },
      ];

      var data = [];

      data = colorAreaConfig.map(function (v, i) {
        return new colorAreaObj(v.name, v.color)
      })

      let option = {
        legend: {
          orient: 'horizontal',
          left: '160',
          data: []
        },
        "series": [{
          "name": "中国",
          "type": "map",
          "mapType": "china",
          "zoom": 1.2,
          // roam: true,
          "selectedMode": false,
          "layoutCenter": ['50%', '53%'],
          "layoutSize": "102%",
          "label": {
            "normal": {
              "show": true,
              "textStyle": {
                "color": "#fff",
                "fontSize": "12",
                'fontFamily': 'Microsoft YaHei'
              }
            },
            "emphasis": {
              "show": true,
              "textStyle": {
                "color": "#fff",
                "fontSize": "12"
              }
            }
          },
          "itemStyle": {
            "normal": {
              //"areaColor": "rgba(51, 69, 89, .5)",
              "borderWidth": 1.5,
              "borderColor": "#1864a1",
              "textStyle": {
                "color": "#fff",
                "fontSize": "12"
              }
            },
            "emphasis": {
              "areaColor": "rgba(51, 69, 89, .5)",
              "textStyle": {
                "color": "#fff",
                "fontSize": "18"
              },
              "opacity": 1
            }
          },
          "data": data
        }]
      }
      myChart.setOption(option);
    },
    drawPie1 (pie, data) {
      let myChart = echarts.init(document.getElementById(pie))
      let option = {
        animation: true,
        series: [
          {
            type: 'pie',
            center: ['50%', '50%'],
            radius: ['30%', '45%'],
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
                formatter: '{b|{b}} ',
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
                formatter: '{b|{b}}',
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
#test {
  width: 765px;
  /* background: #000; */
}
.wrap {
  color: #fff;
  display: flex;
}
.wrap > div:nth-child(1) {
  width: 20%;
}
.wrap > div:nth-child(2) {
  width: 50%;
}
.wrap > div:nth-child(3) {
  width: 30%;
}
.timeline {
  margin-top: 4rem;
}
.timeline > span {
  display: inline-block;
  text-align: center;
  line-height: 4rem;
  width: 4rem;
  height: 4rem;
  background: #737c9c;
  border-radius: 50%;
  vertical-align: text-bottom;
}
.timeline > div {
  position: relative;
  margin-left: 2rem;
  display: inline-block;
  padding: 1rem;
  background: linear-gradient(-135deg, transparent 10px, #2d4ac8 0);
}
.timeline > div > i {
  position: absolute;
  top: 50%;
  left: -2rem;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border: 1rem solid transparent;
  border-right: 1rem solid #2d4ac8;
}
.timeline > div > p:nth-child(1) {
  background: #39ace8;
  padding: 0.3rem 0.5rem;
}
.left {
  position: relative;
}
.left-top {
  background: rgba(11, 13, 41, 0.8);
  border-left: 0.2rem solid #ef7b56;
  padding: 0.5rem 0;
  margin-bottom: 1rem;
}
.left-top > i {
  display: inline-block;
  width: 1.4rem;
  height: 1.4rem;
  background: url("../assets/img/screens/kjin.png");
  background-size: 100% 100%;
  margin: 0 0.6rem;
}
.left-top > span {
  font-size: 1.4rem;
}
.line {
  position: absolute;
  height: 100%;
  left: 1.7rem;
  border-left: 0.6rem solid #737c9c;
  z-index: -1;
}
.right-top {
  margin-top: 3rem;
  display: flex;
  justify-content: space-around;
}
.right-top > div {
  width: 40%;
  text-align: center;
  background: linear-gradient(-135deg, transparent 10px, #1b1e50 0);
}
.right-top > div > p:nth-child(1) {
  font-size: 3rem;
  padding: 0.4rem;
}
.right-top > div > p:nth-child(2) {
  padding-bottom: 0.6rem;
}
</style>