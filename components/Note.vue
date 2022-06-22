<template>
    <div>
        <div class="note" > 
            {{ item }}
            <div>
              <!-- <Note :item="item" :index="index"/> -->
              <button @click="update(index)" id="delete-btn">Update</button>
              <button @click="delnote(index)" id="delete-btn">Delete</button>
            </div>
        </div>
    </div>
</template>

<script>
import Button from './Button.vue'

export default {
  components: { Button },
name:"Note",
props:{
    item:String,
    index:Number
  },
data(){
    return {
        
  
} },
    methods: {
        delnote(){
            this.$emit('delnote', { data: index })
        }
    }
}
</script>
<style scoped>
#delete-btn{
    color: aliceblue;
    background-color: red;
    padding: 0 .43em;
    border-radius: 3px;
}
.note{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 1em 0;
    border:1px solid rgb(213, 231, 225);
    background-color: rgb(213, 231, 225);
    border-radius: 2px;
    padding: .2em;
}
</style>