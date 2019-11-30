<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <router-link class="nav-item" exact tag="li" to="/" active-class="active">
            <a class="nav-link">Home</a>
          </router-link>
          <router-link class="nav-item" tag="li" :to="'/cars'" active-class="active">
            <a class="nav-link">Cars</a>
          </router-link>

          <router-link class="nav-item" tag="li" to="/car/3" active-class="active">
            <a class="nav-link">Car 3</a>
          </router-link>
          <router-link class="nav-item" tag="li" to="/car/4" active-class="active">
            <a class="nav-link">Car 4</a>
          </router-link>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped></style>
