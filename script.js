document
  .getElementById("flex-row-direction")
  .addEventListener("click", flexRow);
document
  .getElementById("flex-column-direction")
  .addEventListener("click", flexColumn);
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

function flexRow() {
  console.log("--Entering Flex Row--");
  let row = document.getElementById("flexbox-row");
  row.style.flexDirection = "row";
}

function flexColumn() {
  console.log("--Entering Flex Column--");
  let column = document.getElementById("flexbox-row");
  column.style.flexDirection = "column";
}

function flexJustify(startEnd) {
  console.log(`--Entering Flex Justify-- ${startEnd}`);
  let justify = document.getElementById("flexbox-row");
  justify.style.justifyContent = startEnd;
}
