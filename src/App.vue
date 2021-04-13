<template>
    <HeaderBlock :sectionPos="sectionPos" ref="headerComponent"></HeaderBlock>

    <div id="home" class="hero relative flex items-center bg-left bg-cover">
        <div class="container z-10 md:text-right">
            <h1 class="text-red text-6xl lg:text-7xl leading-tight lg:leading-tight font-bold" data-aos="fade-left">BEST<br>FITNESS</h1>
            <p class="hero__desc my-8 text-lg md:ml-auto text-gray-600" data-aos="fade-left" data-aos-delay="50">Our club encourages wellness by providing top-notch equipment, first-class instructors, innovative classes, and qualified staff.</p>
            <div data-aos="fade-left" data-aos-delay="100">
                <button class="btn px-12" @click="scrollTo">join now</button>
            </div>
        </div>
        <div class="absolute inset-0 bg-white bg-opacity-60 lg:hidden"></div>
    </div>

    <div id="services" class="grid grid-rows-3 md:grid-rows-2 md:grid-cols-2 lg:grid-rows-1 lg:grid-cols-4 gap-y-12 md:gap-x-7 py-12 md:py-20 lg:py-24 container">
        <FeatureItem
            v-for="(item, index) in featureItemData"
            :key="item.title"
            :icon="item.icon"
            :title="item.title"
            :subtitle="item.subtitle"
            data-aos="fade"
            :data-aos-delay="(index + 1) * 100"
        ></FeatureItem>
    </div>

    <article class="apply bg-bottom md:bg-right-bottom bg-no-repeat py-12 md:py-24" ref="joinEl">
        <div class="container">
            <div class="max-w-lg">
                <div class="border-2 border-red relative p-5 md:p-14" data-aos="fade-right">
                    <div class="uppercase text-red font-bold bg-white absolute -top-3.5 left-12 px-4">only 5 days</div>
                    <h1 class="uppercase text-3xl leading-normal xl:text-5xl xl:leading-tight">
                        start <strong>your</strong><br>
                        <strong>workout</strong> now
                    </h1>
                    <p class="text-gray-700 text-lg mt-4">Enter your name and email in the form below to get your first free workout at Profit.</p>
                </div>
                <JoinForm data-aos="fade-up" data-aos-delay="50"></JoinForm>
            </div>
        </div>
    </article>

    <article id="gallery" class="gallery py-12 md:py-20 xl:py-28 bg-gray-100">
        <div class="container relative">
            <div class="gallery__decoration absolute"></div>
            <div class="xl:absolute xl:top-12 xl:right-0 xl:w-96">
                <h1 class="text-3xl xl:text-5xl xl:leading-tight text-center xl:text-left">
                    <strong>WELCOME</strong> TO OUR FITNESS <strong>CLUB</strong>
                </h1>
                <p class="text-lg text-gray-700 text-center xl:text-left mt-11">Profit is the fitness club that makes fitness totally accessible to everybody. We promise to help people from all walks of life achieve their individual health and fitness goals — no matter their shape, age, and experience.</p>
            </div>
            <Gallery :data="galleryData"></Gallery>
        </div>
    </article>

    <article class="hero2 relative flex items-center bg-center bg-cover">
        <div class="container z-10">
            <h1 class="text-red text-6xl lg:text-7xl leading-tight lg:leading-tight font-bold" data-aos="fade-right">IT'S TIME<br>FOR FITNESS</h1>
            <p class="hero__desc my-8 text-lg text-gray-600" data-aos="fade-right">Experience the state-of-the-art fitness! Our studio offers qualified coaches, tailor-made workouts, and the best atmosphere.</p>
            <div data-aos="fade-right">
                <button class="btn px-12" @click="scrollTo">join now</button>
            </div>
        </div>
        <div class="absolute inset-0 bg-white bg-opacity-60 lg:hidden"></div>
    </article>

    <article id="coaches" class="coaches py-12 md:pt-20 xl:pt-28 xl:pb-10">
        <div class="container relative overflow-hidden xl:pb-8">
            <h1 class="text-3xl xl:text-5xl font-bold mb-12 xl:mb-20 text-center uppercase">Our Coaches</h1>
            <CoachesSlider :data="coachesSliderData" data-aos="fade-up"></CoachesSlider>
        </div>
    </article>

    <div class="container border-t border-b border-gray-100 grid grid-rows-4 grid-cols-1 sm:grid-rows-2 sm:grid-cols-2 md:grid-rows-1 md:grid-cols-4">
        <Counter :number="130" title="Clients" animationName="fade-right"></Counter>
        <Counter :number="25" title="Coaches" animationName="fade-up"></Counter>
        <Counter :number="9" title="awards" animationName="fade-up"></Counter>
        <Counter :number="25" title="Groups" animationName="fade-left"></Counter>
    </div>

    <ReviewSlider :data="reviewSliderData"></ReviewSlider>

    <article class="container py-12 md:py-20 xl:py-28">
        <h1 class="text-3xl xl:text-5xl font-bold mb-12 xl:mb-20 text-center uppercase">Our Blog</h1>
        <div class="flex flex-wrap justify-center">
            <div
                class="blog-card w-full sm:w-5/6 lg:w-1/2 xl:w-1/3"
                v-for="(card, index) in blogCardData"
                :key="card.img"
                :data-aos="getAnimationName('blogCard', index)">
                <BlogCard :card="card"></BlogCard>
            </div>
        </div>
    </article>

    <footer class="pb-8">
        <div class="container flex flex-wrap justify-center items-center text-center sm:text-left">
            <div class="contact-item w-full sm:w-1/2 md:w-1/3 px-4 flex flex-col items-center sm:items-start">
                <a href="javascript:;" class="block mb-6">
                    <img src="@/assets/images/logo-default-199x38.png" alt="">
                </a>
                <ul>
                    <li class="text-gray-700">Mon-Fri: 8am – 7pm</li>
                    <li class="text-gray-700">Sat-Sun: 9am – 5pm</li>
                </ul>
            </div>
            <div class="contact-item w-full sm:w-1/2 md:w-1/3 px-4 flex flex-col items-center sm:items-start">
                <p class="relative mb-6 text-lg font-bold uppercase font-roboto-condensed">
                    address
                    <span class="absolute top-full -left-2 w-4 h-1 bg-gradient-to-r from-yellow-600 to-red"></span>
                </p>
                <ul>
                    <li class="text-gray-700">8439 Pierce Court</li>
                    <li class="text-gray-700">Sacramento, CA 95820</li>
                </ul>
                <a href="javascript:;" class="mt-2 text-red hover:text-black border-b border-gray-300 hover:border-black transition duration-300">Find us on map</a>
            </div>
            <div class="contact-item w-full sm:w-1/2 md:w-1/3 px-4 flex flex-col items-center sm:items-start">
                <p class="relative mb-6 text-lg font-bold uppercase font-roboto-condensed">
                    get in touch
                    <span class="absolute top-full -left-2 w-4 h-1 bg-gradient-to-r from-yellow-600 to-red"></span>
                </p>
                <ul>
                    <li>
                        <span class="text-gray-700 mr-3">Phone</span>
                        <a href="javascript:;" class="transition duration-300 hover:text-red">1-800-123-1234</a>
                    </li>
                    <li>
                        <span class="text-gray-700 mr-3">E-Mail</span>
                        <a href="javascript:;" class="transition duration-300 hover:text-red">Info@demolink.org</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="h-px my-10 bg-gray-200"></div>
        <div class="container flex flex-col md:flex-row items-center md:items-start md:justify-start lg:justify-between">
            <ul class="flex items-center md:order-1 lg:mr-40">
                <li>
                    <a href="javascript:;" class="mdi mdi-facebook"></a>
                </li>
                <li class="ml-4">
                    <a href="javascript:;" class="mdi mdi-instagram"></a>
                </li>
                <li class="ml-4">
                    <a href="javascript:;" class="mdi mdi-youtube-play"></a>
                </li>
            </ul>
            <p class="copyright text-gray-700 text-sm mt-8 md:mt-0 md:ml-14 lg:ml-0 md:mr-24 lg:mr-0">© 2021 Profit. All Rights Reserved. Design by Zemez</p>
        </div>
    </footer>

    <BackToTop></BackToTop>
