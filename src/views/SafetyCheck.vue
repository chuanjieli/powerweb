<template>
  <div>
    <div class="banner" id="top">
      <div class="bannertext">
        <h2>
          <img src="../assets/img/safetycheck/wlgm_banner.png" />
        </h2>
        <span>智能设备安全检测</span>
        <span>针对目前智能设备产品知道创宇推出智能设备行业安全解决方案，依托产品的“云管端”模式，从感知层、传输层、应用层三个方面入手，为智能设备生产厂商建立完整的解决方案，避免消费者对智能设备产品安全性的担忧。</span>
        <a
          href="http://q.url.cn/CD5hHP?_type=wpa&qidian=true"
          target="_blank"
          data-agl-cvt="32"
        >立即咨询</a>
      </div>
    </div>
    <div class="main">
      <div class="mb" id="goto1">
        <div class="bigtitle wow fadeInUp">
          <h2>智能设备安全现状</h2>
        </div>
        <ul class="problem wow fadeInUp">
          <li>
            <img src="../assets/img/safetycheck/sb_01.png" />
            <h4>网络摄像头登录绕过</h4>
            <span>某公司旗下的高清网络摄像头和Wi-Fi门铃iDoorbell等设备存在多个缓冲区溢出漏洞，十几万暴漏在公网上的相关设备受到潜在的安全威胁。</span>
          </li>
          <li>
            <img src="../assets/img/safetycheck/sb_02.png" />
            <h4>攻击导致区域断电事故</h4>
            <span>攻击者使用附带有恶意代码的Excel邮件附件渗透了某电网工作站人员系统，向电网网络植入了BlackEnergy恶意软件，获得对发电系统的远程接入和控制能力。</span>
          </li>
        </ul>
        <div class="clearbox"></div>
      </div>
      <div class="mb" id="goto2">
        <div class="bigtitle wow fadeInUp">
          <h2>智能设备安全挑战与威胁</h2>
          <span>消费者对智能设备安全性的不信任导致在智能设备大力发展的当下，市场占有率提升幅度较低，速度较慢。</span>
        </div>
        <ul class="solution">
          <li class="wow fadeInUp">
            <img src="../assets/img/safetycheck/sb_03.png" />
            <h4>感知层威胁</h4>
            <span>伪造或假冒攻击、信息泄露与干扰、资源消耗攻击、信息窃取攻击。</span>
          </li>
          <li class="left_40 wow fadeInUp">
            <img src="../assets/img/safetycheck/sb_04.png" />
            <h4>传输层威胁</h4>
            <span>拒绝服务攻击、假冒基站攻击、协议自身缺陷攻击。</span>
          </li>
          <li class="left_40 wow fadeInUp">
            <img src="../assets/img/safetycheck/sb_05.png" />
            <h4>应用层威胁</h4>
            <span id="ability">组件服务缺陷攻击、恶意代码攻击、破坏数据融合攻击、错乱定位服务攻击、篡改数据的重编程攻击、破坏隐藏位置目标攻击。</span>
          </li>
        </ul>
        <div class="clearbox"></div>
      </div>
      <div class="mb" id="goto03">
        <div class="bigtitle wow fadeInUp">
          <h2>智能设备安全解决方案</h2>
        </div>
        <ul class="problem wow fadeInUp">
          <img class="telimg" src="../assets/img/safetycheck/sb_06.png" />
        </ul>
        <div class="clearbox"></div>
      </div>

      <div class="mb" id="goto5">
        <div class="bigtitle wow fadeInUp">
          <h2>客户收益</h2>
        </div>
        <ul class="solution">
          <li class="wow fadeInUp">
            <img src="../assets/img/safetycheck/sb_07.png" />
            <h4>提升品牌可信度</h4>
            <span>出具权威的安全报告，帮助企业发现自身产品安全问题。提高用户对产品的信心，增加用户信任度。</span>
          </li>
          <li class="left_40 wow fadeInUp">
            <img src="../assets/img/safetycheck/sb_08.png" />
            <h4>提升市场竞争力</h4>
            <span>出具权威安全证书，国内知名安全厂商提供信任背书，提升品牌在业内的竞争力，让消费者多一个购买的理由。</span>
          </li>
          <li class="left_40 wow fadeInUp">
            <img src="../assets/img/safetycheck/sb_09.png" />
            <h4>避免企业损失</h4>
            <span id="ability">通过安全检测，提前规避安全风险。避免发生重大安全事件后给企业带来的名誉折扣、品牌失信以及财产安全损失。</span>
          </li>
        </ul>
        <div class="clearbox"></div>
      </div>
      <div class="mb" id="goto6">
        <div class="bigtitle wow fadeInUp">
          <h2>联系我们</h2>
        </div>
        <ul class="problem2">
          <a href="tel:4008331123">400-833-1123</a>
          <br />
          <br />工作日:10:00-18:00
        </ul>
        <div class="clearbox"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { WOW } from 'wowjs'
