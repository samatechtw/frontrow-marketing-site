<template>
  <div class="future">
    <div id="future" class="anchor" />
    <div class="future-left">
      <img :src="NftFuture" />
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
    width: 50%;
    position: relative;
    .future-block {
      position: absolute;
      left: 0;
      top: -42px;
      height: 83px;
      max-width: 70%;
      width: 450px;
      background-color: $yellow;
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
    padding-top: 96px;
    .future-left,
    .future-right {
      width: 100%;
    }
  }
}
</style>
