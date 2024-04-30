<script setup>
import CardItem from './Base/CardItem.vue';
    // import { ref } from 'vue';
    
    // const isFavorited = ref(false);
    
    // function toggleFavorite() {
    //   isFavorited.value = !isFavorited.value;
    // }
</script>

<template>
  <CardItem title="Total Items"/>
  <CardItem title="Earnings"/>
  <CardItem title="Transacted"/>
</template>

<style scoped>
  .card {
    width: 200px;
    height: 200px;
    margin-left: 20px;
    margin-top: 25px;
    box-shadow: 0 4px 6px #EBE2E7;
  }

  .card-text {
    color: #4D4A5C;
  }

  .component-card {
    background-color: #FEF9FA;
    border-radius: 20px;
    color: #D06179;
    border: #FEF9FA;
  }
  
  .bi-heart.active {
    color: #E83E8C;
  }
  
  /* アイコンとプログレスサークルを配置するための追加スタイル */
  </style>