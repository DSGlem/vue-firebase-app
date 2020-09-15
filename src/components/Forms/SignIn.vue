<template>
  <form class="bg-white px-4 py-4 rounded-lg" @submit.prevent="signIn">
    <div class="form-group">
      <h4 class="text-center">Sign In</h4>
    </div>
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        name="email"
        placeholder="Email"
        required
        v-model="email"
      />
    </div>
    <div class="form-group">
      <input
        type="password"
        class="form-control"
        name="password"
        placeholder="Password"
        required
        v-model="password"
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
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async signIn() {
      const formData = {
        email: this.email,
        password: this.password,
      };
      console.log(formData);

      await this.$store.dispatch("signIn", formData);

      this.$router.push("/test");
    },
  },
};
</script>
