<template>
  <form class="bg-white px-4 py-4 rounded-lg">
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
      <button
        type="submit"
        class="btn btn-primary btn-lg btn-block login-btn"
        @click="SignIn"
      >
        Sign In
      </button>
    </div>
    <div class="form-group">
      <a href="#">Forgot Password?</a>
    </div>
  </form>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    SignIn() {
      console.log("SignIn");

      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(result => {
          // Sign-out successful.
          console.log("1");
          console.log(result.user);
        });
      console.log("SignIn end");
    }
  }
};
</script>
