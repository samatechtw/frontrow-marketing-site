<template>
  <div class="features-wrap">
    <div class="features container">
      <img :src="NftFeatures" />
    </div>
  </div>
</template>

<style lang="postcss">
@import '/src/assets/css/global.css';

.features-wrap {
  background-color: $bg-light2;
  padding-bottom: 48px;
}
.features {
  img {
    width: 100%;
  }
}
</style>
