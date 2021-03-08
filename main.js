const container = document.querySelector(".waffle");
const colorGen = d3.interpolateLab("#6679CC", "#c6d2ed");

[...Array(346)].forEach((block, i, arr) => {
  const progress = (i + 1) / arr.length;
  const color = colorGen(progress);
  container.innerHTML += `<div class="block" style="background-color: ${color}"></div>`;
});

const headline = document.querySelector(".state");

setTimeout(() => {
  headline.classList.add("remove");
}, 3000);
