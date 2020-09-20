<template>
  <form class="bg-white px-4 py-4 rounded-lg" @submit.prevent="signUp">
    <div class="form-group">
      <h4 class="text-center">Sign Up</h4>
    </div>
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        placeholder="First Name"
        v-model.trim="$v.userData.firstName.$model"
        :class="{
          invalid: $v.userData.firstName.$error,
        }"
        required
      />
    </div>
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        placeholder="Last Name"
        required
        v-model.trim="$v.userData.lastName.$model"
        :class="{ invalid: $v.userData.lastName.$error }"
      />
    </div>
    <div class="form-group">
      <input
        type="email"
        class="form-control"
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
        placeholder="Password"
        required
        v-model.trim="$v.userData.password.$model"
        :class="{ invalid: $v.userData.password.$error }"
      />
    </div>
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        placeholder="Date of Birth"
        required
        v-mask="'####-##-##'"
        v-model.trim="$v.userData.dateOfBirth.$model"
        :class="{ invalid: $v.userData.dateOfBirth.$error }"
      />
    </div>
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        placeholder="Country of Residence"
        required
        v-model.trim="$v.userData.country.$model"
        :class="{ invalid: $v.userData.country.$error }"
      />
      <input
        type="text"
        class="form-control"
        placeholder="Address"
        required
        v-model.trim="$v.userData.address.$model"
        :class="{ invalid: $v.userData.address.$error }"
      />
      <input
        type="number"
        class="form-control"
        placeholder="Postcode"
        required
        v-model.trim="$v.userData.postcode.$model"
        :class="{ invalid: $v.userData.postcode.$error }"
      />
    </div>
    <div class="form-group">
      <input
        type="tel"
        class="form-control"
        placeholder="Phone Number"
        required
        v-model="$v.userData.phone.$model"
        :class="{ invalid: $v.userData.phone.$error }"
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
import { mask } from "vue-the-mask";
import { required, email, minLength, numeric } from "vuelidate/lib/validators";
import { validators } from "@/utils.js";
export default {
  directives: { mask },
  data: () => ({
    userData: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phone: "",
      dateOfBirth: "",
      country: "",
      address: "",
      postcode: "",
    },
  }),
  validations: {
    userData: {
      firstName: { validFormat: validators.onlyLetters, required },
      lastName: { validFormat: validators.onlyLetters, required },
      email: { email, required },
      password: { minLength: minLength(6), required },
      phone: { required },
      dateOfBirth: { required },
      country: { required },
      address: { required },
      postcode: { numeric, required },
    },
  },
  methods: {
    async signUp() {
      this.$v.touch();
      if (!this.$v.$invalid) {
        await this.$store.dispatch("signUp", this.userData);
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
