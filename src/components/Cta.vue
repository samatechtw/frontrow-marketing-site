<template>
  <div class="home-cta-wrap">
    <div class="home-cta">
      <div class="home-cta-box">
        <div class="cta-title" v-html="t('home.cta1')" />
        <div class="cta-title" v-html="t('home.cta2')" />
        <div class="cta-text">
          {{ t('home.cta_text') }}
        </div>
      </div>
    </div>
    <div class="home-cta-right" :style="{ 'background-image': `url(${MainBg})` }">
      <div class="home-cta-image">
        <img :src="CtaImage" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import MainBg from '/src/assets/img/main-bg.svg';
import CtaImage from '/src/assets/img/cta.jpg';

const { t } = useI18n();
</script>

<style lang="postcss">
@import '/src/assets/css/global.css';

.home-cta-wrap {
  display: flex;
  position: relative;
  width: 100%;
  background-color: $purple;
  justify-content: flex-end;
  .home-cta-right {
    display: flex;
    align-items: center;
    width: 40%;
    height: 100%;
    height: 540px;
    background-color: $pink2;
    background-size: cover;
    background-position: 50%;
  }
  .home-cta-image img {
    width: 267px;
    border-radius: 30px;
    position: relative;
    left: -50%;
  }
  .home-cta {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    .home-cta-box {
      display: flex;
      flex-direction: column;
      padding: 48px 300px 0 48px;
    }
    .cta-title {
      @mixin medium 52px;
      color: $teal;
    }
    .cta-text {
      @mixin text-medium 16px;
      color: white;
      line-height: 23px;
      margin-top: 24px;
      padding-bottom: 32px;
      max-width: 440px;
    }
    .home-cta-button {
      width: 288px;
    }
  }
  @media (max-width: 1080px) {
    .home-cta .home-cta-box {
      padding-right: 180px;
    }
  }
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    padding-bottom: 64px;
    .home-cta-image {
      max-width: 80%;
      img {
        left: unset;
      }
    }
    .home-cta {
      padding: 0 40px 48px;
      width: 100%;
      justify-content: center;
      text-align: center;
      .home-cta-box {
        align-items: center;
      }
      .cta-title {
        font-size: 40px;
      }
      .home-cta-box {
        margin: unset;
        padding: 48px 0 0;
      }
    }
    .home-cta-right {
      @mixin flex-center;
      background-image: unset !important;
      background-color: $purple;
      height: unset;
      width: 100%;
    }
  }
}
</style>
