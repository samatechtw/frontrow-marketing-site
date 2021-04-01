<template>
<div class="risks">
  <div id="risks" class="anchor" />
  <div class="container">
    <div class="risks-title1">
      {{ $t('risks.title1') }}
    </div>
    <div class="risks-title2">
      {{ $t('risks.title2') }}
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
        <div class="risks-item-image">
        </div>
        <div class="risks-item-title">
          {{ item.title }}
        </div>
        <div class="risks-item-text">
          {{ item.text }}
        </div>
      </div>
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
  background: $dark1;
  color: $white;
  padding: 72px 0 80px;
  text-align: center;
  #risks {
    top: -60px;
  }
  .risks-title1 {
    @mixin title 20px;
    color: $blue;
  }
  .risks-title2 {
    @mixin title 28px;
    margin-top: 4px;
  }
  .risks-subtitle {
    @mixin text 16px;
    color: $text-light;
    margin-top: 32px;
  }
  .risks-items {
    margin-top: 96px;
    display: flex;
    justify-content: space-between;
  }
  .risks-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .risks-item-image {
    width: 120px;
    height: 120px;
    border-radius: 60px;
    border: 1px solid #979797;
  }
  .risks-item-title {
    @mixin title 16px;
    margin-top: 6px;
  }
  .risks-item-text {
    @mixin text 15px;
    margin-top: 12px;
    max-width: 240px;
  }
}
</style>
