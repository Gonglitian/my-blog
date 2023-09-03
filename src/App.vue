<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <v-editor style="width: 100%"></v-editor>
</template>

<script>
import vEditor from "./components/vEditor.vue";
export default {
  name: "App",
  components: {
    vEditor,
  },
};
</script>

<style>
</style>
