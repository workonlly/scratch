import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

window.addEventListener("DOMContentLoaded", () => {
  const tl = gsap.timeline();

  // 3D rotation of the loader box
  tl.to("#loader-box", {
    duration: 1.5,
    delay:0.5,
    rotationY: 270,
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
  })
  
  tl.from("#step1", {
    duration: 0.5,
    opacity: 0,
    x: -100, // comes from left
    ease: "power2.out",
  })
  tl.from("#step11", {
    duration: 0.4,
    opacity: 0,
    x: -100, // comes from left
    ease: "power2.out",
  })
  .from("#step2", {
    duration: 0.5,
    opacity: 0,
    x: 100, // comes from right
    ease: "power2.out",
  })
  .from("#slide-1", {
    duration: 0.1,
    opacity: 0,
    y: -100, // comes from right
    ease: "power4.out",
  })
  .from("#slide-2", {
    duration: 0.2,
    opacity: 0,
    y: -100, // comes from right
    ease: "power4.out",
  })
  .from("#slide-3", {
    duration: 0.3,
    opacity: 0,
    y: -100, // comes from right
    ease: "power4.out",
  })
});



window.addEventListener("load", () => {
  document.querySelectorAll(".fade-in").forEach((el) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top 85%", // animation starts when element enters viewport
        toggleActions: "play none none none",
        markers: false,
      }
    });

    tl.from(el, {
      opacity: 0,       // keep this if you want slight fading effect, or remove
      x: -100,           // from left
      y: 50,            // from bottom
      duration: 1,
      ease: "power2.out"
    })
    
    
  });
  gsap.from("#text-1", {
      duration: 2,
      opacity: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#text-1",
        start: "top bottom", // animation starts when element enters viewport
        toggleActions: "play none none none",
        markers: false,
      }
    });
  gsap.from("#text-2", {
      duration: 2,
      x:100,
      y: 50,            // from bottom
      stagger: 0.2, // stagger the animation for each child element
      opacity: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#text-2",
        start: "top bottom", // animation starts when element enters viewport
        toggleActions: "play none none none",
        markers: false,
      }
    });

      gsap.from("#text-3", {
      duration: 2,
      opacity: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#text-3",
        start: "top bottom", // animation starts when element enters viewport
        toggleActions: "play none none none",
        markers: false,
      }
    });
      gsap.from(".text-4", {
      duration: 2,
      opacity: 0,
      scale: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".text-4",
        start: "top bottom", // animation starts when element enters viewport
        toggleActions: "play none none none",
        markers: false,
      }
    });

});


