<template>
    <nav class="navbar navbar-expand-lg bg-success">
        <router-link to="/" class="navbar-brand">Stock Trader</router-link>

        <ul class="navbar-nav mr-auto">
            <router-link tag="li" to="/" exact class="nav-item" active-class="active">
                <a class="nav-link">Home</a>
            </router-link>
            <router-link tag="li" to="/stocks" class="nav-item" active-class="active">
                <a class="nav-link">Stocks</a>
            </router-link>
            <router-link tag="li" to="/portfolio" class="nav-item" active-class="active">
                <a class="nav-link">Portfolio</a>
            </router-link>
        </ul>

        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" @click="endDay" href="#">End Day</a>
            </li>

            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Options
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Save Data</a>
                    <a class="dropdown-item" href="#">Load Data</a>
                </div>
            </li>
        </ul>

        <span class="navbar-text text-white"><b>{{ funds | currency }}</b></span>
    </nav>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        name: "header",
        computed: {
            funds() {
                return this.$store.getters['portfolio/funds'];
            }
        },
        methods: {
            ...mapActions({
                randomize: 'stocks/randomize'
            }),
            endDay() {
                this.randomize();
            }
        }
    }
</script>

<style scoped>
    .navbar-text {
        margin-left: 10px;
    }
</style>