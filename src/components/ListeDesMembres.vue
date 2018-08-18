<template>
    <div>
        <titre titre="Nos membres"/>
        <div class="container">
            <div class="row">
                <membre class="col-xs-1 col-sm-4 col-md-3" v-for="(membre, index) in config.membres" :membre="membre" :key="membre+index"/>
            </div>
        </div>
    </div>
</template>

<script>
  import config from '@/../config/config'
  import Membre from './ListeDesMembres/Membre'
  import Titre from './Titre'

  export default {
    name: 'ListeDesMembres',
    components: {Titre, Membre},
    data () {
      return {
        config: config
      }
    },

    created () {
    },

    methods: {}
  }
</script>

<style scoped>
</style>
