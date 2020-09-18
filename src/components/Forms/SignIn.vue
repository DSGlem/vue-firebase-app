<template>
  <form class="bg-white px-4 py-4 rounded-lg" @submit.prevent="signIn">
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
        :class="{ invalid: $v.firstName.$invalid && $v.firstName.$dirty }"
      />
    </div>
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        name="lastName"
        placeholder="Last Name"
        v-model.trim="$v.lastName.$model"
        :class="{ invalid: $v.lastName.$invalid && $v.lastName.$dirty }"
      />
    </div>
    <div class="form-group">
      <input
        type="email"
        class="form-control"
        name="email"
        placeholder="Email"
        required
        v-model.trim="$v.email"
        :class="{ invalid: $v.email.$invalid }"
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
      <input type="date" class="form-control" name="password" placeholder="Date of Birth" required />
    </div>
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        name="password"
        placeholder="Country of Residence"
        required
      />
      <input type="text" class="form-control" name="password" placeholder="Address" required />
      <input type="number" class="form-control" name="password" placeholder="Postcode" required />
    </div>
    <!-- <div class="form-group">
      <input
        type="number"
        class="form-control"
        name="password"
        placeholder="Postcode"
        required
      />
    </div>-->
    <!-- <div class="form-group">
      <input
        type="text"
        class="form-control"
        name="password"
        placeholder="Country of Residence"
        required
      />
    </div>-->
    <div class="form-group">
      <input type="tel" class="form-control" name="password" placeholder="Phone Number" required />
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
      <button type="submit" class="btn btn-primary btn-lg btn-block login-btn">Sign In</button>
    </div>
    <div class="form-group">
      <a href="#">Forgot Password?</a>
    </div>
  </form>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
export default {
  data: () => ({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    validators: {
      onlyLetters: (val) => {
        /^[a-zA-Z]+$/.test(val);
      },
    },
  }),
  validations: {
    email: { required, email },
    firstName: { validFormat: this.validators.onlyLetters },
    lastName: { validFormat: this.validators.onlyLetters },
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
<style lang="css" scoped>
.invalid {
  border: 1px solid red;
}
</style>
