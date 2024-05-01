<script setup>
import CardItem from './Base/CardItem.vue';
import SellerTable from './Base/SellerTable.vue';

// const isFavorited = ref(false);

// function toggleFavorite() {
//   isFavorited.value = !isFavorited.value;
// }
</script>

<template>
  <SellerTable />
  <div class="card-all">
    <CardItem title="Total Items (総出品数)"/>
    <CardItem title="Transacted (取引済み)"/>
    <CardItem title="Dealing (取引中)"/>
    <CardItem title="Earnings (売上金額)"/>
    <CardItem title="Favarite (お気に入り数)"/>
    <CardItem title="Expense (経費)"/>
  </div>
</template>

<style scoped>
.card-all {
  margin-left: 20px;
  margin-top: 20px;
  display: flex;
}
</style>