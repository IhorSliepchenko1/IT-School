<template>
    <header class="header container">
        <router-link class="header__logo" to="/home">
            <LogoIcon data-aos="flip-left" />
        </router-link>
        <div class="header__nav">
            <div :class="{ '_active': isActive }" class="header__backdrop" id="headerBackdrop" @click="navToggle()"></div>
            <ul :class="{ '_active': isActive }" class="header__ul" id="headerUl">
                <li class="header__li slide-in-elliptic-bottom-bck">
                    <router-link class="header__a" to="/home" @click="navToggle()">Home</router-link>
                </li>
                <li class="header__li slide-in-elliptic-bottom-bck">
                    <router-link class="header__a " to="/courses" @click="navToggle()">Courses</router-link>
                </li>

                <li class="header__li slide-in-elliptic-bottom-bck">
                    <router-link class="header__a " to="/about" @click="navToggle()">About us</router-link>
                </li>
                <MaterialIconsClose @click="navToggle()" class="icon-close" />
            </ul>
            <MaterialIconsMenu :class="{ '_active': isActive }" @click="navToggle()" class="icon-menu" />
        </div>
    </header>
</template>
  
<script>
import MaterialIconsClose from "./UI/materials-icons/MaterialIconsClose";
import MaterialIconsMenu from "./UI/materials-icons/MaterialIconsMenu";
import LogoIcon from "./UI/image/LogoIcon";

export default {
    components: {
        MaterialIconsClose,
        MaterialIconsMenu, LogoIcon
    },
    data() {
        return {
            isActive: false
        };
    },
    methods: {
        navToggle() {
            this.isActive = !this.isActive;
            // if (this.isActive) {
            //     document.body.classList.add('no-scroll');
            // } else {
            //     document.body.classList.remove('no-scroll');
            // }
        }
    }
};
</script>
  