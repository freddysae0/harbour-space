<template>
  <NavbarSection></NavbarSection>
  <main class="flex flex-col justify-center mb-28">
    <HeroSection class="mb-[60px]"></HeroSection>
    <AboutSection></AboutSection>
  </main>
  <FooterSection class="fixed bottom-0 w-full"></FooterSection>
</template>

<script>
import NavbarSection from "./sections/NavbarSection.vue";
import FooterSection from "./sections/FooterSection.vue";
import HeroSection from "./sections/HeroSection.vue";
import AboutSection from "./sections/AboutSection.vue";
export default {
  name: "App",
  components: { NavbarSection, FooterSection, HeroSection, AboutSection },
};
</script>

<style>
:root {
  background-color: #ffffff;
  overflow-x: hidden;
  --primary: #685dc5;
  --secondary: #4fa16c;
  --text-1: #535353;
  --text-2: #6a6a6a;
  --border-1: #dadada;
}
.title-section {
  font-weight: 500;
  font-style: normal;
  font-size: 45px;
  line-height: 56px;
  letter-spacing: -0.6px;

  color: var(--primary);
}
.card {
  border: 1px solid var(--border-1);
  border-radius: 8px;
}
</style>
