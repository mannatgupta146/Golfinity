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
