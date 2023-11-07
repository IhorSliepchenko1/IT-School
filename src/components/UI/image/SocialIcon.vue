<template>
    <li>
        <a :href="link" target="_blank">
            <img :src="imageSrc" :alt="altText">
        </a>
    </li>
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
        link: {
            type: String,
            required: true,
        },
    },
    computed: {
        imageSrc() {
            return require(`@/assets/socials/${this.imageName}.png`);
        },
    },
};
</script>


<style lang="scss">
.social-icon {
    max-width: 55px;
    transition: var(--transition);


    &:hover {
        -webkit-transform: scale(1.2);
        -ms-transform: scale(1.2);
        transform: scale(1.2);
    }
}
</style>