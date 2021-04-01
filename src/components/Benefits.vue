<template>
<div class="benefits">
  <div id="benefits" class="anchor" />
  <div class="container">
    <div class="benefits-title">
      <div class="benefits-title1">
        {{ $t('benefits.title1') }}
      </div>
      <div class="benefits-title2">
        {{ $t('benefits.title2') }}
      </div>
      <div class="benefits-title3">
        {{ $t('benefits.title3') }}
      </div>
    </div>
    <div class="benefits-subtitle">
      {{ $t('benefits.subtitle') }}
    </div>
    <div class="benefits-images">
      <div class="benefits-smooth">
        <div class="benefits-image-wrap">
          <img :src="Smooth">
        </div>
        <div class="benefits-image-text">
          {{ $t('benefits.images.smooth') }}
        </div>
      </div>
      <div class="benefits-improve">
        <div class="benefits-image-wrap">
          <img :src="Improve">
        </div>
        <div class="benefits-image-text">
          {{ $t('benefits.images.improve') }}
        </div>
      </div>
      <div class="benefits-faster">
        <div class="benefits-image-wrap">
          <img :src="Faster">
        </div>
        <div class="benefits-image-text">
          {{ $t('benefits.images.faster') }}
        </div>
      </div>
      <div class="benefits-business">
        <div class="benefits-image-wrap">
          <img :src="Business">
        </div>
        <div class="benefits-image-text">
          {{ $t('benefits.images.profit') }}
        </div>
      </div>
    </div>
  </div>
  <div class="who-wrap">
    <div 
      class="who-background"
      :style="{ 'background-image': `url(${Buildings})` }"
    />
    <div class="who-background-overlay" />
    <svg
      class="who-background-clip"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="#fff" d="M 0 24 L 0 0 L 100 0 L 100 24 C 70 00, 30 00, 0 24" />
    </svg>
    <div class="container who">
      <div class="who-left">
        <div class="who-title">
          {{ $t('benefits.who') }}
        </div>
        <div class="who-text">
          {{ $t('benefits.who_text') }}
        </div>
        <div class="who-button">
          {{ $t('benefits.learn') }}
        </div>
      </div>
      <div class="who-right">
        <img :src="Who">
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'benefits',
};
</script>

<style lang="postcss">
@import '/src/assets/css/global.css';

.benefits {
  .benefits-title {
    @mixin title 26px;
    margin-top: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    .benefits-title2 {
      background-color: $black;
      color: white;
      margin: 0 8px;
      padding: 8px;
    }
  }
  .benefits-subtitle {
    @mixin text 16px;
    color: $text-light;
    margin-top: 24px;
    text-align: center;
  }
  .benefits-images {
    margin-top: 64px;
    display: flex;
    justify-content: center;
    .benefits-image-text {
      @mixin text 16px;
      color: $blue;
      text-align: center;
      margin-top: 20px;
    }
    .benefits-image-wrap {
      border: 1px solid $grey3;
      overflow: hidden;
      padding: 8px;
      border-radius: 79px;
      width: 158px;
      height: 158px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 71px;
      }
    }
    .benefits-smooth {
      margin-top: 100px;
    }
    .benefits-improve {
      margin: 60px 0 0 24px;
    }
    .benefits-faster {
      margin: 100px 0 0 16px;
    }
    .benefits-business {
      margin-left: 48px;
      .benefits-image-wrap {
        width: 326px;
        height: 326px;
        border-radius: 168px;
        padding: 11px;
      }
      img {
        border-radius: 157px;
      }
    }
  }
  .who-wrap {
    position: relative;
  }
  .who-background {
    @mixin overlay;
    background-size: cover;
    background-position: center 20%;
  }
  .who-background-overlay {
    @mixin overlay;
    background-color: rgba($dark2, 0.8);
  }
  .who-background-clip {
    @mixin overlay;
  }
  .who {
    position: relative;
    display: flex;
    margin-top: 120px;
    padding: 320px 0 160px;
    .who-left {
      color: $white;
      width: 40%;
      padding-top: 64px;
      .who-title {
        @mixin title 28px;
      }
      .who-text {
        @mixin text 16px;
        color: $grey3;
        margin-top: 16px;
        max-width: 440px;
        line-height: 28px;
      }
      .who-button {
        background: $orange;
        height: 40px;
        @mixin title 16px;
        border-radius: 4px;
        margin-top: 32px;
        @mixin flex-center;
        width: 132px;
      }
    }
    .who-right {
      width: 60%;
      display: flex;
      padding-left: 64px;
      img {
        width: 100%;
      }
    }
  }
}
</style>
