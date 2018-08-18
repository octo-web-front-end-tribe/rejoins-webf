<template>
    <div>
        <titre titre="Nos missions"/>
        <markdown-nos-missions/>
    </div>
</template>

<script>
  import Titre from './Titre'
  import MarkdownNosMissions from '@/../contents/nosmissions.md'

  export default {
    name: 'NosMissions',
    components: {Titre, MarkdownNosMissions},
    data () {
      return {}
    },

    created () {
    },

    methods: {}
  }
</script>

<style scoped>

</style>
