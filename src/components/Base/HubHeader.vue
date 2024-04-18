<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-white">
    <div class="container-fluid">
      <!-- ロゴとサイト名 -->
      <a class="navbar-brand" href="/">
        <img src="@/assets/logo.png" alt="Logo" width="30" height="24" class="d-inline-block align-top">
      </a>

      <!-- ナビゲーションバーのトグルボタン（小画面で表示） -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- ナビゲーションリンク -->
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav me-auto">
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
          <input class="form-control me-2 serch" type="search" placeholder="Search" aria-label="Search">
          <button class="btn serch-botton" type="submit">
            <span class="material-symbols-outlined">
              search
            </span>
          </button>
        </form>

        <!-- ログアウトリンク -->
        <span class="navbar-text">
          <a class="nav-link" href="#">ログアウト</a>
        </span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'HubHeader'
};
</script>

<style scoped>
.f-gray {
  color: #5F5D6A;
  font-weight: bold;
}

.navbar {
  box-shadow: 0 4px 6px #F0E7EC;
  background: #fff;
}

.nav-item {
  padding-right: 30px;
}

.f-gray:hover {
  color: #D7A0B0;
}

.f-gray:active {
  color: #D7A0B0;
}

.serch {
  border-radius: 20px;
  border: #F6EEF3 solid 2.5px;
}

.serch-botton {
  color: #F1BCCE;
  padding: 5px 0 0 0;
}

.serch-botton:hover {
  color: #DAA1B6;
}
</style>
