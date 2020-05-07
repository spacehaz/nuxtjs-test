<template>
  <div v-bind:class="['story-item', className]">
    <div class="story-item__image"></div>
    <h3 class="story-item__author">{{author}}</h3>
    <p class="story-item__text">{{title}}</p>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    title: String,
    author: String,
    link: String,
    className: String
  }
}
</script>

<style scoped>
  .story-item {
    width: 300px;
    padding-bottom: 30px;
  }

  .story-item__image {
    width: 300px;
    height: 300px;
    background: #EDEDED;
  }
</style>