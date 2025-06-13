var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function(dets) {
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
    blur.style.left = dets.x -200 + "px";
    blur.style.top = dets.y -200 + "px";
})


Shery.makeMagnet("#nav h4");

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