</template>

<script>
import { onBeforeUnmount, onMounted, reactive, ref } from 'vue';
import { throttle } from 'lodash';
import HeaderBlock from '@/components/HeaderBlock.vue';
import FeatureItem from '@/components/FeatureItem/FeatureItem.vue';
import featureItemData from '@/components/FeatureItem/data.json';
import JoinForm from '@/components/JoinForm.vue';
import CoachesSlider from '@/components/CoachesSlider/CoachesSlider.vue';
import coachesSliderData from '@/components/CoachesSlider/data.json';
import Counter from '@/components/Counter.vue';
import ReviewSlider from '@/components/ReviewSlider/ReviewSlider.vue';
import reviewSliderData from '@/components/ReviewSlider/data.json';
import BlogCard from '@/components/BlogCard/BlogCard.vue';
import blogCardData from '@/components/BlogCard/data.json';
import BackToTop from '@/components/BackToTop.vue';
import Gallery from '@/components/Gallery/Gallery.vue';
import galleryData from '@/components/Gallery/data.json';
import getAnimationName from '@/composition/getAnimationName';

export default {
    name: 'App',
    components: {
        HeaderBlock,
        FeatureItem,
        JoinForm,
        CoachesSlider,
        Counter,
        ReviewSlider,
        BlogCard,
        BackToTop,
        Gallery
    },
    setup () {
        // toggle nav active
        const sectionPos = reactive({
            home: 0,
            services: 0,
            gallery: 0,
            coaches: 0
        });
        const setSectionPos = () => {
            for (const key of Object.keys(sectionPos)) {
                const el = document.getElementById(key);
                sectionPos[key] = el.getBoundingClientRect().top + window.pageYOffset;
            }
        };
        const resizeHandler = throttle(setSectionPos);

        // scroll to join section
        const joinEl = ref(null);
        const headerComponent = ref(null);
        const scrollTo = () => {
            window.scrollTo({
                top: joinEl.value.getBoundingClientRect().top + window.pageYOffset - headerComponent.value.$el.offsetHeight,
                behavior: 'smooth'
            });
        };

        onMounted(() => {
            setSectionPos();
            window.addEventListener('resize', resizeHandler);
        });
        onBeforeUnmount(() => {
            window.removeEventListener('resize', resizeHandler);
        });

        return {
            getAnimationName,
            featureItemData,
            coachesSliderData,
            reviewSliderData,
            blogCardData,
            sectionPos,
            joinEl,
            scrollTo,
            headerComponent,
            galleryData
        };
    }
};
</script>