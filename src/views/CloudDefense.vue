<template>
  <div>
    <div class="mian">
      <div class="banner">
        <div class="banner_wrapper">
          <div class="text_wrapper">
            <h2>云防御态势感知指挥平台</h2>
            <p>云防御态势感知指挥平台是知道创宇积累多年经验推出的大数据可视化威胁分析系统，是基于创宇盾、加速乐、抗D保等防御体系构建而成，侧重数据可视化，支持多级数据钻取，支持源数据多角度展示，做到“看得见、看得清”，真正实现知己知彼，百战不殆。</p>
            <a class="button_map consult_bt" title="立即咨询">立即咨询</a>
          </div>
          <div id="path_icon1"></div>
          <div id="path_icon2"></div>
          <div id="path_icon3"></div>
          <div id="path_icon4"></div>
          <div id="path_icon5"></div>
          <div id="path_icon6"></div>
          <div class="shadow"></div>
        </div>
      </div>
      <div class="content">
        <div class="advantages_wrapper">
          <div class="advantages">
            <h3>看得清、防得住、追得到</h3>
            <ul class="cf">
              <li>
                <div class="img_wrapper">
                  <img src="../assets/img/clouddefense/advantage_1.png" alt="全屏强交互" />
                </div>
                <h4>全屏强交互</h4>
                <p>
                  由完整态势到问题分类再到原始基础
                  <br />数据，人工互动追溯线索，逐步点触
                  <br />屏幕落实数据，具有强烈的场景感。
                </p>
              </li>
              <li>
                <div class="img_wrapper">
                  <img src="../assets/img/clouddefense/advantage_2.png" alt="数据钻取" />
                </div>
                <h4>数据钻取</h4>
                <p>
                  数据按照地理位置、攻击类型进行多
                  <br />层级展示，保证数据来源的可追溯性
                  <br />和数据的真实性。
                </p>
              </li>
              <li>
                <div class="img_wrapper">
                  <img src="../assets/img/clouddefense/advantage_3.png" alt="数据可视化" />
                </div>
                <h4>数据可视化</h4>
                <p>
                  使用直观丰富的图形进行分析，包括
                  <br />饼图、柱图、折线图等，结合GIS系
                  <br />统将隐含在数据中的问题可视化。
                </p>
              </li>
              <li>
                <div class="img_wrapper">
                  <img src="../assets/img/clouddefense/advantage_4.png" alt="多维度趋势呈现" />
                </div>
                <h4>多维度趋势呈现</h4>
                <p>
                  按照攻击地域、攻击类型、攻击IP、
                  <br />攻击域名、防御过程、防御结果等进
                  <br />行多维度安全态势展示。
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div class="description_wrapper">
          <div class="description">
            <h3>多角度解析安全态势</h3>
            <div class="title" id="title">
              <ul class="cf">
                <li class="active">
                  <div class="pic"></div>
                  <h4>业务系统整体安全态势</h4>
                </li>
                <li>
                  <div class="pic"></div>
                  <h4>业务系统防御态势</h4>
                </li>
                <li>
                  <div class="pic"></div>
                  <h4>业务系统攻击态势</h4>
                </li>
                <li>
                  <div class="pic"></div>
                  <h4>业务系统溯源态势</h4>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="pic_main" id="pic_main">
          <ul>
            <li>
              <p>整体安全态势，通过三维立体与二位平面地图两种展示方式，感知整体安全态势，包括攻击分布、攻击来源及防御部署情况等。</p>
              <img src="../assets/img/clouddefense/desc_main_min_1.png" alt="Web系统整体安全态势" />
            </li>
            <li class="hide">
              <p>将业务系统防护状态一一展现，对防护状态信息进行数据钻取，最终落实到实际站点。</p>
              <img src="../assets/img/clouddefense/desc_main_min_2.png" alt="Web系统防御态势" />
            </li>
            <li class="hide">
              <p>提供攻击详情，包括整体拦截情况以及不同攻击类型的对比趋势，方便管理者多方位感知站群安全状况。</p>
              <img src="../assets/img/clouddefense/desc_main_min_3.png" alt="Web系统攻击态势" />
            </li>
            <li class="hide">
              <p>通过攻击源IP、HTTP请求详情、攻击请求的详细内容等，对攻击者进行画像和来源追溯。</p>
              <img src="../assets/img/clouddefense/desc_main_min_4.png" alt="Web系统溯源态势" />
            </li>
          </ul>
        </div>
        <div class="deploy_wrapper">
          <div class="deploy">
            <h3>部署方式</h3>
            <div class="pic_d dib vat">
              <img src="../assets/img/clouddefense/deploy.png" alt="部署方式" />
            </div>
            <div class="dib vat">
              <ul>
                <li>
                  <h4>支持方式</h4>
                  <p>本地部署和云端部署。</p>
                </li>
                <li>
                  <h4>数据引擎</h4>
                  <p>接受大数据端推送数据、将远端推送数据进行整理展现，进行多级数据钻取。</p>
                </li>
                <li>
                  <h4>大数据端推送数据服务</h4>
                  <p>由知道创宇云安全大数据分析系统对所属数据进行分析和远端数据推送。</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
