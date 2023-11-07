<template>
    <section class="section-home">
        <div class="section-home__info">
            <h1 class="section-home__title text-focus-in">Online courses of programming and IT professions</h1>
            <router-link class="roll-in-left" to="/try-the-course">
                <ButtonHeader />
            </router-link>
        </div>
        <div class="section-home__list">
            <div class="section-home__item puff-in-center">
                <FireIcon />
                <p class="section-home__item-text">Lopx ipsum dolor sit.
                </p>
            </div>
            <div class="section-home__item puff-in-center">
                <BagIcon />

                <p class="section-home__item-text">Lopx ipsum dolor sit.
                </p>
            </div>
            <div class="section-home__item puff-in-center">
                <ColoredIcon />
                <p class="section-home__item-text">Lopx ipsum dolor sit.
                </p>
            </div>
        </div>
        <div class="section-home__format">
            <h1 class="section-home__title-format text-focus-in">Learning formats</h1>
            <div class="section-home__format-containers">
                <div class="section-home__block scale-up-center">
                    <CalendarIcon class="icon-home" />
                    <div class="section-home__study">
                        <h2 class="section-home__type">Study with a mentor</h2>
                        <p class="section-home__type-desc">Lopx ipsum dolor sit amet, consectetur adipisicing elit.
                            Voluptas,
                            architecto.</p>
                    </div>
                </div>
                <div class="section-home__block scale-up-center">
                    <ClockIcon class="icon-home" />
                    <div class="section-home__study">
                        <h2 class="section-home__type">Study with a video</h2>
                        <p class="section-home__type-desc">Lopx ipsum dolor sit amet, consectetur adipisicing elit.
                            Voluptas,
                            architecto.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="section-home__job text-focus-in">
            <h1 class="section-home__title-job">
                We guarantee employment <span>after the course</span>
            </h1>
            <div class="section-home__guarantees">
                <div class="section-home__guarantees-desc">
                    <p class="section-home__guarantees-title"> Employed graduates
                    </p>
                    <span class="section-home__numbers">2 500+</span>
                </div>
                <div class="section-home__guarantees-desc">
                    <p class="section-home__guarantees-title">Percentage of students who get a job in IT
                    </p>
                    <span class="section-home__numbers">90%
                    </span>
                </div>
            </div>
        </div>
        <div class="section-home__reviews">
            <h3 class="section-home__title-reviews scale-up-center">REVIEWS</h3>
            <SliderSwiper class="SliderSwiper" />
        </div>
        <div class="section-home__companies">
            <h2 class="section-home__companies-title text-focus-in">Our graduates work in these companies</h2>
            <div class="section-home__img">
                <LogoCompany class="section-home__image puff-in-center" imageName="airtable" altText="airtable" />
                <LogoCompany class="section-home__image puff-in-center" imageName="algolia" altText="algolia" />
                <LogoCompany class="section-home__image puff-in-center" imageName="allianz" altText="allianz" />
                <LogoCompany class="section-home__image puff-in-center" imageName="bonanza" altText="bonanza" />
                <LogoCompany class="section-home__image puff-in-center" imageName="carrera" altText="carrera" />
                <LogoCompany class="section-home__image puff-in-center" imageName="coinbase" altText="coinbase" />
                <LogoCompany class="section-home__image puff-in-center" imageName="expedia" altText="expedia" />
                <LogoCompany class="section-home__image puff-in-center" imageName="grab" altText="grab" />
                <LogoCompany class="section-home__image puff-in-center" imageName="heineken" altText="heineken" />
                <LogoCompany class="section-home__image puff-in-center" imageName="microsoft" altText="microsoft" />
                <LogoCompany class="section-home__image puff-in-center" imageName="suzuki" altText="suzuki" />
                <LogoCompany class="section-home__image puff-in-center" imageName="upwork" altText="upwork" />
                <LogoCompany class="section-home__image puff-in-center" imageName="verizon" altText="verizon" />
                <LogoCompany class="section-home__image puff-in-center" imageName="volvo" altText="volvo" />
                <LogoCompany class="section-home__image puff-in-center" imageName="wetbransfer" altText="wetbransfer" />
                <LogoCompany class="section-home__image puff-in-center" imageName="microsoft" altText="microsoft" />
            </div>
        </div>


    </section>
</template>


<script>
import ButtonHeader from "../components/UI/vuetify/ButtonHeader";
import FireIcon from "../components/UI/image/FireIcon";
import BagIcon from "../components/UI/image/BagIcon";
import ColoredIcon from "../components/UI/image/ColoredIcon";
import CalendarIcon from "../components/UI/materials-icons/CalendarIcon";
import ClockIcon from "../components/UI/materials-icons/ClockIcon";
import LogoCompany from "../components/UI/image/LogoCompany";
import SliderSwiper from "../components/UI/slider/SliderSwiper";



export default {
    components: {
        ButtonHeader, FireIcon, BagIcon, ColoredIcon, CalendarIcon, ClockIcon, LogoCompany, SliderSwiper
    }, setup() {

        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange
        };
    }
}
</script>



