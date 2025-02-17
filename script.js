var itemsCart = [];

function addme() {
  if (floatingInput.value === "") {
    document.getElementById("errorMsg").style.display = "block";
  } else {
    document.getElementById("errorMsg").style.display = "none";
    itemsCart.push(floatingInput.value);
    console.log(itemsCart);
    floatingInput.value = ""; 
    displayTable();
  }
}

function displayTable() {
  var myTable = "<table>";
  myTable += "<tr>";
  myTable += `<th class="serialNumber ps-4"> Serial Number(s) </th>`;
  myTable += '<th class= "products ps-4">' + "Products" + "</th>";
  myTable += "</tr>";

  for (i = 0; i < itemsCart.length; i++) {
    myTable += "<tr>";
    myTable += '<td class="ps-5">' + `${i + 1}` + "</td>";
    myTable += '<td class="ps-5">' + `<span> ${itemsCart[i]} </span>` + "</td>";
    myTable += "</tr>";
  }

  myTable += "</table>";
  document.getElementById("items").innerHTML = myTable;
}

function delFirst() {
  itemsCart.shift();
  displayTable();
}

function delLast() {
  itemsCart.pop();
  displayTable();
}

function addStart(){
    itemsCart.unshift(floatingInput.value)
    displayTable()
}

function delAll(){
    itemsCart.splice(0, itemsCart.length)
    displayTable()
}