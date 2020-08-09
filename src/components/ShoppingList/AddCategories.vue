<template>
        <div>
           <label for="addCategoryField">Legg til kategorier</label>
            <input id="addCategoryField" type="text" v-model="category"/>
            <button @click="click">Lagre kategori</button>
            <p>Lagrede kategorier for {{ shop}}: 
                <ul>
                    <li v-for="c in categories" :key="c">{{c}}</li>
                </ul>
            </p>
            </div>
</template>
<script>
export default {
     props: {
    shop: {
      type: String
    }
  },
    data() {
        return {
            category: "",
            categories: []
        }
    },
    methods: {
        click(){
            this.categories.push(this.category)
            console.log("Added category: " + this.category)
            console.log("CAtegories: " + this.categories)
            //this.addShop(this.shopName)
        }
    }
    
}
</script>
<style scoped>

</style>