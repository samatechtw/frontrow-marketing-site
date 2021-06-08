<template>
<div class="future">
  <div id="nft" class="anchor" />
  <div class="future-left">
    <img :src="NftFuture">
    <div class="future-block" />
  </div>
  <div class="future-right">
    <img :src="NftDesign2">
  </div>
</div>
</template>

<style lang="postcss">
@import '/src/assets/css/global.css';

.future {
  width: 100%;
  display: flex;
  margin-top: 140px;
  margin-bottom: 80px;
  .future-left {
    width: 50%;
    position: relative;
    .future-block {
      position: absolute;
      left: 0;
      top: -42px;
      height: 83px;
      max-width: 70%;
      width: 450px;
      background-color: $blue;
    }
    img {
      width: 100%;
    }
  }
  .future-right {
    width: 50%;
    img {
      width: 100%;
    }
  }
  @media (max-width: 540px) {
    flex-wrap: wrap;
    .future-left, .future-right {
      width: 100%;
    }
  }
}
</style>
