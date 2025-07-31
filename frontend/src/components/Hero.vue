<script setup>
    import { HERO_CONTENT } from "./constants/HeroConstants";
    import { onMounted } from "vue";
    import { createFloatingPapers, initParticles } from "@/utils/heroAnimation";
    import { animateText } from "@/utils/heroTextAnimation";
    import FlipCards from "@/components/FlipCards.vue";
    import PryBtn from "./PryBtn.vue";
    import SecBtn from "./SecBtn.vue";

    onMounted(() => {
        initParticles();
        createFloatingPapers();

        const textElement = document.querySelector('.text-animation');
        const texts = [
          HERO_CONTENT.mainHeading1,
          HERO_CONTENT.mainHeading2,
          HERO_CONTENT.mainHeading3,
          HERO_CONTENT.mainHeading4,
        ];

        animateText(textElement, texts);
    });

</script>
<template>
  <section class=" w-full pt-44 lg:pt-44 relative overflow-hidden bg-[var(--bg-black)]">
    <div id="particles-canvas" class="absolute inset-0 z-0"></div>
    <div id="floating-papers" class="absolute  top-0 left-0 w-full h-full overflow-hidden inset-0 z-10 pointer-events-none"></div>

    <div class=" max-w-7xl mx-auto px-4 flex flex-col items-center text-center relative z-20">
      <div class="mb-8 border leading-loose border-gray-500 px-3 py-2 rounded-full text-xs">
        {{ HERO_CONTENT.badgeText }}
      </div>

      <div class="text-animation leading-[50px] text-4xl md:text-[3.8rem] md:leading-[70px] md:w-[80%] my-4 font-bold tracking-tighter bg-gradient-to-b from-neutral-50 via-neutral-300 to-neutral-700 bg-clip-text text-transparent HeroTitle">
        {{ HERO_CONTENT.mainHeading1 }}
        <div class="HeroTitle">
          {{ HERO_CONTENT.mainHeading2 }}
        </div>
      </div>

      <div class="mt-6 font-regular md:text-[1.25rem] text-[var(--text-secondary)] max-w-xl">
        At Bonasera Konnect, we don’t just build software — we engineer digital experiences. From full-stack web solutions to intuitive UI/UX design, we help startups and enterprises unlock growth with innovation that matters.
      </div>
      <div class="flex w-[70%] justify-center  flex-col gap-3 pt-6 sm:flex-row md2:w-auto">
        <PryBtn style="padding: 0;">
          Get Started
        </PryBtn>

        <SecBtn>
          Contact us
        </SecBtn>
      </div>
      
    </div>

    <div class="absolute right-4 sm:right-6 lg:right-[50px] top-[35vh] sm:top-[40vh] md:top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 sm:gap-5 lg:gap-6 z-40">
      <div class="flex flex-col gap-4 sm:gap-6 lg:gap-[42px]">

        <!-- Twitter -->
        <a
          href="https://x.com/pxxl_space"
          target="_blank"
          rel="noopener noreferrer"
          class="flex flex-col items-center gap-1 sm:gap-2 text-primary hover:text-white transition-all group"
        >
          <span
            class="text-[8px] sm:text-[9px] lg:text-sm whitespace-nowrap text-white 
                  [writing-mode:vertical-lr] transform rotate-180"
          >
            Twitter
          </span>
          <svg
            viewBox="0 0 512 512"
            class="w-3 h-3 sm:w-4 sm:h-4 lg:w-4 lg:h-4"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="var(--accent-red)" />
                <stop offset="100%" stop-color="var(--accent-orange)" />
              </linearGradient>
            </defs>

            <path
              d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
              fill="url(#accentGradient)"
            ></path>
          </svg>

        </a>

        <!-- Reddit -->
        <a
          href="https://reddit.com"
          target="_blank"
          rel="noopener noreferrer"
          class="flex flex-col items-center gap-1 sm:gap-2 text-primary hover:text-white transition-all group"
        >
          <span
            class="text-[8px] sm:text-[9px] lg:text-sm whitespace-nowrap text-white 
                  [writing-mode:vertical-lr] transform rotate-180"
          >
            Reddit
          </span>
          <svg
            stroke-width="0"
            viewBox="0 0 512 512"
            class="w-3 h-3 sm:w-4 sm:h-4 lg:w-4 lg:h-4"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="var(--accent-red)" />
                <stop offset="100%" stop-color="var(--accent-orange)" />
              </linearGradient>
            </defs>
            <path fill="url(#accentGradient)" d="M0 256C0 114.6 114.6 0 256 0S512 114.6 512 256s-114.6 256-256 256L37.1 512c-13.7 0-20.5-16.5-10.9-26.2L75 437C28.7 390.7 0 326.7 0 256zM349.6 153.6c23.6 0 42.7-19.1 42.7-42.7s-19.1-42.7-42.7-42.7c-20.6 0-37.8 14.6-41.8 34c-34.5 3.7-61.4 33-61.4 68.4l0 .2c-37.5 1.6-71.8 12.3-99 29.1c-10.1-7.8-22.8-12.5-36.5-12.5c-33 0-59.8 26.8-59.8 59.8c0 24 14.1 44.6 34.4 54.1c2 69.4 77.6 125.2 170.6 125.2s168.7-55.9 170.6-125.3c20.2-9.6 34.1-30.2 34.1-54c0-33-26.8-59.8-59.8-59.8c-13.7 0-26.3 4.6-36.4 12.4c-27.4-17-62.1-27.7-100-29.1l0-.2c0-25.4 18.9-46.5 43.4-49.9l0 0c4.4 18.8 21.3 32.8 41.5 32.8zM177.1 246.9c16.7 0 29.5 17.6 28.5 39.3s-13.5 29.6-30.3 29.6s-31.4-8.8-30.4-30.5s15.4-38.3 32.1-38.3zm190.1 38.3c1 21.7-13.7 30.5-30.4 30.5s-29.3-7.9-30.3-29.6c-1-21.7 11.8-39.3 28.5-39.3s31.2 16.6 32.1 38.3zm-48.1 56.7c-10.3 24.6-34.6 41.9-63 41.9s-52.7-17.3-63-41.9c-1.2-2.9 .8-6.2 3.9-6.5c18.4-1.9 38.3-2.9 59.1-2.9s40.7 1 59.1 2.9c3.1 .3 5.1 3.6 3.9 6.5z"></path>
          </svg>
        </a>

        <!-- Discord -->
        <a
          href="https://discord.com"
          target="_blank"
          rel="noopener noreferrer"
          class="flex flex-col items-center gap-1 sm:gap-2 text-primary hover:text-white transition-all group"
        >
          <span
            class="text-[8px] sm:text-[9px] lg:text-sm whitespace-nowrap text-white 
                  [writing-mode:vertical-lr] transform rotate-180"
          >
            Discord
          </span>
          <svg
            stroke-width="0"
            viewBox="0 0 640 512"
            class="w-3 h-3 sm:w-4 sm:h-4 lg:w-4 lg:h-4"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="var(--accent-red)" />
                <stop offset="100%" stop-color="var(--accent-orange)" />
              </linearGradient>
            </defs>
            <path fill="url(#accentGradient)" d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path>
          </svg>
        </a>

      </div>
    </div>
  </section>

</template>

