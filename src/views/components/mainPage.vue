<template>
    <div class="main_page">
        <div class="main_body">
            <router-view/>
        </div>
        <my-loading></my-loading>
    </div>
</template>

<script>
    import MyLoading from "./MyLoading";
    export default {
        name: "mainPage",
        components: {MyLoading},
        created() {
        }
    }
</script>

<style scoped lang="scss">
</style>
