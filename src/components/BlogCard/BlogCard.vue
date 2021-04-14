<template>
    <section class="group relative bg-white py-7 px-6 shadow hover:shadow-2xl transition duration-300 border border-gray-100">
        <div class="absolute top-0 left-1/2 transform -translate-x-1/2 bg-red w-9/12 xl:w-0 xl:group-hover:w-9/12 h-1 transition-all duration-300" />
        <div class="inline-block">
            <img :src="$props.card.img" class="rounded-full">
        </div>
        <h1 class="mt-8 text-2xl">
            {{ $props.card.title }}
        </h1>
        <p class="mt-8 text-gray-700">
            {{ $props.card.content }}
        </p>
        <button class="btn mt-8 px-4 xl:opacity-0 xl:group-hover:opacity-100 transition duration-300">
            read more
        </button>
        <p class="mt-8 text-lg">
            {{ $props.card.time }}
        </p>
    </section>
</template>

<script>
export default {
    name: 'BlogCard',
    props: {
        card: {
            type: Object,
            default: () => {}
        }
    }
};
</script>