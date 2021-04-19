<template>
    <form action="" class="w-80 mt-9 md:mx-auto" @submit="submitHandler">
        <div class="relative text-gray-600">
            <input
                v-model="name"
                type="text"
                placeholder=" "
                class="appearance-none w-full h-12 border border-gray-300 rounded px-5 py-3 focus:outline-none"
                :class="{ 'border-red': nameErr }"
            >
            <label class="absolute left-5 top-3 pointer-events-none transition">Your Name</label>
            <span class="text-xs text-red absolute top-0 right-2">{{ nameErr }}</span>
        </div>
        <div class="relative text-gray-600 mt-5">
            <input
                type="text"
                class="appearance-none w-full h-12 border border-gray-300 rounded px-5 py-3 focus:outline-none"
                placeholder=" "
                :class="{ 'border-red': emailErr }"
                :value="email"
                @change="handleChange"
            >
            <label v-show="!email" class="absolute left-5 top-3 pointer-events-none transition">E-mail</label>
            <span class="text-xs text-red absolute top-0 right-2">{{ emailErr }}</span>
        </div>
        <button type="submit" class="btn px-12 mt-7">
            join now
        </button>
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
        const validateEmail = value => {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            const result = re.test(String(value).toLowerCase());
            if (!value) {
                return 'The text field is required.';
            }
            else if (!result) {
                return 'The email is not a valid email.';
            }
            return true;
        };
        const { value: name, errorMessage: nameErr } = useField('name', isRequired);
        const { value: email, errorMessage: emailErr, handleChange } = useField('email', validateEmail);

        return {
            submitHandler,
            name,
            nameErr,
            email,
            emailErr,
            handleChange
        };
    }
};
</script>