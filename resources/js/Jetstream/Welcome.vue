<template>
    <div class="container my-12 mx-auto px-4 md:px-12">
        <!-- CONTAINER -->
        <div class="flex items-center px-8 py-6">
            <!-- TITLE -->
            <h2 class="mr-3 pl-2">Local Services</h2>
            <!-- SWITCH CONTAINER -->
            <div class="w-10 h-6 bg-gray-300 rounded-full flex-shrink-0 p-1" @click="toggleActive = !toggleActive">

                <!-- SWITCH -->
                <div class="bg-white w-4 h-4 rounded-full shadow-md transform translate-x-5 duration-300 ease-in-out" :class="{ 'translate-x-6': toggleActive,}">

            </div>
            <!-- SWITCH CONTAINER END -->

        </div>
        <div class="flex w-full md:w-1/2 ">
            <div class="mr-3 text-gray-700 font-medium">Local Services</div>
            <!-- Toggle Button -->
            <label 
                for="local"
                class="flex items-center cursor-pointer"
            >
                <!-- toggle -->
                <div class="relative">
                <!-- input -->
                <input id="local" type="checkbox" class="hidden" />
                <!-- line -->
                <div
                    class="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"
                ></div>
                <!-- dot -->
                <div
                    class="toggle__dot absolute w-6 h-6 py-1 bg-white rounded-full shadow inset-y-0 left-0"
                ></div>
                </div>
                <!-- label -->
            </label>

            <div class="mr-3 pl-2 text-gray-700 font-medium">Online Sellers</div>
            <!-- Toggle Button -->
            <label 
                for="Online"
                class="flex items-center cursor-pointer"
            >
                <!-- toggle -->
                <div class="relative">
                <!-- input -->
                <input id="Online" type="checkbox" class="hidden" />
                <!-- line -->
                <div
                    class="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"
                ></div>
                <!-- dot -->
                <div
                    class="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0"
                ></div>
                </div>
                <!-- label -->
            </label>
        </div>

        <div class="flex flex-wrap -mx-1 lg:-mx-4">

            <!-- Column -->
            <div class="my-1 w-8 lg:my-4 sm:px-5 md:w-1/4">

                <!-- Article -->
                <article class="overflow-hidden rounded-lg shadow-lg">

                    <a href="#">
                        <img alt="Placeholder" class="block h-auto w-full" src="https://www.designingbuildings.co.uk/w/images/5/5e/Carpenter-carving-wood.jpg">
                    </a>

                    <header class="flex items-center justify-between leading-none p-2 md:p-4">
                        <a class="flex items-center no-underline hover:underline text-black" href="#">
                            <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random">
                            <p class="ml-3 font-bold text-md">
                                Johny Boy
                            </p>
                        </a>
                        <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                            <span class="hidden">Like</span>
                            <i class="fa fa-heart"></i>
                        </a>
                    </header>
                    <body class="pl-4 leading-tight">
                        <p class="no-underline font-bold hover:underline text-black" href="#">
                            I will panday your dream dog house
                        </p>
                    </body>
                    <footer class="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 class="text-lg">
                            <a class="no-underline font-bold hover:underline text-black" href="#">
                                Carpentry
                            </a>
                        </h1>
                        <p class="ml-12 pl-4 font-bold text-green-700 text-lg">
                            TF:
                        </p>
                        <p class="text-green-500 text-xl">
                            ₱1,500
                        </p>
                    </footer>
                </article>
                <!-- END Article -->
            </div>
            <!-- END Column -->
            <!-- Column -->
            <div class="my-1 w-8 lg:my-4 sm:px-5 md:w-1/4">

                <!-- Article -->
                <article class="overflow-hidden rounded-lg shadow-lg">

                    <a href="#">
                        <img alt="Placeholder" class="block h-auto w-full" src="https://www.designingbuildings.co.uk/w/images/5/5e/Carpenter-carving-wood.jpg">
                    </a>

                    <header class="flex items-center justify-between leading-none p-2 md:p-4">
                        <a class="flex items-center no-underline hover:underline text-black" href="#">
                            <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random">
                            <p class="ml-3 font-bold text-md">
                                Johny Boy
                            </p>
                        </a>
                        <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                            <span class="hidden">Like</span>
                            <i class="fa fa-heart"></i>
                        </a>
                    </header>
                    <body class="pl-4 leading-tight">
                        <p class="no-underline font-bold hover:underline text-black" href="#">
                            I will panday your dream dog house
                        </p>
                    </body>
                    <footer class="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 class="text-lg">
                            <a class="no-underline font-bold hover:underline text-black" href="#">
                                Carpentry
                            </a>
                        </h1>
                        <p class="ml-12 pl-4 font-bold text-green-700 text-lg">
                            TF:
                        </p>
                        <p class="text-green-500 text-xl">
                            ₱1,500
                        </p>
                    </footer>
                </article>
                <!-- END Article -->
            </div>
            <!-- END Column -->
            <!-- Column -->
            <div class="my-1 w-8 lg:my-4 sm:px-5 md:w-1/4">

                <!-- Article -->
                <article class="overflow-hidden rounded-lg shadow-lg">

                    <a href="#">
                        <img alt="Placeholder" class="block h-auto w-full" src="https://www.designingbuildings.co.uk/w/images/5/5e/Carpenter-carving-wood.jpg">
                    </a>

                    <header class="flex items-center justify-between leading-none p-2 md:p-4">
                        <a class="flex items-center no-underline hover:underline text-black" href="#">
                            <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random">
                            <p class="ml-3 font-bold text-md">
                                Johny Boy
                            </p>
                        </a>
                        <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                            <span class="hidden">Like</span>
                            <i class="fa fa-heart"></i>
                        </a>
                    </header>
                    <body class="pl-4 leading-tight">
                        <p class="no-underline font-bold hover:underline text-black" href="#">
                            I will panday your dream dog house
                        </p>
                    </body>
                    <footer class="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 class="text-lg">
                            <a class="no-underline font-bold hover:underline text-black" href="#">
                                Carpentry
                            </a>
                        </h1>
                        <p class="ml-12 pl-4 font-bold text-green-700 text-lg">
                            TF:
                        </p>
                        <p class="text-green-500 text-xl">
                            ₱1,500
                        </p>
                    </footer>
                </article>
                <!-- END Article -->
            </div>
            <!-- END Column -->
            <!-- Column -->
            <div class="my-1 w-8 lg:my-4 sm:px-5 md:w-1/4">

                <!-- Article -->
                <article class="overflow-hidden rounded-lg shadow-lg">

                    <a href="#">
                        <img alt="Placeholder" class="block h-auto w-full" src="https://www.designingbuildings.co.uk/w/images/5/5e/Carpenter-carving-wood.jpg">
                    </a>

                    <header class="flex items-center justify-between leading-none p-2 md:p-4">
                        <a class="flex items-center no-underline hover:underline text-black" href="#">
                            <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random">
                            <p class="ml-3 font-bold text-md">
                                Johny Boy
                            </p>
                        </a>
                        <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                            <span class="hidden">Like</span>
                            <i class="fa fa-heart"></i>
                        </a>
                    </header>
                    <body class="pl-4 leading-tight">
                        <p class="no-underline font-bold hover:underline text-black" href="#">
                            I will panday your dream dog house
                        </p>
                    </body>
                    <footer class="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 class="text-lg">
                            <a class="no-underline font-bold hover:underline text-black" href="#">
                                Carpentry
                            </a>
                        </h1>
                        <p class="ml-12 pl-4 font-bold text-green-700 text-lg">
                            TF:
                        </p>
                        <p class="text-green-500 text-xl">
                            ₱1,500
                        </p>
                    </footer>
                </article>
                <!-- END Article -->
            </div>
            <!-- END Column -->
            <!-- Column -->
            <div class="my-1 w-8 lg:my-4 sm:px-5 md:w-1/4">

                <!-- Article -->
                <article class="overflow-hidden rounded-lg shadow-lg">

                    <a href="#">
                        <img alt="Placeholder" class="block h-auto w-full" src="https://www.designingbuildings.co.uk/w/images/5/5e/Carpenter-carving-wood.jpg">
                    </a>

                    <header class="flex items-center justify-between leading-none p-2 md:p-4">
                        <a class="flex items-center no-underline hover:underline text-black" href="#">
                            <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random">
                            <p class="ml-3 font-bold text-md">
                                Johny Boy
                            </p>
                        </a>
                        <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                            <span class="hidden">Like</span>
                            <i class="fa fa-heart"></i>
                        </a>
                    </header>
                    <body class="pl-4 leading-tight">
                        <p class="no-underline font-bold hover:underline text-black" href="#">
                            I will panday your dream dog house
                        </p>
                    </body>
                    <footer class="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 class="text-lg">
                            <a class="no-underline font-bold hover:underline text-black" href="#">
                                Carpentry
                            </a>
                        </h1>
                        <p class="ml-12 pl-4 font-bold text-green-700 text-lg">
                            TF:
                        </p>
                        <p class="text-green-500 text-xl">
                            ₱1,500
                        </p>
                    </footer>
                </article>
                <!-- END Article -->
            </div>
            <!-- END Column -->
            <!-- Column -->
            <div class="my-1 w-8 lg:my-4 sm:px-5 md:w-1/4">

                <!-- Article -->
                <article class="overflow-hidden rounded-lg shadow-lg">

                    <a href="#">
                        <img alt="Placeholder" class="block h-auto w-full" src="https://www.designingbuildings.co.uk/w/images/5/5e/Carpenter-carving-wood.jpg">
                    </a>

                    <header class="flex items-center justify-between leading-none p-2 md:p-4">
                        <a class="flex items-center no-underline hover:underline text-black" href="#">
                            <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random">
                            <p class="ml-3 font-bold text-md">
                                Johny Boy
                            </p>
                        </a>
                        <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                            <span class="hidden">Like</span>
                            <i class="fa fa-heart"></i>
                        </a>
                    </header>
                    <body class="pl-4 leading-tight">
                        <p class="no-underline font-bold hover:underline text-black" href="#">
                            I will panday your dream dog house
                        </p>
                    </body>
                    <footer class="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 class="text-lg">
                            <a class="no-underline font-bold hover:underline text-black" href="#">
                                Carpentry
                            </a>
                        </h1>
                        <p class="ml-12 pl-4 font-bold text-green-700 text-lg">
                            TF:
                        </p>
                        <p class="text-green-500 text-xl">
                            ₱1,500
                        </p>
                    </footer>
                </article>
                <!-- END Article -->
            </div>
            <!-- END Column -->
            <!-- Column -->
            <div class="my-1 w-8 lg:my-4 sm:px-5 md:w-1/4">

                <!-- Article -->
                <article class="overflow-hidden rounded-lg shadow-lg">

                    <a href="#">
                        <img alt="Placeholder" class="block h-auto w-full" src="https://www.designingbuildings.co.uk/w/images/5/5e/Carpenter-carving-wood.jpg">
                    </a>

                    <header class="flex items-center justify-between leading-none p-2 md:p-4">
                        <a class="flex items-center no-underline hover:underline text-black" href="#">
                            <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random">
                            <p class="ml-3 font-bold text-md">
                                Johny Boy
                            </p>
                        </a>
                        <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                            <span class="hidden">Like</span>
                            <i class="fa fa-heart"></i>
                        </a>
                    </header>
                    <body class="pl-4 leading-tight">
                        <p class="no-underline font-bold hover:underline text-black" href="#">
                            I will panday your dream dog house
                        </p>
                    </body>
                    <footer class="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 class="text-lg">
                            <a class="no-underline font-bold hover:underline text-black" href="#">
                                Carpentry
                            </a>
                        </h1>
                        <p class="ml-12 pl-4 font-bold text-green-700 text-lg">
                            TF:
                        </p>
                        <p class="text-green-500 text-xl">
                            ₱1,500
                        </p>
                    </footer>
                </article>
                <!-- END Article -->
            </div>
            <!-- END Column -->
            <!-- Column -->
            <div class="my-1 w-8 lg:my-4 sm:px-5 md:w-1/4">

                <!-- Article -->
                <article class="overflow-hidden rounded-lg shadow-lg">

                    <a href="#">
                        <img alt="Placeholder" class="block h-auto w-full" src="https://www.designingbuildings.co.uk/w/images/5/5e/Carpenter-carving-wood.jpg">
                    </a>

                    <header class="flex items-center justify-between leading-none p-2 md:p-4">
                        <a class="flex items-center no-underline hover:underline text-black" href="#">
                            <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random">
                            <p class="ml-3 font-bold text-md">
                                Johny Boy
                            </p>
                        </a>
                        <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                            <span class="hidden">Like</span>
                            <i class="fa fa-heart"></i>
                        </a>
                    </header>
                    <body class="pl-4 leading-tight">
                        <p class="no-underline font-bold hover:underline text-black" href="#">
                            I will panday your dream dog house
                        </p>
                    </body>
                    <footer class="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 class="text-lg">
                            <a class="no-underline font-bold hover:underline text-black" href="#">
                                Carpentry
                            </a>
                        </h1>
                        <p class="ml-12 pl-4 font-bold text-green-700 text-lg">
                            TF:
                        </p>
                        <p class="text-green-500 text-xl">
                            ₱1,500
                        </p>
                    </footer>
                </article>
                <!-- END Article -->
            </div>
            <!-- END Column -->
            <!-- Column -->
            <div class="my-1 w-8 lg:my-4 sm:px-5 md:w-1/4">

                <!-- Article -->
                <article class="overflow-hidden rounded-lg shadow-lg">

                    <a href="#">
                        <img alt="Placeholder" class="block h-auto w-full" src="https://www.designingbuildings.co.uk/w/images/5/5e/Carpenter-carving-wood.jpg">
                    </a>

                    <header class="flex items-center justify-between leading-none p-2 md:p-4">
                        <a class="flex items-center no-underline hover:underline text-black" href="#">
                            <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random">
                            <p class="ml-3 font-bold text-md">
                                Johny Boy
                            </p>
                        </a>
                        <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                            <span class="hidden">Like</span>
                            <i class="fa fa-heart"></i>
                        </a>
                    </header>
                    <body class="pl-4 leading-tight">
                        <p class="no-underline font-bold hover:underline text-black" href="#">
                            I will panday your dream dog house
                        </p>
                    </body>
                    <footer class="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 class="text-lg">
                            <a class="no-underline font-bold hover:underline text-black" href="#">
                                Carpentry
                            </a>
                        </h1>
                        <p class="ml-12 pl-4 font-bold text-green-700 text-lg">
                            TF:
                        </p>
                        <p class="text-green-500 text-xl">
                            ₱1,500
                        </p>
                    </footer>
                </article>
                <!-- END Article -->
            </div>
            <!-- END Column -->
            <!-- Column -->
            <div class="my-1 w-8 lg:my-4 sm:px-5 md:w-1/4">

                <!-- Article -->
                <article class="overflow-hidden rounded-lg shadow-lg">

                    <a href="#">
                        <img alt="Placeholder" class="block h-auto w-full" src="https://www.designingbuildings.co.uk/w/images/5/5e/Carpenter-carving-wood.jpg">
                    </a>

                    <header class="flex items-center justify-between leading-none p-2 md:p-4">
                        <a class="flex items-center no-underline hover:underline text-black" href="#">
                            <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random">
                            <p class="ml-3 font-bold text-md">
                                Johny Boy
                            </p>
                        </a>
                        <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                            <span class="hidden">Like</span>
                            <i class="fa fa-heart"></i>
                        </a>
                    </header>
                    <body class="pl-4 leading-tight">
                        <p class="no-underline font-bold hover:underline text-black" href="#">
                            I will panday your dream dog house
                        </p>
                    </body>
                    <footer class="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 class="text-lg">
                            <a class="no-underline font-bold hover:underline text-black" href="#">
                                Carpentry
                            </a>
                        </h1>
                        <p class="ml-12 pl-4 font-bold text-green-700 text-lg">
                            TF:
                        </p>
                        <p class="text-green-500 text-xl">
                            ₱1,500
                        </p>
                    </footer>
                </article>
                <!-- END Article -->
            </div>
            <!-- END Column -->
            <!-- Column -->
            <div class="my-1 w-8 lg:my-4 sm:px-5 md:w-1/4">

                <!-- Article -->
                <article class="overflow-hidden rounded-lg shadow-lg">

                    <a href="#">
                        <img alt="Placeholder" class="block h-auto w-full" src="https://www.designingbuildings.co.uk/w/images/5/5e/Carpenter-carving-wood.jpg">
                    </a>

                    <header class="flex items-center justify-between leading-none p-2 md:p-4">
                        <a class="flex items-center no-underline hover:underline text-black" href="#">
                            <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random">
                            <p class="ml-3 font-bold text-md">
                                Johny Boy
                            </p>
                        </a>
                        <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                            <span class="hidden">Like</span>
                            <i class="fa fa-heart"></i>
                        </a>
                    </header>
                    <body class="pl-4 leading-tight">
                        <p class="no-underline font-bold hover:underline text-black" href="#">
                            I will panday your dream dog house
                        </p>
                    </body>
                    <footer class="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 class="text-lg">
                            <a class="no-underline font-bold hover:underline text-black" href="#">
                                Carpentry
                            </a>
                        </h1>
                        <p class="ml-12 pl-4 font-bold text-green-700 text-lg">
                            TF:
                        </p>
                        <p class="text-green-500 text-xl">
                            ₱1,500
                        </p>
                    </footer>
                </article>
                <!-- END Article -->
            </div>
            <!-- END Column -->
            <!-- Column -->
            <div class="my-1 w-8 lg:my-4 sm:px-5 md:w-1/4">

                <!-- Article -->
                <article class="overflow-hidden rounded-lg shadow-lg">

                    <a href="#">
                        <img alt="Placeholder" class="block h-auto w-full" src="https://www.designingbuildings.co.uk/w/images/5/5e/Carpenter-carving-wood.jpg">
                    </a>

                    <header class="flex items-center justify-between leading-none p-2 md:p-4">
                        <a class="flex items-center no-underline hover:underline text-black" href="#">
                            <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random">
                            <p class="ml-3 font-bold text-md">
                                Johny Boy
                            </p>
                        </a>
                        <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                            <span class="hidden">Like</span>
                            <i class="fa fa-heart"></i>
                        </a>
                    </header>
                    <body class="pl-4 leading-tight">
                        <p class="no-underline font-bold hover:underline text-black" href="#">
                            I will panday your dream dog house
                        </p>
                    </body>
                    <footer class="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 class="text-lg">
                            <a class="no-underline font-bold hover:underline text-black" href="#">
                                Carpentry
                            </a>
                        </h1>
                        <p class="ml-12 pl-4 font-bold text-green-700 text-lg">
                            TF:
                        </p>
                        <p class="text-green-500 text-xl">
                            ₱1,500
                        </p>
                    </footer>
                </article>
                <!-- END Article -->
            </div>
            <!-- END Column -->
            
        </div>
        <div class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div class="flex-1 flex items-center justify-between sm:hidden">
                <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500">
                Previous
                </a>
                <a href="#" class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500">
                Next
                </a>
            </div>
            <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                <p class="text-sm text-gray-700">
                    Showing
                    <span class="font-medium">1</span>
                    to
                    <span class="font-medium">10</span>
                    of
                    <span class="font-medium">97</span>
                    results
                </p>
                </div>
                <div>
                <nav class="relative z-0 inline-flex shadow-sm -space-x-px" aria-label="Pagination">
                    <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span class="sr-only">Previous</span>
                    <!-- Heroicon name: chevron-left -->
                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    </a>
                    <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                    1
                    </a>
                    <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                    2
                    </a>
                    <a href="#" class="hidden md:inline-flex relative items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                    3
                    </a>
                    <span class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                    ...
                    </span>
                    <a href="#" class="hidden md:inline-flex relative items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                    8
                    </a>
                    <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                    9
                    </a>
                    <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                    10
                    </a>
                    <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span class="sr-only">Next</span>
                    <!-- Heroicon name: chevron-right -->
                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                    </svg>
                    </a>
                </nav>
                </div>
            </div>
            </div>
    </div>
</template>
<style scoped>

.toggle__dot {
  top: -.25rem;
  left: -.25rem;
  transition: all 0.3s ease-in-out;
}

input:checked ~ .toggle__dot {
  transform: translateX(100%);
  background-color: #48bb78;
}

</style>
<script>
    import JetApplicationLogo from '@/Jetstream/ApplicationLogo'

    export default {
        components: {
            JetApplicationLogo,
        },

        data() {
            return {
                toggleActive: false,
            };
        },
    }
</script>
