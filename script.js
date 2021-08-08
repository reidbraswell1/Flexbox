document
  .getElementById("flex-row-direction")
  .addEventListener("click", function () {
    flexDirection("row");
  });

document
  .getElementById("flex-column-direction")
  .addEventListener("click", function () {
    flexDirection("column");
  });

document
  .getElementById("row-justify-start")
  .addEventListener("click", function () {
    flexJustify("start");
  });

document
  .getElementById("row-justify-center")
  .addEventListener("click", function () {
    flexJustify("center");
  });

document
  .getElementById("row-justify-end")
  .addEventListener("click", function () {
    flexJustify("end");
  });

document
  .getElementById("row-align-start")
  .addEventListener("click", function () {
     flexAlign("start");
  });

document
  .getElementById("row-align-center")
  .addEventListener("click", function() {
    flexAlign("center");
  });

document
  .getElementById("row-align-end")
  .addEventListener("click", function () {
     flexAlign("end");
  });

function flexDirection(rowColumn) {
  console.log(`--Entering Flex Direction -- ${rowColumn}`);
  let row = document.getElementById("flexbox-row");
  row.style.flexDirection = rowColumn;
}

function flexJustify(startEnd) {
  console.log(`--Entering Flex Justify-- ${startEnd}`);
  let justify = document.getElementById("flexbox-row");
  justify.style.justifyContent = startEnd;
}

function flexAlign(startEnd) {
  console.log(`--Entering Flex Align-- ${startEnd}`);
  let align = document.getElementById("flexbox-row");
  align.style.alignItems = startEnd;
}
