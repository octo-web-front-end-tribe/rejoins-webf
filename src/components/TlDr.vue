<template>
    <div>
        <titre titre="TL;DR"/>
        <markdown-tl-dr/>
    </div>
</template>

<script>
  import MarkdownTlDr from '@/../contents/tldr.md'
  import Titre from './Titre'

  export default {
    name: 'TlDr',
    components: {Titre, MarkdownTlDr},
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
