<template>
  <div>
    <h1 class="red">Hello {{ name }}!</h1>
    <img src="~/assets/web_05.png">
  </div>
</template>

<script>
export default {
  asyncData ({ params, error, $axios }) {
    // return $axios.$get(`https://my-api/posts/${params.id}`)
    //   .then((res) => {
    //     return { title: res.data.title }
    //   })
    //   .catch((e) => {
    //     error({ statusCode: 404, message: 'Post not found' })
    //   })
  },
  data () {
    return {
      name: 'Vla'
    }
  },
  fetch () {
    // The `fetch` method is used to fill the store before rendering the page
  },
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
    ]
  }
}
</script>

<style>
.red {
  color: red;
}
</style>