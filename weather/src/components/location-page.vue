
<template>
    <div v-if="weather">
        <div class="row">
            <p>
                <a href="#" @click.prevent="back">
                    <i class="fa fa-long-arrow-left" aria-hidden="true"></i> Back
                </a>
            </p>
            {{ weather.title }}
        </div>

                <div class="col-md-5 col-md-offset-4  general" v-for="item of weather.consolidated_weather">
                    <div :class="isToday(item) ? 'today-item' : null">
                        <div class="row">
                        <div class="col-md-12 base-info">
                            <b>  {{ formattedDate(item.applicable_date) }}</b>
                            <div class="forecast-icon">
                            <img v-bind:src="icon(item)" class="weather-icons">

                            </div>
                        </div>
                    </div>
                        <div class="row">
                            <div class="col-md-12  base-info-1">
                                <div class="today-weather">
                                    <div class="stt">
                                        from {{ Math.round(item.min_temp) }}°C to {{ Math.round(item.max_temp) }}°C
                                    </div>
                                    <h3>{{ item.weather_state_name }}</h3>

                                    <ul>
                                        <li>Humidity <span>{{ item.humidity }}%</span></li>
                                        <li>Wind  <span class="dir" :class="'dir-' +  item.wind_direction_compass.toLowerCase()" :title="item.wind_direction_compass">{{ Math.round(item.wind_speed) }}mph</span>

                                        </li>
                                        <li>Visibility <span v-if="item.visibility">{{ item.visibility.toFixed(1) }} miles</span>
                                            <span v-else>N/A</span>
                                        </li>
                                        <li>Pressure <span> {{ Math.round(item.air_pressure) }}mb</span></li>
                                        <li>Confidence <span> {{ item.predictability }}%</span></li>


                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>















</template>

<script>
    import weatherIcon from '../js/weatherIcon'
    import moment from 'moment'
    import {getWeather} from '../js/storage'

    export default {
        data() {

            return {
                weather: null,
            };
        },

        methods: {
            back() {
                this.$router.go(-1);
            },
            icon: weatherIcon,
            formattedDate(date) {
                return moment(date).format('dddd, D MMM');
            },
            isToday(item) {
                return item.applicable_date === moment().format('YYYY-MM-DD');
            }
        },

        created() {

            getWeather(this.$route.params.woeid, (err, weather) => {
                if (err) throw err;
                this.weather = weather;
            });
        }
    }
</script>
<style scoped>
    @import '../assets/css/mycss_lib.css';
    @import '../assets/css/style.css';
</style>
