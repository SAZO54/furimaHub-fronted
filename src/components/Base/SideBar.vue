<script setup>
import { ref } from 'vue';

const isDropdownOpen = ref(false);

function accountStatus() {
  isDropdownOpen.value = !isDropdownOpen.value;
  console.log(isDropdownOpen.value);
}
</script>

<template>
  <div>
    <div class="sidebar">
      <div class="pt-3">
        <ul class="nav flex-column">
          <li class="nav-item">
            <div class="icon-circle white-circle">
              <span class="material-symbols-outlined pink-icon">home</span>
            </div>
            <a class="nav-link" href="/">Dashboard</a>
          </li>
          <li class="nav-item">
            <div class="icon-circle pink-circle">
              <span class="material-symbols-outlined white-icon">kid_star</span>
            </div>
            <a class="nav-link active" href="/exhibit-details">Exhibit Manage</a>
          </li>
          <li class="nav-item">
            <div class="icon-circle white-circle">
              <span class="material-symbols-outlined pink-icon">history</span>
            </div>
            <a class="nav-link" href="/history">History</a>
          </li>
          <li class="nav-item">
            <div class="icon-circle pink-circle">
              <span class="material-symbols-outlined white-icon">deceased</span>
            </div>
            <a class="nav-link" href="/ship-status">Shipping Status</a>
          </li>
          <li class="nav-item">
            <div class="icon-circle white-circle"> 
              <span class="material-symbols-outlined pink-icon">settings_heart</span>
            </div>
            <a class="nav-link" href="/setting">Setting</a>
          </li>
          <li class="nav-item">
            <div class="icon-circle pink-circle">
              <span class="material-symbols-outlined white-icon">savings</span>
            </div>
            <a class="nav-link" href="/money">Money Manage</a>
          </li>
          <li class="nav-item">
            <div class="icon-circle white-circle"> 
              <span class="material-symbols-outlined pink-icon">monitoring</span>
            </div>
            <a class="nav-link" href="/analysis">Analysis</a>
          </li>
        </ul>
      </div>
      <div class="dropdown-container">
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" @click="accountStatus">
            Sarina
          </button>
          <ul class="dropdown-menu" v-if="isDropdownOpen" :class="{ 'show-menu': isDropdownOpen }">
            <li>
              <a class="dropdown-item" href="/setting">
                <span class="material-symbols-outlined" style="margin-right: 8px">settings_heart</span>
                <div>Setting</div>
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="/messages">
                <span class="material-symbols-outlined" style="margin-right: 8px">mark_unread_chat_alt</span>
                <div>Messages</div>
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="/logout">
                <span class="material-symbols-outlined" style="margin-right: 8px">logout</span>
                <div>Sign out</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  width: 300px;
  height: 92vh;
  left: 0;
  top: 0;
  background-color: #b3b9ca5c;
  transition: left 0.3s;
  box-shadow: 0 4px 6px #A9B1C5;
  position: relative;
}

.dropdown-container {
  position: absolute;
  bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
}

.dropdown-item {
  display: flex;
}

.dropdown-menu {
  position: absolute;
  top: -277%;
  display: none;
  background-color: #fffbfd;
  border-color: #fffbfd;
  color: #b9a8b1;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  text-align: center;
}

.show-menu {
  display: block;
}

.nav-item {
  font-size: 20px;
  text-align: left;
  padding: 15px;
  display: flex;
  align-items: center;
}

.nav-link {
  color: #8c8a99;
  padding-left: 12px;
}

.nav-link:hover, .nav-link:active, .nav-link:focus {
  color: #E8A2B8;
}

.icon-circle {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.white-circle {
  background-color: #FFFAF7;
}

.pink-circle {
  background-color: #E8A5BB;
}

.white-icon {
  color: #FFFAF7;
}

.pink-icon {
  color: #E8A5BB;
}

.dropdown-toggle {
  background-color: #E8A5BB;
  border-color: #EBC1CD;
  width: 200px;
  font-size: 18px;
}

.dropdown-toggle:hover, .dropdown-toggle:focus, .dropdown-toggle:active {
  background-color: #EDA3B8;
  border-color: #EDA3B8;
}
</style>
