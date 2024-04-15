<template>
  <NavbarComponent></NavbarComponent>
  <FooterComponent class="fixed bottom-0 w-full"></FooterComponent>
  <main></main>
</template>

<script>
import NavbarComponent from "./components/NavbarComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
export default {
  name: "App",
  components: { NavbarComponent, FooterComponent },
};
</script>

<style>
:root {
  background-color: #ffffff;

  --primary: #685dc5;
  --secondary: #4fa16c;
  --text-2: #6a6a6a;
  --text-1: #535353;
}
</style>
