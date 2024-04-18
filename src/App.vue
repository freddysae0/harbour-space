<template>
  <Loading :isLoading="isLoading"></Loading>
  <div v-if="!isLoading">
    <NavbarSection></NavbarSection>
    <main class="flex flex-col justify-center mb-28">
      <HeroSection :key="heroKey" class="mb-[140px] md:mb-[60px]"></HeroSection>
      <AboutSection class="mb-[240px]"></AboutSection>
      <TestimonialsSection
        class="mb-[20px] lg:mb-[200px]"
      ></TestimonialsSection>
      <FAQSection class="mb-[188px]"></FAQSection>
    </main>
    <FooterSection class="fixed bottom-0 w-full"></FooterSection>
  </div>
</template>

<script>
import axios from "axios";
import NavbarSection from "@/sections/NavbarSection.vue";
import FooterSection from "@/sections/FooterSection.vue";
import HeroSection from "@/sections/HeroSection.vue";
import Loading from "@/components/ui/LoadingUi.vue";
import AboutSection from "@/sections/AboutSection.vue";
import TestimonialsSection from "@/sections/TestimonialsSection.vue";
import FAQSection from "@/sections/FAQSection.vue";
import { useStore } from "@/stores/index";

export default {
  name: "App",
  data: () => {
    return {
      isLoading: true,
      heroKey: 1,
      API: "https://pre-prod.harbour.space/api/v1/scholarship_pages/data-science-apprenticeship-zeptolab",
    };
  },
  setup() {
    const store = useStore();

    const HSData = store.HSData;
    const staticContent = store.staticContent;

    const setHSData = store.setHSData;
    const setStaticContent = store.setStaticContent;

    return {
      HSData,
      staticContent,
      setHSData,
      setStaticContent,
    };
  },
  methods: {
    async fetchData() {
      try {
        const { data } = await axios.get(this.API);
        this.setHSData(data);
        this.isLoading = false;
      } catch (error) {
        console.log("There was an error fetching the data");
      }
    },

    toggleToStaticOrApi() {
      this.setStaticContent(!this.staticContent);
      this.heroKey++;
    },
  },

  async mounted() {
    await this.fetchData();
  },
  components: {
    NavbarSection,
    FooterSection,
    HeroSection,
    AboutSection,
    TestimonialsSection,
    FAQSection,
    Loading,
  },
};
</script>

<style lang="scss">
@import "@/variables";
:root {
  background-color: #ffffff;
  overflow-x: hidden;
  --primary: #685dc5;
  --secondary: #4fa16c;
  --text-1: #535353;
  --text-2: #6a6a6a;
  --text-3: #959595;
  --text-4: #b3b3b3;
  --box-1: #fbfbfb;
  --border-1: #dadada;
}
.title-section {
  font-weight: 500;
  font-style: normal;
  font-size: 35px;
  line-height: 44px;
  letter-spacing: -0.44px;

  color: var(--primary);

  @media (min-width: $sm) {
    font-size: 45px;
    line-height: 56px;
    letter-spacing: -0.6px;

    color: var(--primary);
  }
}
.card {
  border: 1px solid var(--border-1);
  border-radius: 8px;
}
</style>
