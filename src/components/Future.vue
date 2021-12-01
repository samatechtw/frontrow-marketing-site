<template>
  <div class="future">
    <div id="future" class="anchor" />
    <div class="future-left">
      <NftFuture />
    </div>
    <div class="future-right">
      <img :src="NftDesign2" />
    </div>
  </div>
</template>

<style lang="postcss">
@import '/src/assets/css/global.css';

.future {
  width: 100%;
  display: flex;
  padding-bottom: 80px;
  background-color: $bg-light2;
  .future-left {
    width: 45%;
    position: relative;
    background-color: $purple;
    svg {
      width: 100%;
    }
  }
  .future-right {
    width: 55%;
    img {
      width: 100%;
    }
  }
  @media (max-width: 540px) {
    flex-wrap: wrap;
    .future-left,
    .future-right {
      width: 100%;
    }
  }
}
</style>
