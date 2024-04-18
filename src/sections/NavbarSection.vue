<template>
  <div
    id="navbar"
    class="relative bg-primary flex justify-between items-center px-5 md:px-10 w-full h-[50px] md:h-[70px]"
  >
    <!-- Logo -->
    <div class="flex gap-2 items-center">
      <img :src="HSLogo" class="h-[25px]" />
      <p class="text-[11px] md:text-xs text-white font-normal">
        /INTERACTION DESIGN
      </p>
    </div>
    <!-- Toggle -->
    <img :src="ToggleIconDesktop" class="h-[25px]" />

    <!-- Apply Now button -->
    <button
      class="absolute justify-center items-center hidden md:flex right-28 top-[10px] w-28 h-28 hover:scale-105 transition-all rounded-full bg-secondary"
    >
      <h2 class="w-14 font-semibold text-sm text-center text-white">
        APPLY NOW
      </h2>
    </button>
  </div>
</template>

<script>
import ToggleIconMobile from "@/assets/navbar/toggle-mobile.png";
import ToggleIconDesktop from "@/assets/navbar/toggle-desktop.png";
import HSLogo from "@/assets/hs-logo.png";
export default {
  name: "NavbarComponent",
  data() {
    return {
      ToggleIconMobile,
      ToggleIconDesktop,
      HSLogo,
    };
  },
  components: {},
};
</script>

<style lang="scss" scoped></style>
