<template>
    <swiper :effect="'cards'" :grabCursor="true" :modules="modules" class="mySwiper puff-in-center" :loop="true">
        <swiper-slide>
            <div class="slider-container">
                <div class="slider">
                    <div class="slider__info">
                        <div class="slider__avatar">
                            <AvatarImg class="slider__img" imageName="avatar-rew" altText="avatar-rew" />
                        </div>

                        <div class="slider__name">Maria. Front-end</div>
                    </div>
                    <p class="slider__desc">
                        Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Totam repellat,
                        iste culpa veniam facere nam.
                    </p>
                </div>
            </div>

        </swiper-slide>
        <swiper-slide>
            <div class="slider-container">
                <div class="slider">
                    <div class="slider__info">
                        <div class="slider__avatar">
                            <AvatarImg class="slider__img" imageName="avatar-rew" altText="avatar-rew" />
                        </div>

                        <div class="slider__name">Anna. Java</div>
                    </div>
                    <p class="slider__desc">
                        Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Totam repellat,
                        iste culpa veniam facere nam.
                    </p>
                </div>
            </div>

        </swiper-slide> <swiper-slide>
            <div class="slider-container">
                <div class="slider">
                    <div class="slider__info">
                        <div class="slider__avatar">
                            <AvatarImg class="slider__img" imageName="avatar-rew" altText="avatar-rew" />
                        </div>

                        <div class="slider__name">Leyla. PHP</div>
                    </div>
                    <p class="slider__desc">
                        Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Totam repellat,
                        iste culpa veniam facere nam.
                    </p>
                </div>
            </div>

        </swiper-slide>
        <swiper-slide>
            <div class="slider-container">
                <div class="slider">
                    <div class="slider__info">
                        <div class="slider__avatar">
                            <AvatarImg class="slider__img" imageName="avatar-rew" altText="avatar-rew" />
                        </div>

                        <div class="slider__name">Stela. UI/UX</div>
                    </div>
                    <p class="slider__desc">
                        Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Totam repellat,
                        iste culpa veniam facere nam.
                    </p>
                </div>
            </div>

        </swiper-slide>
        <swiper-slide>
            <div class="slider-container">
                <div class="slider">
                    <div class="slider__info">
                        <div class="slider__avatar">
                            <AvatarImg class="slider__img" imageName="avatar-rew" altText="avatar-rew" />
                        </div>

                        <div class="slider__name">Daria. Python</div>
                    </div>
                    <p class="slider__desc">
                        Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Totam repellat,
                        iste culpa veniam facere nam.
                    </p>
                </div>
            </div>

        </swiper-slide> <swiper-slide>
            <div class="slider-container">
                <div class="slider">
                    <div class="slider__info">
                        <div class="slider__avatar">
                            <AvatarImg class="slider__img" imageName="avatar-rew" altText="avatar-rew" />
                        </div>

                        <div class="slider__name">Katya. C++</div>
                    </div>
                    <p class="slider__desc">
                        Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Totam repellat,
                        iste culpa veniam facere nam.
                    </p>
                </div>
            </div>

        </swiper-slide>

    </swiper>
</template>
<script>
import { EffectCards } from 'swiper/modules';
import AvatarImg from "../image/AvatarImg";

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/effect-cards';

export default {
    components: {
        Swiper,
        SwiperSlide, AvatarImg,
    },
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
            modules: [EffectCards],
        };
    },
};
</script>



