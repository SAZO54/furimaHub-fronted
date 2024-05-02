<script setup>
</script>

<template>
  <div>
    <div class="sidebar">
      <div class="pt-3">
        <ul class="nav flex-column">
          <li class="nav-item">
            <span class="material-symbols-outlined">home</span>
            <a class="nav-link" href="#">Dashboard</a>
          </li>
          <li class="nav-item">
            <span class="material-symbols-outlined">kid_star</span>
            <a class="nav-link active" href="#">Exhibit Manage</a>
          </li>
          <li class="nav-item">
            <span class="material-symbols-outlined">history</span>
            <a class="nav-link" href="#">History</a>
          </li>
          <li class="nav-item">
            <span class="material-symbols-outlined">deceased</span>
            <a class="nav-link" href="#">Shipping Status</a>
          </li>
          <li class="nav-item">
            <span class="material-symbols-outlined">settings_heart</span>
            <a class="nav-link" href="#">Setting</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  width: 315px;
  height: 100vh;
  left: 0;
  top: 0;
  background-color: #CAD1E1;
  transition: left 0.3s;
  box-shadow: 0 4px 6px #A9B1C5;
}

.nav-item {
  font-size: 19px;
  text-align: left;
  padding: 12px;
  display: flex;
  align-items: center;
}

.nav-link {
  color: #64646F;
}

.nav-link:hover, .nav-link:active, .nav-link:focus {
  color: #E8A2B8;
}

.material-symbols-outlined {
  color: #64646F;
  margin-left: 10px;
}
</style>
