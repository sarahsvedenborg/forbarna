<template>
        <div>
            <h3>Legg til produkter</h3>
           <label for="addProducField">Produktnavn</label>
            <input id="addProductField" type="text" v-model="category"/>
            <label>Velg kategori for produktet</label>
            <br />
            <input type="radio" v-model="category" v-for="cat in categories" :value="cat" :key="cat" @change="() => console.log('changed')"/>{{cat}}

            </div>
</template>
<script>
export default {
     props: {
    categories: {
      type: Array
    }
  },
    data() {
        return {
            productName: "",
            category: null,
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