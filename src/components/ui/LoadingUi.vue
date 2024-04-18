<template>
  <div ref="loading" class="bg-primary z-50 fixed w-full h-full loading"></div>
</template>

<script>
export default {
  name: "LoadingUi",
  props: {
    isLoading: {
      type: Boolean,
    },
  },
  watch: {
    isLoading(isActive) {
      if (!this.$refs.loading) return;
      if (isActive) {
        this.$refs.loading.style.opacity = "1";
        this.$refs.loading.style.pointerEvents = "all";
      } else {
        this.$refs.loading.style.opacity = "0";
        this.$refs.loading.style.pointerEvents = "none";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.loading {
  opacity: 1;
  transition: opacity 1s;
}
</style>
