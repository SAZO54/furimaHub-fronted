<script setup>
import SideBar from './Base/SideBar.vue';
import CardItem from './Base/CardItem.vue';
import SellerTable from './Base/SellerTable.vue';
import ExhibitStatus from './Base/ExhibitStatus.vue';
// const isFavorited = ref(false);

// function toggleFavorite() {
//   isFavorited.value = !isFavorited.value;
// }
</script>

<template>
  <div style="display: flex;">
    <SideBar />
    <div>
      <div style="display: flex;">
        <ExhibitStatus />
        <div>
          <SellerTable CardTitle="Average Sales" />
          <SellerTable CardTitle="Trade Trends" class="exhibit-item"/>
        </div>
      </div>
      <div class="card-all">
        <CardItem title="Total Items (総出品数)"/>
        <CardItem title="Transacted (取引済み)"/>
        <CardItem title="Dealing (取引中)"/>
        <CardItem title="Earnings (売上金額)"/>
        <CardItem title="Favarite (お気に入り数)"/>
        <CardItem title="Expense (経費)"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.exhibit-item {
  margin-top: 30px !important;
}

.card-all {
  margin-left: 20px;
  margin-top: 20px;
  display: flex;
}
</style>