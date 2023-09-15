let recetangle = document.querySelector("#center")

recetangle.addEventListener("mousemove", function (details) {
    // Return the size of an element and its position relative to the viewport:
    let location = recetangle.getBoundingClientRect()
    let data = details.clientX - location.left;

    if (data < location.width / 2) {
        var redColor = gsap.utils.mapRange(0, location.width / 2, 255, 0, data);
        gsap.to(recetangle, {
            backgroundColor: `rgb(${redColor}, 0, 0)`,
            ease: Power4,
        })
    } else {
        var blueColor = gsap.utils.mapRange(location.width / 2, location.width, 0, 255, data);
        gsap.to(recetangle, {
            backgroundColor: `rgb(0, 0, ${blueColor})`,
            ease: Power4,
        })
    }
})

recetangle.addEventListener("mouseleave", function () {
    gsap.to(recetangle, {
        backgroundColor: "#fff"
    })
})