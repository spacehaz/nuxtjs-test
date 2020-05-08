<template>
  <section class='stories'>
    <Container>
      <SectionTitle>Истории неизлечимых привычек</SectionTitle>
      <ModalWindow v-if="modalWindowVisible">modal window</ModalWindow>
      <form class='stories__form'>
        <Input v-model="storiesName" className='stories__form-button'></Input>
        <Button :disabled='!storiesName.length'>Поиск</Button>
      </form>
      <ul class='stories__list'>
        <li class='stories__item' v-for="story in stories" :key="story.id">
          <StoryItem
            :title='story.title'
            :author='story.author'
            :link='`/stories/${story.id}`'
          />
        </li>
      </ul>
    </Container>
  </section>
</template>

<script>
  import { mapMutations } from 'vuex'
  import StoryItem from '~/components/StoryItem.vue'
  import SectionTitle from '~/components/SectionTitle.vue'
  import Input from '~/components/Input.vue'
  import Button from '~/components/Button.vue'
  import ModalWindow from '~/components/ModalWindow.vue'
  import Container from '~/components/Container.vue'

  export default {
    data () {
      return {
        storiesName: ''
      }
    },
    computed: {
      stories () {
        const { stories } = this.$store.state
        return stories.stories
      },
      modalWindowVisible () {
        const { modal } = this.$store.state
        return modal.visible
       }
    },
    layout: 'index',
    components: {
      StoryItem,
      SectionTitle,
      Input,
      Button,
      ModalWindow,
      Container
    },
    props: ['lol'],
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
    padding: 100px 60px; 
  }
  .stories__list {
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

  .stories__form {
    display: flex;
    margin-bottom: 60px;
  }

  .stories__form-button {
    margin-right: 20px;
  }
</style>