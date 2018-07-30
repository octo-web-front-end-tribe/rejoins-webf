<template>
    <!-- Email Body : BEGIN -->
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" width="100%"
           style="max-width: 980px;" class="email-container">
        <introduction :config="config"/>
    </table>
    <!-- Email Body : END -->
</template>

<script>
    import ThumbnailRightTextLeft from './EmailBody/ThumbnailRightTextLeft';
    import ThumbnailLeftTextRight from './EmailBody/ThumbnailLeftTextRight';
    import Introduction from './EmailBody/Introduction';

    import imageFullPage from './EmailBody/ImageFullPage';
    import ColumnText from './EmailBody/ColumnText';
    import TitleTable from './EmailBody/TitleTable';
    import EvenColumn2 from "./EmailBody/EvenColumn2";
    import EvenColumn3 from "./EmailBody/EvenColumn3";
    import EvenColumn4 from "./EmailBody/EvenColumn4";
    import HeroImageFlush from "./EmailBody/HeroImageFlush";

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

        data() {
            return {
                refcard: this.config.refcard,
                BBLJest: this.config.BBLJest,
                BOFNuxt: this.config.BOFNuxt,
                twitter: this.config.twitter,
                sortie: this.config.sortie,
                mouvements: this.config.mouvements,
                missions: this.config.missions
            };
        }
    };
</script>

