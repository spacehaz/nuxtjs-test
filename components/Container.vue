<template>
  <div :class="['container', className]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      className: String
    }
  }
</script>

<style scoped>
  .container {
    max-width: 1320px;
    margin: 0 auto;
    width: 100%;
  }
</style>