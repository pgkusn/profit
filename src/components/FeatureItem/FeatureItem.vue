<template>
    <div class="flex flex-col items-center group" data-aos="fade" :data-aos-delay="$props.aosDelay">
        <div class="w-20 h-20 rounded border border-gray-400 lg:group-hover:border-transparent flex justify-center items-center transform rotate-45 lg:group-hover:rotate-0 transition duration-300 lg:group-hover:bg-red">
            <span :class="$props.icon" class="text-red lg:group-hover:text-white text-5xl transform -rotate-45 lg:group-hover:rotate-0 transition duration-300" />
        </div>
        <p class="text-center text-xl font-bold mt-10 uppercase">
            {{ $props.title }}
        </p>
        <p class="text-center text-gray-400 mt-4">
            {{ $props.subtitle }}
        </p>
    </div>
</template>

<script>
export default {
    name: 'FeatureItem',
    props: {
        icon: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        },
        subtitle: {
            type: String,
            default: ''
        },
        aosDelay: {
            type: Number,
            default: 0
        }
    }
};
</script>