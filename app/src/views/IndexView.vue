<template>
  <v-container>
    <v-row
      align="start"
      no-gutters
    >
      <v-col
      >
        <v-sheet class="pa-2 ma-2">
          <v-icon icon="mdi-eye-off" />
          <input-form
            v-model="test"
            placeholder="test"
          />
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import {
  computed,
  toRefs,
  unref,
  ref
} from 'vue'

import type { Ref } from 'vue'

import InputForm from '@/components/form/FormInput.vue'

const test: Ref<string> = ref('');
</script>
