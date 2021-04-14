import { createApp } from 'vue';
import App from './App.vue';
import './assets/tailwind.scss';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({ once: true });

import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();

import VueLoaders from 'vue-loaders';
import 'vue-loaders/dist/vue-loaders.css';

import { useMediaSensor } from '@/composition/mediaSensor';
useMediaSensor();

createApp(App).use(VueLoaders).mount('#app');
