import { gsap } from "gsap";

let hideTimeout = null;

export function initNavbarAnimation(navSelector = "nav") {
  const nav = document.querySelector(navSelector);
  if (!nav) return;

  let lastScrollY = window.scrollY;

  function handleScroll() {
    const currentScroll = window.scrollY;

    if (currentScroll > 60 && currentScroll > lastScrollY) {
      gsap.to(nav, {
        y: "-500px",
        duration: 0.5,
        ease: "power2.out",
      });

      clearTimeout(hideTimeout);
      hideTimeout = setTimeout(() => {
        gsap.to(nav, {
          y: "0%",
          duration: 0.6,
          ease: "power3.out",
        });
      }, 1000);
    }

    lastScrollY = currentScroll;
  }

  window.addEventListener("scroll", handleScroll);
}
