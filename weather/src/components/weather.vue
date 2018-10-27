
<template>

    <div class="container" style="border-radius: 30px;">
        <div class="row"  @click="click" >
            <!-- City -->
            <div class="city">
                <div class="title">
                    <h2>{{ weather.title }}</h2>

                </div>
                <div class="date-time">
                    <div class="dmy">
                        <div id="txt"></div>
                        <div class="date">
                            {{ formattedDate }}
                        </div>
                    </div>
                    <div class="temperature">

                        <p> {{ Math.round(showWeather.the_temp) }}<span>°C</span></p>
                    </div>
                    <div class="clear"></div>
                </div>
            </div>
            <!-- //City -->
            <!-- Forecast -->
            <div class="forecast">
                <div class="forecast-icon">
                    <img v-bind:src="icon(showWeather)" class="weather-icon">
                </div>
                <div class="today-weather">
                    <div class="stt">
                        Max: {{ Math.round(showWeather.max_temp) }}°C<br>
                        Min: {{ Math.round(showWeather.min_temp) }}°C<br>
                    </div>
                    <h3>{{ showWeather.weather_state_name }}</h3>

                </div>
            </div>
            <!-- //Forecast -->
            <div class="clear"></div>
        </div>


    </div>


</template>

<script>
    import weatherIcon from '../js/weatherIcon';
    import {getWeathers} from '../js/storage';
    import moment from 'moment'

    export default {
        props: ['weather', 'date'],
        data() {
            return {}
        },
        computed: {
            showWeather() {
                let dateKey = moment(this.date).format('YYYY-MM-DD');
                return this.weather.consolidated_weather.find(weather => {
                    return weather.applicable_date === dateKey;
                }) || {};
            }, formattedDate() {
                return moment(this.date).format('dddd, Do MMMM');
            }
        },
        methods: {
            icon: weatherIcon,
            click() {
                this.$emit('click', this.weather);
            }
        }
    }

</script>
<style scoped>
    @import '../assets/css/style.css';
</style>
