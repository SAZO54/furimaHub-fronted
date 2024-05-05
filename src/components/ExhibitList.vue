<script setup>
import { useRouter } from 'vue-router';
const productName = 'Product Name';
const productPrice = '4,500';

const router = useRouter();

function detailsTransition(id) {
  router.push(`/exhibit/detail?id=${id}`);
}
</script>

<template>
  <div class="card-container">
    <div class="card component-card" v-for="index in 11" :key="index">
      <img src="@/assets/001_l.jpg" alt="Product Image" class="product-image"/>
      <div class="card-body">
        <div class="product-info">
          <div class="product-name">{{ productName }}</div>
          <div class="product-price">¥ {{ productPrice }}</div>
        </div>
        <div class="icon-container">
          <button type="button" class="btn btn-pink" @click="detailsTransition(index)">
            <div class="check">Show Detail</div>
            <span class="material-symbols-outlined">open_in_full</span>
          </button>
          <img src="@/assets/merukari.png" alt="Flea Market Icon" class="flea-market-icon"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin: 40px;
}

.card {
  width: 250px;
  height: 300px;
  box-shadow: 0 4px 12px #EBE2E7;
  position: relative;
  text-align: center;
  border-radius: 20px;
  background: linear-gradient(to left, #ffdceaad, #fff2f66b);
  color: #D06179;
  margin: 20px;
}

.product-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

.card-body {
  padding: 10px;
}

.product-name {
  font-weight: bold;
  font-size: 20px;
  text-align: left;
}

.product-price {
  color: #7D798D;
  font-weight: bold;
  text-align: right;
}

.icon-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.flea-market-icon {
  width: 25px;
  height: 25px;
}

.material-symbols-outlined {
  font-size: 16px;
  margin-top: 2px;
  margin-left: 5px;
}

.btn-pink {
  background-color: #ECB1C4;
  border: #ECB1C4;
  color: #FAFCFD;
  width: 120px;
  height: 32px;
  border-radius: 10px;
  box-shadow: 0 2px 10px #b18fa6;
  font-size: 14px;
  display: flex;
}

.btn-pink:hover, .btn-pink:active, .btn-pink:focus {
  background-color: #EDA3B8;
  border: #EDA3B8;
  color: #FAFCFD;
}
</style>
