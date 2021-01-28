<template>
  <nav class="navbar navbar-fixed-bottom navbar-default">
    <slot></slot>
  </nav>
</template>

<script>
export default {
  name: "TabBar"
}
</script>

<style>
  .navbar {
    display: flex;
  }
</style>
