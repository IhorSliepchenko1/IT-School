import { createApp } from 'vue';
import App from './App.vue';
import Vuetify from './plugins/vuetify';
import router from './router';
import { Swiper, SwiperSlide } from 'swiper/vue';


createApp(App)
  .use(Swiper, SwiperSlide)
  .use(router)
  .use(Vuetify)
  .mount('#app');


