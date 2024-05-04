<script setup>
  // import { ref } from 'vue';
import { defineProps } from 'vue';

const props = defineProps({
  title: String,
  cardTransition: String
});
  
  // const isFavorited = ref(false);
  
  // function toggleFavorite() {
  //   isFavorited.value = !isFavorited.value;
  // }
</script>

<template>
  <div class="card component-card">
    <div class="card-body">
      <div class="card-top-icons">
        <a class="dropdown-item" :href="props.cardTransition">
          <span class="material-symbols-outlined">heart_plus</span>
        </a>
      </div>
      <div class="card-text">{{ props.title }}</div>
    </div>
  </div>
</template>

<style scoped>
.dropdown-item {
  text-align: right;
}

.dropdown-item:hover, .dropdown-item:focus, .dropdown-item:active {
  color: #c0455f;
}

.card {
  width: 220px;
  height: 160px;
  margin: 25px 15px 0 25px;
  box-shadow: 0 4px 12px #EBE2E7;
  position: relative;
}

.card-text {
  color: #7D798D;
  position: absolute;
  bottom: 10px;
  left: 50%;
  right: -40%;
  transform: translateX(-50%);
  text-align: center;
  font-weight: bold;
}

.component-card {
  background: linear-gradient(to bottom, #ffdcea, #f4d7df4f);
  border-radius: 20px;
  color: #D06179;
  border: #FEF9FA;
}

.bi-heart.active {
  color: #E83E8C;
}

</style>