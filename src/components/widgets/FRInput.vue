<template>
  <div class="fr-input-wrap">
    <component
      :is="rows ? 'textarea' : 'input'"
      v-bind="commonProps"
      :rows="rows"
      :autocomplete="autocomplete"
      :placeholder="title"
      :value.prop="modelValue"
      @input="emit('update:modelValue', $event.target.value)"
      @keyup.enter="emit('handle-enter')"
    />
    <!--
  <label
    v-if="title"
    class="fr-input-title"
    :for="`input${_uid}`"
    :class="{ 'active': (placeholder || (modelValue || modelValue === 0)) }"
  >
    {{ title }}
  </label>
  --></div>
</template>

<script lang="ts" setup>
import { computed, toRefs } from 'vue';
import { uidSingleton } from '/src/utils';

const uid = uidSingleton.next();

const emit = defineEmits(['update:modelValue', 'handle-enter']);

const props = defineProps({
  modelValue: {
    type: [Number, String],
    default: null,
  },
  placeholder: {
    type: String,
    default: null,
  },
  title: {
    type: String,
    default: null,
  },
  inputType: {
    type: String,
    default: 'text',
  },
  rows: {
    type: Number,
    default: null,
  },
  autocomplete: {
    type: String,
    default: 'off',
  },
  inputClass: {
    type: String,
    default: null,
  },
  maxLength: {
    type: Number,
    default: undefined,
  },
});
const { inputClass, inputType, maxLength, placeholder, rows } = toRefs(props);

const commonProps = computed(() => {
  const common: Record<string, unknown> = {
    class: {
      'fr-input': true,
      'fr-textarea': !!rows.value,
      [inputClass.value]: inputClass.value,
    },
    maxlength: maxLength.value,
    // eslint-disable-next-line
    name: `input${uid}`,
    placeholder: placeholder.value,
  };
  if (!rows.value) {
    common.type = inputType;
  }
  return common;
});
</script>

<style lang="postcss">
@import '/src/assets/css/global.css';

.fr-input-wrap {
  margin-bottom: 15px;
  margin-top: 24px;
  position: relative;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  > input {
    box-sizing: border-box;
    padding-top: 3px;
  }
  > textarea {
    box-sizing: border-box;
    padding-top: 16px;
  }

  label {
    @mixin medium 15px;
    color: #adadad;
    letter-spacing: 0;
    position: absolute;
    background-color: transparent;
    margin-left: 12px;
    top: 18px;
    padding: 0 8px 2px 9px;
    pointer-events: none;
    transition: 0.2s ease all;
  }
  label.active,
  .fr-input:focus ~ label {
    top: -10px;
    font-size: 13px;
    color: white;
    background-color: $blue;
    border-radius: 8px;
  }

  .fr-input {
    @mixin medium 15px;
    color: $text2;
    background: $white;
    width: 100%;
    height: 56px;
    outline: none;
    outline-style: none;
    box-shadow: none;
    border: 1px solid #e3e3e3;
    border-radius: 4px;
    padding-left: 24px;
    padding-right: 16px;

    &.fr-textarea {
      height: unset;
    }

    &:focus::-webkit-input-placeholder {
      opacity: 0;
      transition: opacity 0.2s ease;
    }

    /* stylelint-disable */
    &:-internal-autofill-selected,
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      /* Disable background color of input autocomplete */
      box-shadow: 0 0 0 100px #fff inset !important;
      font-size: initial !important;
    }
    /* stylelint-enable */

    &[type='number'] {
      -moz-appearance: textfield;
    }
    &[type='number']::-webkit-inner-spin-button,
    &[type='number']::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &::placeholder {
      color: #a5a5a5;
    }
  }
}
</style>
