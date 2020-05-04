<template>
        <div>
           <label for="addShopField">Legg til butikk</label>
            <input id="addShopField" type="text" v-model="shopName"/>
            <button @click="addShop(shopName)">Legg til butikk</button>
            <span>Butikk: {{shopName}}</span>
            </div>
</template>
<script>
export default {
     props: {
    addShop: {
      type: Function
    }
  },
    data() {
        return {
            shopName: ""
        }
    },
    methods: {
        click(){
            this.addShop(this.shopName)
        }
    }
    
}
</script>
<style scoped>

</style>