export default {
  mounted() {
    new WOW().init()
  }
}
</script>
<style lang="css" scoped>
.bigtitle {
  text-align: center;
}
h2 {
  padding: 10px 0;
}
ul,
li {
  padding: 0px;
  list-style: none;
  margin: 0px;
}

a {
  text-decoration: none;
  cursor: pointer;
  color: inherit;
  color: #cfa972;
  border: none;
}

.clearbox {
  clear: both;
  width: 0px;
  height: 0px;
  overflow: hidden;
  display: block;
}

.banner {
  position: relative;
  width: 100%;
  height: 515px;
  box-sizing: border-box;
  text-align: center;
  z-index: 3;
  background: url(../assets/img/safetycheck/banner_qb.jpg) center 0px;
}

.banner .bannertext {
  display: block;
  width: 340px;
  text-align: left;
  font-size: 14px;
  font-weight: 300;
  margin: 0 auto;
}

.banner h2 {
  display: inline-block;
  font-size: 48px;
  width: 300px;
  text-align: center;
  font-weight: 300;
  padding: 50px 0px 0px 0px;
  margin: 0px auto;
}

.banner .bannertext span {
  display: block;
  width: 300px;
  text-align: justify;
  color: #a7937c;
  margin: 0px auto;
  margin-bottom: 10px;
}

.banner .bannertext a {
  display: block;
  width: 298px;
  height: 42px;
  line-height: 42px;
  text-align: center;
  background: none;
  color: #a7937c;
  border-radius: 4px;
  margin: 10px auto;
  border: 1px solid #a7937c;
}

.main {
  position: relative;
  background: #ffffff;
  z-index: 1;
  width: 100%;
}

.problem,
.audit,
.solution,
.solution2,
.contact,
.process,
.case,
.problem2,
.contact_type {
  width: 980px;
  margin: 0px auto;
  margin-top: 40px;
}

.problem {
  text-align: center;
}

.problem li {
  width: 400px;
  list-style: none;
  text-align: center;
  display: inline-block;
}

.problem li img {
  margin: 0 auto;
}

.problem li h4 {
  width: 298px;
  font-size: 16px;
  color: #222;
  margin: 0px auto;
  font-weight: 400;
}

.problem li span {
  display: block;
  width: 298px;
  margin: 16px auto;
  color: #333333;
  text-align: justify;
  font-weight: 300;
}

.left_26 {
  margin-left: 26px;
}

.left_40 {
  margin-left: 40px;
}

.left_60 {
  margin-left: 60px;
}

.mb {
  padding-bottom: 60px;
  border-bottom: 1px solid #ccc;
}

.solution {
  clear: both;
  padding-top: 0px;
}

.solution li {
  text-align: center;
  width: 300px;
  float: left;
  list-style: none;
  box-sizing: border-box;
  padding-top: 0px;
}

.solution li:hover img {
  transform: rotate(5deg);
  -ms-transform: rotate(5deg);
  -moz-transform: rotate(5deg);
  -webkit-transform: rotate(5deg);
  -o-transform: rotate(5deg);
}

.solution li h4 {
  width: 198px;
  font-size: 18px;
  color: #222;
  margin: 0px auto;
  font-weight: 400;
}

.solution li span {
  display: block;
  width: 198px;
  margin: 12px auto;
  color: #222;
  text-align: justify;
  font-weight: 300;
}

.problem2 {
  text-align: center;
}

.problem2 a {
  margin: 0 auto;
  font-size: 22px;
  color: #222222;
  padding: 0px;
  margin: 0px;
  font-weight: 500;
  display: inline-block;
  border: #bfbfbf 2px solid;
  width: 260px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-radius: 25px;
}
</style>