<template>
  <div v-scroll="onScroll">
    <v-btn
      v-if="show"
      position="fixed"
      location="bottom right"
      class="mt-auto ma-4"
      color="surface-2"
      elevation="8"
      icon="mdi-chevron-up"
      size="large"
      @click="onClick"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const show = ref(false);

function onScroll() {
  show.value = window.scrollY > 200;
}

function onClick() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
</script>