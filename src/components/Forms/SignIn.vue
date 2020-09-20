<template>
  <form
    class="bg-white px-4 py-4 rounded-lg"
    @submit.prevent="signIn"
    novalidate
  >
    <div class="form-group">
      <h4 class="text-center">Sign In</h4>
    </div>
    <div class="form-group">
      <input
        type="email"
        class="form-control"
        name="email"
        placeholder="Email"
        required
        v-model.trim="$v.userData.email.$model"
        :class="{ invalid: $v.userData.email.$error }"
      />
    </div>
    <div class="form-group">
      <input
        type="password"
        class="form-control"
        name="password"
        placeholder="Password"
        required
        v-model.trim="$v.userData.password.$model"
        :class="{ invalid: $v.userData.password.$error }"
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
import { required, email, minLength } from "vuelidate/lib/validators";
export default {
  data: () => ({
    userData: {
      email: "",
      password: "",
    },
  }),
  validations: {
    userData: {
      email: { email, required },
      password: { minLength: minLength(6), required },
    },
  },
  mounted() {
    console.log(this.$v);
  },
  methods: {
    async signIn() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        await this.$store.dispatch("signIn", this.userData);
        this.$router.push("/test");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.invalid {
  border: 1px solid red;
}
</style>
