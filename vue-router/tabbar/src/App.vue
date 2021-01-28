<template>
  <div id="app" class="container">
    <router-view></router-view>
    <TabBar>
      <TabBarItem :path="aboutPath">
        <img src="./assets/image/tabBar/about.png" slot="item-icon">
        <img src="./assets/image/tabBar/about-active.png" slot="item-icon-active">
        <div slot="item-title">关于</div>
      </TabBarItem>
      <TabBarItem :path="homePath">
        <img src="./assets/image/tabBar/home.png" slot="item-icon">
        <img src="./assets/image/tabBar/home-active.png" slot="item-icon-active">
        <div slot="item-title">主页</div>
      </TabBarItem>
      <TabBarItem :path="profilePath">
        <img src="./assets/image/tabBar/profile.png" slot="item-icon">
        <img src="./assets/image/tabBar/profile-active.png" slot="item-icon-active">
        <div slot="item-title">我的</div>
      </TabBarItem>
    </TabBar>
  </div>
</template>

<script>
import TabBar from "./components/TabBar";
import TabBarItem from "./components/TabBarItem";

export default {
  name: 'App',
  components: {
    TabBar,
    TabBarItem
  },
  data() {
    return {
      aboutPath: '/about',
      homePath: '/home',
      profilePath: '/profile'
    }
  }
}
</script>

<style>
@import './assets/css/base.css';

#TabBar {
  display: flex;
}
</style>
