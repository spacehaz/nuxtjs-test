export const state = () => ({
  visible: true
})

export const mutations = {
  open (state) {
    state.visible = true
  },
  close (state) {
    state.visible = false
  }
}