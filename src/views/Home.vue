<template>
  <div class="home">
    <Header :user="showUser" @login="login" @logout="logout" />
    <router-view></router-view>
    <Footer />
    <Login :user="name" :pass="password" v-if="showLogin" @login="login" />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Login from '@/views/Login.vue'

export default {
  name: 'home',
  data() {
    return {
      showLogin: false,
      name: '',
      password: '',
      showUser: ''
    }
  },
  created() {
    this.showUser = localStorage.getItem('power-user') || ''
    console.log(this.showUser)
  },
  methods: {
    login(flag = false, data = '') {
      this.showLogin = flag
      console.log(this.showLogin)
      localStorage.setItem('power-user', data)
      this.showUser = data
      // this.name = ''
    },
    logout() {
      this.showUser = ''
      localStorage.removeItem('power-user')
    }
  },
  components: {
    Header,
    Footer,
    Login
  }
}
</script>
<style lang="css" scoped>
.home {
  width: 100%;
  overflow: hidden;
}
</style>
