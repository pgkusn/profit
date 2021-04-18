<template>
    <section class="review mt-12 xl:mt-32 pt-16 pb-8 xl:py-0 bg-gray-100">
        <div class="container relative xl:flex xl:justify-between">
            <div class="review__decoration absolute" />
            <div class="relative xl:pt-28" data-aos="fade-right">
                <h1 class="text-5xl text-center xl:text-left mb-8 xl:mb-20 uppercase">
                    What our <strong>clients say</strong>
                </h1>
                <div class="text-slider xl:self-center">
                    <swiper
                        :slides-per-view="1"
                        :initial-slide="1"
                        :controller="{ control: textSwiper }"
                        @swiper="setTextSwiper"
                        @realIndexChange="onSlideChange"
                    >
                        <swiper-slide v-for="item in data" :key="item.img">
                            <span class="linearicons-quote-close text-2xl xl:text-4xl text-red" />
                            <p class="text-lg xl:text-2xl italic text-gray-500 pl-8">
                                {{ item.say }}
                            </p>
                            <span class="linearicons-quote-open text-2xl xl:text-4xl text-red block text-right xl:mt-16 xl:pr-28" />
                            <p class="review__name pl-8 text-lg flex items-center">
                                {{ item.name }}
                            </p>
                        </swiper-slide>
                    </swiper>
                </div>
                <button class="btn px-4 my-14 xl:mb-0">
                    leave your Review
                </button>
            </div>

            <div class="photo-slider" data-aos="fade-left">
                <swiper
                    :slides-per-view="2"
                    :initial-slide="1"
                    :space-between="30"
                    :centered-slides="true"
                    :controller="{ control: photoSwiper }"
                    :pagination="{ el: '.swiper-pagination', clickable: true }"
                    @swiper="setPhotoSwiper"
                    @realIndexChange="onSlideChange"
                >
                    <swiper-slide
                        v-for="(item, index) in data"
                        :key="item.img"
                        class="photo-slider__slide cursor-pointer"
                        @click="changeSlide(index)"
                    >
                        <div class="bg-white p-1.5 shadow-xl group">
                            <div class="photo-slider__slide__img bg-cover transition duration-300 transform group-hover:scale-95" :style="{ 'background-image': `url(${item.img})` }" />
                            <p class="text-lg text-center pt-4 pb-2 transition duration-300 transform group-hover:-translate-x-6">
                                - {{ item.lbs }} lbs
                            </p>
                        </div>
                    </swiper-slide>

                    <div v-show="!screens.xl" class="mx-auto mt-14 h-6 flex justify-center">
                        <div class="swiper-pagination" />
                    </div>
                </swiper>
            </div>
        </div>
    </section>
</template>

<script>
import { ref, watchEffect } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { screens } from '@/composition/mediaSensor';

export default {
    name: 'ReviewSlider',
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
        // change both slide
        const textSwiper = ref(null);
        const photoSwiper = ref(null);
        const setTextSwiper = swiper => {
            textSwiper.value = swiper;
        };
        const setPhotoSwiper = swiper => {
            photoSwiper.value = swiper;
        };
        const onSlideChange = swiper => {
            if (!textSwiper.value || !photoSwiper.value) return;
            textSwiper.value.slideTo(swiper.realIndex);
            photoSwiper.value.slideTo(swiper.realIndex);
        };

        // change one slide
        const changeSlide = index => {
            photoSwiper.value.slideTo(index);
        };

        // change direction
        watchEffect(() => {
            if (!textSwiper.value || !photoSwiper.value) return;
            const direction = screens.xl ? 'vertical' : 'horizontal';
            textSwiper.value.changeDirection(direction);
            photoSwiper.value.changeDirection(direction);
        });

        return {
            textSwiper,
            photoSwiper,
            setTextSwiper,
            setPhotoSwiper,
            onSlideChange,
            changeSlide,
            screens
        };
    }
};
</script>

<style scoped>
.container,
.swiper-container {
    height: 100%;
}
</style>