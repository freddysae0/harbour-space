<template>
  <section id="hero" class="min-h-screen flex">
    <div class="w-1/2 flex justify-center items-center">
      <InteractionHero></InteractionHero>
    </div>
    <div class="w-1/2 flex justify-center items-center">
      <DeadlineHero></DeadlineHero>
    </div>
  </section>
</template>

<script>
import InteractionHero from "@/components/hero/InteractionHero.vue";
import DeadlineHero from "@/components/hero/DeadlineHero.vue";
export default {
  data: () => {
    return {};
  },
  components: {
    InteractionHero,
    DeadlineHero,
  },
};
</script>

<style lang="scss" scoped></style>
