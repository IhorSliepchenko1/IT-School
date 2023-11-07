<template>
  <div class="not-found container text-focus-in">
    <div class="not-found__gif">
      <NotFoundGif imageName="404" altText="gif" />

    </div>
    <p class="not-found__error">PAGE NOT-FOUND!!!</p>

    <div class="not-found__image">
      <NotFoundImage class="not-found" imageName="not-found" altText="not-found" />


    </div>

    <div class="not-found__desc">
      <p>OUCH... DON'T CRY.
        Push at me</p> <router-link class="not-found__back-to-home" to="/home">
        <NotFoundImage class="smile" imageName="smile" altText="smile-home" />


      </router-link>
    </div>
  </div>
</template>
  
<script>
import NotFoundImage from "../components/UI/image/NotFoundImage";
import NotFoundGif from "../components/UI/image/NotFoundGif";


export default {
  components: {
    NotFoundImage, NotFoundGif
  },
  name: 'NotFound'

};
</script>
  
  
