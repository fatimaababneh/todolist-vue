<template>
  <div>
    <div class="note" v-if="!toggle">
      {{ item }} {{ index }} {{ test }}
      <div>
        <button @click="update()" id="delete-btn">Update</button>
        <button @click="delnote()" id="delete-btn">Delete</button>
      </div>
    </div>
    <div v-else>
      <input type="text" v-model="inputV" />
      <button @click="done()" id="delete-btn">done</button>
    </div>
  </div>
</template>

<script>
import Button from './Button.vue'

export default {
  components: { Button },
  name: 'Note',
  props: {
    item: String,
    index: Number,
  },
  data() {
    return {
      toggle: false,
      inputV: item,
      test: 'hello',
    }
  },
  methods: {
    delnote() {
      this.$emit('delnote', this.index)
      this.toggle = !this.toggle
    },
    update() {
      this.toggle = true
      
    },
    done() {
      this.toggle = !this.toggle
      this.$emit('update', { index: this.index, value: this.inputV })
    },
  },
}
</script>
<style scoped>
#delete-btn {
  color: aliceblue;
  background-color: red;
  padding: 0 0.43em;
  border-radius: 3px;
}
.note {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1em 0;
  border: 1px solid rgb(213, 231, 225);
  background-color: rgb(213, 231, 225);
  border-radius: 2px;
  padding: 0.2em;
}
</style>
