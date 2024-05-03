<script setup>
  // import { ref } from 'vue';
  
  // const isFavorited = ref(false);
  
  // function toggleFavorite() {
  //   isFavorited.value = !isFavorited.value;
  // }
</script>

<template>
  <div class="card component-card">
    <div class="card-body">
      <div class="card-text">Avarage Sellers</div>
      <div class="card-top-icons">
        <i class="bi bi-cloud"></i>
        <i class="bi bi-heart" :class="{'active': isFavorited}"></i>
      </div>
      <div class="progress-circle">
        <!-- 円形のプログレスバーをここに実装する必要があります。 -->
        <!-- Bootstrapはデフォルトで円形のプログレスバーを提供していないので、カスタムCSSかライブラリが必要です。 -->
      </div>
      <button type="button" class="btn btn-pink">Confirm Details</button>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 1200px;
  height: 550px;
  margin-left: 40px;
  margin-top: 50px;
  box-shadow: 0 4px 12px #A0A3B4;
  position: relative;
}

.card-text {
  color: #FAFCFD;
  font-size: 25px;
  text-align: left;
  margin: 20px;
}

.component-card {
  background-color: #B2B8C6;
  border-radius: 20px;
  color: #D06179;
  border: #B2B8C6;
}

.bi-heart.active {
  color: #E83E8C;
}

.btn-pink {
  background-color: #ECB1C4;
  border: #ECB1C4;
  color: #FAFCFD;
  width: 180px;
  border-radius: 20px;
  box-shadow: 0 2px 10px #7D7D8F;
  position: absolute;
  bottom: 20px;
  left: 20px;
  margin: 0 20px;
}

.btn-pink:hover, .btn-pink:active, .btn-pink:focus {
  background-color: #EDA3B8;
  border: #EDA3B8;
  color: #FAFCFD;
}

/* アイコンとプログレスサークルを配置するための追加スタイル */
</style>