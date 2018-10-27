<template>

    <div>
        <div id="today" class="mb-4 h5">{{ formattedDate }}</div>

        <div class="row">
            <div class="col col-12" v-for="weather in weathers">
                <weather :weather="weather" :date="date" ref="weather" @click="weatherClick"></weather>
            </div>
        </div>
    </div>

</template>

<script>

import weatherComponent from './weather';
import {getWeathers} from '../js/storage';
import moment from 'moment'

const homeCities = [
    "Istanbul",
    "Berlin",
    "London",
    "Helsinki",
    "Dublin",
    "Vancouver",
];


export default {
    data() {
        return {
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
        }
    },

    created() {

        getWeathers(homeCities, (err, weathers) => {
            if (err) throw err;
            this.weathers = weathers;
        });

    }
}

</script>
<style scoped>
    @import '../assets/css/style.css';
</style>
