<template>
<div class="how">
  <div id="how" class="anchor" />
  <div class="container">
    <div class="how-title">
      {{ $t('how.title') }}
    </div>
    <div class="how-subtitle">
      {{ $t('how.subtitle') }}
    </div>
    <div class="how-content">
      <div class="how-left">
        <div class="how-hover">
          {{ $t('how.hover') }}
        </div>
        <div class="how-items">
          <div
            v-for="(item, index) in items"
            :key="index"
            class="how-item"
            :class="{ selected: index === selectedIndex }"
            @click="selectedIndex = index"
          >
            {{ itemTitle(item, index) }}
          </div>
        </div>
        <div class="how-item-text-wrap">
          <div class="how-item-text-title">
            {{ selected.title }}
          </div>
          <div class="how-item-text">
            {{ selected.text }}
          </div>
        </div>
      </div>
      <div class="how-right">
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'how',
  data() {
    const items = this.$tm('how.items');
    return {
      items,
      selectedIndex: 0,
    };
  },
  computed: {
    selected() {
      return this.items[this.selectedIndex];
    },
  },
  methods: {
    itemTitle(item, index) {
      return `${index + 1}. ${item.title}`;
    },
  },
};
</script>

<style lang="postcss">
@import '/src/assets/css/global.css';

.how {
  text-align: center;
  padding-bottom: 80px;
  .how-title {
    @mixin title 26px;
    margin-top: 80px;
  }
  .how-subtitle {
    @mixin text 16px;
    margin-top: 32px;
    color: $text-light;
  }
  .how-content {
    display: flex;
    margin-top: 64px;
    > div {
      width: 50%;
    }
  }
  .how-left {
    max-width: 420px;
    margin-left: auto;
    .how-hover {
      @mixin title 13px;
      color: $dark2;
      text-align: left;
    }
    .how-items {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      height: 238px;
      margin-top: 16px;
    }
    .how-item {
      height: 34px;
      @mixin semibold 15px;
      color: $grey3;
      cursor: pointer;
      @mixin flex-center;
      justify-content: flex-start;
      padding-left: 24px;
      &:hover {
        background-color: $grey1;
      }
      &.selected {
        color: white;
        background-color: $orange;
      }
    }
    .how-item-text-wrap {
      margin-top: 24px;
      background-color: $grey2;
      min-height: 240px;
      transition: height 0.2s ease;
      border-radius: 8px;
      padding: 16px;
      text-align: left;
    }
    .how-item-text-title {
      @mixin title 16px;
      color: $orange;
    }
    .how-item-text {
      @mixin text 16px;
      line-height: 24px;
      color: $text-light;
      margin-top: 8px;
    }
  }
}
</style>
