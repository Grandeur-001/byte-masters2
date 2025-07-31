import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function animateFloatIn(selector = '.float-in'){
    gsap.utils.toArray(selector).forEach((element) => {
        gsap.from(element, {
            y: 50,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',            
            },
        });
    });
}
 