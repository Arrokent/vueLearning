<template>
  <div>
    <h2>Home</h2>
    <router-link to="/home/news">news</router-link>
    <router-link to="/home/messages">messages</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      path: "/home/news"
    }
  },

  // 只在keep-alive标签里面，这两个函数才有效
  activated() {
    this.$router.push(this.path)
  },
  beforeRouteLeave(to, from, next) {
    this.path = this.$route.path
    next()
  }
}
</script>

<style scoped>

</style>
