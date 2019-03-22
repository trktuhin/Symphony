<template>
  <v-app id="app">
    <v-content class="secondary lighten-3">
      <Navbar></Navbar>
      <transition name="slide" mode="out-in">
        <router-view class="pa-3"></router-view>
      </transition>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "./components/navbar";

export default {
  name: "app",
  components: {
    Navbar: Navbar
  }
};
</script>

<style>
.slide-enter-active {
  animation: slide-in 200ms ease-out forwards;
}
.slide-leave-active {
  animation: slide-out 200ms ease-out forwards;
}
@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}
</style>
