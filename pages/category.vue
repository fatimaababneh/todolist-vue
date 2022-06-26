<template>
    <div>
        hello products 
        <br/>
        <NuxtLink to="/">Back Home</NuxtLink>
        <!-- <button style="background-color:brown">click me</button> -->
        <button style="background-color:brown" @click="goPage">Add Category</button>
        <div class="cards" v-for="category in allcat">
        <div>
        <h1>{{category.name}}</h1>
        <img v-bind:src="category.image" width="200px" height="150px" alt=""/>
        <h6>{{category.description}}</h6><button @click="updateData(category.id)" style="background-color: red; color:white">Delete</button>
        </div>
        </div>
        
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
       
        data(){
            return{
            result: '',
            allcat:'',
            }
            
        },
         methods: {
        updateData(id) { 
            axios
                .delete(`http://localhost:5000/category/delete/${id}`)
                .then((res) => {
                    console.log(res)
                    this.allcat  = this.allcat.filter((ele)=>{
                        return ele.id !== id
                    })
                })
                .catch((err) => {
                console.log(err);
                toast.error("An Error Occured, Please Try Again Later");
                });
        },
        goPage(){
            this.$router.push({ path: '/addcategory' })
        }
    },
    async mounted() {
        await axios
                .get(`http://localhost:5000/category`)
                .then((res) => {
                this.allcat=res.data
                console.log(this.allcat)
                })
                .catch((err) => {
                console.log(err);
                toast.error("An Error Occured, Please Try Again Later");
                });
}
    
    }
</script>

<style lang="scss" scoped>
.cards{
    display: grid;
    grid-template-columns: repeat(3,1fr);
}
</style>