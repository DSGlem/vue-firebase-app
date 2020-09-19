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
        type="text"
        class="form-control"
        name="firstName"
        placeholder="First Name"
        v-model.trim="$v.firstName.$model"
        :class="{
          invalid: $v.firstName.$error,
        }"
        required
      />
    </div>
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        name="lastName"
        placeholder="Last Name"
        required
        v-model.trim="$v.lastName.$model"
        :class="{ invalid: $v.lastName.$error }"
      />
    </div>
    <div class="form-group">
      <input
        type="email"
        class="form-control"
        name="email"
        placeholder="Email"
        required
        v-model.trim="$v.email.$model"
        :class="{ invalid: $v.email.$error }"
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
      <input
        type="date"
        class="form-control"
        name="password"
        placeholder="Date of Birth"
        required
      />
    </div>
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        name="password"
        placeholder="Country of Residence"
        required
      />
      <input
        type="text"
        class="form-control"
        name="password"
        placeholder="Address"
        required
      />
      <input
        type="number"
        class="form-control"
        name="password"
        placeholder="Postcode"
        required
      />
    </div>
    <div class="form-group">
      <input
        type="tel"
        class="form-control"
        name="password"
        placeholder="Phone Number"
        required
        v-model="$v.phone.$model"
        :class="{ invalid: $v.phone.$invalid && $v.phone.$dirty }"
      />
    </div>
    <!-- <div class="form-group">
      <input
        type="checkbox"
        class="form-control"
        name="password"
        required
        v-model="password"
      />
    </div>-->
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
import { required, email } from "vuelidate/lib/validators";
import { validators } from "@/utils.js";
export default {
  data: () => ({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
  }),
  validations: {
    firstName: { validFormat: validators.onlyLetters, required },
    lastName: { validFormat: validators.onlyLetters, required },
    email: { email, required },
    phone: { required },
  },
  mounted() {
    console.log(this.$v);
  },
  methods: {
    async signIn() {
      console.log(this.$v);
      this.$v.$touch();
      const formData = {
        email: this.email,
        password: this.password,
      };
      if (!this.$v.$invalid) {
        await this.$store.dispatch("signIn", formData);

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
