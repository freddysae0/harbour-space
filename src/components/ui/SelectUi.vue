<template>
  <button @click="handleClick">
    <div class="cursor-pointer relative w-[235px] h-[58px]">
      <img
        ref="arrow"
        class="absolute right-[27px] top-[27px] z-20 arrow"
        :src="ArrowIcon"
      />
      <div
        ref="select"
        class="select absolute z-10 top-0 left-0 w-[235px] bg-white overflow-hidden border border-solid border-border rounded-[35px]"
      >
        <div class="text-btn w-full h-[58px] flex items-center pl-[24px]">
          <span>{{ text }}</span>
        </div>

        <div
          v-for="(selectable, i) in selectables"
          :key="i"
          class="text-option w-full h-[58px] flex hover:text-primary items-center pl-[24px]"
        >
          <span>{{ selectable.title }}</span>
        </div>
      </div>
    </div>
  </button>
</template>

<script>
import ArrowIcon from "@/assets/ui/arrow.png";
export default {
  name: "SelectUi",
  data: () => {
    return {
      ArrowIcon,
      fitSize: "",
    };
  },
  props: {
    /* Must contain a list of objects with title property */
    text: {
      type: String,
    },
    selectables: {
      type: Array,
    },
  },
  methods: {
    getFitContentHeights() {
      if (!this.$refs.select) return;
      //Saving the previous height value
      let previousState = this.$refs.select.getBoundingClientRect().height;

      //Looking and saving what height will have with fit content
      this.$refs.select.style.height = "fit-content";
      let nextState = this.$refs.select.getBoundingClientRect().height;
      this.fitSize = `${Number.parseInt(nextState)}px`;

      //returning to the previous size
      this.$refs.select.style.height = `${previousState}px`;
    },
    handleClick() {
      if (!this.$refs.select) return;
      if (this.$refs.select.style.height == "58px") {
        this.$refs.arrow.style.transform = "rotateX(180deg)";
        this.$refs.select.style.height = this.fitSize;
      } else {
        this.$refs.arrow.style.transform = "rotateX(0deg)";
        this.$refs.select.style.height = "58px";
      }
    },
  },
  mounted() {
    this.getFitContentHeights();
  },
};
</script>

<style lang="scss" scoped>
.select {
  transition: all 0.5s ease-in-out;
  height: 58px;
}
.text-btn {
  font-family: Apercu Pro;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.18000000715255737px;
  text-align: left;
  color: #685dc5;
}

.text-option {
  font-family: Apercu Pro;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.18000000715255737px;
  text-align: left;
  color: var(--text-1);
}

.arrow {
  transition: transform 0.2s linear;
  transform: rotateX(0deg);
}
</style>
