<template>
  <LayoutAsideMain>
    <template v-slot:sidebar>
      <nav>
        <ol>
          <li>ABC</li>
          <li>123</li>
          <li>(*&)</li>
        </ol>
      </nav>
    </template>
    <template v-slot:main>
      <h1>Zano</h1>
      <Button />
      <div class="card">
        <Dropdown />
      </div>
      <Toggle />
    </template>
  </LayoutAsideMain>
</template>

<script>
import Button from './Button.vue';
import Dropdown from './components/Dropdown.vue';
import LayoutAsideMain from './components/LayoutAsideMain.vue';
import Toggle from './components/Toggle.vue';
export default {
  data() {
    return { message: 'Hello Vue!' };
  },
  components: {
    Button,
    LayoutAsideMain,
    Dropdown,
    Toggle,
  },
};
</script>

<style></style>
