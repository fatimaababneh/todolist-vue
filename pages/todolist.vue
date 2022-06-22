<template>
  <div class="list">
    {{ toggle }}
    <h1>To do List</h1>
    <!-- <Clear @clearList="clearList" /> -->
    <div class="btn-inpt">
      <input id="inpt" v-model="inputValue" />
      <button @click="onkl" id="btn">Add Note</button>
    </div>
    <div v-for="(item, index) in items" :key="index">
      <div v-if="toggle[index]">
        <input type="text" v-model="inputV" />
        <button @click="done(index)" id="delete-btn">done</button>
      </div>
      <div v-else>
        <div>
          <div >
            
              <Note :item="item" :index="index" @delnote="delnote" @update="update"/>
           
          </div>
        </div>
      </div>
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
    }
  },
  methods: {
    onkl() {
      this.toggle = [...this.toggle , false]
      this.items = [...this.items, this.inputValue]
    },
    delnote(data) {
      console.log(data)
      this.items.splice(data, 1)
    },
    update(index) {
      console.log(index)
      // console.log(this.toggle);
      // const arr = this.toggle
      // arr[index] = true
      // this.toggle = arr
      // this.toggle[index]=true;
      // this.inputV = this.items[index]
      // this.edit=true;
    },
    done(index) {
      this.edit = false
      this.toggle[index] = false
    },
    clearList(data){
        console.log(data);
        // this.items= this.items.filter((ele,i)=>{
        //     return i !== data.index
        // })
    }
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
