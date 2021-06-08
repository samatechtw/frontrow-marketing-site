<template>
<div class="tpa-title-wrap" :class="{ dark }">
  <div class="tpa-title-bg">
    {{ textBg || text }}
  </div>
  <div class="tpa-title">
    {{ text }}
  </div>
</div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    textBg: {
      type: String,
      default: null,
    },
    dark: Boolean,
  },
};
</script>

<style lang="postcss">
@import '/src/assets/css/global.css';

.tpa-title-wrap {
  position: relative;
  @mixin title 26px;
  .tpa-title-bg {
    opacity: 5%;
    font-size: 56px;
  }
  .tpa-title {
    color: $dark4;
    position: relative;
    top: -50px;
  }
  &.dark {
    .tpa-title-bg {
      opacity: 10%;
    }
    .tpa-title {
      color: white;
    }
  }
}
</style>
