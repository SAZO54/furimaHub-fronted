<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const productName = 'Product Name';
const productPrice = '4,500';

/**
 * page transition
 */
const router = useRouter();

function detailsTransition(id) {
  router.push(`/exhibit/detail?id=${id}`);
}

/**
 * Display additional Cards every 20
 */
const totalItems = 60;
const itemsToShow = ref(20);

function showMoreItems() {
  if (itemsToShow.value + 20 <= totalItems) {
    itemsToShow.value += 20;
  } else {
    itemsToShow.value = totalItems;
  }
}

</script>

<template>
  <div>
    <div class="header">
      <button type="button" class="btn btn-pink new-create">
        <div style="padding-left: 5px">New Create</div>
        <span class="material-symbols-outlined" style="font-size: 22px !important">add_box</span>
      </button>
      <div class="sort-options">
        <select>
          <option value="latest" class="sort-item">Latest</option>
          <option value="alphabetical" class="sort-item">Alphabetical</option>
        </select>
      </div>
    </div>
    <div class="card-container">
      <div class="card component-card" v-for="index in itemsToShow" :key="index">
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
      <div v-if="itemsToShow < totalItems" class="show-more-container">
        <button @click="showMoreItems" class="show-more-btn">
          <span class="material-symbols-outlined more-icon">expand_circle_down</span>
        </button>
      </div>
    </div>
  </div> 
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px 72px 20px 60px;
}

.new-create {
  width: 160px !important;
  height: 40px !important;
  font-size: 18px !important;
  background-color: #ffb0ca !important;
}

.new-create:focus, .new-create:active, .new-create:hover {
  background-color: #e59bb3 !important;
}

.sort-options select {
  padding: 5px;
  border-radius: 12px;
  border-color: #ffbdd3;
  border-width: thick;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin: 0 40px 40px 40px;
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

.show-more-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1523px
}

.show-more-btn {
  background-color: #fff;
  border: none;
  color: #444;
  border-radius: 10px;
  cursor: pointer;
}

.more-icon {
  font-size: 30px !important;
}

.more-icon:hover {
  color: #D06179;
}
</style>
