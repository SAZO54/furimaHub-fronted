<script setup>
import { useRouter } from 'vue-router';

/**
 * pageTransition
 */
const router = useRouter();

function exhibitDetailTransition() {
  router.push('/exhibit-details');
}

</script>

<template>
  <div class="card component-card">
    <div class="card-text">Exhibit Status</div>
    <div class="card-body">
      <button type="button" class="btn btn-pink" @click="exhibitDetailTransition">Confirm Details</button>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 1100px;
  height: 550px;
  margin-left: 40px;
  margin-top: 50px;
  box-shadow: 0 4px 12px #A0A3B4;
  position: relative;
}

.card-text {
  background-color: #FAF3F6;
  border-radius: 10px 10px 0 0;
  border-bottom: #B2B8C6;
  color:	#bf8f9f;
  font-weight: bold;
  font-size: 25px;
  text-align: left;
  padding: 20px 15px 15px 20px;
}

.component-card {
  border-radius: 10px;
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
  width: 91%;
  height: 42px;
  font-size: 18px;
  border-radius: 15px;
  box-shadow: 0 2px 10px #a17584;
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

</style>