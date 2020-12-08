const container = document.querySelector(".container");
var mouseCursor = document.querySelector(".cursor");
const box = document.querySelector(".box");

container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;

  box.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

window.addEventListener("mousemove", (e) => {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
})

container.addEventListener("mouseenter", (e) => {
  box.style.transition = "none";
});

container.addEventListener("mouseleave", (e) => {
  box.style.transition = "all 0.5s ease";
  box.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

 box.addEventListener("mouseleave", () => {
   mouseCursor.classList.remove("list-grow");
 });
 box.addEventListener("mouseover", () => {
   mouseCursor.classList.add("list-grow");
 });