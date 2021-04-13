<template>
    <div
        class="counter flex flex-col justify-center items-center"
        :data-aos="$props.animationName"
        :data-aos-id="$props.title">
        <span class="text-6xl font-bold text-gray-700 font-roboto-condensed">{{ animatedNumber.int }}</span>
        <span class="mt-3 text-gray-800 font-roboto-condensed uppercase">{{ $props.title }}</span>
    </div>
</template>

<script>
import { onBeforeUnmount, onMounted, computed, ref } from 'vue';
import gsap from 'gsap';

export default {
    name: 'Counter',
    props: {
        number: {
            type: Number,
            default: 0
        },
        title: {
            type: String,
            default: ''
        },
        animationName: {
            type: String,
            default: ''
        }
    },
    setup (props) {
        const number = ref({
            int: 0
        });
        const animatedNumber = computed(() => ({
            int: number.value.int.toFixed(0)
        }));
        const playAnimation = () => {
            gsap.to(number.value, {
                duration: 1,
                ease: 'none',
                int: props.number
            });
        };
        onMounted(() => {
            document.addEventListener(`aos:in:${props.title}`, playAnimation);
        });
        onBeforeUnmount(() => {
            document.removeEventListener('aos:in', playAnimation);
        });

        return {
            animatedNumber
        };
    }
};
</script>