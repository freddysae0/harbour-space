<template>
  <span class="toggle-navbar-icon">
    <div>
      <div class="bg-slate-500 absolute w-1 h-5"></div>
    </div>
    <div></div>
    <div></div>
  </span>
</template>

<script>
export default {
  name: "ToggleComponent",
};
</script>

<style lang="scss" scoped>
.toggle-navbar-icon {
  height: 25px;
  width: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  :nth-child(n) {
    height: 3px;
    background-color: white;
  }
  :nth-child(1) {
    position: relative;
  }
  :nth-child(3) {
    position: relative;
  }
}
</style>
