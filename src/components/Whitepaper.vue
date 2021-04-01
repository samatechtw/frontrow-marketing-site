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
      <div class="whitepaper-button">
        {{ buttonText }}
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'whitepaper',
  computed: {
    buttonText() {
      return this.$t('whitepaper.download');
    },
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
      height: 40px;
      width: 134px;
      @mixin title 16px;
      @mixin flex-center;
      border-radius: 4px;
    }
  }
}
</style>
