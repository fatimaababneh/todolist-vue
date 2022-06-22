<template>
  <div>
    <button @click="clear">Clear</button>
  </div>
</template>

<script>
export default {
  name: 'Clear',
  methods: {
    clear() {
      this.$emit('clearList', { index: 1 })
    },
  },
}
</script>

<style lang="scss" scoped></style>
