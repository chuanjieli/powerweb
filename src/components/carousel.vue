<template>
  <div id="box" @mouseenter="over" @mouseleave="out">
    <ul id="con1" ref="con1" :class="{anim:animate==true}">
      <li v-for='item in items' :key="item.name">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      animate: false,
      timer: null,
      items: [
        { name: "马云" },
        { name: "雷军" },
        { name: "环境" },
        { name: "框架" },
        { name: "王勤" }
      ]
    }
  },
  created () {
    this.scroll()
  },
  methods: {
    scroll () {

      this.timer = setInterval(() => {
        this.animate = true;    // 因为在消息向上滚动的时候需要添加css3过渡动画，所以这里需要设置true
        setTimeout(() => {      //  这里直接使用了es6的箭头函数，省去了处理this指向偏移问题，代码也比之前简化了很多
          this.items.push(this.items[0]);  // 将数组的第一个元素添加到数组的
          this.items.shift();               //删除数组的第一个元素
          this.animate = false;  // margin-top 为0 的时候取消过渡动画，实现无缝滚动
        }, 500)

      }, 1000)

    },
    over () {
      clearInterval(this.timer)
    },
    out () {
      this.scroll()
      // this.timer = setInterval(this.scroll, 1000)
    }
  }}
</script>

<style scoped>
#box {
  width: 100px;
  height: 64px;
  overflow: hidden;
  /* padding-left: 30px; */
  border: 1px solid black;
}
ul {
  width: 300px;
}
.anim {
  transition: all 0.5s;
  margin-left: -30px;
}
#con1 li {
  float: left;
  list-style: none;
  line-height: 30px;
  height: 30px;
}
</style>
