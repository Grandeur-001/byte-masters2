import { gsap } from "gsap";

export function animateText(element, texts, interval = 4){
    let currentIndex = 0;

    function animate(){
        gsap.to(element, {
            y: 20,
            opacity: 0,
            duration: 0.5, 
            onComplete: () => {
                element.textContent = texts[currentIndex];
                gsap.to(element, {
                    y: 0,
                    opacity: 1,
                    duration: 0.5
                });
                currentIndex = (currentIndex + 1) % texts.length;
            }
        })
    }
    animate();
    gsap.to({}, {duration: interval, repeat: - 1, onRepeat: animate})
}