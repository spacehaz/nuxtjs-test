<template>
  <a :href='link' :class="['story-item', className]">
    <div class="story-item__content">
      <div class="story-item__image"></div>
      <h3 class="story-item__author">{{author}}</h3>
      <p class="story-item__text">{{title}}</p>
    </div>
  </a>
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
    color: #000;
    padding-bottom: 30px;
    text-decoration: none;
  }

  .story-item__content {
    width: 300px;
  }



  .story-item__image {
    width: 300px;
    height: 300px;
    background: #EDEDED;
  }

  .story-item__author,
  .story-item__text {
    text-decoration: none;
  }
</style>