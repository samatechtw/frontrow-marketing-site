<template>
<div class="cta">
  <div class="cta-bg" />
  <div class="cta-overlay">
    <div class="cta-text-wrap container">
      <div class="cta-title" v-html="$t('cta')" />
      <div class="cta-text">
        {{ $t('cta_text') }}
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
  background-color: $black;
  height: 800px;
  color: white;
  height: 840px;
  max-height: 95vh;
  .cta-bg {
    width: 80%;
    height: 100%;
    margin-left: auto;
    background-image: url(/src/assets/img/cta_bg.jpg);
    background: linear-gradient(90deg, rgba(0, 0, 0, 1), rgba(108, 110, 114, 0)), url(/src/assets/img/cta_bg.jpg);
    background-size: cover;
    background-position: 100% 0%;
    background-repeat: no-repeat;
  }
  .cta-overlay {
    @mixin flex-center;
    @mixin overlay;
  }
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
  .cta-text-wrap {
    position: relative;
    width: 100%;
    .cta-title {
      @mixin title 52px;
    }
    .cta-text {
      @mixin text 16px;
      margin-top: 8px;
    }
  }
  @media (max-width: 1100px) {
    .cta-bg {
      background-size: cover;
      background-position: center;
    }
  }
  @media (max-width: 1100px) {
    .cta-text-wrap {
      text-align: center;
    }
  }
  @media (max-width: 520px) {
    .cta-title br {
      display: none;
    }
  }
}
</style>
