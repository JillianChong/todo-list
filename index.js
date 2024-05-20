function printInput() {
    const taskName = document.getElementById('tname').value;
    // var paragraph = document.getElementById("outputid");
    // var text = document.createTextNode(firstName);

    // paragraph.appendChild(text);

    const outputDiv = document.getElementById("outputid");
    outputDiv.textContent = 'Output here:\n' + taskName;
}

function addTask() {
    const taskName = document.getElementById('tname').value;
    var table = document.getElementById('TaskTableID');

    var numRows = table.getElementsByTagName('tr').length;

    const outputDiv = document.getElementById("outputid");
    outputDiv.textContent = 'Output here:' + numRows;

    var row = table.insertRow(numRows);
    var cell = row.insertCell(0);

    cell.innerHTML = taskName;

    /* Adding event listener */
    row.addEventListener("click", () => toggleStrikeThrough(numRows));
}

function toggleStrikeThrough(rowNum) {
    /*
        row_num: row number of table to strike
    */

    var table = document.getElementById('TaskTableID');
    var rows = table.getElementsByTagName('tr');
    var row = rows[rowNum];
    var cell = row.cells[0];

    if(cell.style.textDecoration == 'line-through') {
        cell.style.textDecoration = 'none';
    } else {
        cell.style.textDecoration = 'line-through';
    }
}