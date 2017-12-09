<template>
    <div class="card">
        <div class="card-body">
            <h6 class="category text-success">PRICE: ${{ stock.price }}</h6>
            <h5 class="card-title">{{ stock.name }}</h5>

            <form class="form-inline" v-on:submit="buyStock">
                <div class="form-group mr-auto" :class="{ 'has-danger': !canBuy, 'has-success': canBuy }">
                    <input class="form-control" type="number" placeholder="Quantity" v-model="quantity" />
                </div>

                <div class="form-group">
                    <button class="btn btn-success btn-round" type="submit" :disabled="!canBuy">Buy</button>
                </div>
            </form>

            <p class="text-danger text-center" v-if="!canAfford">Insufficient Funds!</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "stock",
        props: ['stock'],
        data() {
            return {
                quantity: 0
            }
        },
        computed: {
            funds() {
                return this.$store.getters['portfolio/funds'];
            },
            canAfford() {
                return this.quantity * this.stock.price < this.funds;
            },
            canBuy() {
                return this.canAfford && this.quantity > 0;
            }
        },
        methods: {
            buyStock(event) {
                event.preventDefault();

                const order = {
                    stockID: this.stock.id,
                    price: this.stock.price,
                    quantity: +this.quantity
                };

                this.$store.dispatch('stocks/buy', order);

                this.quantity = 0;
            }
        }
    }
</script>

<style scoped>

</style>