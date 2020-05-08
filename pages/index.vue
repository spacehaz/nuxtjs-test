<template>
  <Container>
    <ProgressBar :value='0.5' :maxValue='3' />
    <ProgressBarDouble :oldValue='1' :newValue='2' :maxValue='3' />
  </Container>
</template>

<script>
  import ProgressBar from "~/components/ProgressBar.vue";
  import ProgressBarDouble from "~/components/ProgressBarDouble.vue";
  import Container from '~/components/Container.vue'

  export default {
    components: {
      ProgressBar,
      Container,
      ProgressBarDouble
    },

    layout: 'index'
  }
</script>