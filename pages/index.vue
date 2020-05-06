<template>
  <ProgressBar :value='10' :maxValue='100' />
</template>

<script>
  import ProgressBar from "~/components/ProgressBar.vue";

  export default {
    components: {
      ProgressBar
    }
  }
</script>