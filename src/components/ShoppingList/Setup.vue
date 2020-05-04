<template>
  <div>
    Dette er min ShoppingList
  <ShopInputField :addShop="addShop"/>
  <AddCategories :shop="state.shops[0].name"/>
  <AddProducts :categories="state.shops[0].route"/>
  </div>

</template>

<script>
import ShopInputField from "./ShopInputField.vue";
import AddCategories from "./AddCategories.vue";
import AddProducts from "./AddProducts.vue";
//import CreateRoute from "./CreateSetForm.vue";

export default {
  components: {
    ShopInputField,
    AddCategories,
    AddProducts
  },
  data() {
    return {
      shopName: "",
      mockCategories: ["kjøtt", "meieri", "frossen"],
      state: {
        "shops": [{
          "name": "testShop",
          "route": ["frukt", "meieri", "frossen"]
        }],
        "products": [

        ],
        "lists": [

        ] 
      }
      //sets: getSetNames()
    };
  },
  methods: {
    addShop(shopName){
      this.state.shops.push({"name": shopName, "route": []})
        console.log("state ", this.state)
    }
  }
};
</script>

<style scoped>
div {
    color: red;
}
</style>