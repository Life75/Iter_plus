<template>
    <div>
        <nav
            class="shadow-lg rounded-lg  py-2.5 bg-purple-300 bg-transparent bg-opacity-10 backdrop-blur-lg"
        >
            <div
                class="container flex flex-wrap justify-between items-center mx-auto "
            >
                <a href="#" class="flex items-center">
                    <span
                        class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
                        >Iter</span
                    >
                </a>
                
                <div class="flex">
                <div
                    class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
                    id="mobile-menu-4"
                >
                    <ul
                        class="flex m- md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"
                    >
                    
                        <li>
                            <a
                                href="#"
                                class="block  pr-4 pl-3 text-white rounded md:bg-transparent md:p-0 dark:text-white"
                                aria-current="page"
                                >Home</a
                            >
                        </li>
                        <li>
                            <a
                                href="#"
                                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                >About</a
                            >
                        </li>
                        <li>
                            <a
                                href="#"
                                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0  md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                >Goals</a
                            >
                        </li>
                        
                    </ul>
                </div>
                  
                   
                </div>

            </div>
        </nav>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'NavBar',
    setup() {
        console.log('mounted')
    },
})
</script>

<style></style>
