<template>
  <div>
    {{ newcateg }}
    hello
    <div class="form-add">
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="3" md="8">
              <v-text-field
                v-model="name"
                :rules="nameRules"
                :counter="10"
                label="Name of category"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="3" md="8">
              <v-text-field
                v-model="image"
                label="Url of image"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="3" md="8">
              <v-text-field
                v-model="description"
                :rules="descRules"
                label="Description"
                required
              ></v-text-field>
            </v-col>
          </v-row> </v-container
        ><button
          @click="addData"
          style="
            background-color: aquamarine;
            margin: 2em;
            padding: 0.2em;
            border-radius: 3px;
          "
        >
          Add now
        </button>
        <NuxtLink to="/category">Back to categories</NuxtLink>
      </v-form>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    name: '',
    image: '',
    nameRules: [
      (v) => !!v || 'this field is required',
      (v) => v.length <= 10 || 'Name must be less than 10 characters',
    ],
    description: '',
    descRules: [(v) => !!v || 'description is required'],
    newcateg: '',
  }),
  methods: {
    async addData(e) {
      e.preventDefault()
      try {
        const response = await this.$axios.post('http://localhost:5000/category', {
          name: this.name,
          image: this.image,
          description: this.description,
        })
        console.log(response.data)
      } catch (error) {
        console.log(error.message)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.form-add {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
}
</style>
