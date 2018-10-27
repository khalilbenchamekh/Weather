<template>

  <div class="container">
    <div class="row">
      <div class="col-sm-5 col-md-6">.col-sm-5 .col-md-6</div>
      <div class="col-sm-5 col-sm-offset-2 col-md-6 col-md-offset-0">.col-sm-5 .col-sm-offset-2 .col-md-6 .col-md-offset-0</div>
    </div>


  </div>

</template>

<script>
    import axios from 'axios'


export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: []
    }
  },
    methods:{
        nextPost(){

            axios.get('weather/weather.php?command=search&keyword=london').then((response) => {

              console.log(response.data)
              this.msg=response.data


            }).catch(e => {
                console.log(e);
            });



        }


    },mounted(){
      this.nextPost()
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../assets/css/mycss_lib.css';
  @import '../assets/css/style.css';
</style>
