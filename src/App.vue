<template>
  <div class="wrapper">
    <HeaderNav />
    <main class="main container"> <router-view></router-view></main>

    <FooterNav />
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

import HeaderNav from './components/HeaderNav'
import FooterNav from './components/FooterNav'


export default {
  name: 'App',

  components: {
    HeaderNav, FooterNav
  },

  data: () => ({
    //
  }),
}

AOS.init();

</script>

<style lang="scss">
@import "'scss/main'";

#html {
  font-size: 1px;

  @include tablet {
    font-size: 0.95px;
  }

  @include tablet-small {
    font-size: 0.75px;
  }

  @include mobile {
    font-size: 0.6px;
  }
}
</style>
