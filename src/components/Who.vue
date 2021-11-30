<template>
  <div class="who">
    <div id="who" class="anchor" />
    <div class="fr-title">
      {{ t('who.title') }}
    </div>
    <div class="who-text">
      {{ t('who.text') }}
    </div>
    <div class="who-image">
      <svg
        class="who-background-clip"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="#f5f8fa" d="M 0 100 L 0 30 C 30 -4 70 -4 100 30 L 100 100 Z" />
      </svg>
      <img :src="Who" />
    </div>
    <div class="who-onepager-wrap">
      <div class="who-onepager container">
        <div class="onepager-left">
          <div class="onepager-title">
            {{ t('who.onepager') }}
          </div>
          <div class="onepager-text">
            {{ t('who.available') }}
          </div>
        </div>
        <div class="onepager-right">
          <a target="_blank" :href="WhitepaperEng" class="fr-button onepager-eng">
            {{ t('who.eng') }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';

import { WhitepaperEng, WhitepaperKor } from '/src/config';

const { t } = useI18n();
</script>

<style lang="postcss">
@import '/src/assets/css/global.css';

.who {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  padding: 88px 0 0;
  .who-text {
    @mixin text 15px;
    width: 620px;
    max-width: 90%;
    color: $text2;
  }
  .who-image {
    width: 100%;
    position: relative;
    background-color: f5f6fa;
    padding-bottom: 88px;
    img {
      width: 460px;
      max-width: 80%;
      margin-top: 64px;
      position: relative;
    }
    .who-background-clip {
      position: absolute;
      bottom: 0;
      height: 100%;
      left: 0;
      width: 100%;
    }
  }
  .who-onepager-wrap {
    background-color: #8e9bf9;
    width: 100%;
  }
  .who-onepager {
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: white;
    align-items: center;
    padding: 43px 0;
    text-align: left;
    .onepager-title {
      @mixin title 18px;
    }
    .onepager-text {
      @mixin text 15px;
      margin-top: 4px;
    }
    .onepager-right {
      @mixin title 15px;
      display: flex;
      .onepager-kor {
        margin-left: 16px;
      }
      > a {
        cursor: pointer;
        width: 140px;
      }
    }
  }
  @media (max-width: 640px) {
    padding-top: 104px;
    .who-onepager {
      flex-wrap: wrap;
      justify-content: center;
      > div {
        width: 100%;
        justify-content: center;
        text-align: center;
      }
      .onepager-right {
        margin-top: 24px;
      }
    }
  }
}
</style>
