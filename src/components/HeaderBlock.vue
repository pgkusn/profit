<template>
    <header ref="headerEl" class="fixed z-20 top-0 left-0 right-0 border-b border-gray-200 bg-white" @click="clickHandler">
        <div class="h-14 lg:h-20 px-1 lg:pl-4 lg:pr-0 xl:pl-0 flex items-center">
            <input
                id="nav-toggler"
                v-model="showNav"
                type="checkbox"
                class="hidden"
            >
            <input
                id="dropdown-toggler"
                v-model="showDropdown"
                type="checkbox"
                class="hidden"
            >

            <label for="nav-toggler" class="nav-toggler cursor-pointer px-2.5 py-3 mr-2 lg:hidden">
                <span class="nav-toggler__bar" />
                <span class="nav-toggler__bar" />
                <span class="nav-toggler__bar" />
            </label>

            <a href="javascript:;">
                <img src="@/assets/images/logo-default-199x38.png" alt="">
            </a>

            <p class="text-xs text-gray-600 ml-4 mr-6 hidden lg:block">
                professional<br>fitness studio
            </p>

            <ul class="dropdown flex items-center p-4 lg:p-0 bg-white lg:bg-transparent absolute lg:static right-0 rounded shadow-lg lg:shadow-none opacity-0 lg:opacity-100 transform -translate-y-2 lg:translate-y-0 transition duration-300 lg:transition-none">
                <li>
                    <a href="javascript:;" class="mdi mdi-facebook" />
                </li>
                <li class="ml-4">
                    <a href="javascript:;" class="mdi mdi-instagram" />
                </li>
                <li class="ml-4">
                    <a href="javascript:;" class="mdi mdi-youtube-play" />
                </li>
            </ul>

            <nav class="nav transform lg:transform-none -translate-x-full transition-transform lg:transition-none fixed left-0 lg:static top-14 bottom-0 w-64 lg:w-auto border-r border-gray-200 lg:border-none bg-white lg:bg-transparent flex flex-col lg:flex-row py-4 lg:ml-auto">
                <a
                    v-for="(value, key, index) in $props.sectionPos"
                    :key="key"
                    href
                    class="nav__link uppercase"
                    :class="{ active: activeStatus[index] }"
                    @click.prevent="scrollTo(key)"
                >{{ key }}</a>
            </nav>

            <label for="dropdown-toggler" class="dropdown-toggler px-5 py-2 cursor-pointer ml-auto lg:hidden">
                <div>
                    <span class="dropdown-toggler-bar" />
                    <span class="dropdown-toggler-bar my-1" />
                    <span class="dropdown-toggler-bar" />
                </div>
            </label>
        </div>
    </header>
</template>

<script>
import { onBeforeUnmount, onMounted, watch, ref } from 'vue';
import { throttle } from 'lodash';

export default {
    name: 'HeaderBlock',
    props: {
        sectionPos: {
            type: Object,
            default: () => {}
        }
    },
    setup (props) {
        // toggle menu
        const showNav = ref(false);
        const showDropdown = ref(false);
        const closeNav = () => {
            showNav.value = false;
            showDropdown.value = false;
        };
        const clickHandler = () => {
            if (event.target.type !== 'checkbox') {
                event.stopPropagation();
            }
        };

        // toggle active
        const activeStatus = ref(Array(Object.keys(props.sectionPos).length).fill(false));
        const headerEl = ref(null);
        const scrollHandler = throttle(() => {
            Object.keys(props.sectionPos).forEach((key, index) => {
                if (props.sectionPos[key] <= window.pageYOffset + headerEl.value.offsetHeight) {
                    activeStatus.value.fill(false);
                    activeStatus.value[index] = true;
                }
            });
        });
        watch(props, scrollHandler);

        const scrollTo = key => {
            window.scrollTo({
                top: props.sectionPos[key] - headerEl.value.offsetHeight,
                behavior: 'smooth'
            });
        };

        onMounted(() => {
            document.addEventListener('click', closeNav);
            window.addEventListener('scroll', scrollHandler);
        });
        onBeforeUnmount(() => {
            document.removeEventListener('click', closeNav);
            window.removeEventListener('scroll', scrollHandler);
        });

        return {
            showNav,
            showDropdown,
            clickHandler,
            activeStatus,
            headerEl,
            scrollTo
        };
    }
};
</script>