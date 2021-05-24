var tl = new TimelineMax({onUpdate:updatePercentage});
const container = new ScrollMagic.Controller();

tl.from('.headline', .5, {y:-200, opacity: 0});
tl.from('.btn', .3, {width:0, opacity: 0});
tl.from('.image', 1, {x:-200, opacity: 0}, "=-.3");
tl.from('.text-p', 1, {x:-200, opacity: 0},);

const scene2 = new ScrollMagic.Scene({
            triggerElement: ".third",
            triggerHook: "onLeave",
            duration: "100%",
})
  .setPin(".third")
  .setTween(tl)
		.addTo(container);

function updatePercentage() {
  //percent.innerHTML = (tl.progress() *100 ).toFixed();
  tl.progress();
  console.log(tl.progress());
};
