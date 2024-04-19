<template>
  <button>
    <div
      ref="bodyBtn"
      @click="handleButtom"
      class="expand-faq w-8 h-8 md:w-12 md:h-12 rounded-full flex justify-center items-center relative"
    >
      <div
        ref="center"
        class="center font-apercu font-medium bg-white w-8 h-8 md:w-12 md:h-12 rounded-full scale-95 flex justify-center items-center"
      >
        <span class="w-fit text-[20px] md:text-base">+</span>
      </div>
      <span
        ref="minus"
        class="minus absolute text-[18px] font-apercu font-medium text-white"
        >-</span
      >
    </div>
  </button>
</template>

<script>
export default {
  name: "ExpandFAQ",
  data: () => {
    return {
      animationRunning: false,
      spining: 0,
      isActive: false,
    };
  },
  props: {
    i: {
      type: Number,
    },
    startAnimation: {
      type: Boolean,
    },
  },
  watch: {
    startAnimation() {
      this.handleButtom();
    },
  },
  methods: {
    spin() {
      this.spining += 180;
      return `${this.spining}deg`;
    },
    easeInOutQuad(x) {
      /* x represents the progress of the animation and its from 0 to 1 */
      return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
    },
    emitContent() {
      return {
        i: this.i,
        isActive: this.isActive,
      };
    },
    handleButtom() {
      if (!this.isActive) {
        this.startFirstAnimation();
      } else {
        this.startResetAnimation();
      }
    },
    startFirstAnimation() {
      if (!this.refsExist() || this.animationRunning) return;
      this.animationRunning = true;

      this.animateBorder();
      this.updateCenterStyles();
    },

    refsExist() {
      return this.$refs.bodyBtn && this.$refs.center && this.$refs.minus;
    },

    animateBorder() {
      let i = 0;
      const interval = setInterval(() => {
        if (i == 36) {
          clearInterval(interval);
          this.$refs.bodyBtn.style.background =
            "conic-gradient(from 0deg,var(--primary) 360deg,var(--border-1) 0deg)";

          setTimeout(this.startSecondAnimation, 400);
        }
        i++;
        const easedProgress = this.easeInOutQuad(i / 36) * 360;

        this.updateBorderColor(easedProgress);
      }, 10);
    },

    animateBorderReverse() {
      if (!this.$refs.bodyBtn) return;

      let i = 36;
      let j = 0;
      const interval = setInterval(() => {
        if (i < 0) {
          clearInterval(interval);
          this.animationRunning = false;
          this.isActive = false;
          this.$refs.bodyBtn.style.background =
            "conic-gradient(from 0deg,var(--primary) 0deg,var(--border-1) 0deg)";
          this.$emit("active", this.emitContent());
        }
        const easedProgress = this.easeInOutQuad(i / 36) * 360;
        const easedFrom = this.easeInOutQuad(j / 36) * 360;
        this.updateBorderColorReverse(easedProgress, easedFrom);
        i--;
        j++;
      }, 10);
    },
    updateBorderColorReverse(degree, from) {
      this.$refs.bodyBtn.style.background = `conic-gradient(from ${
        from + 360 - degree
      }deg , var(--primary) ${degree}deg,var(--border-1)  0deg)`;
    },

    updateBorderColor(degree) {
      this.$refs.bodyBtn.style.background = `conic-gradient(from ${
        degree / 2 + 180
      }deg ,var(--primary) ${degree}deg, var(--border-1) 0deg)`;
    },
    updateCenterStyles() {
      this.$refs.center.style.color = "var(--primary)";
      this.$refs.center.style.rotate = `${this.spin()}`;
    },

    startSecondAnimation() {
      this.$refs.center.style.rotate = this.spin();
      this.$refs.center.style.color = "white";
      this.$refs.center.style.scale = "0%";
      this.$refs.minus.style.opacity = "1";
      setTimeout(() => {
        this.isActive = true;
        this.$emit("active", this.emitContent());
        this.animationRunning = false;
      }, 400);
    },

    startResetAnimation() {
      if (!this.refsExist() || this.animationRunning) return;
      this.animationRunning = true;
      this.$refs.center.style.scale = "100%";
      this.$refs.center.style.color = "var(--primary)";
      this.$refs.center.style.rotate = `${this.spin()}`;
      this.$refs.minus.style.opacity = "0";
      setTimeout(() => {
        this.$refs.center.style.rotate = `${this.spin()}`;
        this.$refs.center.style.color = "var(--text-3)";
        this.$refs.bodyBtn.style.background = `conic-gradient(var(--primary) 0deg, var(--border-1) 0deg)`;
        this.animateBorderReverse();
      }, 800);
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.expand-faq {
  background: conic-gradient(
    from 0deg,
    var(--primary) 0deg,
    var(--border-1) 0deg
  );
}

.center {
  transition: all 0.4s ease-in-out;

  color: var(--text-3);
}

.minus {
  transition: all 0.4s ease-in-out;
  color: white;
  opacity: 0;
}
@keyframes changeAngle {
  from {
    --angle: 0deg;
  }
  to {
    --angle: 180deg;
  }
}
</style>
