<template>
  <div id="app">
    <main-page/>
  </div>
</template>

<style lang="scss">
#app {
  min-height: 100vh;
  width: 100vw;
  background: $c_main;
}

#nav {

}
</style>
<script>
  import MainPage from "./views/components/mainPage";
  export default {
    components: {MainPage}
  }
</script>