<template>
  <div>
    <Header />
    <main class='content'>
      <nuxt/>
    </main>
    <Footer />
  </div>
</template>

<script>
  import Header from '~/components/Header.vue'
  import Footer from '~/components/Footer.vue'

  export default {
    components: {
      Header,
      Footer
    }
  }
</script>

<style scoped>
  .content {
    padding: 100px 60px;
  }
</style>