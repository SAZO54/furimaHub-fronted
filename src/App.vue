<template>
  <HubHeader @toggle-sidebar="toggleSidebar" />
  <SideBar :is-open="isSidebarOpen"  />
  <TOP />
</template>

<script setup>
import { ref } from 'vue';
import TOP from './components/TOP.vue';
import HubHeader from './components/Base/HubHeader.vue';
import SideBar from './components/Base/SideBar.vue';

const isSidebarOpen = ref(false);

function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value;
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