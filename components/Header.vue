<template>
  <header class="header">
    <Container className='header__content'>
      <Logo />
      <Menu v-bind:menu='menu' />
    </Container>
  </header>
</template>

<script>
  import Logo from '~/components/Logo.vue'
  import Menu from '~/components/Menu.vue'
  import Container from '~/components/Container.vue'

  export default {
    components: {
      Logo,
      Menu,
      Container
    },
    methods: {
      openModal: _ => console.log('open modal')
    },
    data () {
      return {
        menu: [
          {
            path: '/',
            id: 'index',
            title: 'Главная',
            link: true
          }, {
            path: '/stories',
            title: 'Истории',
            id: 'stories',
            link: true
          }, {
            title: 'Рассказать историю',
            link: false,
            action: this.openModal
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .header {
    padding: 0px 60px;
    border-bottom: 1px solid #E8E8E8;
  }

  .header__content {
    display: flex;
    height: 76px;
    align-items: center;
    justify-content: space-between;
    position: relative;
    
  }
</style>