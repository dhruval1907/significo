// home section me humne phele video ko animate kiya with scroolltrigger and text ko bhi same effect jana tha to humne usko timeline me dal diya jisse wo dono euqal me chale  

var tl = gsap.timeline({
     scrollTrigger: {
        trigger: ".home",
        pin: true,
        markers: true,
        start: "top top",
        bottom: "bottom top",
        scrub: 2
    },
})

gsap.set(".slidesm", { scale: 3 }) // ye kar rha hai jo humne back me jo text liya uska style me jake uska scale uska scale dega

tl.to(".vdodiv", {
    '--clip': "0%",
    ease: Power2,
}, 'a')
// or isme dono paramater same diye kyuki timeline ek ke bad wo ek chalyega to humne usko same parameter diye to wo ek sath chalega 
tl.to(".slidesm", {
    scale: 1,
    ease: Power2,
}, 'a')