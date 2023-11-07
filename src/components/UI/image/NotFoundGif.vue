<template>
    <img :src="imageSrc" :alt="altText">
</template>
  
<script>
export default {
    props: {
        imageName: {
            type: String,
            required: true,
        },
        altText: {
            type: String,
            required: true,
        },

    },
    computed: {
        imageSrc() {
            return require(`@/assets/not-found/${this.imageName}.gif`);
        },
    },
};
</script>
