<template>
  <footer class="footer">
    <div class='footer__top'>
      <div class='footer__message'>
        Спасибо всем, кто помог состояться этому проекту
      </div>
      <div class='footer__menu'>
        <Menu v-bind:menu='menu' />
      </div>
      <div class='footer__social-networks'>
        Мы в Фейсбуке, Инстаграме и Youtube
        <p class='footer__share'/>Поделитесь ↗</p>
      </div>
    </div>
    <div class='footer__bottom'>
      <p class='footer__copyright'>Рак Лечится {{(new Date).getFullYear()}}</p >
      <p class='footer__made-by'>Сделано студентами Яндекс Практикум</p >
    </div>
  </footer>
</template>

<script>
  import Menu from '~/components/Menu.vue'
  export default {
    components: {
      Menu
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
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .footer {
    padding: 60px;
    font-family: 'Inter', Arial, Helvetica, sans-serif;
    background: #FBFBFB;
    font-size: 18px;
  }

  .footer__social-networks {
    max-width: 300px;
    
  }

  .footer__menu {
    flex: 1 0;
  }

  .footer__message {
    max-width: 380px;
    font-size: 32px;
    font-weight: 600;
    margin-right: 72px;
  }

  .footer__top,
  .footer__bottom {
    display: flex;
  }

  .footer__share {
    margin: 20px 0px 0px 0px;
  }

  .footer__bottom {
    color: #898989;
    justify-content: space-between;
  }

  .footer__made-by {

  }

  .footer__top {
    margin-bottom: 110px;
  }

</style>