<template>
  <div class="index">
        <div class="content content1">
            <div class="contentin">
                <router-view class="child-view"></router-view>
            </div>
        </div>
  </div>
</template>

<script>
import util from 'src/util/util.js'

export default {
    name: 'index',
    props : [],
    data () {
        return {

        }
    },
    components: {

    },
    computed:{

    },
    created(){
    },
    methods : {

    },
    mounted(){

    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .child-view{
        @include minw(53rem);
        @include font(0.8rem,0.8rem);
    }
    .content1{
        min-width: 22.6rem;
        left:12.9rem;
        top:5.6rem;
        bottom: 2.75rem;
        overflow-x: auto;
        padding:1.5rem 0 1.5rem 1.5rem;
        background-color:$pageback;
        color:$gray!important;
        .contentin{
            padding-right:1.5rem;
            min-width: 53rem;
        }
    }
</style>
