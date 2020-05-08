<template>
  <h1 class='section-title'>
    <slot></slot>
  </h1>
</template>

<script>
export default {}
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