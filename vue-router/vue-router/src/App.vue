<template>
  <div id="app">
    <!--  也可以自定义按钮实现router-link -->
    <!--  <button @click=mineClick>mine</button> -->
    <router-link to="/home" tag="button" replace>home</router-link>
    <router-link to="/mine" tag="button" replace>mine</router-link>
    <router-link :to="'/user/' + userId" tag="button" replace>user</router-link>
    <router-link :to=profileTo tag="button" replace>profile</router-link>

    <keep-alive exclude="Profile">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    mineClick() {
      this.$router.replace('/mine')
    }
  },
  data() {
    return {
      userId: 'Chibiken'
    }
  },
  computed: {
    profileTo() {
      return {
        path: '/profile',
        query: {
          name: 'Chibiken',
          age: 20
        }
      }
    }
  }
}
</script>

<style>
.router-link-active {
  color: red;
}
</style>
