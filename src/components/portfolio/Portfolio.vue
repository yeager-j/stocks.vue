<template>
    <div>
        <h1 class="display-4">Portfolio</h1>
        <hr>

        <div class="row">
            <div v-for="stock in stocks" class="col-md-4">
                <app-my-stock :stock="stock"></app-my-stock>
            </div>
        </div>
    </div>
</template>

<script>
    import MyStock from './MyStock.vue';

    export default {
        name: "portfolio",
        components: {
            appMyStock: MyStock
        },
        computed: {
            stocks() {
                return this.$store.getters['portfolio/stockPortfolio'];
            }
        }
    }
</script>

<style scoped>

</style>