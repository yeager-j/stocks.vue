<template>
    <div>
        <h1 class="display-4">Stocks</h1>
        <hr>

        <div class="row">
            <div v-for="stock in stocks" class="col-md-4">
                <app-stock :stock="stock"></app-stock>
            </div>
        </div>
    </div>
</template>

<script>
    import Stock from './Stock.vue';

    export default {
        name: "stocks",
        components: {
            appStock: Stock
        },
        computed: {
            stocks() {
                return this.$store.getters['stocks/stocks'];
            },
            funds() {
                return this.$store.getters['portfolio/funds'];
            }
        },
    }
</script>

<style scoped>

</style>