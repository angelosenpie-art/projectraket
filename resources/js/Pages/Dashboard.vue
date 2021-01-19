<template>
    <app-layout >
        <template #header>
            <nav class="second-menu-bar py-1 border-gray-500 bg-black">
                <ul class="pl-12 md:flex items-center md:flex-1">
                    <li>
                        <a href="#" class="text-white hover:text-green-200 block px-4 py-1 rounded-md text-sm font-bold">Graphics & Design</a>
                    </li>
                    <li>
                        <a href="#" class="text-white hover:text-green-200 block px-4 py-1 rounded-md text-sm font-bold">Video & Animation</a>
                    </li>
                    <li>
                        <a href="#" class="text-white hover:text-green-200 block px-4 py-1 rounded-md text-sm font-bold">Music & Audio</a>
                    </li>
                    <li>
                        <a href="#" class="text-white hover:text-green-200 block px-4 py-1 rounded-md text-sm font-bold">Programming & Tech</a>
                    </li>
                    <li>
                        <a href="#" class="text-white hover:text-green-200 block px-4 py-1 rounded-md text-sm font-bold">Entertainment Services</a>
                    </li>
                    <li>
                        <a href="#" class="text-white hover:text-green-200 block px-4 py-1 rounded-md text-sm font-bold">Build & Craft Services</a>
                    </li>
                    <li>
                        <a href="#" class="text-white hover:text-green-200 block px-4 py-1 rounded-md text-sm font-bold">Skill & Art Services</a>
                    </li>
                </ul>
            </nav>
        </template>

        <div class="py-0 px-0">
            <div class="max-w-7xl mx-auto">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    <welcome />
                </div>
            </div>
        </div>
    </app-layout>
</template>

<script>
    import AppLayout from '@/Layouts/AppLayout'
    import Welcome from '@/Jetstream/Welcome'

    export default {
        components: {
            AppLayout,
            Welcome,
        },
    }
</script>
