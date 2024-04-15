<template>
  <footer class="bg-white px-[80px] flex flex-wrap gap-[64px] h-[86.08px]">
    <div
      v-for="item in items"
      :key="item.title"
      class="footer-item min-w-fit h-full"
    >
      <div class="flex flex-col justify-center h-full">
        <h3 class="text-base text-text-100 font-medium">{{ item.title }}</h3>
        <p class="text-sm text-text-100 font-light">{{ item.text }}</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "NavbarComponent",
  data: () => {
    return {
      items: [
        {
          title: "Zeptolab",
          text: "Marketing Performance",
        },
        {
          title: "Location",
          text: "Bangkok",
        },
        {
          title: "Duration",
          text: "1 Year Full-Time",
        },
        {
          title: "Start date",
          text: "3 Aug 2020",
        },
        {
          title: "Application deadline",
          text: "30 June 2020",
        },
        {
          title: "Application closes in",
          text: "6 Day   :   22 Hrs   :   56 Min",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
