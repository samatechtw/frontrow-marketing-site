<template>
<div class="faq">
  <div id="faq" class="anchor" />
  <div class="container">
    <div class="faq-title">
      {{ $t('faq.title') }}
    </div>
    <div class="faq-subtitle">
      {{ $t('faq.subtitle') }}
    </div>
    <div class="faq-items">
      <div
        v-for="(faq, index) in $tm('faq.items')"
        :key="index"
        class="faq-item"
        :class="index === selectedFaq ? 'opened' : 'closed'"
      >
        <div class="faq-text">
          <div
            class="faq-question"
            @click="toggleFaq(index)"
          >
            {{ faq.title }}
          </div>
          <transition
            name="animate-height"
            @enter="enter(index)"
            @leave="leave"
          >
            <div
              v-if="index === selectedFaq"
              :style="{ 'max-height': answerHeights[index], height: answerHeights[index] }"
              class="faq-answer"
            >
              {{ faq.text }}
            </div>
          </transition>
          <div :ref="`answer${index}`" class="faq-pseudo-answer">
            {{ faq.text }}
          </div>
        </div>
        <svg
          width="21"
          height="12"
          viewBox="0 0 23 14"
        >
          <g>
            <line
              x1="1"
              y1="1"
              x2="11.5"
              y2="12"
              stroke-linecap="round"
            />
            <line
              x1="11.5"
              y1="12"
              x2="22"
              y2="1"
              stroke-linecap="round"
            />
          </g>
        </svg>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'faq',
  data() {
    return {
      selectedFaq: null,
      answerHeights: this.$tm('faq.items').map(_item => 0),
    };
  },
  methods: {
    toggleFaq(index) {
      if(this.selectedFaq === index) {
        this.selectedFaq = null;
      } else {
        this.selectedFaq = index;
      }
    },
    enter(index) {
      const height = parseInt(getComputedStyle(this.$refs[`answer${index}`]).height);
      this.answerHeights[index] = `${height + 24}px`;
    },
    leave() {
      this.answerHeights = this.$tm('faq.items').map(_item => 0);
    },
  },
};
</script>

<style lang="postcss">
@import '/src/assets/css/global.css';

.faq {
  background: $grey1;
  text-align: center;
  padding: 72px 0 80px;
  #faq {
    top: -60px;
  }
  .faq-title {
    @mixin title 26px;
  }
  .faq-subtitle {
    @mixin text 16px;
    margin-top: 32px;
    color: $text-light;
  }
  .faq-items {
    margin-top: 88px;
  }
  .faq-item {
    display: flex;
    text-align: left;
    box-sizing: border-box;
    padding: 0 0 8px;
    .faq-question {
      @mixin title 19px;
      margin-bottom: 16px;
      padding-bottom: 24px;
      cursor: pointer;
      color: $text-light;
      border-bottom: 1px solid $grey3;
    }
    &.opened {
      opacity: 1;
      .faq-question {
        color: $blue;
      }
      .faq-caret-vertical {
        transform: rotate(90deg);
        background-color: #2a2a2a;
      }
      .faq-caret-horizontal {
        transform: rotate(90deg);
        opacity: 0;
      }
    }
    .faq-text {
      margin-left: 48px;
      position: relative;
      width: 100%;
    }
    .faq-pseudo-answer {
      position: absolute;
      visibility: hidden;
      width: 100%;
    }
    .faq-answer, .faq-pseudo-answer {
      font-family: 'PTSerif', sans-serif;
      @mixin text 15px;
      line-height: 24px;
      color: $text-light2;
      word-break: break-word;
      transition: all 0.3s;
      overflow: hidden;
    }
    .animate-height-enter, .animate-height-leave-to {
      max-height: 0 !important;
    }
  }
  @media (max-width: 700px) {
    .faq-item {
      padding: 40px 32px 30px;
      .faq-question {
        font-size: 24px;
      }
      .faq-caret {
        top: 0;
      }
      .faq-answer, .faq-pseudo-answer {
        font-size: 18px;
        line-height: 28px;
      }
    }
  }
}
</style>
