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
            @mouseenter="hoverIndex = index"
            @mouseleave="hoverIndex = null"
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
        <!-- eslint-disable @intlify/vue-i18n/no-raw-text vue/max-attributes-per-line -->
        <svg
          viewBox="0 0 513 501"
          preserveAspectRatio="none"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g class="square" :class="clsList([14])">
            <path d="M 200 1 L 274 1 A 37 36.5 0 1 1 274 74 L 200 74 A 37 36.5 0 1 1 200 1" />
            <text x="193" y="42" class="dark">{{ $t('how.holders') }}</text>
          </g>
          <g class="line" :class="cls(9)">
            <path d="M 111 448 L 176 448" />
            <polygon points="176,450 176,446 180,448" />
            <circle cx="148" cy="448" r="10.5" @click="selectItem(8)" />
            <text x="145" y="452" @click="selectItem(8)">9</text>
          </g>
          <g class="line" :class="cls(14)">
            <path d="M 237.5 113 L 237.5 81" />
            <polygon points="235.5,81 239.5,81 237.5,77" />
            <circle cx="237.5" cy="95.5" r="10.5" @click="selectItem(13)" />
            <text x="231.5" y="100" @click="selectItem(13)">14</text>
          </g>
          <g class="line" :class="cls(8)">
            <path d="M 52.5 357 L 52.5 387.5 M 52.5 380 L 213 380 L 213 410" />
            <polygon points="50.5,387.5 54.5,387.5 52.5,391.5" />
            <polygon points="211,410 215,410 213,414" />
            <circle cx="52.5" cy="371" r="10.5" @click="selectItem(7)" />
            <text x="49" y="375" @click="selectItem(7)">8</text>
          </g>
          <g class="line" :class="cls(10)">
            <path d="M 237.5 390 L 237.5 346" />
            <polygon points="235.5,346 239.5,346 237.5,342" />
            <circle cx="237.5" cy="368" r="10.5" @click="selectItem(9)" />
            <text x="232" y="372" @click="selectItem(9)">10</text>
          </g>
          <g class="line" :class="cls(11)">
            <path d="M 207 336 L 207 354 L 79 354 L 79 336" />
            <polygon points="77,336 81,336 79,332" />
            <circle cx="188" cy="354" r="10.5" @click="selectItem(10)" />
            <text x="183.5" y="358" @click="selectItem(10)">11</text>
          </g>
          <g class="line" :class="cls(5)">
            <path d="M 158 317 L 105 317" />
            <polygon points="105,315 105,319 101,317" />
            <circle cx="143" cy="317" r="10.5" @click="selectItem(4)" />
            <text x="139.5" y="321" @click="selectItem(4)">5</text>
          </g>
          <g class="line" :class="cls(4)">
            <path d="M 104 289.5 L 155 289.5" />
            <polygon points="155,287.5 155,291.5 159,289.5" />
            <circle cx="125" cy="289.5" r="10.5" @click="selectItem(3)" />
            <text x="121" y="292" @click="selectItem(3)">4</text>
          </g>
          <g class="line" :class="cls(1)">
            <path d="M 451 211 L 451 308 L 318 308" />
            <polygon points="318,306 318,310 314,308" />
            <circle cx="451" cy="237" r="10.5" @click="selectItem(0)" />
            <text x="449" y="240.5" @click="selectItem(0)">1</text>
          </g>
          <g class="line" :class="cls(2)">
            <path d="M 315 290 L 430 290 L 430 214" />
            <polygon points="428,214 432,214 430,210" />
            <circle cx="338" cy="290" r="10.5" @click="selectItem(1)" />
            <text x="334.5" y="293.5" @click="selectItem(1)">2</text>
          </g>
          <g class="line" :class="cls(3)">
            <path d="M 97 284 L 97 244 L 325 244 L 325 181 L 357 181" />
            <polygon points="357,179 357,183 361,181" />
            <circle cx="97" cy="265" r="10.5" @click="selectItem(2)" />
            <text x="93.5" y="268.5" @click="selectItem(2)">3</text>
          </g>
          <g class="line" :class="cls(13)">
            <path d="M 361 166 L 312 166 L 312 231 L 81 231 L 81 267" />
            <polygon points="" />
            <circle cx="338" cy="166" r="10.5" @click="selectItem(12)" />
            <text x="333" y="169" @click="selectItem(12)">13</text>
          </g>
          <g class="line" :class="cls(6)">
            <path d="M 67 254 L 67 183 L 186 183" />
            <polygon points="186,181 186,185 190,183" />
            <circle cx="87" cy="183" r="10.5" @click="selectItem(5)" />
            <text x="83" y="186.5" @click="selectItem(5)">6</text>
          </g>
          <g class="line" :class="cls(7)">
            <path d="M 182 168 L 53 168 L 53 241" />
            <polygon points="51,241 55,241 53,245" />
            <circle cx="156" cy="168" r="10.5" @click="selectItem(6)" />
            <text x="152.5" y="172" @click="selectItem(6)">7</text>
          </g>
          <g class="line" :class="cls(12)">
            <path d="M 38 254 L 38 154 L 186 154" />
            <polygon points="186,152 186,156 190,154" />
            <circle cx="38" cy="214" r="10.5" @click="selectItem(11)" />
            <text x="33" y="217" @click="selectItem(11)">12</text>
          </g>
          <g class="diamond" :class="clsList([6, 7, 14])">
            <polygon points="237.5,115 185,168 237.5,220 290,168" />
            <text x="209" y="170">{{ $t('how.pool') }}</text>
          </g>
          <g class="diamond" :class="clsList([3, 4, 5, 6, 7, 8, 11, 12, 13])">
            <polygon points="52.5,247 0,300 52.5,353 105,300" />
            <text x="21" y="302">{{ $t('how.retail') }}</text>
          </g>
          <g class="diamond small" :class="clsList([8, 9])">
            <polygon points="52.5,395 0,448 52.5,501 105,448" />
            <text x="8" y="450">{{ $t('how.manufacturer') }}</text>
          </g>
          <g class="diamond small" :class="clsList([8, 9, 10])">
            <polygon points="237.5,395 185,448 237.5,501 290,448" />
            <text x="199" y="450">{{ $t('how.logistics') }}</text>
          </g>
          <g class="square" :class="clsList([1, 2, 4, 5, 10, 11])">
            <polygon points="164,263, 311,263 311,336 164,336" />
            <text class="dark" x="198" y="303">{{ $t('how.network') }}</text>
          </g>
          <g class="square" :class="clsList([1, 2, 3, 13])">
            <polygon points="366,134 366,206 512,206 512,134" />
            <text class="dark" x="425" y="174">{{ $t('how.sme') }}</text>
          </g>
        </svg>
        <!-- eslint-enable @intlify/vue-i18n/no-raw-text -->
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
      hoverIndex: null,
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
      this.textHeight = `${height + (hackHeight || 0)}px`;
    },
    cls(number) {
      const index = number - 1;
      if(index === this.selectedIndex) {
        return 'selected';
      }
      if(index === this.hoverIndex) {
        return 'hover';
      }
      return '';
    },
    clsList(list) {
      const indexes = list.map(n => n - 1);
      console.log(this.selectedIndex, indexes);
      if(indexes.includes(this.selectedIndex)) {
        return 'selected';
      }
      if(indexes.includes(this.hoverIndex)) {
        return 'hover';
      }
      return '';
    }
  },
  async mounted() {
    await this.selectItem(0, 16);
  },
};
</script>

