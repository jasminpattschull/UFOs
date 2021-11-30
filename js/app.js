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