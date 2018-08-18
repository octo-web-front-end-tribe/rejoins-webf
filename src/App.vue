<template>
    <div id="app">
        <header-web/>
        <div class="main">
            <tl-dr/>
            <nos-missions/>
            <r-et-d/>
            <journee-tribu/>
            <liste-des-membres/>
        </div>
    </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'
  import ListeDesMembres from './components/ListeDesMembres'
  import TlDr from './components/TlDr'
  import NosMissions from './components/NosMissions'
  import REtD from './components/REtD'
  import JourneeTribu from './components/JourneeTribu'
  import HeaderWeb from './components/header-web'

  export default {
    name: 'app',
    components: {
      HeaderWeb,
      JourneeTribu,
      REtD,
      NosMissions,
      TlDr,
      ListeDesMembres,
      HelloWorld
    }
  }
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }

    .main {
        margin-left: 5%;
        margin-right: 5%;
        margin-top: 2%;
    }
</style>
