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
        class="testimonial-card card min-w-[800px] snap-center"
      >
        <div
          class="h-[149px] pl-[41px] pr-[86px] flex justify-between items-center bg-white"
        >
          <div class="w-fit flex items-center">
            <div
              id="testimonial-avatar-box"
              class="flex items-center w-[80px] h-[80px] overflow-hidden rounded-full"
              ref="avatarBox"
            >
              <img
                id="testimonial-avatar"
                class="rounded-full w-[80px] h-[80px]"
                :src="IreneAvatar"
                ref="avatarImg"
                alt="Testimonial avatar"
              />
            </div>

            <div class="h-full ml-[21px] flex flex-col justify-center">
              <div class="testimonial-name"><span>Irene Pereyra</span></div>
              <div class="testimonial-job -mt-[3px]">
                <span> Interaction Design Fellow ‘19</span>
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
  </section>
</template>

<script>
import IreneAvatar from "@/assets/testimonials/irene-avatar.png";
import LinkedinImg from "@/assets/testimonials/linkedin.png";
export default {
  data: () => {
    return {
      IreneAvatar,
      LinkedinImg,
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
    scrollTestimonials() {
      if (this.$refs.testimonialsContainer.scrollLeft < 1000) {
        this.$refs.testimonialsContainer.scrollLeft += 1000;
      }

      this.$refs.testimonialsContainer.scrollLeft = 1000;
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
    this.scrollTestimonials();
  },
};
</script>

<style lang="scss" scoped>
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
  background-image: url("@/assets/hero/slab-background.png");
  background-size: 39.5px;
  gap: 0px;
  border: 1px solid #e6e6e6;
  width: 1120px;
  height: 400px;
  z-index: -1;
}

.textimonials-container {
  scroll-snap-type: x mandatory;
}
.testimonial-card {
  scroll-snap-align: center;
}

.testimonial-name {
  font-family: "Apercu Pro";
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.145454540848732px;
  text-align: left;
  color: #535353;
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
  font-size: 26px;
  font-weight: 300;
  line-height: 35px;
  letter-spacing: -0.18571428954601288px;
  text-align: left;
  color: #535353;
}

.testimonial-category {
  font-family: Apercu Pro;
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
  letter-spacing: -0.1599999964237213px;
  text-align: left;
  color: #535353;
}
</style>
