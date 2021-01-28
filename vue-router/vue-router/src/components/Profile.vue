<template>
  <div>
    <p>I am profile</p>
    <p>{{$route.query.name}}</p>
    <p>{{$route.query.age}}</p>
  </div>
</template>

<script>
export default {
name: "Profile"
}
</script>

<style scoped>

</style>
