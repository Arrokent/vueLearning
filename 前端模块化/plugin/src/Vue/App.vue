<template>
  <div>
    <p class="title">{{ message }}</p>
    <p>{{ age }}</p>
    <Cpn></Cpn>
  </div>
</template>

<script>
  import Cpn from "./Cpn.vue"

  export default {
    name: "App",
    data() {
      return {
        message: "Chibiken",
        age: "20",
      }
    },
    components: {
      Cpn
    }
  }
</script>

<style scoped>
.title {
  font-size: 150px;
}
</style>