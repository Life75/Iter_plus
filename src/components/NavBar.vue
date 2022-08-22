<template>
    <div class="shadow-lg">
        <el-menu
            :default-active="activeIndex"
            class="bg-black"
            mode="horizontal"
            :ellipsis="false"
            @select="handleSelect"
            style="background-color: transparent; border: 0;"
            active-text-color="purple"
        >
            <el-menu-item index="0" style="background-color: transparent; font-size: large;">
           <Ship style="width: 1em; height: 1em; margin-right: 8px" /> 
            <p class="">Iter</p>                     
            </el-menu-item>
            <div class="flex-grow" />
            <el-menu-item index="1" style="">Home</el-menu-item>
            <el-menu-item index="2">About</el-menu-item>
        </el-menu>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ref } from 'vue'

export default defineComponent({
    name: 'NavBar',
    setup() {
        const activeIndex = ref('1')
        const handleSelect = (key: string, keyPath: string[]) => {
            console.log(key, keyPath)
        }

        return {
            activeIndex,
            handleSelect,
        }
    },
})

/*
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
*/
</script>

<style></style>
