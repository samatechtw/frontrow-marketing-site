<template>
<div class="risks">
  <div id="risks" class="anchor" />
  <div class="risks-bg-black" />
  <div class="container">
    <div class="risks-title">
      {{ $t('risks.title') }}
    </div>
    <div class="risks-subtitle">
      {{ $t('risks.subtitle') }}
    </div>
    <div class="risks-items">
      <div
        v-for="(item, index) in $tm('risks.items')"
        :key="index"
        class="risks-item"
      >
        <div class="risks-item-title">
          {{ item.title }}
        </div>
        <div class="risks-item-text">
          {{ item.text }}
        </div>
      </div>
    </div>
    <div class="risks-woman-wrap">
      <div class="risks-woman-bg" />
      <img class="risks-woman" :src="Woman">
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'risks',
};
</script>

<style lang="postcss">
@import '/src/assets/css/global.css';

.risks {
  color: $white;
  padding: 72px 0 80px;
  overflow-x: hidden;
  #risks {
    top: -60px;
  }
  .risks-bg-black {
    @mixin overlay;
    width: 70%;
    background: $dark1;
  }
  .container {
    position: relative;
    max-width: 1100px;
  }
  .risks-title {
    @mixin title 28px;
  }
  .risks-subtitle {
    @mixin subtitle;
    color: #c9c9c9;
    text-align: left;
    margin: 24px 0 0;
    max-width: 440px;
  }
  .risks-items {
    padding-left: 5%;
  }
  .risks-item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 400px;
  }
  .risks-item-title {
    @mixin title 16px;
    margin-top: 56px;
    color: $orange;
  }
  .risks-item-text {
    @mixin text 16px;
    line-height: 24px;
    margin-top: 8px;
  }
  .risks-woman-wrap {
    position: absolute;
    top: 10px;
    right: -20px;
  }
  .risks-woman-bg {
    height: 84px;
    width: 500px;
    background: $blue;
    position: absolute;
    right: -60px;
    bottom: -38px;
  }
  .risks-woman {
    position: relative;
    width: 380px;
  }
  @media (max-width: 930px) {
    .risks-items {
      padding-left: 0%;
    }
    .risks-item {
      max-width: 360px;
    }
  }
  @media (max-width: 820px) {
    background-color: $dark1;
    .risks-title {
      text-align: center;
    }
    .risks-woman-bg, .risks-woman, .risks-bg-black {
      display: none;
    }
    .risks-item, .risks-subtitle {
      margin-left: auto;
      margin-right: auto;
    }
  }
}
</style>
