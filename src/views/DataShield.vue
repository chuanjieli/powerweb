<template>
  <div>
    <div class="banner">
      <div class="banner_box">
        <h2>数据盾（机器流量管控）</h2>
        <p>数据盾是基于知道创宇云防御安全大数据平台推出的机器流量管控服务，针对恶意爬虫、自动化工具，实时监测并进行态势分析，定制多种贴合业务实际场景的防护治理策略，降低恶意机器流量对网站业务的影响，提升安全性和稳定性。</p>
        <a title="立即咨询" class="consult_bt">立即咨询</a>
      </div>
    </div>
    <div class="Problem">
      <div class="Problem_box">
        <h2>警惕！恶意爬虫正在侵蚀你的数据主权</h2>
        <ul>
          <li>
            <h3>窃取核心内容</h3>
            <p>网络爬虫的背后一般都隐含着某些商业因素，例如：电商类网站被竞争对手爬取商品信息及价格、数据查询类网站被批量查询数据等。</p>
          </li>
          <li>
            <h3>消耗大量资源</h3>
            <p>网络爬虫自动化访问网站，短时间内可发起大量请求，极大消耗服务器带宽和性能，影响访客的正常使用，甚至造成业务不可用。</p>
          </li>
          <li>
            <h3>影响搜索引擎收录</h3>
            <p>网站最新内容被同行爬取并更新在自己网站上，导致很多网站有相同内容，影响搜索引擎收录，致使网站SEO失去核心竞争力。</p>
          </li>
          <li>
            <h3>暴露网站敏感信息</h3>
            <p>网络爬虫360度无死角的爬取网站信息，通常可以发现一些网站的敏感内容或者漏洞，从而影响网站本身的安全。</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="Profeat">
      <div class="Profeat_box">
        <h2 class="Profeat_title">解惑：数据盾如何治理恶意网络爬虫</h2>
        <ul>
          <li>
            <div>
              <h3>基础反爬</h3>
              <p>针对明显具有爬虫特征的访问请求进行拦截，如HTTP请求头部中包含各种编程语言特征的请求。该反爬技术主要应用于简单爬虫，可有效拦截掉大量基础爬虫的访问请求。</p>
            </div>
          </li>
          <li>
            <div>
              <h3>人机识别</h3>
              <p>对请求来源进行精准指纹识别和执行环境识别，阻断大部分机器流量。该反爬技术主要应用于高级爬虫，可以拦截掉大量高级爬虫请求，并增加爬虫的爬取成本。</p>
            </div>
          </li>
          <li>
            <div>
              <h3>智能业务管控</h3>
              <p>针对网站的各类业务场景进行访问管控，降低爬虫爬取数据的速度，并识别、阻断恶意爬虫，有效避免带宽和性能消耗，大幅减少网络爬虫爬取的数据量。</p>
            </div>
          </li>
          <li>
            <div>
              <h3>访问屏蔽</h3>
              <p>对检测到具有攻击行为或恶意自动化访问行为的IP进行动态访问屏蔽，在屏蔽时间范围内对该恶意IP的访问行为进行阻断，有效降低恶意机器流量的访问比例，提升业务稳定性。</p>
            </div>
          </li>
          <li>
            <div>
              <h3>海量动态黑数据标记</h3>
              <p>对云防御安全大数据平台（GAC）产出的威胁情报和404实验室-Zoomeye提供的风险IP库中的黑数据进行标记，通过动态协同防御机制阻断此类IP的访问行为。</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="system">
      <div class="system_box">
        <h2>安心：专属服务保障体系</h2>
        <ul>
          <li>
            <h3>量身定制反爬策略</h3>
            <p>依托云防御安全大数据平台的海量对抗样本，为用户量身定制专业的反爬策略。</p>
          </li>
          <li>
            <h3>多种治理措施并行</h3>
            <p>根据网站访问情况进行多项治理措施，有效抵御绝大部分恶意机器流量。</p>
          </li>
          <li>
            <h3>详细爬虫分析报告</h3>
            <p>专人跟进用户网站的机器流量访问情况，提供丰富、详细的恶意爬虫分析报告。</p>
          </li>
          <li>
            <h3>专业技术服务</h3>
            <p>安全专家团队具有丰富的机器流量对抗经验，针对不同类型的客户提供技术指导。</p>
          </li>
          <li>
            <h3>接入流程简单</h3>
            <p>无需改动网站源代码，简单配置域名接入即可使用数据盾产品服务。</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style lang="css" scoped>
