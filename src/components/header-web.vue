<template>
    <div class="header-web">
        <div class="title">
            <h1>BIENVENUE CHEZ WEBF</h1>
            <h2>Etre consultant Web Front, c’est être un artisan du Web.</h2>
        </div>
        <img class="logo-webf" alt="Logo WebF" src="@/assets/logo-webf.png">
    </div>
</template>

<script>
  export default {
    name: 'header-web',
    data () {
      return {
        backgroundUrl: 'assets/header.jpg'
      }
    },

    created () {
    },

    methods: {}
  }
</script>

<style scoped>
    .header-web {
        background: #000 url('../assets/header.jpg') center center no-repeat;
        background-size: cover;
        width: 100%;
        height: 350px;
        text-align: center;

        color: white;
        text-shadow: 1px 1px #444444;
    }

    .title {
        padding-top: 240px;
    }

    @media screen and (max-width: 814px) {
        .title {
            padding-top: 210px
        }
    }

    @media screen and (max-width: 464px) {
        .title {
            padding-top: 150px
        }
    }

    .logo-webf {
        position: fixed;
        bottom: 0;
        right: calc(50% - 50px);
        z-index: 1000;
        width: 100px;
    }
</style>
