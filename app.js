//DOM Elements
const boxes = document.querySelectorAll(".box"),
  image = document.querySelector(".image");
const buttonColor = document.getElementById("buttonColor");
const button = document.getElementById("button");
const boxOne = document.getElementById("one");
//Loop through each boxes element
boxes.forEach((box) => {
  //When a draggable element dragged over a box element
  box.addEventListener("dragover", (e) => {
    e.preventDefault(); //Prevent default behaviour
    box.classList.add("hovered");
    box.style.backgroundColor = "#FFFFFF";
  });

  //When a draggable element leaves box element
  box.addEventListener("dragleave", () => {
    box.classList.remove("hovered");
    box.style.backgroundColor = "#FFFFFF";
  });

  //When a draggable element is dropped on a box elemen
  box.addEventListener("drop", () => {
    if (box.id === "two") {
      buttonColor.style.fill = "#37bb1d";
      const finalImage = `https://robohash.org/5`;
      image.style.backgroundImage = `url("${finalImage}")`;
      box.appendChild(image);
      box.classList.remove("hovered");
    } else {
      buttonColor.style.fill = "#de250c";
      const finalImage = `https://robohash.org/1`;
      image.style.backgroundImage = `url("${finalImage}")`;
      box.appendChild(image);
      box.classList.remove("hovered");
    }
  });
});

//Code For Reset Button
button.addEventListener("click", (e) => {
  e.preventDefault();
  buttonColor.style.fill = "#de250c";
  const finalImage = `https://robohash.org/1`;
  image.style.backgroundImage = `url("${finalImage}")`;
  boxOne.appendChild(image);
  boxOne.classList.remove("hovered");
});
