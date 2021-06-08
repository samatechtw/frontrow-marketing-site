<template>
<div class="cta-wrap">
  <div class="container">
    <div class="cta-left">
      <div class="cta-text-wrap">
        <img :src="Ismedia">
        <div class="cta-title" v-html="$t('cta')" />
        <div class="cta-text">
          {{ $t('cta_text') }}
        </div>
      </div>
    </div>
    <div class="cta-right">
      <img :src="Cta">
    </div>
  </div>
</div>
</template>

<style lang="postcss">
@import '/src/assets/css/global.css';

.cta-wrap {
  background-color: $grey1;
  .container {
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
      max-width: 400px;
    }
  }
  .cta-text-wrap {
    position: relative;
    z-index: 10;
    width: 100%;
    display: flex;
    height: 100%;
    flex-direction: column;
    padding-top: 80px;

    img {
      width: 110px;
    }
    .cta-title {
      @mixin title 34px;
      margin-top: 12px;
      color: black;
      white-space: nowrap;
    }
    .cta-text {
      @mixin medium 20px;
      margin-top: 24px;
      color: #795df6;
      padding-bottom: 6px;
      border-bottom: 2px solid #795df6;
      align-self: flex-start;
    }
  }
  @media (max-width: 520px) {
    flex-wrap: wrap;
    .cta-left, .cta-right {
      width: 100%;
    }
  }
}
</style>
