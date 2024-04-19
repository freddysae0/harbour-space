<template>
  <div
    ref="chooseApi"
    class="bg-primary z-50 fixed w-full h-full loading flex items-center"
  >
    <div
      class="container md:max-w-[800px] lg:max-w-[900px] font-apercu flex flex-col sm:items-center"
    >
      <img :src="hsLogo" width="250" class="mb-3" />
      <h1 class="font-extrabold text-xl lg:text-2xl mt-2 text-white">
        Select your favorite scholarship
      </h1>
      <p
        class="font text-sm md:text-base lg:text-lg text-white sm:text-center font-normal"
      >
        You can select one of the available APIs to see its content consumed in
        the first section of the page. You can also choose to see the static
        content. Note that all the avaliable APIs aren't full, if you want to
        see the correct design use the static content design.
      </p>
      <div
        ref="box"
        class="border max-h-[400px] overflow-auto border-text-400 rounded-xl mt-10 w-full bg-white cursor-pointer"
      >
        <div
          @click="selectStatic"
          class="w-full min-h-14 border-b border-text-400 px-4 py-4 bg-white hover:bg-indigo-100 transition-colors"
        >
          <h1 class="font-bold text-base lg:text-xl text-primary">
            Static Content
          </h1>
          <p
            class="font text-sm md:text-base lg:text-lg text-text-100 font-normal"
          >
            Choose this to see the first section of the web, as was designed to
            look like Figma.
          </p>
        </div>
        <div
          :key="i"
          v-for="(scholarship, i) in ApiList"
          :ref="`chooseApi-${i}`"
          class="w-full min-h-14 border-b border-text-400 px-4 py-4 bg-white hover:bg-indigo-100 transition-colors"
          @click="selectAPI(i)"
        >
          <h1 class="font-bold text-base lg:text-xl text-primary">
            {{ scholarship.scholarship_name }}
          </h1>
          <p
            class="font text-sm md:text-base lg:text-lg text-text-100 font-normal"
          >
            <strong>slug:</strong> {{ scholarship.slug }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import hsLogo from "@/assets/logo-white.svg";
import { useStore } from "@/stores/index";
import { apiListUrl } from "@/api";
export default {
  name: "ChooseApi",
  setup() {
    const store = useStore();

    const HSData = store.HSData;
    const staticContent = store.staticContent;

    const setHSData = store.setHSData;
    const setStaticContent = store.setStaticContent;

    return {
      staticContent,
      HSData,
      setStaticContent,
      setHSData,
    };
  },
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
      hsLogo,
    };
  },
  methods: {
    removeLastBorder() {
      const lastIndex = this.ApiList.length - 1;
      const lastElementRef = this.$refs[`chooseApi-${lastIndex}`][0];
      console.log(lastElementRef);
      if (lastElementRef) {
        lastElementRef.classList.remove("border-b");
      }
    },
    async fetchData(api_url) {
      try {
        const { data } = await axios.get(api_url);
        this.setHSData(data);
        this.isLoading = false;
      } catch (error) {
        this.$emit("connectivityError", api_url);
      }
    },
    selectStatic() {
      this.setStaticContent(true);
      this.isChoosing = false;
      this.$emit("selected", "static");
    },
    async selectAPI(i) {
      this.setStaticContent(false);
      this.isLoading = true;
      await this.fetchData(this.apiListUrl + this.ApiList[i].slug);
      this.$emit("selected", "api");
      this.isChoosing = false;
    },
  },
  watch: {
    isChoosing(isActive) {
      if (!this.$refs.chooseApi) return;
      if (isActive) {
        this.$refs.chooseApi.style.opacity = "1";
        this.$refs.chooseApi.style.pointerEvents = "all";
      } else {
        this.$refs.chooseApi.style.opacity = "0";
        this.$refs.chooseApi.style.pointerEvents = "none";
      }
    },
    isLoading(isLoading) {
      console.log("cambio!!");
      if (!this.$refs.chooseApi || !this.$refs.box) return;
      if (isLoading) {
        this.$refs.chooseApi.style.filter = "blur(3px)";
        this.$refs.chooseApi.style.cursor = "progress";
        this.$refs.box.style.cursor = "progress";
        this.$refs.box.style.pointerEvents = "none";
      } else {
        this.$refs.chooseApi.style.filter = "none";
        this.$refs.chooseApi.style.cursor = "auto";
        this.$refs.box.style.cursor = "auto";
      }
    },
  },
  mounted() {
    this.removeLastBorder();
  },
};
</script>

<style lang="scss" scoped>
.loading {
  opacity: 1;
  transition: all 1s;
}
</style>
