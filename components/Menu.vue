<template>
  <nav class="menu">
    <ul class="menu__list">
      <li class="menu__list-item" v-for="menuItem in menu" :key="menuItem.id">
        <nuxt-link
          v-if="menuItem.link"
          v-bind:class="['menu__list-link', {
            'menu__list-link_active': menuItem.id === $nuxt.$route.name
          }]"
          :to="menuItem.path"
        >
          {{menuItem.title}}
        </nuxt-link>
        <span v-if="!menuItem.link" class="menu__list-link" @click='menuItem.action'>
          {{menuItem.title}}
        </span>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    menu: Array
  }
}
</script>

<style scoped>
  .menu {}

  .menu__list {
    display: flex;
    font-size: 18px;
    list-style: none;
    padding: 0;
    font-family: 'Inter', Helvetica, Arial, sans-serif;
    margin: 0;
  }

  .menu__list-item {
    margin-right: 40px;
  }

  .menu__list-link {
    color: #000;
    cursor: pointer;
    text-decoration: none;
  }

  .menu__list-item:last-child {
    margin-right: 0px;
  }

  .menu__list-link_active {
    text-decoration: underline;
  }

</style>