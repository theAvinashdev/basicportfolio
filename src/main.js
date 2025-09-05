// SCRIPT 1 ->
// opening mobile menu and closing mobile menu

let openMenuButton = document.querySelector('#menu_open');
let menu = document.querySelector('#menuNavigation');
let closeButton = document.querySelector('#close');

//OPENING MENU
openMenuButton.addEventListener('click', function (e) {
  gsap.to(menu, {
    right: 0,
  })

})

//CLOSING MENU
closeButton.addEventListener('click', function (e) {
  e.preventDefault();
  gsap.to(menu, {
    right: "-100%"
  })
})

// Grab all h2 elements inside .animation_section
const texts = document.querySelectorAll(".animation_section h2");

const tl = gsap.timeline({ repeat: -1 }); // infinite loop

texts.forEach((text) => {
  tl.fromTo(
    text,
    { opacity: 0, y: 30 }, // start hidden
    { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
  )
    .to(text, { opacity: 0, y: -30, duration: 1, ease: "power2.in" }, "+=1");
  // "+=1" keeps it visible for 1s before hiding
});


let ntl = gsap.timeline();

ntl.to("#loader", {
  opacity: 0,          // fade out first
  duration: .5,
  delay: 3,
  onComplete: () => {
    gsap.set("#loader", { display: "none" }); // hide completely after animation
  }
});


gsap.from('.load', {
  rotate: -360,
  repeat: -1
})

ntl.from('#navbar', {
  y: -100,
  opacity: 0,
  duration: 1,
  stagger: .5
})



ntl.from('.bgText', {
  scale: 0,
  opacity: 0,
  duration: 0.15,
  stagger: .25
})

ntl.from('.hero_image', {
  y: 40,
  opacity: 0,
  duration: .77,
  ease: "elastic.inOut(1,0.75)",
  stagger: .5
})


gsap.registerPlugin(ScrollTrigger);



document.addEventListener("DOMContentLoaded", () => {
  // Run only on small screens (<640px)
  if (window.matchMedia("(max-width: 639px)").matches) {

    // Duplicate content for seamless scrolling


    ntl.from('#mySkills', {
      y: 50,
      opacity: 0,
      duration: .5,
      ease: "linear",
    })

    ntl.from('.skill_cards', {
      scale: 0,
      opacity: 0,
      duration: 1,
      stagger: .4,
      ease: "elastic.inOut(1,0.75)",

    })
  } else {
    gsap.from('#mySkills', {
      y: 50,
      opacity: 0,
      duration: .5,
      ease: "linear",
      scrollTrigger: {
        trigger: ".skill_cards",
        start: "top 90%",
        end: "top 50%",

      }
    })
    gsap.from('.skill_cards', {
      scale: 0,
      opacity: 0,
      duration: 1,
      stagger: .4,
      ease: "elastic.inOut(1,0.75)",
      scrollTrigger: {
        trigger: ".skill_cards",
        start: "top 90%",
        end: "top 50%",

      }
    })
  }
});



gsap.from('#myProjectHeading', {
  y: 50,
  opacity: 0,
  duration: .5,
  ease: "linear",
  stagger: .75,
  scrollTrigger: {
    trigger: "#myProjectHeading",
    start: "top 90%",
    end: "top 50%",
  }
})

gsap.from('.project', {
  y: 50,
  opacity: 0,
  duration: .5,
  ease: "linear",
  stagger: .75,
  scrollTrigger: {
    trigger: ".project",
    start: "top 90%",
    end: "top 50%",
  }
})


gsap.from('#myMentors', {
  y: 50,
  opacity: 0,
  duration: .5,
  ease: "linear",
  stagger: .75,
  scrollTrigger: {
    trigger: "#myMentors",
    start: "top 90%",
    end: "top 10%",
    
  }
})


gsap.from('.mentor', {
  scale: 0,
  opacity: 0,
  duration: .5,
  ease: "linear",
  stagger: .75,
  scrollTrigger: {
    trigger: ".mentor",
    start: "top 90%",
    end: "top 10%",
    
  }
})




