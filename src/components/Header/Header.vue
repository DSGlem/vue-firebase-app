<template>
  <header class="container-fluid bg-dark">
    <nav class="navbar navbar-expand-lg navbar-dark">
      <router-link class="navbar-brand" to="/">Home</router-link>
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
            <router-link class="nav-link" to="/SignIn">Sign in</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/SignUp">Sign up</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/addCart">Add Cart</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>
