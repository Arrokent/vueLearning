<template>
  <div id="app">
    {{this.$store.state.counter}}
    <button @click="counterIncrease1">+</button>
    <button @click="counterDecrease1">-</button>
    <button @click="counterIncrease(10)">+10</button>
    {{this.$store.getters.power}}
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    counterIncrease1() {
      this.$store.commit('increase')
    },
    counterDecrease1() {
      this.$store.commit('decrease')
    },
    counterIncrease(count) {
      this.$store.commit('increaseMoreThan1',10)
    }
  }
}
</script>

<style>
</style>
