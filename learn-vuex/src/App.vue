<template>
  <div id="app">
    <product-one-list :products="productList"></product-one-list>
    <product-two-list :products="productList"></product-two-list>
  </div>
</template>

<script>
import ProductOneList from './components/ProductOneList.vue';
import ProductTwoList from './components/ProductTwoList.vue';
export default {
  name: "App",
  components: {
    'product-one-list': ProductOneList,
    'product-two-list': ProductTwoList
  },
  data() {
    return {
      productList: [
        { name: "Tomato", qty: 1, price: 20 },
        { name: "Banana", qty: 10, price: 7 },
        { name: "Onion", qty: 1, price: 40 },
        { name: "Apple", qty: 3, price: 40 }
      ],
    };
  },
};
</script>

<style>
</style>
