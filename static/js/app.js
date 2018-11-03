// from data.js
var tableData = data;

// Create a variable and select the element based on its ID in html.
const UFOTBody = d3.select('#UFO_tbody');

// Console log the imported data from data.js
console.log(tableData);


// Append each UFO sighting to the table.
tableData.forEach((ufoInfo) => {
  let row = UFOTBody.append("tr")
  Object.entries(ufoInfo).forEach(([key, value]) => {
    let cell = row.append("td");
    cell.text(value);
  });
});

// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  var filteredData = tableData.filter(row => row.datetime === inputValue);

  console.log(filteredData);


  document.getElementById('UFO_tbody').innerHTML = " ";

  console.log("Table Refreshed");

// Append filtered UFO sighting to the table.
filteredData.forEach((ufoInfo) => {
    let row = UFOTBody.append("tr")
    Object.entries(ufoInfo).forEach(([key, value]) => {
      let cell = row.append("td");
      cell.text(value);
    });
  });

});