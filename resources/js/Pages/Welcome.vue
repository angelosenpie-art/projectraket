<template>
    <div>
        <div class="relative bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6">
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
                <nav class="hidden md:flex space-x-10">
                    <div class="relative">
                    <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
                    <a href="#" class="text-base font-large font-bold text-gray-700 hover:text-gray-900">
                    How it works
                    </a>

                    <!--
                        'Solutions' flyout menu, show/hide based on flyout menu state.

                        Entering: "transition ease-out duration-200"
                        From: "opacity-0 translate-y-1"
                        To: "opacity-100 translate-y-0"
                        Leaving: "transition ease-in duration-150"
                        From: "opacity-100 translate-y-0"
                        To: "opacity-0 translate-y-1"
                    -->
                    </div>

                    <a href="#" class="text-base font-large font-bold text-gray-700 hover:text-gray-900">
                    Become a Seller
                    </a>

                    <!-- <div class="relative">
                        Item active: "text-gray-900", Item inactive: "text-gray-500"
                        <button type="button" class="group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <span>More</span>
                        Heroicon name: chevron-down

                        Item active: "text-gray-600", Item inactive: "text-gray-400"
                        -->
                        <!-- <svg class="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </button> -->

                    <!--
                        'More' flyout menu, show/hide based on flyout menu state.

                        Entering: "transition ease-out duration-200"
                        From: "opacity-0 translate-y-1"
                        To: "opacity-100 translate-y-0"
                        Leaving: "transition ease-in duration-150"
                        From: "opacity-100 translate-y-0"
                        To: "opacity-0 translate-y-1"

                    </div> -->
                </nav>
                    <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                        <inertia-link v-if="$page.props.user" href="/dashboard" class="ml-8 font-bold whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base text-white bg-black hover:bg-yellow-500">
                            Dashboard
                        </inertia-link>

                        <template v-else>
                            <inertia-link :href="route('login')" class="whitespace-nowrap font-bold text-base font-large text-gray-700 hover:text-gray-900">
                                Login
                            </inertia-link>
                            <inertia-link v-if="canRegister" :href="route('register')" class="ml-8 font-bold whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base text-white bg-black hover:bg-gray-700">
                                Register
                            </inertia-link>
                        </template>
                    </div>
                </div>
            </div>
            <!--
                Mobile menu, show/hide based on mobile menu state.
                Entering: "duration-200 ease-out"
                From: "opacity-0 scale-95"
                To: "opacity-100 scale-100"
                Leaving: "duration-100 ease-in"
                From: "opacity-100 scale-100"
                To: "opacity-0 scale-95"
            -->
            <section class="hero">
                <div class="hero-body">
                    <div class="container-visitor">
                        <h1 class="title font-bold"> {{ heading }}</h1>
                    </div>
                </div>

            </section>
        </div>
    </div>
</template>

<style scoped>
    .bg-gray-100 {
        background-color: #f7fafc;
        background-color: rgba(247, 250, 252, var(--tw-bg-opacity));
    }

    .border-gray-200 {
        border-color: #edf2f7;
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