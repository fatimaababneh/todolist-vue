<template>
  <div class="list">
    {{ toggle }}
    {{$store.state.tasks.tasks}}
    <h1>To do List</h1>
    <!-- <Clear @clearList="clearList" /> -->
    <div class="btn-inpt">
      <input id="inpt" v-model="inputValue" />
      <button @click="onkl" id="btn">Add Note</button>
    </div>
    <div v-for="(item, index) in items" :key="index">
      <!-- <Note :item="item" :index="index" @delnote="delnote" @update="update" /> -->
      <List :task="item" :index="index" @delnote="delnote" @update="update"/>

    </div>
  </div>
</template>

<script>
import Note from '../components/Note.vue'
import Clear from '../components/Clear.vue'

export default {
  name: 'Todo',
  data() {
    return {
      items: [],
      inputValue: '',
      inputV: '',
      toggle: [],
      edit: false,
      editdata:''
    }
  },
  methods: {
    onkl() {
      this.toggle = [...this.toggle, false]
      this.items = [...this.items, this.inputValue]
    },
    delnote(data) {
      this.items.splice(data, 1)
    },
    update(data) {
      console.log(data)
      this.items[data.index]=data.value;
      console.log(this.items[data.index])
    },
    done(index) {
      this.edit = false
      this.toggle[index] = false
    },
    clearList(data) {
      console.log(data)

    },
  },
  components: { Note, Clear },
}
</script>
<style scoped>
.list {
  display: flex;
  flex-direction: column;
  margin: 2em auto;
}
#inpt {
  border: 1px solid rgb(165, 164, 164);
  border-radius: 4px;
  width: 40vh;
  padding: 0.5em;
}
#btn {
  background-color: rgb(42, 143, 42);
  color: white;
  border-radius: 2px;
  padding: 0.5em;
}
#delete-btn {
  color: aliceblue;
  background-color: red;
  padding: 0 0.43em;
  border-radius: 3px;
  margin: 0 0.1em;
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
