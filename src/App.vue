<template>
    <div>
        <app-header></app-header>

        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header.vue';

    export default {
        components: {
            appHeader: Header
        },
        created() {
            this.$store.dispatch('stocks/init');
        }
    }
</script>

<style lang="scss">
    @import '../static/css/bootstrap.min.css';
    @import "assets/sass/now-ui-kit";
</style>
