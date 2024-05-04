<template>
  <HubHeader />
  <div style="display: flex;">
    <SideBar />
    <router-view />
  </div>
</template>

<script setup>
import HubHeader from './components/Base/HubHeader.vue';
import SideBar from './components/Base/SideBar.vue';

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