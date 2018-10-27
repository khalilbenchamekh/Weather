<template>


    <div class="navbar navbar-inverse navbar-fixed-top" role="navigation">

        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <li class="navbar-brand">
                <router-link to="/" class="brand">Weather App</router-link>
            </li>

        </div>

        <div class="collapse navbar-collapse navbar-ex1-collapse">


            <div class="col-xs-12 col-md-6 pull-right">
                <form @submit.prevent="searchSubmit" class="navbar-form" role="search">

                        <div class="sample one">
                            <input type="text" name="search" placeholder="search" v-model="search">
                            <button type="submit" class="btn btn-search fa fa-search"></button>
                        </div>


                </form>
            </div>

        </div>
    </div>


</template>

<script>

    export default {
        data(){
            return {
                search: null

            }

        },
        methods: {
            searchSubmit() {
                if (!this.search) return;
                this.$router.push({path: `/search/${this.search}`});
            }
        }
    }



</script>
<style scoped>

    @import '../assets/css/mycss_lib.css';

</style>
