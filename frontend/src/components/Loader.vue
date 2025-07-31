<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScalingSquaresSpinner, BreedingRhombusSpinner } from 'epic-spinners';

const loader = ref(null);

onMounted(() => {
  setTimeout(() => {
    gsap.to(loader.value, {
      opacity: 0,
      duration: 0.8, 
      onComplete: () => {
        loader.value.style.display = 'none';
      },
    });
  }, 5000);
});
</script>

<template>
  <div ref="loader" class="fixed top-0 left-0 w-full h-full bg-[var(--bg-dark)] flex items-center justify-center z-[9999999]">
    <ScalingSquaresSpinner :animation-duration="1250" :size="65" color="var(--accent-orange)" />
  </div>
</template>

