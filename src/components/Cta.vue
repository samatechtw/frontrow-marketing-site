<template>
<div class="cta">
  <div
    class="cta-bg"
    :style="{
      'background-image': `url(${CtaBg})`,
    }"
  >
    <div class="cta-overlay" />
    <div class="cta-text-wrap">
      <div class="cta-title">
        {{ $t('company') }}
      </div>
      <div class="cta-text">
        {{ $t('cta') }}
      </div>
    </div>
    <div class="cta-scroll" @click="scrollBenefits">
      <div class="cta-scroll-text">
        {{ $t('scroll') }}
      </div>
      <img :src="Scroll">
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'cta',
  methods: {
    scrollBenefits() {
      document.getElementById('benefits').scrollIntoView({
        behavior: 'smooth',
      });
    },
  },
};
</script>

<style lang="postcss">
@import '/src/assets/css/global.css';

.cta {
  background-color: $white;
  height: 800px;
  color: white;
  .cta-bg {
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: 50% 10%;
    @mixin flex-center;
    .cta-scroll {
      position: absolute;
      bottom: 48px;
      @mixin text 16px;
      text-align: center;
      cursor: pointer;
      img {
        width: 18px;
        margin-top: 8px;
      }
    }
  }
  .cta-overlay {
    @mixin overlay;
    background-color: $overlay;
  }
  .cta-text-wrap {
    position: relative;
    text-align: center;
    .cta-title {
      @mixin title 52px;
      height: 80px;
    }
    .cta-text {
      @mixin text 16px;
    }
  }
}
</style>
