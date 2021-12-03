// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    //Clear data in table
    tbody.html("");

    //Loop through each object in the data and append rows/cells for each
    data.forEach((dataRow) => {
        //Append row to table body
        let row = tbody.append("tr");
        //Loop through fields in dataRow and add values as table cell
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}

//Handle data filtering, etc after input given
function handleClick() {
    //Get datetime value from filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    
    //Check if date was entered and filter using that date
    if (date) {
        //Apply filter to table data and keep only data where datetime matches filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    }

    //Build table using filtered data and if no date use original tableData
    buildTable(filteredData);
}

//Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

//Build the table when the page loads
buildTable(tableData);