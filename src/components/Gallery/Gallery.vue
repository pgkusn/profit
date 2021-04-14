<template>
    <div class="gallery-main relative mt-12 xl:mt-0 grid xl:gap-5">
        <div
            v-for="(item, index) in $props.data"
            :key="item.id"
            :data-aos="getAnimationName('gallery', index)"
            class="group">
            <div class="relative bg-white xl:group-hover:shadow-lg transition duration-300">
                <a href class="gallery-main__item block h-0 relative xl:group-hover:scale-95 transform transition duration-300" @click.prevent="openModal(index)">
                    <img :src="item.img.preview" class="absolute inset-0 w-full h-full object-cover">
                </a>
                <!-- show when hover -->
                <div class="pointer-events-none">
                    <div class="border border-white w-full xl:group-hover:w-4/5 h-full xl:group-hover:h-4/5 opacity-0 xl:group-hover:opacity-100 transition-all duration-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                    <div class="absolute inset-0 flex justify-center items-center opacity-0 xl:group-hover:opacity-100 transition duration-300">
                        <span class="material-icons text-white text-4xl">zoom_in</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- modal -->
        <teleport to="body">
            <transition name="fade">
                <div v-show="modalOpen" class="fixed inset-0 z-40 bg-black bg-opacity-90" ref="modalEl">
                    <transition-group :name="transitionName">
                        <template v-for="(item, index) in $props.data" :key="item.id">
                            <div
                                v-show="index === currentIndex"
                                class="flex justify-center items-center absolute inset-0"
                                @click.self="closeModal">
                                <img :src="item.img.original" class="max-w-full max-h-full js-gallery" @dragstart="preventDefault">
                            </div>
                        </template>
                    </transition-group>

                    <!-- thumbs -->
                    <div class="absolute inset-x-0 bottom-0 overflow-x-auto py-2.5 bg-black" ref="thumbsWrapEl">
                        <div class="gallery-main__thumbs relative flex mx-auto" ref="thumbsEl">
                            <div
                                v-for="(item, index) in $props.data"
                                :key="item.id"
                                class="w-24 h-20 mx-0.5 border-2 border-white hover:border-red transition-colors rounded flex-shrink-0 cursor-pointer"
                                :class="{ 'border-red': index === currentIndex }"
                                @click="changeGallery(index)">
                                <img :src="item.img.preview" class="w-full h-full object-cover">
                            </div>
                        </div>
                    </div>
                    <button class="group absolute top-1/2 left-4 transform -translate-y-1/2 focus:outline-none bg-black bg-opacity-50 px-2 py-1 rounded" @click="changeGallery(currentIndex - 1)">
                        <span class="material-icons text-gray-400 group-hover:text-white transition-colors text-2xl align-middle">arrow_back</span>
                    </button>
                    <button class="group absolute top-1/2 right-4 transform -translate-y-1/2 focus:outline-none bg-black bg-opacity-50 px-2 py-1 rounded" @click="changeGallery(currentIndex + 1)">
                        <span class="material-icons text-gray-400 group-hover:text-white transition-colors text-2xl align-middle">arrow_forward</span>
                    </button>
                    <button class="material-icons absolute top-4 right-4 text-gray-400 hover:text-white transition-colors text-2xl focus:outline-none" @click="closeModal">close</button>
                </div>
            </transition>
        </teleport>
    </div>
</template>

<script>
import { computed, onMounted, ref, nextTick } from 'vue';
import Hammer from 'hammerjs';
import getAnimationName from '@/composition/getAnimationName';

export default {
    name: 'Gallery',
    props: {
        data: {
            type: Array,
            default: () => ([])
        }
    },
    setup (props) {
        const modalEl = ref(null);
        const thumbsWrapEl = ref(null);
        const thumbsEl = ref(null);
        const modalOpen = ref(false);
        const currentIndex = ref(0);
        const currentGallery = computed(() => props.data[currentIndex.value]);
        const transitionName = ref('');
        const openModal = async index => {
            transitionName.value = '';
            currentIndex.value = index;
            modalOpen.value = true;
            centerActiveThumb();
        };
        const closeModal = () => {
            modalOpen.value = false;
        };
        const changeGallery = index => {
            transitionName.value = index > currentIndex.value ? 'right-in' : 'left-in';
            currentIndex.value = index < 0 ? props.data.length - 1 : index >= props.data.length ? 0 : index;
            centerActiveThumb();
        };
        const centerActiveThumb = async () => {
            await nextTick();
            const activeThumbEl = thumbsEl.value.children[currentIndex.value];
            thumbsWrapEl.value.scrollLeft = activeThumbEl.offsetLeft - window.innerWidth / 2 + activeThumbEl.offsetWidth / 2;
        };
        const preventDefault = () => {
            event.preventDefault();
        };

        onMounted(() => {
            // init swipe event
            const mc = new Hammer(modalEl.value);
            mc.on('swipeleft swiperight', ev => {
                if (!Array.from(ev.target.classList).includes('js-gallery')) return;
                const index = ev.type === 'swipeleft' ? currentIndex.value + 1 : currentIndex.value - 1;
                changeGallery(index);
            });
        });

        return {
            getAnimationName,
            modalOpen,
            openModal,
            currentIndex,
            currentGallery,
            changeGallery,
            transitionName,
            modalEl,
            preventDefault,
            closeModal,
            thumbsWrapEl,
            thumbsEl
        };
    }
};
</script>

<style scoped>
.right-in-enter-from,
.left-in-leave-to {
    transform: translateX(100%);
}
.right-in-enter-active,
.right-in-leave-active,
.left-in-enter-active,
.left-in-leave-active {
    transition: transform .5s;
}
.right-in-leave-to,
.left-in-enter-from {
    transform: translateX(-100%);
}
</style>