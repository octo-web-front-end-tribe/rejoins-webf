<template>
    <div class="member">
        <h4>{{membre.prenom}}</h4>
        <img :src="membre.photo"/>
        <technos :liste="membre.technos"/>
    </div>
</template>

<script>
  import Technos from './Technos'

  export default {
    name: 'Membre',
    components: {Technos},
    props: ['membre'],

    data () {
      return {}
    },

    created () {
    },

    methods: {}
  }
</script>

<style scoped>

    .member {
        text-align:center;
        margin-bottom: 20px;
    }

    img {
        max-width: 110px;
    }
</style>
