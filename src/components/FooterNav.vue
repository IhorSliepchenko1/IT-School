<template>
    <footer class="footer">

        <div class="footer-section container">
            <div class="footer-section__info">
                <div class="footer-section__ui">

                    <router-link class="footer-section__logo__logo" to="/home">
                        <LogoIcon data-aos="flip-left" />
                    </router-link>

                   

                </div>

                <div class="footer-section__nav text-focus-in">
                    <li class="footer-section__li"><router-link class="footer-section__a"
                            to="/courses">Courses</router-link></li>

                    <li class="footer-section__li"><router-link class="footer-section__a" to="/about">About Us</router-link>
                    </li>
                </div>




                <div class="footer-section__contacts text-focus-in">

                    <div class="footer-section__adres info-contact">
                        <h3 class="footer-section__title">Address</h3>
                        <a href="https://www.google.com/maps?q=5+Koh+Sek+Lim+Rd+Singapore+486050"
                            class="footer-section__street" target="_blank">5 Koh Sek Lim Rd Singapore 486050</a>
                    </div>



                    <div class="footer-section__telephone">
                        <h3 class="footer-section__title info-contact">Telephone</h3>
                        <div class="footer-section__numbers">
                            <a href="tel:0740127246" class="footer-section__contacts-a">(07)40127246</a>
                            <a href="tel:0267566577" class="footer-section__contacts-a">(02)67566577</a>
                        </div>
                    </div>


                    <div class="footer-section__email info-contact">
                        <h3 class="footer-section__title">Email</h3>
                        <a href="mailto:name@email.com" class="footer-section__contacts-a"
                            target="_blank">name@email.com</a>
                    </div>


                </div>
            </div>

            <div class="footer-section__socials">
                <p>Follow us</p>

                <ul class="footer-section__socials-ul ">
                    <SocialIcon class="social-icon " imageName="github" altText="github" link="https://github.com/" />
                    <SocialIcon class="social-icon " imageName="facebook" altText="facebook"
                        link="https://www.facebook.com/" />
                    <SocialIcon class="social-icon " imageName="instagram" altText="instagram"
                        link="https://www.instagram.com/" />
                    <SocialIcon class="social-icon " imageName="twitter" altText="twitter"
                        link="https://twitter.com/?lang=ru" />
                    <SocialIcon class="social-icon " imageName="whatsapp" altText="whatsapp"
                        link="https://www.whatsapp.com/?lang=uk" />
                    <SocialIcon class="social-icon " imageName="youtube" altText="youtube"
                        link="https://www.youtube.com/?gl=UA&hl=ru" />
                </ul>
            </div>

            <div class="footer-section__copyright scale-up-center">Copyright @{{ currentYear }} | Developed by Igor
                Slepchenko </div>
        </div>

    </footer>
</template>

<script>


import SocialIcon from "../components/UI/image/SocialIcon";
import LogoIcon from "./UI/image/LogoIcon";


export default {
    components: {
        SocialIcon, LogoIcon
    },
    data() {
        return {
            currentYear: new Date().getFullYear(),
        };
    },
};


</script>

