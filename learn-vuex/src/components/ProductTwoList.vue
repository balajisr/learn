<template>
    <div id="product-two-list">
        <h1>Product Two List</h1>
        <ul>
            <li :v-for="(item) in products" :key="i">Name: {{ item.name }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['products'],
    data() {
        return {
            items: [
                { name: "Tomato", qty: 1, price: 20 },
                { name: "Banana", qty: 10, price: 7 },
                { name: "Onion", qty: 1, price: 40 },
                { name: "Apple", qty: 3, price: 40 }
            ]
        }
    }
}
</script>

<style>

</style>
