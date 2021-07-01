<template>
<div class="whitepaper">
  <div class="container">
    <div class="whitepaper-left">
      <div class="whitepaper-title">
        {{ $t('whitepaper.title') }}
      </div>
      <div class="whitepaper-subtitle">
        {{ $t('whitepaper.subtitle') }}
      </div>
    </div>
    <div class="whitepaper-right">
      <a target="_blank" :href="WhitepaperEng">
        <div class="whitepaper-button">
          {{ $t('whitepaper.download') }}
        </div>
      </a>
    </div>
  </div>
</div>
</template>

<script>
import { WhitepaperEng } from '/src/config';

export default {
  setup() {
    return {
      WhitepaperEng,
    };
  },
};
</script>

<style lang="postcss">
@import '/src/assets/css/global.css';

.whitepaper {
  background: $blue;
  color: $white;
  height: 128px;
  .container {
    display: flex;
    align-items: center;
    height: 100%;
  }
  .whitepaper-title {
    @mixin title 18px;
  }
  .whitepaper-subtitle {
    @mixin text 15px;
    margin-top: 4px;
  }
  .whitepaper-right {
    margin-left: auto;
    .whitepaper-button {
      background: $black;
      color: white;
      height: 40px;
      width: 134px;
      margin-left: 24px;
      @mixin title 16px;
      @mixin flex-center;
      border-radius: 4px;
    }
  }
  @media (max-width: 520px) {
    height: auto;
    padding: 32px 0;
    .container {
      flex-wrap: wrap;
    }
    .whitepaper-left, .whitepaper-right {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      width: 100%;
    }
    .whitepaper-right {
      margin-top: 24px;
    }
  }
}
</style>
