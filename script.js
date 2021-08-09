try {
  console.log(`-- Entering "flex-direction" event listener.`);
  document
    .getElementById("flex-direction")
    .addEventListener("change", function () {
      let index = this.selectedIndex;
      if (this[index].value != "Choose") {
        flexDirection(this[index].value);
      }
    });
} catch (ex) {
  console.log(
    `-- An error occurred getting the "flex-direction" object. Exception ${ex}`
  );
}

try {
  console.log(`-- Entering "flex-justify-content" event listener.`);
  document
    .getElementById("flex-justify-content")
    .addEventListener("change", function () {
      let index = this.selectedIndex;
      if (this[index].value != "Choose") {
        flexJustify(this[index].value);
      }
    });
} catch (ex) {
  console.log(
    `-- An error occurred getting the "flex-justify-content" object. Exception ${ex}`
  );
}

try {
  console.log(`-- Entering "flex-align-items" event listener.`);
  document
    .getElementById("flex-align-items")
    .addEventListener("change", function () {
      let index = this.selectedIndex;
      if (this[index].value != "Choose") {
        flexAlign(this[index].value);
      }
    });
} catch (ex) {
  console.log(
    `-- An error occurred getting the "flexbox-row" object. Exception ${ex}`
  );
}

try {
  console.log(`-- Entering "flex-align-self" event listener.`);
  document
    .getElementById("flex-align-self")
    .addEventListener("change", function () {
      let index = this.selectedIndex;
      if (this[index].value != "Choose") {
        flexAlignSelf(this[index].value);
      }
    });
} catch (ex) {
  console.log(
    `-- An error occurred getting the "flex-align-self" object. Exception ${ex}`
  );
}

function flexDirection(paramValue) {
  console.log(`-- Entering Flex Direction -- paramValue=${paramValue}`);
  try {
    let obj = document.getElementById("flexbox-row");
    obj.style.flexDirection = paramValue;
  } catch (exception) {
    console.log(
      `-- An error occurred getting the "flexbox-row" object. Exception ${exception}`
    );
  }
}

function flexJustify(paramValue) {
  console.log(`-- Entering Flex Justify-- paramValue=${paramValue}`);
  try {
    let obj = document.getElementById("flexbox-row");
    obj.style.justifyContent = paramValue;
  } catch (exception) {
    console.log(
      `-- An error occurred getting the "flexbox-row" object. Exception ${exception}`
    );
  }
}

function flexAlign(paramValue) {
  console.log(`-- Entering Flex Align-- paramValue=${paramValue}`);
  try {
    let obj = document.getElementById("flexbox-row");
    obj.style.alignItems = paramValue;
  } catch (exception) {
    console.log(
      `-- An error occurred getting the "flexbox-row" object. Exception ${exception}`
    );
  }
}

function flexAlignSelf(paramValue) {
  console.log(`-- Entering Flex Align Self -- paramValue=${paramValue}`);
  try {
    let obj = document.getElementById("flexbox-row-item-2");
    obj.style.alignSelf = paramValue;
  } catch (exception) {
    console.log(
      `-- An error occurred getting the "flexbox-row-item-2" object. Exception ${exception}`
    );
  }
}
