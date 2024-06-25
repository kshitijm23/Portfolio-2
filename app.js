let timeline = gsap.timeline();

timeline.to(".image-wrap", {
    height: "450px", 
    backgroundSize: "100%",
    duration: 2.5,
    ease: "power4.inOut",
    
}).to(
    ".image-wrap",{
        height: "250px",
        backgroundPosition: "50% 50%",
        duration: 1.3,
        y: "0",
        ease: "power3.inOut",
    }, 2.5
).from(".big-name",{
    y: getYDistance(".big-name"),
    duration: 1.3,
    ease: "power3.inOut",

},2.5
).from(
    ".hide",{
    opacity: "0", duration: 2.4, ease: "power3.inOut",
}, 2.5);

function getYDistance(el){
    return window.innerHeight - document.querySelector(el).getBoundingClientRect().top;
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
      // uncomment to show remove and show the object repeadtedly
      // else {
      //   entry.target.classList.remove("show");
      // }
    });
  });
  //const hiddenElements = document.querySelectorAll(".hidden");
  //hiddenElements.forEach((el) => observer.observe(el));

