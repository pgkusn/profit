<template>
    <a
        href
        class="fa-angle-up fixed right-4 sm:right-10 z-30 flex justify-center items-center w-12 h-12 bg-red text-white text-xl transition-all duration-300 hover:bg-black"
        :class="classObj"
        @click.prevent="clickHandler"
    />
</template>

<script>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { throttle } from 'lodash';

export default {
    name: 'BackToTop',
    setup () {
        const isShow = ref(false);
        const classObj = computed(() => ({
            '-bottom-12': !isShow.value,
            'bottom-4': isShow.value,
            'sm:bottom-10': isShow.value
        }));
        const scrollHandler = throttle(() => {
            isShow.value = window.pageYOffset > 500;
        });
        const clickHandler = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        };
        onMounted(() => {
            window.addEventListener('scroll', scrollHandler);
        });
        onBeforeUnmount(() => {
            window.removeEventListener('scroll', scrollHandler);
        });

        return {
            classObj,
            clickHandler
        };
    }
};
</script>