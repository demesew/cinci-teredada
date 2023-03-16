<!-- client/src/components/Auth.vue -->
<template>
  <div>
    <!-- Registration Form -->
    <h2>Register</h2>
    <form @submit.prevent="registerUser">
      <input type="email" v-model="registerEmail" placeholder="Email" required />
      <input type="password" v-model="registerPassword" placeholder="Password" required />
      <button type="submit">Register</button>
    </form>

    <!-- Login Form -->
    <h2>Login</h2>
    <form @submit.prevent="loginUser">
      <input type="email" v-model="loginEmail" placeholder="Email" required />
      <input type="password" v-model="loginPassword" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "../config/firebase";

export default {
  data() {
    return {
      registerEmail: "",
      registerPassword: "",
      loginEmail: "",
      loginPassword: "",
    };
  },
  methods: {
    registerUser() {
      const auth = getAuth(app);

      createUserWithEmailAndPassword(auth, this.registerEmail, this.registerPassword)
        .then((userCredential) => {
          // Registration successful
          console.log("User registered:", userCredential);
        })
        .catch((error) => {
          // Handle registration errors
          console.error("Registration error:", error);
        });
    },
    loginUser() {
      const auth = getAuth(app);

      signInWithEmailAndPassword(auth, this.loginEmail, this.loginPassword)
        .then((userCredential) => {
          // Sign in successful
          console.log("User logged in:", userCredential);
        })
        .catch((error) => {
          // Handle sign-in errors
          console.error("Login error:", error);
        });
    },
  },
};
</script>
