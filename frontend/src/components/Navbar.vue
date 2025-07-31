<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

import { RouterLink, RouterView } from 'vue-router'
import { MobileMenu, Nav } from './styles/Navbar.styled'
import { FlexStyle1 } from './styles/Flex.styled'
import { NavLogoWrapper } from './styles/Logo.styled'
import { toast, modal } from '@/utils/toast.js'
import MenuIcon from './icons/MenuIcon.vue'
import CloseIcon from './icons/CloseIcon.vue'
import PryBtn from '@/components/PryBtn.vue'
import SecBtn from '@/components/SecBtn.vue'

import { initNavbarAnimation } from '@/utils/navbarAnimation'

const router = useRouter()

const isMenuVisible = ref(false)
function toggleMenu() {
  isMenuVisible.value = !isMenuVisible.value
}

onMounted(() => {
//   initNavbarAnimation()
})
</script>


<template>
    <!-- descktop menu -->
    <Nav class="nav fixed z-[99999] top-[25px] shadow-md w-[90%] m-auto left-0 right-0 h-[70px] border-[1px] rounded-[10px] border-[var(--border-gray)] bg-[var(--bg-black)] pb-[0px] flex items-center" >
        <div class="h-full w-full flex items-center justify-between px-5 ">
            <NavLogoWrapper>
                <RouterLink to="/">
                    <img src="../assets/images/bonasera-logo.png" alt="" srcset="">
                </RouterLink>
            </NavLogoWrapper>
            <ul class="hidden md2:flex">
                <li>
                    <RouterLink to="/">Home</RouterLink>
                </li>  

                <li>
                    <RouterLink to="/about">About</RouterLink>
                </li>   

                <li>
                    <RouterLink to="/blog">Blog</RouterLink>
                </li> 

                <li>
                    <RouterLink to="/services">Services</RouterLink>
                </li>  

                <li>
                    <RouterLink to="/github">Github</RouterLink>
                </li>  

            
            </ul>
            <div class="hidden  items-center md2:flex gap-4 ">
                <PryBtn :size="sm" to="/">
                    <RouterLink class="w-full h-full" style="width: 100%; height: 100%;" to="/contact">Get Started</RouterLink>
                </PryBtn>
                <SecBtn :size="sm" to="/">
                    <RouterLink class="w-full h-full" style="width: 100%; height: 100%;" to="/contact">Contact us</RouterLink>
                </SecBtn>
            </div>
            
            <button v-if="!isMenuVisible" class="block md2:hidden" @click="toggleMenu">
                <MenuIcon/>
            </button>
            <button v-if="isMenuVisible" class="block md2:hidden" @click="toggleMenu">
                <CloseIcon/>
            </button>
        </div>
    </Nav>

    <!-- mobile menu -->
    <MobileMenu style='transition:all 0.5s ease' :class="{' pointer-events-auto h-auto opacity-1 visible translate-y-0' : isMenuVisible, ' pointer-events-none z-[999] h-0 opacity-0 invisible translate-y-5': !isMenuVisible}" class="z-[999] fixed w-[90%] m-auto top-[6.4rem] pointer-events-auto h-auto translate-y-0 pointer-events-none z-[999] h-0  left-0 right-0 md2:hidden bg-neutral-900/60 backdrop-blur-md border border-[var(--border-gray)] p-4 rounded-[10px] mt-2">
        <div className="flex flex-col space-y-6">
            <li>
                <RouterLink to="/">Home</RouterLink>
            </li>  

            <li>
                <RouterLink to="/about">About</RouterLink>
            </li>   

            <li>
                <RouterLink to="/blog">Blog</RouterLink>
            </li> 

            <li>
                <RouterLink to="/services">Services</RouterLink>
            </li>  

            <li>
                <RouterLink to="/github">Github</RouterLink>
            </li> 

            <div class="flex gap-4 flex-col">
                <RouterLink to="/about">
                    <PryBtn  >Get Started</PryBtn>
                </RouterLink>
                <RouterLink to="/contact">
                    <SecBtn >Contact us</SecBtn>
                </RouterLink>
            </div>
        </div>
    </MobileMenu>
  <RouterView />

</template>
