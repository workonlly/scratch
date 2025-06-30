import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

window.addEventListener("DOMContentLoaded", () => {
  const tl = gsap.timeline();

  // 3D rotation of the loader box
  tl.to("#loader-box", {
    duration: 1.5,
    rotationY: 270,
    delay: 0.5,
    opacity:0,
    ease: "power2.inOut",
  })

  // Fade and hide the loader
  .to("#loader", {
    duration: 0.1,
    opacity: 0,
    ease: "power1.out",
    onComplete: () => {
      const loader = document.getElementById("loader");
      if (loader) loader.style.display = "none";
    },
  })

  // Reveal main content
  .to("#main-content", {
    duration: 0.5,
    opacity: 1,
    y: 10,
    ease: "power2.out",
  });

  tl.from("#step1", {
    duration: 0.5,
    opacity: 0,
    x: -100,
    ease: "power2.out",
  });
  tl.from("#step11", {
    duration: 0.4,
    opacity: 0,
    x: -100,
    ease: "power2.out",
  })
  .from("#step2", {
    duration: 0.5,
    opacity: 0,
    x: 100,
    ease: "power2.out",
  })
  .from("#slide-1", {
    duration: 0.1,
    opacity: 0,
    y: -100,
    ease: "power4.out",
  })
  .from("#slide-2", {
    duration: 0.2,
    opacity: 0,
    y: -100,
    ease: "power4.out",
  })
  .from("#slide-3", {
    duration: 0.3,
    opacity: 0,
    y: -100,
    ease: "power4.out",
  });
});

window.addEventListener("load", () => {
  document.querySelectorAll(".fade-in").forEach((el) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none",
        markers: false,
      }
    });

    tl.from(el, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out"
    });
  });

  gsap.from("#text-1", {
    duration: 1.2,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#text-1",
      start: "top bottom",
      toggleActions: "play none none none",
      markers: false,
    }
  });

  gsap.from("#text-2 > div", {
    duration: 1.2,
    opacity: 0,
    y: 30,
    stagger: 0.15,
    ease: "power2.out",
    clearProps: "opacity,transform",
    scrollTrigger: {
      trigger: "#text-2",
      start: "top bottom",
      toggleActions: "play none none none",
      markers: false,
    }
  });

  gsap.from("#text-3", {
    duration: 1.2,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#text-3",
      start: "top bottom",
      toggleActions: "play none none none",
      markers: false,
    }
  });

  // Animate each .text-4 grid item individually, only opacity and scale
  document.querySelectorAll(".text-4").forEach((el) => {
    (el as HTMLElement).style.willChange = "opacity, transform";
    gsap.from(el, {
      duration: 1.2,
      opacity: 0,
      scale: 0.95,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        toggleActions: "play none none none",
        markers: false,
      }
    });
  });
});


