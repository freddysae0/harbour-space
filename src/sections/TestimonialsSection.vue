<template>
  <section id="testimonials" class="relative">
    <div
      class="absolute pointer-events-none w-full -top-[109px] flex justify-center"
    >
      <div class="background-decoration"></div>
    </div>
    <div
      class="textimonials-container flex gap-10 overflow-x-auto snap-mandatory snap-x"
      ref="testimonialsContainer"
      @scroll="handleScroll"
    >
      <div
        v-for="testimonial in testimonials"
        :key="testimonial.id"
        class="testimonial-card card min-w-[335px] lg:min-w-[800px] snap-center"
      >
        <div
          class="h-[149px] pl-[25px] lg:pl-[41px] pr-[29px] lg:pr-[86px] flex justify-between items-center bg-white"
        >
          <div class="w-fit flex items-center">
            <div
              id="testimonial-avatar-box"
              class="flex items-center w-[48px] h-[48px] lg:w-[80px] lg:h-[80px] overflow-hidden rounded-full"
              ref="avatarBox"
            >
              <img
                id="testimonial-avatar"
                class="rounded-full w-[48px] h-[48px] lg:w-[80px] lg:h-[80px]"
                :src="IreneAvatar"
                ref="avatarImg"
                alt="Testimonial avatar"
              />
            </div>

            <div class="h-full ml-[21px] flex flex-col justify-center">
              <div class="testimonial-name"><span>Irene Pereyra</span></div>
              <div class="testimonial-job -mt-[3px]">
                <span class="hidden lg:block">
                  Interaction Design Fellow ‘19</span
                >
                <span class="lg:hidden"> Research Lead, SCG</span>
              </div>
            </div>
          </div>

          <p
            ref="linkedin"
            class="linkedin-icon text-text-400 text-[22px] font-apercu font-extrabold"
          >
            in
          </p>
        </div>
        <div
          class="h-[310px] bg-box flex flex-col justify-center items-center gap-[32px]"
        >
          <div class="w-full max-w-[561px] testimonial-content">
            <span>
              This Fellowship was a turning point in my career. I wouldn’t be
              where I am today without the financial support and experienced
              offered through the program.
            </span>
          </div>
          <div class="w-full max-w-[561px] flex gap-3 testimonial-category">
            <span>Education </span>
            <span>·</span>
            <span> B.A. Visual Design </span>
          </div>
        </div>
      </div>
    </div>

    <!-- PREVIOUS AND NEXT BUTTONS -->
    <div
      class="flex lg:hidden h-24 justify-end pr-[21px] sm:pr-[30px] md:pr-[50px]"
    >
      <div class="w-fit h-full flex gap-2 items-center">
        <button
          class="w-[48px] h-[48px] rounded-full border border-border flex justify-center items-center hover:animate-pulse"
          @click="scrollTestimonialsLeft"
        >
          <img class="rotate-90 transition-all" :src="ArrowImg" alt="" />
        </button>
        <button
          class="w-[48px] h-[48px] rounded-full border border-border flex justify-center items-center hover:animate-pulse"
          @click="scrollTestimonialsRigth"
        >
          <img class="-rotate-90 transition-all" :src="ArrowImg" alt="" />
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import IreneAvatar from "@/assets/testimonials/irene-avatar.png";
import LinkedinImg from "@/assets/testimonials/linkedin.png";
import ArrowImg from "@/assets/ui/arrow.png";
export default {
  data: () => {
    return {
      IreneAvatar,
      LinkedinImg,
      ArrowImg,
      testimonials: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      scrollTimeout: null,
    };
  },
  methods: {
    isInViewportHorizontal(elem) {
      const rect = elem.getBoundingClientRect();
      return (
        rect.left >= 0 &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    },
    relocateScroll() {
      if (this.$refs.testimonialsContainer.scrollLeft < 1000) {
        this.$refs.testimonialsContainer.scrollLeft += 1000;
      }

      this.$refs.testimonialsContainer.scrollLeft = 1000;
    },
    scrollTestimonialsRigth() {
      this.$refs.testimonialsContainer.scrollLeft += 200;
    },
    scrollTestimonialsLeft() {
      this.$refs.testimonialsContainer.scrollLeft -= 200;
    },
    handleScroll() {
      // Clean the previous timer if exists

      this.$refs.avatarBox.map((avatarBox) => {
        if (this.isInViewportHorizontal(avatarBox)) {
          avatarBox.style.scale = "100%";
        } else {
          avatarBox.style.scale = "30%";
        }
      });

      this.$refs.avatarImg.map((avatar) => {
        if (this.isInViewportHorizontal(avatar)) {
          avatar.style.scale = "100%";
        } else {
          avatar.style.scale = "300%";
        }
      });
    },
  },
  mounted() {
    this.relocateScroll();
  },
};
</script>

<style lang="scss" scoped>
@import "@/variables";
.linkedin-icon {
  cursor: pointer;
  transition: all 0.2s;
  color: var(--text-4);
}

.linkedin-icon:hover {
  color: var(--primary);
}
#testimonial-avatar {
  transition: all 0.5s;
}
#testimonial-avatar-box {
  transition: all 0.5s;
}

.background-decoration {
  top: 0px;
  background: url("@/assets/hero/slab-background.png");
  background-size: 39.5px;
  background-color: var(--primary);
  background-blend-mode: multiply;
  gap: 0px;
  border: 1px solid #e6e6e6;
  width: 1120px;
  height: 257px;
  z-index: -1;

  @media (min-width: $lg) {
    height: 400px;
  }
}

.textimonials-container {
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;

  // Hiding the scrollbar in:
  // Firefox
  scrollbar-width: none;
  // Internet Explorer, Edge
  -ms-overflow-style: none;
  // Webkit -> Chrome, Safari
  &::-webkit-scrollbar {
    display: none;
  }
}
.testimonial-card {
  scroll-snap-align: center;
}

.testimonial-name {
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.16px;
  text-align: left;
  color: #685dc5;

  font-family: "Apercu Pro";
  @media (min-width: $lg) {
    line-height: 24px;
    letter-spacing: -0.145px;
    color: #535353;
  }
}
.testimonial-job {
  font-family: Apercu Pro;
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
  letter-spacing: -0.1599999964237213px;
  text-align: left;
  color: #535353;
}

.testimonial-content {
  font-family: Apercu Pro;
  font-size: 24px;
  font-weight: 300;
  line-height: 29px;
  letter-spacing: -0.218px;
  text-align: left;
  color: #535353;
  padding-right: 25px;
  padding-left: 25px;

  @media (min-width: $lg) {
    line-height: 35px;
    letter-spacing: -0.185px;
    font-size: 26px;
  }
}

.testimonial-category {
  font-family: Apercu Pro;
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
  letter-spacing: -0.1599999964237213px;
  text-align: left;

  color: #535353;
  padding-left: 25px;
  padding-right: 25px;
}
</style>
