
<template>

    <div>

        <div v-if="!loading">

            <div v-if="weathers.length">

                <div id="today" class="mb-4 h5">{{ formattedDate }}</div>

                <div class="row">
                    <div class="col-12" v-for="weather in weathers">
                        <weather :weather="weather" :date="date" ref="weather" @click="weatherClick"></weather>
                    </div>
                </div>

            </div>

            <div v-else>No results were found. Try changing the keyword!</div>

        </div>

        <div v-else>
            <i class="fa fa-spin fa-refresh"></i> Searching...
        </div>

    </div>

</template>

<script>

    import {getWeathers} from '../js/storage';
    import weatherComponent from './weather';
    import moment from 'moment'

    export default {
        data() {
            return {
                loading: true,
                weathers: [],
                date: new Date(),
            }
        },
        components: {
            weather: weatherComponent,
        },
        computed: {
            formattedDate() {
                return moment(this.date).format('dddd, Do MMMM');
            }
        },

        methods: {
            weatherClick(weather) {
                this.$router.push({path: `/weather/${weather.woeid}`});
            },
            doSearch(keyword) {
                this.loading = true;
                getWeathers([keyword], (err, weathers) => {
                    if (err) throw err;
                    this.weathers = weathers;
                    this.$nextTick(() => {
                        this.loading = false;
                    });
                });
            }
        },

        watch: {
            '$route'() {
                this.doSearch(this.$route.params.keyword);
            }
        },

        created() {
            this.doSearch(this.$route.params.keyword);
        },mounted(){
            this.doSearch(this.$route.params.keyword);
        }
    }

</script>
<style scoped>
    @import '../assets/css/style.css';
</style>
