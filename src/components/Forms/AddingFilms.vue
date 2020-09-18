<template>
  <form class="bg-white px-4 py-4 rounded-lg">
    <div class="form-group">
      <h4 class="text-center">Adding Film</h4>
    </div>
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        name="name"
        placeholder="Name"
        required="required"
      />
    </div>
    <div class="form-group">
      <input
        type="password"
        class="form-control"
        name="password"
        placeholder="Descrip"
        required="required"
      />
    </div>
    <div class="form-group">
      <button type="submit" class="btn btn-primary btn-lg btn-block login-btn">
        Sign In
      </button>
    </div>
    <div class="form-group">
      <a href="#">Forgot Password?</a>
    </div>
  </form>
</template>

<script>
export default {};
</script>
