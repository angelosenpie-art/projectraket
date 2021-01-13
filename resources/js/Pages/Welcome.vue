<template>
    <div>
        <div class="relative bg-gradient-to-t">
            <div class="max-w-7xl mx-auto bg-white px-4 sm:px-6">
                <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                <div class="flex justify-start lg:w-0 lg:flex-1">
                    <div>
                        <jet-application-logo class="block h-12 w-auto" />
                    </div>
                    <div class="pl-10 pt-1 col-span-6 sm:col-span-3">
                        <jet-input type="text" class="focus:ring-5 focus:ring-gray-700 border-2 rounded-full py-2 px-6 text-sm font-medium text-gray-700" placeholder="Find Services.." />
                    </div>
                </div>
                <div class="-mr-2 -my-2 md:hidden">
                    <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span class="sr-only">Open menu</span>
                    <!-- Heroicon name: menu -->
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    </button>
                </div>

                <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                    <inertia-link href="#" class="text-xl pr-5 font-bold text-gray-700 hover:text-gray-900">
                        How it works
                    </inertia-link>

                    <inertia-link href="#" class="text-xl pr-5 font-bold text-gray-700 hover:text-gray-900">
                        Become a Seller
                    </inertia-link>

                    <inertia-link v-if="$page.props.user" href="/dashboard" class="ml-8 font-bold whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-xl text-white bg-black hover:bg-yellow-500">
                        Dashboard
                    </inertia-link>

                    <template v-else>
                        <inertia-link :href="route('login')" class="whitespace-nowrap font-bold text-xl text-gray-700 hover:text-white">
                            Login
                        </inertia-link>

                        <inertia-link v-if="canRegister" :href="route('register')" class="ml-8 font-bold whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-xl text-white bg-green-600 hover:bg-green-700">
                            Register
                        </inertia-link>
                    </template>
                </div>
                </div>
            </div>
            <nav class="second-menu-bar py-2 border-b-2 border-t-2 border-gray-300 bg-gray-200">
                <ul class="pl-12 md:flex md:flex items-center md:flex-1">
                    <li>
                        <a href="#" class="subpixel-antialiased font-bold pr-6 hover:text-white text-gray-700">Graphics & Design</a>
                    </li>
                    <li>
                        <a href="#" class="subpixel-antialiased font-bold pr-6 hover:text-gray-900 text-gray-700">Video & Animation</a>
                    </li>
                    <li>
                        <a href="#" class="subpixel-antialiased font-bold pr-6 hover:text-gray-900 text-gray-700">Music & Audio</a>
                    </li>
                    <li>
                        <a href="#" class="subpixel-antialiased font-bold pr-6 hover:text-gray-900 text-gray-700">Programming & Tech</a>
                    </li>
                    <li>
                        <a href="#" class="subpixel-antialiased font-bold pr-6 hover:text-gray-900 text-gray-700">Entertainment Services</a>
                    </li>
                    <li>
                        <a href="#" class="subpixel-antialiased font-bold pr-6 hover:text-gray-900 text-gray-700">Build & Craft Services</a>
                    </li>
                    <li>
                        <a href="#" class="subpixel-antialiased font-bold pr-6 hover:text-gray-900 text-gray-700">Skill & Art Services</a>
                    </li>
                </ul>
            </nav>
            <main class="mt-10 mx-auto max-w-full px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div class="lg:text-left">
                    <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                        <span class="block xl:inline">Find Your Filipino</span>
                        <span class="block text-green-700 xl:inline">Freelancer</span>
                    </h1>
                    <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                    </p>
                    <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                        <div class="rounded-md shadow">
                        <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10">
                            Get started
                        </a>
                        </div>
                        <div class="mt-3 sm:mt-0 sm:ml-3">
                        <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                            Live demo
                        </a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<style scoped>
    .bg-gray-100 {
        background-color: #ececec;
        background-color: rgba(247, 250, 252, var(--tw-bg-opacity));
    }

    .border-gray-200 {
        border-color: #eef1f5f8;
        border-color: rgba(237, 242, 247, var(--tw-border-opacity));
    }

    .text-gray-400 {
        color: #cbd5e0;
        color: rgba(203, 213, 224, var(--tw-text-opacity));
    }

    .text-gray-500 {
        color: #a0aec0;
        color: rgba(160, 174, 192, var(--tw-text-opacity));
    }

    .text-gray-600 {
        color: #718096;
        color: rgba(113, 128, 150, var(--tw-text-opacity));
    }

    .text-gray-700 {
        color: #4a5568;
        color: rgba(74, 85, 104, var(--tw-text-opacity));
    }

    .text-gray-900 {
        color: #1a202c;
        color: rgba(26, 32, 44, var(--tw-text-opacity));
    }

    @media (prefers-color-scheme: dark) {
        .dark\:bg-gray-800 {
            background-color: #2d3748;
            background-color: rgba(45, 55, 72, var(--tw-bg-opacity));
        }

        .dark\:bg-gray-900 {
            background-color: #1a202c;
            background-color: rgba(26, 32, 44, var(--tw-bg-opacity));
        }

        .dark\:border-gray-700 {
            border-color: #4a5568;
            border-color: rgba(74, 85, 104, var(--tw-border-opacity));
        }

        .dark\:text-white {
            color: #fff;
            color: rgba(255, 255, 255, var(--tw-text-opacity));
        }

        .dark\:text-gray-400 {
            color: #cbd5e0;
            color: rgba(203, 213, 224, var(--tw-text-opacity));
        }
    }
</style>

<script>
    import JetApplicationLogo from '@/Jetstream/ApplicationLogo'
    import JetInput from '@/Jetstream/Input'

    export default {
        props: {
            canLogin: Boolean,
            canRegister: Boolean,
            laravelVersion: String,
            phpVersion: String,
        },
        components: {
            JetApplicationLogo,
            JetInput,
        },
        data () {
            return {
                heading: "Find Your Filipino Freelancer"
            }
        },
    }
</script>