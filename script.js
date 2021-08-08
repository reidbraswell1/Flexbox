let test = document.getElementById("flex-direction");
document
  .getElementById("flex-direction")
  .addEventListener("change", function () {
    let index = this.selectedIndex;
    if (this[index].value != "Choose") {
      flexDirection(this[index].value);
    }
  });

document
  .getElementById("flex-justify-content")
  .addEventListener("change", function () {
    let index = this.selectedIndex;
    if (this[index].value != "Choose") {
      flexJustify(this[index].value);
    }
  });

document
  .getElementById("flex-align-items")
  .addEventListener("change", function () {
    let index = this.selectedIndex;
    if (this[index].value != "Choose") {
      flexAlign(this[index].value);
    }
  });

  document
  .getElementById("flex-align-self")
  .addEventListener("change", function () {
    let index = this.selectedIndex;
    if (this[index].value != "Choose") {
      flexAlignSelf(this[index].value);
    }
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
function flexAlignSelf(startEnd) {
  console.log(`--Entering Flex Align Self -- ${startEnd}`);
  let align = document.getElementById("flexbox-row-item-2");
  align.style.alignSelf = startEnd;
}
