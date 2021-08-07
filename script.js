document.getElementById("flex-row-direction").addEventListener('click', flexRow);
document.getElementById("flex-column-direction").addEventListener('click', flexColumn);


function flexRow() {
    console.log("--Entering Flex Row");
    let row = document.getElementById("flexbox-row");
    row.style.flexDirection="row";
}

function flexColumn() {
    console.log("--Entering Flex Column");
    let column = document.getElementById("flexbox-row");
    column.style.flexDirection="column";
}