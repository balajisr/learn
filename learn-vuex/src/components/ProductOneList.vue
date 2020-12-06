<template>
    <div id="product-one-list">
        <h1>Product One List</h1>
        <ul :v-if="products.length">
            <li :v-for="product in products">Name: {{ product.name }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        "products": Array
    },
    data() {
        return {
        }
    },
    created() {
    }
}
</script>

<style>

</style>
