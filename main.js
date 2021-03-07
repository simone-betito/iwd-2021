const container = document.querySelector(".waffle");
const colorGen = d3.interpolateLab("#364958", "#86bbbd");

[...Array(130)].forEach((block, i, arr) => {
  const progress = (i + 1) / arr.length;
  const color = colorGen(progress);
  container.innerHTML += `<div class="${
    i > 99 ? "block drop" : "block"
  }" style="background-color: ${color}"></div>`;
});

const headline = document.querySelector(".state");

setTimeout(() => {
  headline.classList.add("remove");
}, 3000);
