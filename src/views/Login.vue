<template>
  <div class="con">
    <div class="log-d">
      <div class="kong-d" @click="$emit('login',false)"></div>
      <h3>登录</h3>
      <div class="user clear">
        <span class="span-user"></span>
        <div class="user-name">用户名</div>
        <input type="text" placeholder="请输入您的用户名" id="user" />
      </div>
      <div class="pass clear">
        <span class="span-pass"></span>
        <div class="pass-name">密码</div>
        <input type="password" placeholder="请输入您的密码" id="pass" />
      </div>
      <div class="submit">
        <button type="button" class="btn" @click="hrefSystem">登录</button>
      </div>
    </div>
  </div>
</template>
 
<script>
import $ from 'jquery'
export default {
  name: 'LoginContent',
  props: {
    user: String,
    pass: String
  },
  data() {
    return {
      //   user: '',
      //   pass: ''
    }
  },
  mounted() {
    $('#user').focus(function() {
      $(this).css({ borderColor: 'dodgerblue' })
      $('.user-name')
        .css({ display: 'block' })
        .animate({ bottom: '28px' }, 400)
    })
    $('#user').blur(function() {
      $(this).css({ borderColor: 'white', borderBottomColor: '#ccc' })
      $('.user-name')
        .css({ display: 'none' })
        .animate({ bottom: '9px' }, 400)
    })
    $('#pass').focus(function() {
      $(this).css({ borderColor: 'dodgerblue' })
      $('.pass-name')
        .css({ display: 'block' })
        .animate({ bottom: '28px' }, 400)
    })
    $('#pass').blur(function() {
      $(this).css({ borderColor: 'white', borderBottomColor: '#ccc' })
      $('.pass-name')
        .css({ display: 'none' })
        .animate({ bottom: '9px' }, 400)
    })
  },
  methods: {
    hrefSystem: function() {
      console.log($('#user').val(), $('#pass').val())
      let data = $('#user').val()
      this.$emit('login', false, data)
      // this.$router.push({
      //   path: '/index',
      //   query: {}
      // })
    }
  }
}
</script>
 
<style scoped>
.clear {
  zoom: 1;
}
.clear::after {
  content: '';
  display: 'block';
  height: 0;
  clear: 'both';
  visibility: 'hidden';
}
.con {
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background: rgb(27, 27, 27, 0.5);
}
.kong-d {
  position: absolute;
  top: 15px;
  right: 15px;
  width: 25px;
  height: 25px;
  background: url('../assets/img/close.png');
  background-size: cover;
}
.log-d {
  width: 350px;
  height: 270px;
  padding: 70px 40px;
  margin: 0 auto;
  background: #fff;
  border-radius: 10px;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  z-index: 1000;
}
h3 {
  color: #000;
  font-size: 24px;
  line-height: 24px;
  margin-bottom: 50px;
}
.user,
.pass {
  position: relative;
  margin-bottom: 30px;
}
.span-user,
.span-pass {
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-top: 6px;
  vertical-align: middle;
}
.span-user {
  background: url('../assets/img/name.png') 0 0 no-repeat;
  background-size: 20px 20px;
}
.span-pass {
  background: url('../assets/img/password.png') 0 0 no-repeat;
  background-size: 20px 20px;
}
.user-name,
.pass-name {
  display: none;
  font-size: 14px;
  width: 50px;
  text-align: center;
  line-height: 14px;
  color: dodgerblue;
  position: absolute;
  background: #fff;
  left: 50px;
  bottom: 9px;
  z-index: 30;
}
input {
  display: inline-block;
  width: 300px;
  height: 30px;
  border: 1px solid #fff;
  border-bottom-color: #ccc;

  margin-left: 18px;
  outline: none;
  text-indent: 12px;
}
.submit {
  width: 100%;
}
.btn {
  display: block;
  width: 95%;
  font-size: 14px;
  text-align: center;
  line-height: 44px;
  background: dodgerblue;
  border-radius: 5px;
  color: #fff;
  border: none;
  margin: 40px auto 0;
  outline: none;
  cursor: pointer;
}
</style>
 