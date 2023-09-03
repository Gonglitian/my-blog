<template>
  <v-md-editor v-model="text" height="300px"></v-md-editor>
</template>

<script>
import { ref } from "vue";

const text = ref("# Hello World");

export default {
  name: "vEditor",
  setup() {
    return {
      text,
    };
  },
};
</script>

<style>
</style>
