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
            @click="selectItem(index)"
          >
            {{ itemTitle(item, index) }}
          </div>
        </div>
        <div
          ref="itemText"
          class="how-item-text-wrap pseudo"
        >
          <div class="how-item-text-title">
            {{ pseudoSelected.title }}
          </div>
          <div class="how-item-text">
            {{ pseudoSelected.text }}
          </div>
        </div>
        <div
          class="how-item-text-wrap"
          :class="{ animating: animating }"
          :style="{ 'max-height': textHeight, height: textHeight }"
        >
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
import { nextTick } from 'vue';

export default {
  name: 'how',
  data() {
    const items = this.$tm('how.items');
    return {
      items,
      pseudoSelectedIndex: 0,
      animating: false,
      selectedIndex: 0,
      textHeight: '0px',
    };
  },
  computed: {
    selected() {
      return this.items[this.selectedIndex];
    },
    pseudoSelected() {
      return this.items[this.pseudoSelectedIndex];
    },
  },
  methods: {
    itemTitle(item, index) {
      return `${index + 1}. ${item.title}`;
    },
    async selectItem(index, hackHeight) {
      this.pseudoSelectedIndex = index;
      this.animating = true;
      setTimeout(() => {
        this.animating = false;
        this.selectedIndex = index;
      }, 200);
      await nextTick();
      const height = parseInt(getComputedStyle(this.$refs.itemText).height);
      console.log('TRANSITION', height);
      this.textHeight = `${height + (hackHeight || 0)}px`;
    },
  },
  async mounted() {
    await this.selectItem(0, 16);
  },
};
</script>

<style lang="postcss">
@import '/src/assets/css/global.css';

.how {
  text-align: center;
  padding-bottom: 40px;
  .how-title {
    @mixin title 26px;
    margin-top: 80px;
  }
  .how-subtitle {
    @mixin subtitle;
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
    min-height: 550px;
    margin-left: auto;
    position: relative;
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
      margin: 16px 0 24px;
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
      background-color: $grey2;
      border-radius: 8px;
      padding: 16px;
      text-align: left;
      transition: all 0.2s ease;
      &.pseudo {
        position: absolute;
        visibility: hidden;
      }
    }
    .how-item-text-title {
      @mixin title 16px;
      color: $orange;
      transition: opacity 0.3s ease;
    }
    .how-item-text {
      @mixin text 16px;
      line-height: 24px;
      color: $text-light;
      margin-top: 8px;
      transition: opacity 0.3s ease;
    }
    .how-item-text-wrap.animating {
      .how-item-text-title, .how-item-text {
        opacity: 0;
      }
    }
  }
  @media (max-width: 800px) {
    .how-content {
      flex-wrap: wrap;
      .how-left, .how-right {
        width: 100%;
      }
      .how-left {
        margin-left: 0;
        max-width: unset;
        .how-hover {
          text-align: center;
        }
      }
    }
  }
}
</style>
