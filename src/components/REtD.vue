<template>
    <div>
        <titre titre="Notre R&D"/>
        <markdown-notre-r-et-d/>
    </div>
</template>

<script>
    import MarkdownNotreREtD from '@/../contents/notreretd.md'

  import Titre from './Titre'
  export default {
    name: 'REtD',
    components: {Titre,MarkdownNotreREtD},
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
