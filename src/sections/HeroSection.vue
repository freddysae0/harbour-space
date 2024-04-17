<template>
  <section
    id="hero"
    class="h-fit py-[100px] md:py-[200px] px-[20px] sm:px-[30px] lg:px-[80px] flex justify-center md:gap-[40px] lg:gap-[159px]"
  >
    <div class="w-fit flex justify-center items-center">
      <InteractionHero></InteractionHero>
    </div>
    <div class="hidden lg:flex w-fit justify-center items-center">
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
