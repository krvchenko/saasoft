<template>
  <v-text-field
    v-model="computedValue"
    v-bind="$attrs"
    :bg-color="error && error.length ? 'red-lighten-5' : ''"
    :error-messages="errorMessages"
    variant="solo-filled"
    density="compact"
    :label="label"
    :type="type"
    :error="error"
    :placeholder="placeholder"
    flat
  />
</template>

<script lang="ts" setup>
import {
  computed,
  toRefs,
  unref,
} from 'vue'

import type { PropType } from 'vue'
import { InputFormTypeEnum } from '@/enum'
// import { errorMessages } from 'vue/compiler-sfc'
// import { ErrorObject } from '@vuelidate/core';

interface Props {
  modelValue: string | null | undefined
  type?: InputFormTypeEnum
  label?: undefined
  placeholder?: undefined
  error?: boolean
  errorMessages?: string | string[]
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: undefined,
  type: InputFormTypeEnum.Text,
  label: undefined,
  placeholder: undefined,
  error: false,
  errorMessages: () => [],
});

const emit = defineEmits(['update:modelValue']);

const { modelValue, type } = toRefs(props);

const computedValue = computed({
  get() {
    return unref(modelValue) as string | number
  },
  set(value: string | number) {
    if (unref(type) === InputFormTypeEnum.Number) {
      emit('update:modelValue', value === '' ? 0 : value)
      return
    }
    emit('update:modelValue', value)
  },
});

</script>
