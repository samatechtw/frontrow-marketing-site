<template>
  <div class="features-wrap">
    <div class="features container">
      <NftFeatures />
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
  svg {
    width: 100%;
  }
  @media (max-width: 600px) {
    padding: 0;
  }
}
</style>
