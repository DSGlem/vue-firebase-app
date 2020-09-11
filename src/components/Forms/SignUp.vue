<template>
  <form class="bg-white px-4 py-4 rounded-lg" @submit.prevent="signUp">
    <div class="form-group">
      <h4 class="text-center">Sign Up</h4>
    </div>
    <div class="form-group">
      <input
        class="form-control"
        type="text"
        name="email"
        placeholder="Email"
        autocomplete="email"
        required
        v-model="email"
      />
    </div>
    <div class="form-group">
      <input
        class="form-control"
        type="password"
        name="password"
        placeholder="Password"
        autocomplete="password"
        required
        v-model="password"
      />
    </div>
    <div class="form-group">
      <input
        class="form-control"
        type="password"
        name="password-confirm"
        placeholder="Confirm password"
        autocomplete="password-confirm"
        required
        v-model="passwordConfirm"
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
// import firebase from "firebase";
export default {
  data() {
    return {
      email: "",
      password: "",
      passwordConfirm: ""
    };
  },
  methods: {
    async signUp() {
      const formData = {
        email: this.email,
        password: this.password,
        firstName: "firstName",
        lastName: "lastName",
        dateOfBirth: "dateOfBirth",
        countryOfResidence: "countryOfResidence",
        address: "address",
        postcode: "postcode",
        phone: "phone"
      };

      await this.$store.dispatch("signUp", formData);
    }
  }
};
</script>
