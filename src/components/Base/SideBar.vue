<template>
  <div>
    <div :class="['sidebar', { 'active': isOpen }]">
      <div class="pt-3">
        <h5 class="text-white text-center">サイドバー</h5>
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link active" href="#">ホーム</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">プロファイル</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">メッセージ</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">設定</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { defineProps } from 'vue';
  
  defineProps({
    isOpen: Boolean
  });
  </script>

<style scoped>
.sidebar {
  width: 200px;
  position: fixed;
  left: -200px;
  height: 100%;
  background: #B3BCCC;
  transition: left 0.3s;
  box-shadow: 0 4px 6px #A9B1C5;
}

.sidebar.active {
  left: 0;
}

.nav-link {
  color: #fff;
}
</style>
