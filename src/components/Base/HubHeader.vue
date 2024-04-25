<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-white">
    <div class="container-fluid">
      <a class="navbar-brand" href="/" @click.prevent="emitToggleSideBar">
        <img src="@/assets/wolf.png" alt="Logo" width="40" height="40" class="d-inline-block align-top">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav me-auto head-item">
          <li class="nav-item">
            <a class="nav-link f-gray" aria-current="page" href="#">TOP</a>
          </li>
          <li class="nav-item">
            <a class="nav-link f-gray" href="#">Exhibit Manage</a>
          </li>
          <li class="nav-item">
            <a class="nav-link f-gray" href="#">History</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle f-gray" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Settings
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href="#">プロファイル</a></li>
              <li><a class="dropdown-item" href="#">アカウント</a></li>
              <li><a class="dropdown-item" href="#">セキュリティ</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <div class="search-box">
            <span class="material-symbols-outlined search-icon">favorite</span>
            <input class="form-control me-2 search" type="search" placeholder="Search" aria-label="Search">
          </div>
          <button class="btn a-botton" type="submit">
            <span class="material-symbols-outlined">
              search
            </span>
          </button>
        </form>
        <span class="navbar-text">
          <a class="nav-link" href="#">ログアウト</a>
        </span>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits(['toggle-sidebar']);

const emitToggleSideBar = (event) => {
  event.preventDefault();
  emit('toggle-sidebar');
}
</script>

<style scoped>
.f-gray {
  color: #5F5D6A;
  font-weight: bold;
}

.navbar {
  box-shadow: 0 4px 6px #F0E7EC;
  background: linear-gradient(to right, #fff, #FAF5F9);
}

.nav-item {
  padding-right: 30px;
}

.head-item {
  padding-left: 130px;
}

.f-gray:hover, .f-gray:active, .f-gray:focus {
  color: #D7A0B0;
}

.search {
  padding-left: 35px;
  border-radius: 20px;
  border: #F6EEF3 solid 2.5px;
}

.search-box {
  display: flex;
  align-items: center;
  position: relative;
}

.search-icon {
  position: absolute;
  left: 10px;
  color: #F7C4CC; /* アイコンの色を指定 */
}

.search {
  padding-left: 35px; /* アイコンのスペースを確保 */
}

.search-botton {
  color: #F1BCCE;
  padding: 5px 0 0 0;
}

.search-botton:hover {
  color: #DAA1B6;
}

.search::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #F7C4CC; /* ピンク色 */
  opacity: 1; /* プレースホルダーの透明度をフルに */
}

.search:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: #F7C4CC;
}

.sarch::-ms-input-placeholder { /* Microsoft Edge */
  color: #F7C4CC;
}
</style>
