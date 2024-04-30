<script setup>
  // import { ref } from 'vue';
import { defineProps } from 'vue';

const props = defineProps({
  title: String
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
        <i class="bi bi-cloud"></i>
        <i class="bi bi-heart" :class="{'active': isFavorited}"></i>
      </div>
      <div class="progress-circle">
        <!-- 円形のプログレスバーをここに実装する必要があります。 -->
        <!-- Bootstrapはデフォルトで円形のプログレスバーを提供していないので、カスタムCSSかライブラリが必要です。 -->
      </div>
      <div class="card-text">{{ props.title }}</div>
    </div>
  </div>
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