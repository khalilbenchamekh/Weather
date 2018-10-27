import Vue from 'vue'
import Router from 'vue-router'

import HomePage  from '@/components/home-page'
import hello  from '@/components/HelloWorld'
import SearchPage  from '@/components/search-page'
import LocationPage  from '@/components/location-page'
Vue.use(Router)

export default new Router({

    routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    }, {
      path: '/weather/:woeid',
      name: 'LocationPage',
      component: LocationPage
    }, {
            path: '/search/:keyword',
            name: 'SearchPage',
            component: SearchPage
        }, {
            path: '/test/',
            name: 'hello',
            component: hello
        }
  ]
})