.banner {
  height: 379px;
  background-image: -webkit-gradient(
    linear,
    right top,
    left top,
    from(#1f313f),
    color-stop(40%, #273e52),
    to(#08121a)
  );
  background-image: linear-gradient(
    -90deg,
    #1f313f 0,
    #273e52 40%,
    #08121a 100%
  );
}

.banner .banner_box {
  width: 1152px;
  height: 100%;
  margin: 0 auto;
  background: url(../assets/img/datashield/banner.png) center right no-repeat;
}

.banner .banner_box h2 {
  font-size: 32px;
  color: #fff;
  padding-top: 69px;
  margin-bottom: 20px;
  line-height: 45px;
}

.banner .banner_box p {
  font-size: 14px;
  color: #fff;
  line-height: 24px;
  margin-bottom: 35px;
  width: 495px;
}

.banner .banner_box a {
  background-color: #157193;
  border-radius: 2px;
  padding: 9.5px 23.5px;
  color: #fff;
  font-size: 14px;
}

.banner .banner_box a:hover {
  background: #2b89ac;
}

.Problem {
  height: 550px;
}

.Problem .Problem_box {
  width: 1156px;
  height: 100%;
  margin: 0 auto;
}

.Problem .Problem_box h2 {
  font-size: 28px;
  color: #333;
  line-height: 40px;
  padding-top: 60px;
  text-align: center;
}

.Problem .Problem_box ul {
  margin-top: 60px;
  height: 330px;
}

.Problem .Problem_box ul li {
  width: 220px;
  height: 250px;
  border: 1px solid #ededed;
  -webkit-box-shadow: 0 2px 35px 0 rgba(0, 0, 0, 0.13);
  box-shadow: 0 2px 35px 0 rgba(0, 0, 0, 0.13);
  border-radius: 2px;
  margin-right: 24px;
  float: left;
  padding: 40px 24px;
}

.Problem .Problem_box ul li h3 {
  font-size: 18px;
  color: #333;
  padding-top: 127px;
  line-height: 25px;
  text-align: center;
  margin-bottom: 24px;
}

.Problem .Problem_box ul li p {
  font-size: 14px;
  color: #333;
  letter-spacing: 0;
  text-align: justify;
  line-height: 24px;
}

.Problem .Problem_box ul li:nth-child(1) {
  background: url(../assets/img/datashield/pro1.png) center 40px no-repeat;
}

.Problem .Problem_box ul li:nth-child(2) {
  background: url(../assets/img/datashield/pro2.png) center 55px no-repeat;
}

.Problem .Problem_box ul li:nth-child(3) {
  background: url(../assets/img/datashield/pro3.png) center 55px no-repeat;
}

.Problem .Problem_box ul li:nth-child(4) {
  background: url(../assets/img/datashield/pro4.png) center 55px no-repeat;
  margin-right: 0;
}

.Profeat {
  height: 1748px;
  background: #f9f9f9;
}

.Profeat .Profeat_box {
  width: 1152px;
  height: 100%;
  margin: 0 auto;
}

.Profeat .Profeat_box .Profeat_title {
  font-size: 28px;
  color: #333;
  line-height: 40px;
  padding-top: 60px;
  margin-bottom: 24px;
  text-align: center;
}

.Profeat .Profeat_box .Profeat_con {
  font-size: 16px;
  color: #666;
  letter-spacing: 0;
  text-align: center;
  line-height: 28px;
  width: 850px;
  margin: 0 auto;
  margin-bottom: 40px;
}

.Profeat .Profeat_box ul li {
  width: 100%;
  height: 270px;
  padding: 20px 0;
}

.Profeat .Profeat_box ul li div {
  width: 525px;
  height: 100%;
}

.Profeat .Profeat_box ul li div h3 {
  font-size: 18px;
  color: #333;
  line-height: 25px;
  padding-top: 80px;
  margin-bottom: 16px;
}

.Profeat .Profeat_box ul li div p {
  font-size: 14px;
  color: #333;
  letter-spacing: 0;
  line-height: 28px;
}

.Profeat .Profeat_box ul li:nth-child(1) {
  background: url(../assets/img/datashield/prf1.png) left center no-repeat;
}

.Profeat .Profeat_box ul li:nth-child(1) div {
  float: right;
}

.Profeat .Profeat_box ul li:nth-child(2) {
  background: url(../assets/img/datashield/prf2.png) right center no-repeat;
}

.Profeat .Profeat_box ul li:nth-child(2) div {
  float: left;
}

.Profeat .Profeat_box ul li:nth-child(3) {
  background: url(../assets/img/datashield/prf3.png) left center no-repeat;
}

.Profeat .Profeat_box ul li:nth-child(3) div {
  float: right;
}

.Profeat .Profeat_box ul li:nth-child(4) {
  background: url(../assets/img/datashield/prf4.png) right center no-repeat;
}

.Profeat .Profeat_box ul li:nth-child(4) div {
  float: left;
}

.Profeat .Profeat_box ul li:nth-child(5) {
  background: url(../assets/img/datashield/prf5.png) left center no-repeat;
}

.Profeat .Profeat_box ul li:nth-child(5) div {
  float: right;
}

.system {
  height: 510px;
  background: #fff;
}

.system .system_box {
  width: 1152px;
  height: 100%;
  margin: 0 auto;
}

.system .system_box h2 {
  font-size: 28px;
  color: #333;
  line-height: 40px;
  padding-top: 70px;
  text-align: center;
}

.system .system_box ul {
  margin-top: 50px;
  height: 220px;
}

.system .system_box ul li {
  width: 168px;
  height: 220px;
  margin-right: 75px;
  float: left;
}

.system .system_box ul li h3 {
  font-size: 16px;
  color: #333;
  padding-top: 160px;
  line-height: 22px;
  text-align: center;
  margin-bottom: 20px;
}

.system .system_box ul li p {
  font-size: 14px;
  color: #333;
  letter-spacing: 0;
  text-align: justify;
  line-height: 20px;
}

.system .system_box ul li:nth-child(1) {
  background: url(../assets/img/datashield/sys1.png) center 40px no-repeat;
}

.system .system_box ul li:nth-child(2) {
  background: url(../assets/img/datashield/sys2.png) center 40px no-repeat;
}

.system .system_box ul li:nth-child(3) {
  background: url(../assets/img/datashield/sys3.png) center 40px no-repeat;
}

.system .system_box ul li:nth-child(4) {
  background: url(../assets/img/datashield/sys4.png) center 30px no-repeat;
}

.system .system_box ul li:nth-child(5) {
  background: url(../assets/img/datashield/sys5.png) center 30px no-repeat;
  margin-right: 0;
}
</style>