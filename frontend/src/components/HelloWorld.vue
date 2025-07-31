<script setup>
import styled, { tw } from '@vue-styled-components/core'
import { toast, modal } from '@/utils/toast.js'
import SecBtn from '@/components/SecBtn.vue'
import PryBtn from '@/components/PryBtn.vue'

const showToast = () => {
  toast.success('Item saved successfully!')
}

const showModal = () => {
  modal.success('Success', 'Your profile has been updated.')
}
const StyledButton = styled.button`
  ${tw`
     py-3 px-5 rounded-lg bg-blue-500 shadow-lg shadow-blue-500/50 cursor-pointer hover:bg-blue-600 transition-colors duration-300
    flex items-center justify-center
  `}
`


defineProps({
  msg: { 
    type: String,
    required: true,
  },
  
})
</script>

<template>
  <div class="greetings">
    <h1 class="green" >{{ msg }}</h1> 
    <h3>
      You’ve successfully created a project with
      <a class="text-blue-500 hover:underline" href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
    <br>
    <StyledButton @click="showToast" class="cursor-pointer">
        <span class="text-white">Click me!</span>
    </StyledButton>
    <br>

    <StyledButton @click="showModal" class="cursor-pointer">
      <span class="text-white">Click me!</span>
    </StyledButton>

      <PryBtn class="w-full" size="sm" @click="showModal">
        Primary Button
      </PryBtn>
      <SecBtn>
        Secondary Button
      </SecBtn>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
