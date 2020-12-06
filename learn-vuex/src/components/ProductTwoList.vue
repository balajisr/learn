<template>
    <div id="product-two-list">
        <h1>Product Two List</h1>
        <ul :v-if="products.length">
            <!-- <li :v-for="product in products"> -->
                <!-- <span>Name: {{ product.name }} </span> -->
                <!-- <span>Qty: {{ product.qty }} </span> -->
                <!-- <span>Price: {{ product.price }} </span> -->
            <!-- </li> -->
        </ul>
    </div>
</template>

<script>
export default {
    props: ['products'],
    data() {
        return {
        }
    }
}
</script>

<style>

</style>
