<template>
  <div
    ref="chooseApi"
    class="bg-red-600 z-50 fixed w-full h-full loading flex items-center"
  >
    <div
      class="container md:max-w-[800px] lg:max-w-[900px] font-apercu flex flex-col sm:items-center"
    >
      <h1 class="font-extrabold text-xl lg:text-2xl text-white">
        Error getting the API
      </h1>
      <p
        class="font text-sm md:text-base lg:text-lg text-white sm:text-center font-normal"
      >
        There was a connectivity error with the API, refresh and look that your
        system have access to
        <a class="font-semibold underline" :href="apiListUrl"> API URL </a>
      </p>
    </div>
  </div>
</template>

<script>
import { apiListUrl } from "@/api";
export default {
  name: "ChooseApi",

  props: {
    ApiList: {
      type: Array,
    },
  },
  data: () => {
    return {
      isChoosing: true,
      isLoading: false,
      apiListUrl: apiListUrl,
    };
  },
};
</script>

<style lang="scss" scoped>
.loading {
  opacity: 1;
  transition: all 1s;
}
</style>
