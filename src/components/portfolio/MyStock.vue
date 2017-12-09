<template>
    <div class="card">
        <div class="card-body">
            <h6 class="category text-success">PRICE: ${{ stock.price }}</h6>
            <h6 class="category text-info">QUANTITY: {{ stock.quantity }}</h6>
            <h5 class="card-title">{{ stock.name }}</h5>

            <form class="form-inline" v-on:submit="sellStock">
                <div class="form-group mr-auto" :class="{ 'has-danger': !canSell, 'has-success': canSell }">
                    <input class="form-control" type="number" placeholder="Quantity" v-model="quantity" />
                </div>

                <div class="form-group">
                    <button class="btn btn-success btn-round" type="submit" :disabled="!canSell">Sell</button>
                </div>
            </form>

            <p class="text-danger text-center" v-if="!validQuantity">Not enough stock!</p>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        name: "stock",
        props: ['stock'],
        data() {
            return {
                quantity: 0
            }
        },
        computed: {
            validQuantity() {
                return this.quantity <= this.stock.quantity;
            },
            canSell() {
                return this.validQuantity && this.quantity > 0;
            }
        },
        methods: {
            sellStock(event) {
                event.preventDefault();

                console.log(this.quantity);

                const order = {
                    stockID: this.stock.id,
                    quantity: this.quantity,
                    price: this.stock.price
                };

                this.$store.dispatch('portfolio/sell', order);

                this.quantity = 0;
            }
        }
    }
</script>

<style scoped>

</style>