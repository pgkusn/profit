<template>
    <swiper
        :slides-per-view="slidesPerView"
        :centered-slides="centeredSlides"
        :loop="true"
        :space-between="30"
        :pagination="{ el: '.swiper-pagination', clickable: true }"
        :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }"
        class="xl:pb-8"
    >
        <swiper-slide
            v-for="item in $props.data"
            :key="item.img"
            class="coaches__slide"
            v-slot="{ isNext }">
            <div class="bg-white shadow-xl">
                <div class="coaches__slide--img bg-cover" :style="{ 'background-image': `url(${item.img})` }"></div>
                <div class="coaches__slide--content flex flex-col items-center py-6 transition-all duration-300" :class="{ 'is-next': isNext }">
                    <h2 class="uppercase text-xl font-bold leading-normal">{{ item.name }}</h2>
                    <h3 class="text-gray-600">{{ item.title }}</h3>
                    <ul class="dropdown flex items-center pt-5" :class="{ 'is-next': isNext }">
                        <li class="xl:opacity-0">
                            <a href="javascript:;" class="mdi mdi-facebook"></a>
                        </li>
                        <li class="ml-4 xl:opacity-0">
                            <a href="javascript:;" class="mdi mdi-instagram"></a>
                        </li>
                        <li class="ml-4 xl:opacity-0">
                            <a href="javascript:;" class="mdi mdi-youtube-play"></a>
                        </li>
                    </ul>
                </div>
            </div>
        </swiper-slide>

        <div class="mx-auto mt-16 h-6 flex justify-center" v-show="slidesPerView < 3">
            <div class="swiper-pagination"></div>
        </div>
    </swiper>

    <div class="swiper-button-next w-12 h-12 bg-white rounded shadow transform rotate-45 2xl:right-0" v-show="slidesPerView === 3"></div>
    <div class="swiper-button-prev w-12 h-12 bg-white rounded shadow transform rotate-45 2xl:left-0" v-show="slidesPerView === 3"></div>
</template>

<script>
import { ref, watchEffect } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { screens } from '@/composition/mediaSensor';

export default {
    name: 'CoachesSlider',
    components: {
        Swiper,
        SwiperSlide
    },
    props: {
        data: {
            type: Array,
            default: () => ([])
        }
    },
    setup () {
        const slidesPerView = ref(3);
        const centeredSlides = ref(true);
        watchEffect(() => {
            slidesPerView.value = screens.xl ? 3 : screens.sm ? 2 : 1;
            centeredSlides.value = !screens.xl;
        });

        return {
            slidesPerView,
            centeredSlides
        };
    }
};
</script>

<style lang="scss" scoped>
@import '@/assets/sass/common';

.swiper-button-next,
.swiper-button-prev {
    @media (min-width: #{$xl-screen}px) {
        top: 60%;
    }
    &::after {
        color: #000;
        font-size: 14px;
        transform: rotate(-45deg);
    }
    &:hover::after {
        color: $red;
    }
}
</style>