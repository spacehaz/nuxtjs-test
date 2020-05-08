<template>
  <input
    :class="['input', className, {
      'input_bottom-bordered': bottomBordered
    }]"
    :type="type"
    v-model="content"
    @input="handleInput"
    :placeholder='placeholder'
  />
</template>

<script>
export default {
  props: {
    value: String,
    bottomBordered: Boolean,
    placeholder: String,
    className: String,
    type: {
      type: String,
      default: 'text',
      validator: value => 'text|number|email|password|search|url|tel'.split('|').indexOf(value) > -1
    }
  },
  data () {
    return {
      content: this.value
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', this.content)
    }
  }
}
</script>

<style scoped>
  .input {
    border: 1px solid #E8E8E8;
    width: 100%;
    font-size: 18px;
    line-height: 24px;
    padding: 12px 6px;
    background: transparent;
  }

  .input_bottom-bordered {
    border: none;
    padding: 12px 0px;
    border-bottom: 1px solid #E8E8E8;
  }
</style>