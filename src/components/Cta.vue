<template>
  <div class="cta-wrap">
    <div class="cta-container container">
      <div class="cta-left">
        <div class="cta-text-wrap">
          <div class="cta-title">
            {{ t('cta1') }}
          </div>
          <div class="cta-title">
            {{ t('cta2') }}
          </div>
          <div class="cta-text">
            {{ t('cta_text') }}
          </div>
        </div>
      </div>
      <div class="cta-right">
        <img :src="Cta" />
      </div>
    </div>
    <Banner
      :title="t('whitepaper.title')"
      :text="t('whitepaper.subtitle')"
      :link="WhitepaperEng"
      :linkText="t('whitepaper.download')"
    />
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { WhitepaperEng } from '../config';

const { t } = useI18n();
</script>

<style lang="postcss">
@import '/src/assets/css/global.css';

.cta-wrap {
  background-color: $bg-light1;
  .cta-container {
    display: flex;
    padding: 80px 0 88px;
  }
  .cta-left {
    width: 50%;
    margin-left: 40px;
  }
  .cta-right {
    width: 50%;
    img {
      width: 100%;
      margin-left: -40px;
      max-width: 523px;
    }
  }
  .cta-text-wrap {
    position: relative;
    z-index: 10;
    width: 100%;
    display: flex;
    height: 100%;
    flex-direction: column;
    padding: 80px 0 0 40px;

    .cta-title {
      @mixin title 44px;
      color: $purple;
    }
    .cta-text {
      @mixin text 15px;
      margin-top: 8px;
      color: $text2;
    }
  }
  @media (max-width: 640px) {
    .cta-container {
      flex-wrap: wrap;
      justify-content: center;
      padding-bottom: 0;
    }
    .cta-left,
    .cta-right {
      width: 100%;
      justify-content: center;
      margin: 0;
    }
    .cta-text-wrap {
      text-align: center;
      padding: 0;
      .cta-title {
        font-size: 36px;
      }
    }
    .cta-right {
      margin-top: 40px;
      text-align: center;
      img {
        max-width: 80%;
      }
    }
  }
}
</style>
