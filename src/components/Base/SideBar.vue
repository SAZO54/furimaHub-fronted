<template>
  <div>
    <!-- ハンバーガーメニューボタン -->
    <button class="btn btn-primary" type="button" @click="toggleSidebar">
      ☰
    </button>

    <!-- サイドバー -->
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

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>

<style scoped>
.sidebar {
  width: 250px;
  position: fixed;
  left: -250px;
  height: 100%;
  background: #343a40;
  transition: left 0.3s;
}

.sidebar.active {
  left: 0;
}

.nav-link {
  color: #fff;
}
</style>
