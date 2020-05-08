<template>
  <section>
    ...
  </section>
</template>

<script>
  import { mapMutations } from 'vuex'
  export default {
    // data () {
    //   return {
    //     loading: false
    //   }
    // },
    computed: {
      stories () {
        const { stories } = this.$store.state
        return stories.stories
      }
    },
    layout: 'index',
    components: {},
    asyncData ({ store }) {
      store.dispatch('stories/GET_LIST')
    }
    // mounted () {
    //   this.loading = true
    //   this.$store
    //     .dispatch('stories/GET_LIST')
    //     .finally(() => { this.loading = false })
    // }
  }
</script>

<style>
  .stories {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .stories__item {
    margin-right: 40px;
    margin-bottom: 40px;
  }

  .stories__item:nth-child(4n) {
    margin-right: 0px;
  }
</style>