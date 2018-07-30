<template>
    <div
            style="display:inline-block; margin: 0 -2px; max-width:33.33%; min-width:220px; vertical-align:top; width:100%;"
            class="stack-column">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
            <tr>
                <td style="padding: 10px 10px;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"
                           style="font-size: 14px;text-align: left;  text-align:center">
                        <tr>
                            <td style="">
                                <h2 style="margin: 0px 10px 10px; font-family: sans-serif; font-size: 18px; line-height: 125%; color: rgb(20, 160, 192);">
                                    {{params.prenom}}
                                </h2>
                            </td>
                        </tr>
                        <tr>
                            <td style="">
                                <img :src="srcImage" width="100" height="" border="0" alt="alt_text"
                                     class="center-on-narrow"
                                     style="width: 100%; max-width: 100px; height: auto; background: #dddddd; font-family: sans-serif; font-size: 15px; line-height: 140%; color: #555555;">
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img class="angularjs" src="https://angularjs.org/img/ng-logo.png"
                                     v-if="params.technos.angular"/>
                                <img src="https://angular.io/assets/images/logos/angular/angular.svg"
                                     v-if="params.technos.angular"/>
                                <img class="react" src="https://cdn-images-1.medium.com/max/512/1*qUlxDdY3T-rDtJ4LhLGkEg.png"
                                     v-if="params.technos.react"/>
                                <img class="vuejs" src="https://humancoders-formations.s3.amazonaws.com/uploads/course/logo/104/thumb_bigger_formation-vue-js.png"
                                     v-if="params.technos.vuejs"/>
                                <img class="nodejs" src="https://jaystack.com/wp-content/uploads/2015/12/nodejs-logo-e1497443346889.png"
                                     v-if="params.technos.nodejs"/>
                                <img class="java" src="http://www.stickpng.com/assets/images/58480979cef1014c0b5e4901.png"
                                     v-if="params.technos.java"/>
                                <img class="ruby" src=" http://budiirawan.com/wp-content/uploads/2015/04/ruby-logo.png"
                                     v-if="params.technos.ruby"/>
                                <img class="backbone" src="https://seeklogo.com/images/B/backbone-logo-5471D69D9B-seeklogo.com.png"
                                     v-if="params.technos.backbone"/>
                                <img class="ember" src="http://emberjs.com/images/tomster-sm.png"
                                     v-if="params.technos.ember"/>
                                <img class="python" src=" https://humancoders-formations.s3.amazonaws.com/uploads/course/logo/2/formation-python.png"
                                     v-if="params.technos.python"/>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>

    export default {
        name: 'even-column200',
        props: ['params'],

        data() {
            return {
                srcImage: this.params.image || 'http://placehold.it/200'
            };
        }
    };
</script>

<style scoped>
    img {
        width: 20px
    }
    .angularjs {
        width: 16px;
    }
    .react {
        width: 25px;
    }
    .vuejs {
        width: 17px;
    }
    .nodejs {
        width: 17px;
    }
    .java {
        width: 16px;
    }
    .backbone {
        width: 14px;
    }
    .python {
        width: 18px
    }
</style>
