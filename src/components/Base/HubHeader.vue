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
            <a class="nav-link f-br" aria-current="page" href="#">ホーム</a>
          </li>
          <li class="nav-item">
            <a class="nav-link f-br" href="#">ユーザー管理</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle f-br" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              設定
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href="#">プロファイル</a></li>
              <li><a class="dropdown-item" href="#">アカウント</a></li>
              <li><a class="dropdown-item" href="#">セキュリティ</a></li>
            </ul>
          </li>
        </ul>
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
.f-br {
  color: black;
}
</style>
