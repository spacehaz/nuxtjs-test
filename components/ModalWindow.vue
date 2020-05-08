<template>
  <div :class="['modal-window', className]">
    <div class="modal-window__overlay">
      <div class="modal-window__content">
        <img src="/images/modal-cross.svg" class="modal-window__close" @click='close'/>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['className'],
  methods: {
    close (e) {
      this.$store.commit('modal/close')
    }
  }
}
</script>

<style scoped>
  .modal-window {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 100;
  }

  .modal-window__close {
    position: absolute;
    top: 35px;
    right: 35px;
    z-index: 100;
    cursor: pointer;
  }

  .modal-window__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    background: rgba(0,0,0,.5);
  }

  .modal-window__content {
    max-width: 960px;
    width: 100%;
    padding: 40px;
    background: #FFF;
    position: relative;
  }
</style>