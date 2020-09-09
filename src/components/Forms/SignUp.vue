<template>
  <form class="bg-white px-4 py-4 rounded-lg">
    <div class="form-group">
      <h4 class="text-center">Sign Up</h4>
    </div>
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        name="email"
        placeholder="Email"
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
      <input
        type="password"
        class="form-control"
        name="password-confirm"
        placeholder="Confirm password"
        required="required"
      />
    </div>
    <div class="form-group">
      <button type="submit" class="btn btn-primary btn-lg btn-block login-btn">
        Sign Up
      </button>
    </div>
    <div class="form-group">
      <a href="#">Already have an account?</a>
    </div>
  </form>
</template>

<script>
export default {};
</script>
