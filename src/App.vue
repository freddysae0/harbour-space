<template>
  <NavbarSection></NavbarSection>
  <main><HeroSection></HeroSection></main>
  <FooterSection class="fixed bottom-0 w-full"></FooterSection>
</template>

<script>
import NavbarSection from "./sections/NavbarSection.vue";
import FooterSection from "./sections/FooterSection.vue";
import HeroSection from "./sections/HeroSection.vue";
export default {
  name: "App",
  components: { NavbarSection, FooterSection, HeroSection },
};
</script>

<style>
:root {
  background-color: #ffffff;

  --primary: #685dc5;
  --secondary: #4fa16c;
  --text-1: #535353;
  --text-2: #6a6a6a;
  --border-1: #dadada;
}
.title-section {
  /* MA Interaction Desig */

  font-style: normal;
  font-size: 45px;
  line-height: 56px;
  /* or 117% */
  letter-spacing: -0.6px;

  color: var(--primary);
}
.card {
  border: 1px solid var(--border-1);
  border-radius: 8px;
}
</style>
