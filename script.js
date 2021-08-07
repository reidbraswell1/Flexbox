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
  .getElementById("row-justify-end")
  .addEventListener("click", function () {
    flexJustify("end");
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
