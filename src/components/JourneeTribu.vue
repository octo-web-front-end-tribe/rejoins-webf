<template>
    <div>
        <titre titre="Les journées tribus"/>
        <markdown-journee/>
    </div>
</template>

<script>
  import Titre from './Titre'
  import MarkdownJournee from '@/../contents/lesjourneestribu.md'

  export default {
    name: 'JourneeTribu',
    components: {Titre, MarkdownJournee},
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
