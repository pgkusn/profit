import { createApp } from 'vue';
import App from './App.vue';
import './assets/tailwind.scss';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({ once: true });

import SwiperCore, { Controller, Navigation, Pagination, Scrollbar } from 'swiper';
SwiperCore.use([Controller, Navigation, Pagination, Scrollbar]);

import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();

import { useMediaSensor } from '@/composition/mediaSensor';
useMediaSensor();

createApp(App).mount('#app');
