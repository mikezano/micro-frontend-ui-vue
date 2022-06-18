<template>
  <div class="toggles">
    <button class="toggles__option" v-for="item in items" :key="item.id">
      {{ item.value }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

interface IItem {
  id: string | number;
  value: string;
}
const fruitItems: IItem[] = [
  { id: 0, value: 'Apple' },
  { id: 1, value: 'Banana' },
];
const items: IItem[] = reactive(fruitItems);
</script>

<style lang="scss"></style>
