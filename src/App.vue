<template>
  <router-view />
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="postcss">
@import './assets/css/font.css';
@import './assets/css/global.css';

html,
body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  color: $black;
  background-color: $white;
  * {
    box-sizing: border-box;
  }
}

.anchor {
  position: absolute;
  top: -120px;
}

a {
  text-decoration: none;
}

.fr-title {
  @mixin title 26px;
  color: $text-title;
}

.fr-title-dark {
  @mixin title 26px;
  color: $teal;
}

.container {
  max-width: 1120px;
  box-sizing: border-box;
  padding-left: 40px;
  padding-right: 40px;
  margin: 0 auto;
}
@media (max-width: 900px) {
  .container {
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>
