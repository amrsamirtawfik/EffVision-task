document.addEventListener("DOMContentLoaded", function () {

// Function to update element left properties to ensure responsiviblity
function updateLeftProperties() {
    let value;
    // Check the window width
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;
    let human = document.getElementById('human');
    let cursorElements = document.querySelectorAll('.custom-cursor');

    if (window.innerWidth < 660) {
        console.log('enter if',human.style.top);
        value=100;
        human.style.width=`${parseInt(human.style.width, 10)*0.4}px`;
        human.style.top = `${100}px`;
        human.style.left = `${parseInt(human.style.left, 10) - value}px`;

        cursorElements.forEach((cursor) => {
            console.log(cursor.style);
            cursor.style.width = `${20}px`;
            
        });
        cursorElements[0].style.left = "170px";
        cursorElements[0].style.top = "97px";

        cursorElements[1].style.left = "175px";
        cursorElements[1].style.top = "105px";

        cursorElements[2].style.left = "175px";
        cursorElements[2].style.top = "124px";

        cursorElements[3].style.left = "185px";
        cursorElements[3].style.top = "147px";

        cursorElements[4].style.left = "125px";
        cursorElements[4].style.top = "131px";

        cursorElements[5].style.left = "182px";
        cursorElements[5].style.top = "179px";

        cursorElements[6].style.left = "280px";
        cursorElements[6].style.top = "130px";

        cursorElements[7].style.left = "163px";
        cursorElements[7].style.top = "224px";

        cursorElements[8].style.left = "190px";
        cursorElements[8].style.top = "235px";

        cursorElements[9].style.left = "163px";
        cursorElements[9].style.top = "240px";

        cursorElements[10].style.left = "163px";
        cursorElements[10].style.top = "260px";

        cursorElements[11].style.left = "186px";
        cursorElements[11].style.top = "319px";

        
    }

    else if (window.innerWidth < 760) {
        
        value=180;
        human.style.left = `${parseInt(human.style.left, 10) - value}px`;
        cursorElements.forEach((cursor) => {
            
            cursor.style.left = `${parseInt(cursor.style.left, 10) - value}px`;
        });
    }
    else if (window.innerWidth < 860) {
        value=100;
        human.style.left = `${parseInt(human.style.left, 10) - value}px`;
        cursorElements.forEach((cursor) => {
            
            cursor.style.left = `${parseInt(cursor.style.left, 10) - value}px`;
        });
    }
   
}

// Initial call to set the left properties on page load
updateLeftProperties();






    // Get stars image element
    const starsImage = document.getElementById('stars');

    // Initialize ScrollMagic
    const controller = new ScrollMagic.Controller();

    // Scene for updating starsImage position
    const starsScene = new ScrollMagic.Scene({
        triggerElement: "#trigger", // Adjust trigger element if needed
        triggerHook: 0,
    })
    .on("update", function (e) {
        starsImage.style.right = `${(-1000) + e.scrollPos * 0.08}px`;
    })
    // .addIndicators({ name: "Move stars Scene" })
    .addTo(controller);

    // Intro scenes
    const helloScene = new ScrollMagic.Scene({
        triggerElement: "#helloTrigger",
        triggerHook: 0.9, // show when scrolled 10% into view
        duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
        offset: 50 // move trigger to center of element
    })
    .setClassToggle("#helloTxt", "visible") // add class to reveal
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

    // Scene for checking
    const checkScene = new ScrollMagic.Scene({
        triggerElement: "#checkTrigger",
        triggerHook: 0.9,
        offset: 50, // move trigger to center of element
    })
    .setClassToggle("#checkTxt", "visible") // add class toggle
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

    // GSAP animation
    var tween = new TimelineMax()
        .from("#gsap-anim", 1.5, {rotationY: 180, scale: 0.7, opacity: 0})
        .to("#gsap-anim", 1.5, {rotationY: 180, scale: 0.7, opacity: 0, delay: 7});

    const scrollScene = new ScrollMagic.Scene({
        triggerElement: "#scrollTrigger",
        triggerHook: 0.9, // show when scrolled 10% into view
        duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
        offset: 50 // move trigger to center of element
    })
    .setClassToggle("#scrollTxt", "visible") // add class to reveal
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

    // Scene for the human entering
    // const humanScene = new ScrollMagic.Scene({
    //     triggerElement: "#humanTrigger",
    //     triggerHook: 0.5,
    //     duration: "80%",
    //     offset: 50
    // })
    // .on("enter", function () {
    //     // This function will be triggered when entering
    //     document.getElementById("human").classList.add("visible");
    // })
    // // .addIndicators({ name: "human entering Scene" })
    // .addTo(controller);

    // Scene for fixing the human
    const fixScene = new ScrollMagic.Scene({
        triggerElement: "#afterHumanTrigger",
        triggerHook: 0.1,
    })
    .setPin("#human")
    // .addIndicators({ name: "Fix Scene" })
    .addTo(controller);

    // Scene for making the cursor visible
    for (let i = 0; i < 12; i++) {
        const offsetValue = i * 750; // Adjust the offset calculation based on your needs

        const cursorVisible = new ScrollMagic.Scene({
            triggerElement: "#afterHumanTrigger",
            triggerHook: 0,
            offset: offsetValue,
            duration: "50%"
        })
        .setClassToggle(`#cursor${i}`, "visible") // add class toggle
        // .addIndicators({ name: `Cursor Visible ${i}` }) // add indicators (requires plugin)
        .addTo(controller);
    }

    // Scene for animating the labels
    const labels = ["retina", "teeth", "thyroid", "heart", "joints", "kidneys", "skin", "bloodVessels", "boneMarrow", "muscles", "bones", "peripheralNerves"];

    const offsetGap = 750;

    labels.forEach((label, index) => {
        const visibleScene = new ScrollMagic.Scene({
            triggerElement: "#afterHumanTrigger",
            triggerHook: 0,
            offset: 50 + index * offsetGap, // Adjust the initial offset and the gap
            duration: "50%",
        })
        .setClassToggle(`#${label}`, "visible")
        .addTo(controller);
    });
});



