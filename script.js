function homepage() {
    // home section me humne phele video ko animate kiya with scroolltrigger and text ko bhi same effect jana tha to humne usko timeline me dal diya jisse wo dono euqal me chale  

    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".home",
            pin: true,
            // markers: true,
            start: "top top",
            bottom: "bottom bottom",
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
    // background me jo text hai unko animation dene ke liye usko bhi flg diya takib dono sath me chale
    tl.to(".left", {
        xPercent: -10,
        ease: Power4,
        stagger: .03,
    }, 'b')
    tl.to(".right", {
        xPercent: 10,
        ease: Power4,
        stagger: .03,
    }, 'b')

}
function realpage() {
    gsap.to(".slides", {
        scrollTrigger: {
            trigger: ".real",
            pin: true,
            // markers: true,
            start: "top top",
            bottom: "bottom top",
            scrub: 1
        },
        xPercent: -200,
        ease: Power4,
    })
}

function pAnimatepage() {
    var clutter = ""
    document.querySelector(".textpara").textContent.split("").forEach(function (e) {
        if (e === " ") clutter += `<span>${e}</span>`
        clutter += `<span>${e}</span>`

    })
    document.querySelector(".textpara").innerHTML = clutter

    gsap.set(".textpara span", { opacity: .1 })
    gsap.to(".textpara span", {
        scrollTrigger: {
            trigger: ".para",
            start: "top 0%",
            end: "bottom 100%",
            scrub: 2,
            // markers:true,
            color: "blue"
        },
        opacity: 1,
        stagger: .03,
        ease: Power4
    })
    var clutter1 = ""
    document.querySelector(".textpara1").textContent.split("").forEach(function (elem) {
        if (elem === " ") clutter += `<span>${elem}</span>`
        clutter1 += `<span>${elem}</span>`

    })

    // console.log( document.querySelector(".textpara1").textContent.split(""));


    document.querySelector(".textpara1").innerHTML = clutter1

    gsap.set(".textpara1 span", { opacity: .1 })
    gsap.to(".textpara1 span", {
        scrollTrigger: {
            trigger: ".para",
            start: "top 0%",
            end: "bottom 100%",
            scrub: 2,
            // markers:true,
            color: "blue"
        },
        opacity: 1,
        stagger: .03,
        ease: Power4
    })




}
function locomotive() {

    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}
function capsulesAnimate() {
    gsap.to(".capsule:nth-child(2)", {
        scrollTrigger: {
            trigger: ".capsules",
            start: "top 70%",
            end: "bottom bottom",
            // markers:true,
            scrub: 1
        },
        y: 0,
        ease: Power4
    })
}
function colorAnimate() {

    document.querySelectorAll(".section").forEach(function (e) {
        ScrollTrigger.create({
            trigger: e,
            start: "top 50%",
            end: "bottom 50%",
            // markers: true,
            onEnter: function () {
                document.body.setAttribute("theme", e.dataset.color)
            },
            onEnterBack: function () {
                document.body.setAttribute("theme", e.dataset.color)
            }
        })
    })
}
capsulesAnimate()
homepage()
realpage()
pAnimatepage()
colorAnimate()

