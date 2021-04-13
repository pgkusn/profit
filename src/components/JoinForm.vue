<template>
    <form action="" class="w-80 mt-9 md:mx-auto" @submit="submitHandler">
        <div class="relative text-gray-600">
            <input
                type="text"
                v-model="name"
                class="appearance-none w-full h-12 border border-gray-300 rounded px-5 py-3 focus:outline-none"
                :class="{ 'border-red': nameErr }">
            <span v-show="!name" class="absolute left-5 top-3 pointer-events-none transition">Your Name</span>
            <span class="text-xs text-red absolute top-0 right-2">{{ nameErr }}</span>
        </div>
        <div class="relative text-gray-600 mt-5">
            <input
                type="text"
                v-model="email"
                class="appearance-none w-full h-12 border border-gray-300 rounded px-5 py-3 focus:outline-none"
                :class="{ 'border-red': emailErr }">
            <span v-show="!email" class="absolute left-5 top-3 pointer-events-none transition">E-mail</span>
            <span class="text-xs text-red absolute top-0 right-2">{{ emailErr }}</span>
        </div>
        <button type="submit" class="btn px-12 mt-7">join now</button>
    </form>
</template>

<script>
import { useField, useForm } from 'vee-validate';

export default {
    name: 'JoinForm',
    setup () {
        const { handleSubmit } = useForm();

        const submitHandler = handleSubmit(() => {
            alert('Successfully sent!');
        });

        const isRequired = value => {
            if (!value) {
                return 'The text field is required.';
            }
            return true;
        };
        const { value: name, errorMessage: nameErr } = useField('name', isRequired);
        const { value: email, errorMessage: emailErr } = useField('email', isRequired); // TODO: email 格式驗證

        return {
            submitHandler,
            name,
            nameErr,
            email,
            emailErr
        };
    }
};
</script>