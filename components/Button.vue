<template>
  <button
    :class="['button', className, {
      'button_disabled': disabled
    }]"
    @click="handleClick"
    :disabled='disabled'
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    disabled: Boolean,
    className: String
  },
  methods: {
    handleClick (e) {
      e.preventDefault()
      if (this.disabled) { return }
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
  .button {
    padding: 18px 80px;
    color: #FFF;
    font-size: 16px;
    background: #613A93;
    font-family: Inter;
    font-weight: 700;
    transition: opacity .3s;
  }

  .button_disabled {
    opacity: .3;
    cursor: not-allowed;
  }
</style>