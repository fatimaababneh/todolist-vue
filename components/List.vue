<template>
  <div >
    <div v-if="!toggle" class="note">
      {{ task }} {{index}}
            <div>
            <button id="delete-btn" @click="toggle = true">update</button>
            <button id="delete-btn" @click="delnote()" >Delete</button>
            </div>
    </div>
    <div v-else class="enter">
      <input type="text"  placeholder="enter new task" v-model="input"/>
      <button id="delete-btn" @click="done()">ok</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    task: String,
    index:Number
  },
  data() {
    return {
      toggle: false,
      text:"",
      input:this.task
    }
  },
    methods:{
        update(){
            
        },
        delnote() {
            this.$emit('delnote', this.index)
            // this.toggle = !this.toggle
            },
        done(){
            this.toggle=false
            this.$emit('update', { index: this.index, value: this.input })
            this.task=this.input
        }
  }
}
</script>

<style lang="scss" scoped>
.task {
  border: 1px solid black;
  margin-top: 20px;
}
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
.enter{
    display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 1em 0;
  border: 1px solid rgb(213, 231, 225);
//   background-color: rgb(213, 231, 225);
  border-radius: 2px;
  padding: 0.2em;
}
.enter input{
    border: 1px solid grey;
    border-radius: 4px;
}
</style>
