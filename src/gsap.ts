import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from '@studio-freight/lenis';

gsap.registerPlugin(ScrollTrigger);

// ✅ Lenis smooth scrolling
const lenis = new Lenis({
  duration: 1.2,
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

function raf(time: number) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

lenis.on('scroll', ScrollTrigger.update);

ScrollTrigger.defaults({
  markers: false,
  toggleActions: "play none none none",
});

// ✅ Main animation timeline
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  // Single loader animation sequence
  const mainTL = gsap.timeline();

  mainTL
    .to("#loader-box", {
      duration: 1,
      delay: 0.5,
      ease: "power2.out",
    })
    .to("#loader-box", {
      duration: 1,
      opacity: 0,
      ease: "power2.inOut",
    })
    .to("#loader", {
      duration: 1,
      y: "-100%",
      ease: "power2.inOut",
      onComplete: () => {
        if (loader) loader.style.display = "none";
      },
    })
    .to("#main-content", {
      duration: 0.1,
      opacity: 1,
      ease: "power2.out",
    })
    .to(["#app",], {
      duration: 1,
      opacity: 1,
      y: 10,
      stagger: 0.2,
      ease: "power3.out",
    })
    .from(["#step1", "#step11"], {
      duration: 1,
      opacity: 0,
      x: -100,
      stagger: 0.2,
      ease: "power3.out",
    })
    .from("#step2", {
      duration: 2,
      opacity: 0,
      x: 100,
      ease: "power3.out",
    }, "-=0.4");

  // Hero section animations
  gsap.timeline({ delay: 3.5 })
    .from("#hero-text", {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })
    .from("#hero-video", {
      x: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.7");

  // Wave text animation
  gsap.to(".wave-text ", {
    y: -15,
    duration: 0.6,
    stagger: 0.1,
    repeat: -1,
    yoyo: true,
    ease: "power2.inOut"
  });

  // Typewriter effect
  const typewriterElements = document.querySelectorAll(".typewriter");
  typewriterElements.forEach((element, index) => {
    (element as HTMLElement).style.width = "0";
    (element as HTMLElement).style.overflow = "hidden";
    (element as HTMLElement).style.whiteSpace = "nowrap";
    gsap.to(element, {
      width: (element as HTMLElement).scrollWidth + "px",
      duration: 2,
      delay: 3 + (index * 0.5),
      ease: "power2.inOut"
    });
  });

  // Floating background elements
  gsap.to(".animate-float", {
    y: -20,
    x: 15,
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

  gsap.to(".animate-float-delayed", {
    y: 15,
    x: -20,
    duration: 5,
    delay: 1,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

  // ScrollTrigger animations
  document.querySelectorAll(".fade-in").forEach((el) => {
    gsap.from(el as HTMLElement, {
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
    });
  });

  // Text animations
  ["#text-1", "#text-3"].forEach(selector => {
    gsap.from(selector, {
      scrollTrigger: {
        trigger: selector,
        start: "top 80%",
      },
      duration: 1,
      opacity: 0,
      y: 30,
      ease: "power2.out",
    });
  });

  gsap.from("#text-2 > div", {
    scrollTrigger: {
      trigger: "#text-2",
      start: "top 80%",
    },
    duration: 0.8,
    opacity: 0,
    y: 30,
    stagger: 0.15,
    ease: "power2.out",
  });

  document.querySelectorAll(".text-4").forEach((el) => {
    gsap.from(el as HTMLElement, {
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
      },
      duration: 1.5,
      opacity: 0,
      scale: 0.9,
      ease: "power2.out",
    });
  });

  // Section reveal animations
  const sections = ["#why-choose-us", "#case-studies", "#services-section"];
  sections.forEach(selector => {
    gsap.from(selector, {
      scrollTrigger: {
        trigger: selector,
        start: "top 85%",
      },
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    });
  });

  // Feature cards
  gsap.from("#features-grid > div", {
    y: 60,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#features-grid",
      start: "top 75%"
    }
  });

  // Case studies
  gsap.from("#case-studies-grid > div", {
    y: 80,
    opacity: 0,
    duration: 1,
    stagger: 0.15,
    scrollTrigger: {
      trigger: "#case-studies-grid",
      start: "top 70%"
    }
  });

  // Title animations
  const titles = ["#why-title", "#case-studies-title"];
  titles.forEach(selector => {
    gsap.from(`${selector} h2`, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: selector,
        start: "top 80%"
      }
    });
    
    gsap.from(`${selector} p`, {
      y: 20,
      opacity: 0,
      duration: 0.6,
      delay: 0.2,
      scrollTrigger: {
        trigger: selector,
        start: "top 80%"
      }
    });
  });

  // Navigation background on scroll
  
});
  