export default {
  mounted() {
    var i,
      s = $('#title').find('li'),
      d = $('#pic_main').find('li'),
      l = 0

    function n() {
      i = setInterval(function() {
        3 < (l += 1) && (l = 0),
          s.removeClass('active'),
          s.eq(l).addClass('active'),
          d.addClass('hide'),
          d.eq(l).removeClass('hide')
      }, 5e3)
    }
    s.on('click', function() {
      var e = $(this),
        a = e.index()
      ;(l = a),
        s.removeClass('active'),
        e.addClass('active'),
        d.addClass('hide'),
        d.eq(a).removeClass('hide'),
        clearInterval(i),
        n()
    }),
      n()
  }
}
</script>
<style lang="css" scoped>
* {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

#inner {
  width: 1151px;
  margin: 0 auto;
}

#h3_title {
  line-height: 40px;
  font-size: 28px;
  color: #333;
  padding-top: 53px;
  padding-bottom: 60px;
  text-align: center;
}

.banner {
  height: 380px;
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#151520),
    color-stop(32%, #222434),
    color-stop(66%, #33344d),
    to(#232538)
  );
  background-image: linear-gradient(
    90deg,
    #151520 0,
    #222434 32%,
    #33344d 66%,
    #232538 100%
  );
}

.banner .banner_wrapper {
  position: relative;
  height: 380px;
  width: 1151px;
  margin: 0 auto;
  background-image: url(../assets/img/clouddefense/banner_bg.png);
  background-position: right center;
  background-repeat: no-repeat;
  background-size: contain;
}

.banner .banner_wrapper .text_wrapper {
  padding-top: 63px;
  color: #fff;
}

.banner .banner_wrapper .text_wrapper h2 {
  font-size: 32px;
  margin-bottom: 16px;
  line-height: 45px;
}

.banner .banner_wrapper .text_wrapper p {
  width: 450px;
  line-height: 24px;
  margin-bottom: 28px;
}

.banner .banner_wrapper .text_wrapper .button_map {
  display: inline-block;
  color: #fff;
  width: 104px;
  height: 40px;
  background-image: linear-gradient(162deg, #6378f7 0, #34b5ee 100%);
  border-radius: 2px;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
}

.banner .banner_wrapper .text_wrapper .button_map:hover {
  background-image: linear-gradient(162deg, #34b5ee 0, #6378f7 100%);
}

.banner .banner_wrapper #path_icon1 {
  width: 74px;
  height: 14px;
  background: url(../assets/img/clouddefense/path_pic.png) -10px -10px;
  position: absolute;
  -webkit-animation: move1 2s ease;
  animation: move1 2s ease;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes move1 {
  0% {
    top: 114px;
    left: 600px;
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  60% {
    opacity: 0.6;
  }
  80% {
    top: 168px;
    left: 915px;
    opacity: 0;
  }
  100% {
    top: 168px;
    left: 915px;
    opacity: 0;
  }
}

@keyframes move1 {
  0% {
    top: 114px;
    left: 600px;
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  60% {
    opacity: 0.6;
  }
  80% {
    top: 168px;
    left: 915px;
    opacity: 0;
  }
  100% {
    top: 168px;
    left: 915px;
    opacity: 0;
  }
}

.banner .banner_wrapper #path_icon2 {
  width: 63px;
  height: 2px;
  background: url(../assets/img/clouddefense/path_pic.png) -10px -69px;
  position: absolute;
  -webkit-animation: move2 5s ease;
  animation: move2 5s ease;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-delay: 2s;
  animation-delay: 2s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes move2 {
  0% {
    top: 178px;
    left: 530px;
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  60% {
    opacity: 0.6;
  }
  80% {
    top: 180px;
    left: 920px;
    opacity: 0;
  }
  100% {
    top: 180px;
    left: 920px;
    opacity: 0;
  }
}

@keyframes move2 {
  0% {
    top: 178px;
    left: 530px;
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  60% {
    opacity: 0.6;
  }
  80% {
    top: 180px;
    left: 920px;
    opacity: 0;
  }
  100% {
    top: 180px;
    left: 920px;
    opacity: 0;
  }
}

.banner .banner_wrapper #path_icon3 {
  width: 73px;
  height: 5px;
  background: url(../assets/img/clouddefense/path_pic.png) -10px -44px;
  position: absolute;
  -webkit-animation: move3 4s ease;
  animation: move3 4s ease;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-delay: 3.5s;
  animation-delay: 3.5s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes move3 {
  0% {
    top: 163px;
    left: 600px;
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  60% {
    opacity: 0.6;
  }
  80% {
    top: 177px;
    left: 910px;
    opacity: 0;
  }
  100% {
    top: 177px;
    left: 910px;
    opacity: 0;
  }
}

@keyframes move3 {
  0% {
    top: 163px;
    left: 600px;
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  60% {
    opacity: 0.6;
  }
  80% {
    top: 177px;
    left: 910px;
    opacity: 0;
  }
  100% {
    top: 177px;
    left: 910px;
    opacity: 0;
  }
}

.banner .banner_wrapper #path_icon4 {
  width: 27px;
  height: 12px;
  background: url(../assets/img/clouddefense/path_pic.png) -104px -10px;
  position: absolute;
  -webkit-animation: move4 4s ease;
  animation: move4 4s ease;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-delay: 0.8s;
  animation-delay: 0.8s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes move4 {
  0% {
    top: 290px;
    left: 811px;
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  60% {
    opacity: 0.6;
  }
  80% {
    top: 190px;
    left: 951px;
    opacity: 0;
  }
  100% {
    top: 190px;
    left: 951px;
    opacity: 0;
  }
}

@keyframes move4 {
  0% {
    top: 290px;
    left: 811px;
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  60% {
    opacity: 0.6;
  }
  80% {
    top: 190px;
    left: 951px;
    opacity: 0;
  }
  100% {
    top: 190px;
    left: 951px;
    opacity: 0;
  }
}

.banner .banner_wrapper #path_icon5 {
  width: 16px;
  height: 13px;
  background: url(../assets/img/clouddefense/path_pic.png) -10px -91px;
  position: absolute;
  -webkit-animation: move5 0.8s ease;
  animation: move5 0.8s ease;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-delay: 0.5s;
  animation-delay: 0.5s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes move5 {
  0% {
    top: 158px;
    left: 1006px;
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  60% {
    opacity: 0.6;
  }
  80% {
    top: 169px;
    left: 991px;
    opacity: 0;
  }
  100% {
    top: 169px;
    left: 991px;
    opacity: 0;
  }
}

@keyframes move5 {
  0% {
    top: 158px;
    left: 1006px;
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  60% {
    opacity: 0.6;
  }
  80% {
    top: 169px;
    left: 991px;
    opacity: 0;
  }
  100% {
    top: 169px;
    left: 991px;
    opacity: 0;
  }
}

.banner .banner_wrapper #path_icon6 {
  width: 21px;
  height: 3px;
  background: url(../assets/img/clouddefense/path_pic.png) -46px -91px;
  position: absolute;
  -webkit-animation: move6 1s ease;
  animation: move6 1s ease;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes move6 {
  0% {
    top: 183px;
    left: 1023px;
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  60% {
    opacity: 0.6;
  }
  80% {
    top: 182px;
    left: 990px;
    opacity: 0;
  }
  100% {
    top: 182px;
    left: 990px;
    opacity: 0;
  }
}

@keyframes move6 {
  0% {
    top: 183px;
    left: 1023px;
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  60% {
    opacity: 0.6;
  }
  80% {
    top: 182px;
    left: 990px;
    opacity: 0;
  }
  100% {
    top: 182px;
    left: 990px;
    opacity: 0;
  }
}

.banner .banner_wrapper .shadow {
  position: absolute;
  top: 179px;
  left: 989px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: transparent;
  -webkit-box-shadow: 0 0 40px 40px #ff9a7c;
  box-shadow: 0 0 40px 40px #ff9a7c;
  opacity: 0.1;
  -webkit-animation: shadow 1.5s ease;
  animation: shadow 1.5s ease;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-direction: alternate;
  animation-direction: alternate;
}

@-webkit-keyframes shadow {
  from {
    opacity: 0.1;
    -webkit-box-shadow: 0 0 20px 20px #ff9a7c;
    box-shadow: 0 0 20px 20px #ff9a7c;
  }
  to {
    opacity: 0.25;
    -webkit-box-shadow: 0 0 40px 40px #ff9a7c;
    box-shadow: 0 0 40px 40px #ff9a7c;
  }
}

@keyframes shadow {
  from {
    opacity: 0.1;
    -webkit-box-shadow: 0 0 20px 20px #ff9a7c;
    box-shadow: 0 0 20px 20px #ff9a7c;
  }
  to {
    opacity: 0.25;
    -webkit-box-shadow: 0 0 40px 40px #ff9a7c;
    box-shadow: 0 0 40px 40px #ff9a7c;
  }
}

.advantages_wrapper {
  height: 568px;
  border-bottom: 1px solid #e0e0e0;
}

.advantages_wrapper .advantages {
  width: 1151px;
  margin: 0 auto;
  text-align: center;
}

.advantages_wrapper .advantages h3 {
  line-height: 40px;
  font-size: 28px;
  color: #333;
  padding-top: 53px;
  padding-bottom: 60px;
  text-align: center;
}

.advantages_wrapper .advantages li {
  width: 270px;
  height: 331px;
  background-color: #fff;
  -webkit-box-shadow: 0 2px 35px 0 rgba(0, 0, 0, 0.13);
  box-shadow: 0 2px 35px 0 rgba(0, 0, 0, 0.13);
  border-radius: 2px;
  border: solid 1px #ededed;
  float: left;
  text-align: center;
}

.advantages_wrapper .advantages li:not(:last-child) {
  margin-right: 20px;
}

.advantages_wrapper .advantages li .img_wrapper {
  height: 92px;
  padding: 40px 0 34px;
}

.advantages_wrapper .advantages li .img_wrapper img {
  position: relative;
  top: 46px;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}

.advantages_wrapper .advantages li h4 {
  line-height: 25px;
  font-size: 18px;
  color: #333;
  text-align: center;
}

.advantages_wrapper .advantages li p {
  padding: 22px 19px 0 21px;
  text-align: left;
}

.description_wrapper .description {
  width: 1151px;
  margin: 0 auto;
}

.description_wrapper .description h3 {
  line-height: 40px;
  font-size: 28px;
  color: #333;
  padding-top: 53px;
  padding-bottom: 60px;
  text-align: center;
}

.description_wrapper .description .title {
  padding-bottom: 20px;
}

.description_wrapper .description .title li {
  float: left;
  cursor: pointer;
}

.description_wrapper .description .title li h4 {
  font-size: 18px;
  line-height: 24px;
  color: #333;
  padding-top: 15px;
}

.description_wrapper .description .title li .pic {
  margin: 0 auto;
}

.description_wrapper .description .title li:nth-of-type(1) {
  width: 182px;
  margin-right: 160px;
}

.description_wrapper .description .title li:nth-of-type(1) .pic {
  width: 38px;
  height: 36px;
  background: url(../assets/img/clouddefense/desc_icons.png) -68px -10px;
}

.description_wrapper .description .title li:nth-of-type(2) {
  width: 146px;
  margin-right: 168px;
}

.description_wrapper .description .title li:nth-of-type(2) .pic {
  width: 28px;
  height: 31px;
  margin-bottom: 5px;
  background: url(../assets/img/clouddefense/desc_icons.png) -58px -121px;
}

.description_wrapper .description .title li:nth-of-type(3) {
  width: 146px;
  margin-right: 185px;
}

.description_wrapper .description .title li:nth-of-type(3) .pic {
  width: 36px;
  height: 35px;
  margin-bottom: 1px;
  background: url(../assets/img/clouddefense/desc_icons.png) -66px -66px;
}

.description_wrapper .description .title li:nth-of-type(4) {
  width: 146px;
}

.description_wrapper .description .title li:nth-of-type(4) .pic {
  width: 39px;
  height: 32px;
  margin-bottom: 4px;
  background: url(../assets/img/clouddefense/desc_icons.png) -126px -62px;
}

.description_wrapper .description .title li:nth-of-type(1).active .pic {
  background: url(../assets/img/clouddefense/desc_icons.png) -10px -10px;
}

.description_wrapper .description .title li:nth-of-type(2).active .pic {
  background: url(../assets/img/clouddefense/desc_icons.png) -10px -121px;
}

.description_wrapper .description .title li:nth-of-type(3).active .pic {
  background: url(../assets/img/clouddefense/desc_icons.png) -10px -66px;
}

.description_wrapper .description .title li:nth-of-type(4).active .pic {
  background: url(../assets/img/clouddefense/desc_icons.png) -126px -10px;
}

.pic_main {
  background-color: #f9f9f9;
}

.pic_main ul {
  width: 1151px;
  margin: 0 auto;
  text-align: center;
  padding-top: 46px;
}

.pic_main ul p {
  color: #333;
  font-size: 16px;
  line-height: 30px;
  margin-bottom: 20px;
}

.deploy {
  width: 1151px;
  margin: 0 auto;
  padding-bottom: 70px;
}

.deploy h3 {
  line-height: 40px;
  font-size: 28px;
  color: #333;
  padding-top: 53px;
  padding-bottom: 60px;
  text-align: center;
}

.deploy .pic_d {
  margin-right: 138px;
}

.deploy li h4 {
  line-height: 22px;
  font-size: 16px;
  color: #333;
}

.deploy li p {
  line-height: 24px;
  color: #333;
}

.deploy li:not(:last-child) {
  margin-bottom: 20px;
}

body,
button,
code,
input,
pre,
select,
textarea {
  font: 14px/20px PingFangSC-Light, 'helvetica neue', 'hiragino sans gb', arial,
    'microsoft yahei ui', 'microsoft yahei', simsun, sans-serif;
  color: #666;
}

a {
  color: #007aff;
  text-decoration: none;
}

#page {
  min-height: 100%;
  _height: 100%;
  margin-bottom: -245px;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

fieldset,
img {
  border: 0;
}

a,
button {
  cursor: pointer;
}

li {
  list-style: none;
}

li {
  _vertical-align: top;
}

.dib {
  display: inline-block;
}

.vat {
  vertical-align: top;
}

.cf,
.clearfix,
.inl,
.inl-a {
  *zoom: 1;
}

.cf:after,
.cf:before,
.clearfix:after,
.clearfix:before,
.inl-a:after,
.inl-a:before,
.inl:after,
.inl:before {
  display: table;
  content: '';
}

.cf:after,
.clearfix:after,
.inl-a:after,
.inl:after {
  clear: both;
  overflow: hidden;
}

.hide {
  display: none;
}
</style>