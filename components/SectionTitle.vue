<template>
  <h1 class='section-title'>
    {{title}}
  </h1>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
  .section-title {
    margin: 0px 0px 60px;
    font-size: 32px;
    max-width: 420px;
    font-family: 'Inter';
    font-weight: 600;
  }
</style>