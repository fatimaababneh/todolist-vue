<template>
  <div>
    <h1> {{ddd}} </h1>
    <div>{{ name }}</div>
    <input v-model="newName" type="text"/>
    <button @click="changeName" > change name </button>
  </div>
</template>

<script>

export default {
  name: 'Home',
  props:{
    ddd:String,
  },
  data() {
    return {
      name: 'fatema',
      newName:""
    }
  },
  methods:{
   async changeName(){
      this.name = this.newName
    },
  }
}
</script>

<style lang="scss" scoped></style>