<style lang="postcss">
@import '/src/assets/css/global.css';

$hover: $blue;

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
    max-width: 430px;
    min-height: 550px;
    margin-left: auto;
    margin-right: 16px;
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
      transition: background-color 0.3s ease;
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
  .how-right {
    display: flex;
    align-items: flex-start;
    svg {
      max-width: 550px;
      margin-left: auto;
      width: 100%;
      circle {
        cursor: pointer;
      }
      path, polygon, circle, text {
        transition: all 0.2s ease;
      }
      text {
        @mixin title 11px;
        fill: white;
        stroke: white;
        stroke-width: 0;
        user-select: none;
        &.dark {
          fill: $dark3;
          stroke: $dark3;
        }
      }
      .line {
        stroke: #808080;
        fill: none;
        polygon, circle {
          fill: #808080;
        }
        text {
          font-weight: 500;
          cursor: pointer;
        }
        &.hover {
          stroke: $hover;
          polygon, circle {
            fill: $hover;
          }
        }
        &.selected {
          stroke: $orange;
          polygon, circle {
            fill: $orange;
          }
        }
      }
      .diamond {
        fill: $dark3;
        text {
          fill: white;
          pointer-events: none;
        }
        &.small text {
          font-size: 10px;
        }
        &.hover {
          fill: $hover;
        }
        &.selected {
          fill: $orange;
        }
      }
      .square {
        stroke-width: 1.1;
        fill: none;
        stroke: $dark3;
        text {
          pointer-events: none;
        }
        &.hover {
          stroke: $hover;
          text {
            fill: $hover;
          }
        }
        &.selected {
          stroke: $orange;
          text {
            fill: $orange;
          }
        }
      }
    }
  }
  @media (max-width: 860px) {
    .how-content {
      flex-wrap: wrap;
      flex-direction: column-reverse;
      .how-right {
        width: 100%;
        svg {
          margin-right: auto;
        }
      }
      .how-left {
        margin: 48px auto 0;
        width: unset;
        .how-hover {
          text-align: center;
        }
      }
    }
  }
  @media (max-width: 520px) {
    .how-content .how-left .how-item {
      font-size: 13px;
    }
  }
}
</style>
