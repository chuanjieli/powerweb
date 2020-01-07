<template>
  <div id="header">
    <header class="yaq-header">
      <div class="header-main">
        <a id="yunaq-header-logo" class="yunaq-logo" href="https://sec.yunaq.com/" title="知道创宇云安全">
          <img src="../assets/img/logo.png" alt />
        </a>
        <div id="yunaq-menus-wrapper" class="menus-wrapper">
          <ul class="menus-ul">
            <li>
              <a href="javascript:void(0);">产品</a>
              <div class="sub-content">
                <div class="sub-main">
                  <div class="category-group">
                    <a class="category-name" href="javascript:void(0);">云安全</a>
                    <ul>
                      <li class="product-item">
                        <router-link to="/monitor">
                          抗D保
                          <span class="product-desc">(DDoS防御)</span>
                          <i class="tag-img hot">HOT</i>
                        </router-link>
                      </li>

                      <li class="product-item">
                        <router-link to="/cyd">
                          创宇盾
                          <span class="product-desc">(Web应用防火墙)</span>
                          <i class="tag-img hot">HOT</i>
                        </router-link>
                      </li>

                      <li class="product-item">
                        <a href="https://defense.yunaq.com/jsl/">
                          加速乐
                          <span class="product-desc">(安全CDN)</span>
                        </a>
                      </li>

                      <li class="product-item">
                        <a href="https://defense.yunaq.com/sale_ssl/index/">SSL证书</a>
                      </li>

                      <li class="product-item">
                        <a href="https://scanv.yunaq.com/ls/index.html">云漏洞扫描</a>
                      </li>

                      <li class="product-item">
                        <a href="https://defense.yunaq.com/cyjk/">
                          创宇监控
                          <span class="product-desc">(可用性监控)</span>
                        </a>
                      </li>

                      <li class="product-item">
                        <router-link to="/clouddefense">云防御态势感知平台</router-link>
                      </li>
                    </ul>
                  </div>
                  <div class="category-group">
                    <a class="category-name" href="javascript:void(0);">业务安全</a>
                    <ul>
                      <li class="product-item">
                        <a href="https://xinyong.yunaq.com/bsafe/">创宇信用</a>
                      </li>

                      <li class="product-item">
                        <a href="https://defense.yunaq.com/ipv6/">
                          IPv6安全改造服务
                          <i class="tag-img hot">HOT</i>
                        </a>
                      </li>

                      <li class="product-item">
                        <a href="https://defense.yunaq.com/cn2/">
                          海外CN2专线防护
                          <i class="tag-img new">NEW</i>
                        </a>
                      </li>

                      <li class="product-item">
                        <a href="https://defense.yunaq.com/ipkd/">
                          游戏高防
                          <span class="product-desc">(针对高可用性研发)</span>
                        </a>
                      </li>

                      <li class="product-item">
                        <router-link to="/datashield">
                          数据盾
                          <span class="product-desc">(机器流量管控)</span>
                          <i class="tag-img new">NEW</i>
                        </router-link>
                      </li>

                      <li class="product-item">
                        <a href="https://defense.yunaq.com/ymd/">
                          羊毛盾
                          <span class="product-desc">(防刷反欺诈)</span>
                        </a>
                      </li>

                      <li class="product-item">
                        <a href="https://sec.yunaq.com/scuti">盾牌座</a>
                      </li>

                      <li class="product-item">
                        <a href="https://defense.yunaq.com/liefeng/">
                          猎风
                          <span class="product-desc">(威胁感知)</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="category-group">
                    <a class="category-name" href="javascript:void(0);">安全服务</a>
                    <ul>
                      <li class="product-item">
                        <router-link to="/permeate">
                          渗透测试
                          <span class="product-desc">(模拟黑客入侵)</span>
                          <i class="tag-img hot">HOT</i>
                        </router-link>
                      </li>

                      <li class="product-item">
                        <router-link to="/codesj">代码审计</router-link>
                      </li>

                      <li class="product-item">
                        <router-link to="/risk">风险评估</router-link>
                      </li>

                      <li class="product-item">
                        <a href="https://scanv.yunaq.com/yj/index.html">黑客入侵救援</a>
                      </li>

                      <li class="product-item">
                        <!-- <router-link to="/drill">信息安全对抗演习</router-link> -->
                        <a href="https://scanv.yunaq.com/dk/index.html">信息安全对抗演习</a>
                      </li>

                      <li class="product-item">
                        <router-link to="/safetyawareness">
                          信息安全意识培训
                          <i class="tag-img new">NEW</i>
                        </router-link>
                      </li>

                      <li class="product-item">
                        <router-link to="/safetycheck">智能设备安全检测</router-link>
                      </li>
                    </ul>
                  </div>
                  <div class="category-group">
                    <a class="category-name" href="javascript:void(0);">安全运营</a>
                    <ul>
                      <li class="product-item">
                        <router-link to="/zoomeye">
                          ZoomEye BE
                          <span class="product-desc">(资产管理系统)</span>
                        </router-link>
                      </li>

                      <li class="product-item">
                        <a href="https://scanv.yunaq.com/websoc/index.html">
                          WebSOC
                          <span class="product-desc">(网站立体监控)</span>
                          <i class="tag-img hot">HOT</i>
                        </a>
                      </li>

                      <li class="product-item">
                        <a href="https://scanv.yunaq.com/id/threatandlog.html">
                          创宇慧眼
                          <span class="product-desc">(日志分析系统)</span>
                        </a>
                      </li>

                      <li class="product-item">
                        <router-link to="/gpt">安全舆情监测</router-link>
                      </li>

                      <li class="product-item">
                        <router-link to="/monitor">安全事件监控</router-link>
                      </li>
                    </ul>
                  </div>
                  <div class="category-group">
                    <a class="category-name" href="javascript:void(0);">区块链安全</a>
                    <ul>
                      <li class="product-item">
                        <router-link to="/contractsj">
                          智能合约审计
                          <i class="tag-img hot">HOT</i>
                        </router-link>
                      </li>

                      <li class="product-item">
                        <router-link to="/safeaudit">公链安全审计</router-link>
                      </li>

                      <li class="product-item">
                        <a href="https://scanv.yunaq.com/lca/qb.html">钱包安全审计</a>
                      </li>

                      <li class="product-item">
                        <a href="https://defense.yunaq.com/activity/blockchain/#/">区块链安全定制研发</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="javascript:void(0);">解决方案</a>
              <div class="sub-content">
                <div class="sub-main">
                  <div class="category-group">
                    <a class="category-name" href="javascript:void(0);">行业安全解决方案</a>
                    <ul>
                      <li class="product-item">
                        <a href="https://sec.yunaq.com/activity/electronic-business">
                          电商行业
                          <i class="tag-img hot">HOT</i>
                        </a>
                      </li>

                      <li class="product-item">
                        <a href="https://sec.yunaq.com/activity/finance">金融行业</a>
                      </li>

                      <li class="product-item">
                        <a href="https://sec.yunaq.com/activity/education">教育行业</a>
                      </li>

                      <li class="product-item">
                        <a href="https://sec.yunaq.com/activity/live-video">
                          直播行业
                          <i class="tag-img new">NEW</i>
                        </a>
                      </li>

                      <li class="product-item">
                        <a href="https://sec.yunaq.com/activity/chessgame">棋牌游戏行业</a>
                      </li>
                    </ul>
                  </div>
                  <div class="category-group">
                    <a class="category-name" href="https://sec.yunaq.com/activity/digital">区块链安全解决方案</a>
                    <ul>
                      <li class="product-item">
                        <router-link to="/safesolution">区块链安全整体解决方案</router-link>
                      </li>

                      <li class="product-item">
                        <a href="https://sec.yunaq.com/activity/digital/exchange">交易所安全解决方案</a>
                      </li>

                      <li class="product-item">
                        <a href="https://sec.yunaq.com/activity/digital/mining-machine">矿机|矿池安全解决方案</a>
                      </li>

                      <li class="product-item">
                        <a
                          href="https://sec.yunaq.com/activity/digital/hardware-wallet"
                        >硬件钱包安全评级解决方案</a>
                      </li>
                    </ul>
                  </div>
                  <div class="category-group">
                    <a class="category-name" href="javascript:void(0);">安全合规解决方案</a>
                    <ul>
                      <li class="product-item">
                        <router-link to="/protect">等级保护(2.0)安全解决方案</router-link>
                      </li>

                      <li class="product-item">
                        <router-link to="/supervise">公安机关互联网安全监督检查</router-link>
                      </li>
                    </ul>
                  </div>
                  <div class="category-group">
                    <a class="category-name" href="javascript:void(0);">通用安全解决方案</a>
                    <ul>
                      <li class="product-item">
                        <a href="https://sec.yunaq.com/activity/protectionscheme">
                          重要时期网络安全保障方案
                          <i class="tag-img hot">HOT</i>
                        </a>
                      </li>

                      <li class="product-item">
                        <a href="https://sec.yunaq.com/activity/digital/bg-net">办公网络安全解决方案</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="https://sec.yunaq.com/activity">最新活动</a>
              <div class="sub-content">
                <div class="sub-main">
                  <a class="category-root" href="https://sec.yunaq.com/activity">优惠活动</a>
                  <a class="category-root" href="https://sec.yunaq.com/activity?KCSC=true">行业安全会议</a>
                  <a class="category-root" href="https://sec.yunaq.com/activity/support">云创计划</a>
                  <a class="category-root" href="https://sec.yunaq.com/activity/partner">合作伙伴</a>
                </div>
              </div>
            </li>
            <li>
              <a href="https://sec.yunaq.com/case">客户案例</a>
            </li>
            <li>
              <a href="https://sec.yunaq.com/news">新闻中心</a>
              <div class="sub-content">
                <div class="sub-main">
                  <a
                    class="category-root"
                    href="https://sec.yunaq.com/news?menu_type=fixed_product_trends"
                  >产品动态</a>
                  <a
                    class="category-root"
                    href="https://sec.yunaq.com/news?menu_type=fixed_safe_broadcast"
                  >安全播报</a>
                  <a
                    class="category-root"
                    href="https://sec.yunaq.com/news?menu_type=fixed_knownsec_news"
                  >创宇资讯</a>
                  <a
                    class="category-root"
                    href="https://sec.yunaq.com/news?menu_type=fixed_service_bulletin"
                  >服务公告</a>
                  <a
                    class="category-root"
                    href="https://sec.yunaq.com/news?menu_type=5d19ba90aa080300112ddc0e"
                  >技术专栏</a>
                </div>
              </div>
            </li>
            <li>
              <a href="javascript:void(0);">支持</a>
              <div class="sub-content">
                <div class="sub-main">
                  <div class="category-group">
                    <a class="category-name" href="javascript:void(0);">服务支持</a>
                    <ul>
                      <li class="product-item">
                        <a href="https://defense.yunaq.com/tools/ip2address/">管理小工具</a>
                      </li>
                    </ul>
                  </div>
                  <div class="category-group">
                    <a class="category-name" href="javascript:void(0);">帮助与文档</a>
                    <ul>
                      <li class="product-item">
                        <a href="https://sec.yunaq.com/help">帮助</a>
                      </li>

                      <li class="product-item">
                        <a href="https://sec.yunaq.com/news?menu_type=fixed_service_bulletin">公告</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div id="yaq-header-login" class="header-login">
          <div v-if="!user">
            <a class="login-btn" @click="$emit('login',true)">登录</a>
            <!-- <a class="regist-btn">免费注册</a> -->
          </div>
          <div v-else class="logged-wrapper">
            <p class="to-uc">
              <router-link to="/screen">大屏展示</router-link>
            </p>
            <p class="to-uc">
              <a href="https://console.yunaq.com">控制台</a>
            </p>
            <div class="user-info">
              <a>{{user}}</a>
              <img class="user-down-icon" src="../assets/img/down_icon.png" />
              <ul class="ui-sub-content">
                <li>
                  <a href="https://console.yunaq.com/profile/base/">账号中心</a>
                </li>
                <li class="logout-btn">
                  <a @click="$emit('logout')">退出</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  props: {
    user: String
  },
  watch: {
    $route() {
      console.log(111);
    }
  }
};
</script>
<style lang="css" scoped>
.router_active {
  /* color: #ff4d00 !important; */
}
#header {
  position: relative;
  top: 0;
  z-index: 1000;
  width: 100%;
}
.yaq-header {
  width: 100%;
  background: #262b39;
  color: #efefef;
  position: relative;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.yaq-header * {
  margin: 0;
  padding: 0;
  font-size: 14px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.yaq-header .yaq-header-login-modal {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.85);
}

.yaq-header .yaq-header-login-modal > div {
  width: 400px;
  height: 370px;
  background: #fff;
  margin: 10% auto;
}

header.yaq-header a {
  color: #efefef;
  text-decoration: none;
}

.yaq-header li {
  list-style: none;
}

.yaq-header .header-main {
  width: 1150px;
  height: 60px;
  line-height: 60px;
  white-space: nowrap;
  margin: 0 auto;
}

.yaq-header .header-main .yunaq-logo {
  display: inline-block;
  height: 100%;
  vertical-align: top;
}

.yaq-header .header-main .yunaq-logo > img {
  max-width: 200px;
  max-height: 40px;
  vertical-align: middle;
}

.yaq-header .header-main .menus-wrapper {
  font-size: 16px;
  margin-left: 32px;
  height: 100%;
  display: inline-block;
  vertical-align: top;
}

.yaq-header .header-main .menus-wrapper .menus-ul {
  white-space: nowrap;
}

.yaq-header .header-main .menus-wrapper .menus-ul > li {
  display: inline-block;
}

.yaq-header .header-main .menus-wrapper .menus-ul > li > a {
  -webkit-transition: color 0.3s;
  -o-transition: color 0.3s;
  transition: color 0.3s;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  padding: 0 16px;
  min-width: 80px;
  font-size: 16px;
  height: 58px;
}

.yaq-header .header-main .menus-wrapper .menus-ul > li:hover > a {
  color: #108fff;
  border-bottom: 2px solid #108fff;
}

.yaq-header .header-main .menus-wrapper .menus-ul > li .sub-content {
  height: 0;
  background: #262b39;
  position: absolute;
  z-index: 999;
  top: 61px;
  left: 0;
  right: 0;
  line-height: 32px;
  overflow: hidden;
}

.yaq-header .header-main .menus-wrapper .menus-ul > li:hover .sub-content {
  height: auto;
}

.yaq-header .header-main .menus-wrapper .menus-ul > li .sub-content .sub-main {
  display: inline-block;
  margin: 24px 0 24px 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
}

.yaq-header
  .header-main
  .menus-wrapper
  .menus-ul
  > li
  .sub-content
  .category-root {
  color: #aaa;
  font-size: 15px;
  margin-left: 60px;
}

.yaq-header
  .header-main
  .menus-wrapper
  .menus-ul
  > li
  .sub-content
  .category-root:hover {
  color: #108fff;
}

.yaq-header
  .header-main
  .menus-wrapper
  .menus-ul
  > li
  .sub-content
  .category-group {
  width: 210px;
  vertical-align: top;
  display: inline-block;
}

.yaq-header
  .header-main
  .menus-wrapper
  .menus-ul
  > li
  .sub-content
  .category-group
  .category-name {
  font-size: 16px;
  cursor: auto;
}

.yaq-header
  .header-main
  .menus-wrapper
  .menus-ul
  > li
  .sub-content
  .category-group
  .product-item {
  font-size: 14px;
}

.yaq-header
  .header-main
  .menus-wrapper
  .menus-ul
  > li
  .sub-content
  .category-group
  .product-item
  a {
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
  color: #aaa;
  line-height: 32px;
}

.yaq-header .header-main .menus-wrapper .menus-ul > li i.tag-img {
  display: inline-block;
  vertical-align: middle;
  font-weight: bold;
  margin-left: 4px;
}

.yaq-header .header-main .menus-wrapper .menus-ul > li i.tag-img.hot {
  color: #ff4d00;
}

.yaq-header .header-main .menus-wrapper .menus-ul > li i.tag-img.new {
  color: #48b1f3;
}

.yaq-header
  .header-main
  .menus-wrapper
  .menus-ul
  > li
  .sub-content
  .category-group
  .product-item
  a
  .product-desc {
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
  color: #777;
  vertical-align: middle;
}

.yaq-header
  .header-main
  .menus-wrapper
  .menus-ul
  > li
  .sub-content
  .category-group
  .product-item
  a:hover,
.yaq-header
  .header-main
  .menus-wrapper
  .menus-ul
  > li
  .sub-content
  .category-group
  .product-item
  a:hover
  .product-desc {
  color: #108fff;
}

.yaq-header .header-main .header-login {
  font-size: 14px;
  float: right;
  vertical-align: top;
}

/*  loginÏ */
.yaq-header .header-main .header-login .login-btn {
  padding: 5px;
  margin-right: 5px;
  cursor: pointer;
}

.yaq-header .header-main .header-login .regist-btn {
  cursor: pointer;
  text-align: center;
  height: 100%;
  display: inline-block;
  width: 133px;
  background: #0a9efa;
}

.yaq-header .header-main .header-login .logged-wrapper .to-uc {
  display: inline-block;
  padding-left: 10px;
}

.yaq-header .header-main .header-login .logged-wrapper .to-uc:after {
  display: inline-block;
  content: "";
  height: 16px;
  width: 0;
  border-right: 1px solid #eee;
  vertical-align: middle;
  margin-left: 16px;
}

.yaq-header .header-main .header-login .logged-wrapper .user-info {
  position: relative;
  display: inline-block;
  padding: 0 8px;
}

.yaq-header
  .header-main
  .header-login
  .logged-wrapper
  .user-info
  .user-down-icon {
  width: 12px;
  vertical-align: 2px;
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  transition: all 0.4s;
  margin-left: 3px;
}

.yaq-header
  .header-main
  .header-login
  .logged-wrapper
  .user-info
  .ui-sub-content {
  z-index: 9999;
  position: absolute;
  top: 60px;
  background: rgb(37, 43, 56);
  padding: 0;
  line-height: 28px;
  border-radius: 3px;
  -webkit-box-shadow: 0 0 2px 0 #bdbdbd;
  box-shadow: 0 0 2px 0 #bdbdbd;
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  transition: all 0.4s;

  visibility: hidden;
  right: -20px;
  opacity: 0;
}

.yaq-header
  .header-main
  .header-login
  .logged-wrapper
  .user-info:hover
  .ui-sub-content {
  visibility: visible;
  right: 0;
  opacity: 1;
}

.yaq-header
  .header-main
  .header-login
  .logged-wrapper
  .user-info:hover
  .user-down-icon {
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
}

.yaq-header
  .header-main
  .header-login
  .logged-wrapper
  .user-info
  .ui-sub-content
  > li {
  padding: 4px 24px;
  border-radius: 3px;
  cursor: pointer;
  font-size: 13px;
}

.yaq-header
  .header-main
  .header-login
  .logged-wrapper
  .user-info
  .ui-sub-content
  > li:hover {
  background: rgba(255, 255, 255, 0.1);
}

.yaq-header
  .header-main
  .header-login
  .logged-wrapper
  .user-info
  .ui-sub-content
  > li
  a {
  color: #eee;
}
</style>
