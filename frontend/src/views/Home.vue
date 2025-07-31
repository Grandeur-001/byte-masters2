<script setup>
import Hero from '../components/Hero.vue'
import Headings from '@/components/Headings.vue';
import ServiceSection from '@/components/sections/ServiceSection.vue';
import ProjectSection from '@/components/sections/ProjectSection.vue';
import { Spacing1, Spacing2 } from '@/components/styles/Spacing.styled';

import { onMounted } from 'vue';
import { animateFloatIn } from '@/utils/onScrollAnimation';
onMounted(() =>{
    animateFloatIn();
});


</script>

<template>
  <div>
    <Hero />

    <Spacing2/>


    <!-- SERVICE SECTINON -->
    <ServiceSection/>

    <Spacing1/>
    <!-- PROJECT SECTINON -->
    <ProjectSection/> 

  </div>
</template>
