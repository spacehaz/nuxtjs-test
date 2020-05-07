<template>
  <header class="header">
    <Logo />
    <Menu v-bind:menu='menu' />
  </header>
</template>

<script>
  import Logo from '~/components/Logo.vue'
  import Menu from '~/components/Menu.vue'
  export default {
    components: {
      Logo,
      Menu
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
    height: 76px;
    position: relative;
    padding: 0px 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #E8E8E8;
  }
</style>