<template>
  <div class="container d-flex flex-column  justify-content-center">
    <div class="row">
      <div class="col-4 offset-4">
        <div class="">
          <h4 class="text-center">Member Login</h4>
        </div>
        <div class="">
          <form action="/examples/actions/confirmation.php" method="post">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                name="username"
                placeholder="Username"
                required="required"
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                name="password"
                placeholder="Password"
                required="required"
              />
            </div>
            <div class="form-group">
              <button
                type="submit"
                class="btn btn-primary btn-lg btn-block login-btn"
              >
                Login
              </button>
            </div>
          </form>
        </div>
        <div class="">
          <a href="#">Forgot Password?</a>
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="container d-flex flex-column  justify-content-center">
    <h1 class="text-center">Sign in</h1>
    <div class="row">
      <div class="col-4 offset-4">
        <form class="">
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" class="form-text text-muted"
              >We'll never share your email with anyone else.</small
            >
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="form-group form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1"
              >Check me out</label
            >
          </div>
          <button type="submit" class="btn btn-primary w-100">SignIn</button>
        </form>
      </div>
    </div>
  </div> -->
</template>

<script>
export default {
  name: "SignIn"
};
</script>
