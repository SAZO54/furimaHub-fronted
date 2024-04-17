<template>
  <HubHeader />
  <SideBar />
  <TOP />
</template>

<script>
import TOP from './components/TOP.vue';
import HubHeader from './components/Base/HubHeader.vue';
import SideBar from './components/Base/SideBar.vue';

export default {
  name: 'App',
  components: {
    TOP,
    HubHeader,
    SideBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>