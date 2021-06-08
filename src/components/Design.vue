<template>
<div class="design">
  <div class="design-title">
    {{ $t('nft.design') }}
  </div>
  <div class="design-image">
    <img :src="NftDesign">
  </div>
</div>
</template>

<style lang="postcss">
@import '/src/assets/css/global.css';

.design {
  text-align: center;
  padding: 96px 0;
  .design-title {
    @mixin title 26px;
    color: #0a0a0a;
  }
  img {
    width: 100%;
    margin-top: 40px;
  }
}
</style>
