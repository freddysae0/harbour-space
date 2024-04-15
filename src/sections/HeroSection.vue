<template>
  <section id="hero" class="min-h-screen flex">
    <div class="w-1/2 flex justify-center items-center">
      <InteractionHero></InteractionHero>
    </div>
    <div class="w-1/2 flex justify-center items-center">div</div>
  </section>
</template>

<script>
import InteractionHero from "@/components/hero/InteractionHero.vue";
export default {
  data: () => {
    return {};
  },
  components: {
    InteractionHero,
  },
};
</script>

<style lang="scss" scoped></style>
