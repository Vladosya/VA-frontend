import Vue from 'vue'
import * as VueGoogleMaps from '@/node_modules/vue2-google-maps/src/main'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCcbIMufsfgRQrT5Dl-mMlzP97rlfkL78w',
    libraries: 'places',
  }
})
