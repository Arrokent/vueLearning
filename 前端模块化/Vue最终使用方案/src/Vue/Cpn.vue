<template>
  <div>
    <p>The num is: {{ num }}</p>
    <button @click="add">click me</button>
  </div>
</template>

<script>
export default {
  name: "Cpn",
  data() {
    return {
      num: 0
    }
  },
  methods: {
    add() {
      this.num++
    }
  }
}
</script>

<style scoped>

</style>