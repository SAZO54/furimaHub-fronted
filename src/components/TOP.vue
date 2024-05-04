<script setup>
import CardItem from './Base/CardItem.vue';
import SellerTable from './Base/SellerTable.vue';
import ExhibitStatus from './Base/ExhibitStatus.vue';
import { useRouter } from 'vue-router';

/**
 * pageTransition
 */
const router = useRouter();

// function hisoryTransition() {
//   router.push('/hisory');
// }

// function settingTransition() {
//   router.push('/setting');
// }

// function messageTransition() {
//   router.push('/message');
// }

function moneyTransition() {
  router.push('/money');
}

function exhibitDetailTransition() {
  router.push('/exhibit-details');
}

// function shipTransition() {
//   router.push('/ship-status');
// }

function analysisTransition() {
  router.push('/analysis');
}

// const isFavorited = ref(false);

// function toggleFavorite() {
//   isFavorited.value = !isFavorited.value;
// }
</script>

<template>
  <div>
    <div style="display: flex;">
      <ExhibitStatus @click="exhibitDetailTransition()"/>
      <div>
        <SellerTable CardTitle="Average Sales" @click="analysisTransition()"/>
        <SellerTable CardTitle="Trade Trends" class="exhibit-item" @click="analysisTransition()"/>
      </div>
    </div>
    <div class="card-all">
      <CardItem title="Total Items (総出品数)" @click="exhibitDetailTransition()"/>
      <CardItem title="Transacted (取引済み)" @click="exhibitDetailTransition()"/>
      <CardItem title="Dealing (取引中)" @click="exhibitDetailTransition()"/>
      <CardItem title="Earnings (売上金額)" @click="moneyTransition()"/>
      <CardItem title="Favarite (お気に入り数)" @click="exhibitDetailTransition()"/>
      <CardItem title="Expense (経費)" @click="moneyTransition()"/>
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