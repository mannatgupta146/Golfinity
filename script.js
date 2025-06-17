Shery.mouseFollower({
  skew: true,
  skewFactor: 0.25,
  ease: "cubic-bezier(0.25, 1, 0.5, 1)",
  duration: 0.6,
  scale: 1.2,
  delay: 0.1,
  hideNativeCursor: true
});


Shery.makeMagnet("#nav h4" );

gsap.to("#nav",{
    backgroundColor: "#000",
    duration: 0.5,
    height: "100px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "bottom -11%",
        scrub: 1
    }
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -50%",
        end: "top -100%",
        scrub: 2
    }
})

gsap.from("#about img, #aboutus", {
    y: 90,
    opacity: 0,
    duration: 1,
    stagger: 0.5,
    scrollTrigger: {
        trigger: "#about",
        scroller: "body",
        start: "top 80%",
        end: "top 50%",
        scrub: 2
    }
})

document.querySelectorAll(".card").forEach((card) => {
  gsap.fromTo(card, 
    { "--scale": 0.8, opacity: 0 },
    { 
      "--scale": 1,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: card,
        scroller: "body",
        start: "top 70%",
        end: "top 50%",
        scrub: 2
      }
    }
  );
});


gsap.from("#colon1", {
    x: -90,
    y: -90,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 60%",
        end: "top 50%",
        scrub: 4
    }
})

gsap.from("#colon2", {
    x: 90,
    y: 90,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 60%",
        end: "top 50%",
        scrub: 4
    }
})

gsap.from("#page4 h1",{
    y: 50,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        start: "top 75%",
        end: "top 75%",
        scrub: 4
    }
})