<template>
  <div class="dropdown" @click="toggleItems">
    <div class="dropdown__selected-item">
      <span class="dropdown__selected-text"> Dropdown</span>
      <span
        class="oi dropdown__caret"
        :class="isShowingItems ? 'oi-caret-top' : 'oi-caret-bottom'"
      ></span>
    </div>
    <Transition name="grow">
      <ul v-if="isShowingItems" class="dropdown__list">
        <li class="dropdown__list-item">Item 1</li>
        <li class="dropdown__list-item">Item 2</li>
        <li class="dropdown__list-item">Item 3</li>
        <li class="dropdown__list-item">Item 4</li>
        <li class="dropdown__list-item">Item 5</li>
        <li class="dropdown__list-item">Item 6</li>
      </ul>
    </Transition>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

const isShowingItems = ref(true);
const toggleItems = () => {
  isShowingItems.value = !isShowingItems.value;
};
</script>

<style>
/* .dropdown {
  border: 1px solid var(--zano-gray);
  position: relative;
  width: 100%;
}
.dropdown:hover {
  cursor: pointer;
}
.dropdown__selected-item {
  display: flex;
  padding: 4px;
}
.dropdown__selected-text {
  margin-right: auto;
}
.dropdown__caret {
  margin-left: 1rem;
}
.dropdown__list {
  position: absolute;
  left: -1px;
  width: 100%;
  border: 1px solid var(--zano-gray);
  border-top: none;
  padding: 0;
  margin: 1px 0 0 0;
}
.dropdown__list-item {
  list-style-type: none;
  padding: 0.2rem 0.4rem;
}
.dropdown__selected-item:hover,
.dropdown__list-item:hover {
  background-color: var(--zano-gray-light1);
} */

.grow-enter-from {
  transform: translateY(-0.5rem);
  opacity: 0;
}
.grow-enter-to {
  transform: translateY(0);
  opacity: 1;
}
.grow-enter-active {
  transition: all var(--animation-speed-2x) ease;
}
.grow-leave-from {
  transform: translateY(0);
  opacity: 1;
}
.grow-leave-to {
  transform: translateY(-0.5rem);
  opacity: 0;
}
.grow-leave-active {
  transition: all var(--animation-speed-2x) ease;
}
</style>
