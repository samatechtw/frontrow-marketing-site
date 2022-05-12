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
  padding-top: 80px;
  padding-bottom: 40px;

  .features {
    svg {
      width: 100%;
    }
  }
  @media (max-width: 600px) {
    .features {
      padding: 0;
    }
  }
}
</style>
