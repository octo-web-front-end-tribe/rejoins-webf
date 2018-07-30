<template>
    <!-- Email Body : BEGIN -->
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" width="100%"
           style="max-width: 980px;" class="email-container">

        <introduction :config="config"/>

        <title-table title="Qu'est ce qu'un WebF ?"></title-table>

        <column-text component-name="QuestCeQuunWebF"/>

        <title-table title="Architecte chez WebF ? Bien sûr !!"></title-table>

        <column-text component-name="ArchitecteOui"/>

        <title-table title="Nos missions"></title-table>

        <tr>
            <td>
                <h1>WIP</h1>
            </td>
        </tr>

        <title-table title="R&D en cours"></title-table>

        <tr>
            <td>
                <h1>WIP</h1>
            </td>
        </tr>

        <title-table title="Publications"></title-table>

        <tr>
            <td>
                <h1>WIP</h1>
            </td>
        </tr>

        <title-table title="La tribu"></title-table>

        <even-column4 title="" :table="config.peoples"></even-column4>

        <even-column4 title="" :table="config.peoples.slice(4)"></even-column4>

        <even-column4 title="" :table="config.peoples.slice(8)"></even-column4>

        <even-column3 title="" :table="config.peoples.slice(12)"></even-column3>
    </table>
    <!-- Email Body : END -->
</template>

<script>
  import ThumbnailRightTextLeft from './EmailBody/ThumbnailRightTextLeft'
  import ThumbnailLeftTextRight from './EmailBody/ThumbnailLeftTextRight'
  import Introduction from './EmailBody/Introduction'

  import imageFullPage from './EmailBody/ImageFullPage'
  import ColumnText from './EmailBody/ColumnText'
  import TitleTable from './EmailBody/TitleTable'
  import EvenColumn2 from './EmailBody/EvenColumn2'
  import EvenColumn3 from './EmailBody/EvenColumn3'
  import EvenColumn4 from './EmailBody/EvenColumn4'
  import HeroImageFlush from './EmailBody/HeroImageFlush'

  export default {
    components: {
      HeroImageFlush,
      EvenColumn2,
      EvenColumn3,
      EvenColumn4,
      TitleTable,
      ColumnText,
      imageFullPage,
      Introduction,
      ThumbnailLeftTextRight,
      ThumbnailRightTextLeft
    },
    name: 'email-body',

    props: ['config'],

    data () {
      return {
        refcard: this.config.refcard,
        BBLJest: this.config.BBLJest,
        BOFNuxt: this.config.BOFNuxt,
        twitter: this.config.twitter,
        sortie: this.config.sortie,
        mouvements: this.config.mouvements,
        missions: this.config.missions
      }
    }
  }
</script>

<style>
    li {
        margin-bottom: 6px;
    }
</style>