<template>
  <section>
    <SectionTitle title='Истории неизлечимых привычек' />
    <ul class='stories'>
      <li class='stories__item' v-for="story in stories" :key="story.id">
        <StoryItem
          :title='story.title'
          :link='`/stories/${story.id}`'
        />
      </li>
    </ul>
  </section>
</template>

<script>
  import { mapMutations } from 'vuex'
  import StoryItem from '~/components/StoryItem.vue'
  import SectionTitle from '~/components/SectionTitle.vue'
  export default {
    computed: {
      stories () {
        const { stories } = this.$store.state
        return stories.stories
      }
    },
    layout: 'index',
    components: {
      StoryItem,
      SectionTitle
    },
    asyncData ({ store }) {
      store.dispatch('stories/GET_LIST')
    }
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