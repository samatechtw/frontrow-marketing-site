<template>
<div class="partners">
  <div class="container">
    <div class="partners-title-wrap">
      <div class="partners-line" />
      <div class="partners-title">
        {{ $t('partners') }}
      </div>
      <div class="partners-line" />
    </div>
    <div class="partners-items">
      <div
        v-for="(logo, index) in partners"
        :key="index"
        class="partners-item"
      >
        {{ logo }}
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'partners',
  data() {
    return {
      partners: ['LOGO HERE', 'LOGO HERE', 'LOGO HERE', 'LOGO HERE', 'LOGO HERE'],
    };
  },
};
</script>

<style lang="postcss">
@import '/src/assets/css/global.css';

.partners {
  padding: 64px 0 80px;
  .partners-title-wrap {
    display: flex;
    align-items: center;
    width: 100%;
  }
  .partners-line {
    height: 1px;
    background: $grey3;
    flex-grow: 1;
  }
  .partners-title {
    @mixin text 16px;
    color: $text-light;
    margin: 0 40px;
  }
  .partners-items {
    display: flex;
    margin-top: 72px;
    justify-content: space-between;
    .partners-item {
      @mixin title 23px;
      color: #dcdcdc;
    }
  }
}
</style>
