<template>
    <div data-aos="fade-up">
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
                v-slot="{ isNext }"
                class="coaches__slide"
            >
                <div class="bg-white shadow-xl">
                    <div class="coaches__slide__img bg-cover" :style="{ 'background-image': `url(${item.img})` }" />
                    <div class="coaches__slide__content flex flex-col items-center py-6 transition-all duration-300" :class="{ 'is-next': isNext }">
                        <h2 class="uppercase text-xl font-bold leading-normal">
                            {{ item.name }}
                        </h2>
                        <h3 class="text-gray-600">
                            {{ item.title }}
                        </h3>
                        <ul class="dropdown flex items-center pt-5" :class="{ 'is-next': isNext }">
                            <li class="xl:opacity-0">
                                <a href="javascript:;" class="mdi mdi-facebook" />
                            </li>
                            <li class="ml-4 xl:opacity-0">
                                <a href="javascript:;" class="mdi mdi-instagram" />
                            </li>
                            <li class="ml-4 xl:opacity-0">
                                <a href="javascript:;" class="mdi mdi-youtube-play" />
                            </li>
                        </ul>
                    </div>
                </div>
            </swiper-slide>

            <div v-show="slidesPerView < 3" class="mx-auto mt-16 h-6 flex justify-center">
                <div class="swiper-pagination" />
            </div>
        </swiper>

        <div v-show="slidesPerView === 3" class="swiper-button-next w-12 h-12 bg-white rounded shadow transform rotate-45" />
        <div v-show="slidesPerView === 3" class="swiper-button-prev w-12 h-12 bg-white rounded shadow transform rotate-45" />
    </div>
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
@media (min-width: #{$xxl-screen}px) {
    .swiper-button-next {
        right: 0;
    }
    .swiper-button-prev {
        left: 0;
    }
}
</style>