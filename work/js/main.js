var tl = new TimelineMax({ onUpdate: updatePercentage });
const controller = new ScrollMagic.Controller();

// tl.from('blockquote', .5, { x: 200, opacity: 0 });
// tl.from('#office', 1, { x: -200, opacity: 0 });
tl.from('.home-text', 1, { x: 100, y: -30 });
tl.to('.home-text', 10, { y: 0, scale: 5, opacity: 0 });
tl.to('.fold', 10, { display: "block", scale: 1.2, opacity: 100, width: "100%", height: 1000 });

const scene = new ScrollMagic.Scene({
        triggerElement: ".home",
        triggerHook: "onLeave",
        duration: "100%",
    })
    .setPin(".home")
    .setTween(tl)
    .addTo(controller);

function updatePercentage() {
    // percent.innerHTML = (tl.progress() * 100).toFixed();
    tl.progress();
    console.log(tl.progress());
};