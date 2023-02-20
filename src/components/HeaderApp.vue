<template>
  <header>
    <h1>{{ title }}</h1>
    <ButtonApp text="Add Task" color="green"/>
  </header>
</template>

<script>
import ButtonApp from "./ButtonApp.vue";
export default {
  name: "HeaderApp",

  props: ["title"],
  components: {
    ButtonApp,
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
