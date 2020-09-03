<template>
  <header class="container-fluid bg-secondary">
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#"
              >Home <span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link disabled"
              href="#"
              tabindex="-1"
              aria-disabled="true"
              >Disabled</a
            >
          </li>
        </ul>
      </div>
    </nav>
    <!-- <div class="row col-4 justify-content-between">
      <router-link to="/">Main</router-link>
      <router-link to="/SignIn">SignIn</router-link>
      <router-link to="/SignUp">SignUp</router-link>
      <router-link to="/addCart">Add Cart</router-link>
    </div> -->
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>
