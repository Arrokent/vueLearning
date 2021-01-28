<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot v-if="!isActive" name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot>
    <div :class="{active: isActive}">
      <slot name="item-title"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: {
      type: String,
      default() {
        return '/'
      }
    }
  },
  data() {
    return {
    }
  },
  computed: {
    isActive() {
      return this.$route.path == this.path
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path)
      console.log(this.$route);
    }
  }
}
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  float: left;
  margin: 8px 0 4px;
  padding: 2px 4px;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
}

.active {
  color: #17abe3;
}
</style>
