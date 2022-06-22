<template>
    <div>
        <button :style="{background: color}" class="btn" @click="changeinfo">{{content}}</button>
    </div>
</template>

<script>
    export default{
        name: 'Button',
   
    data(){
        return{
            content:"hello",
            color: "green"
        }
    },
    methods:{
        changeinfo(){
            this.color="red"
        }
    } 
    
    }
</script>

<style scoped>
.btn{
    border: 1px solid black;
}
</style>