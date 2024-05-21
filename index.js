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

    if(taskName == '') {
        window.alert("Enter a task!");
        return;
    }

    var table = document.getElementById('TaskTableID');

    var numRows = table.getElementsByTagName('tr').length;

    const outputDiv = document.getElementById("outputid");
    outputDiv.textContent = 'Output here:' + numRows;

    var row = table.insertRow(numRows);
    var cell = row.insertCell(0);

    cell.innerHTML = taskName;
    cell.style.textDecoration = 'none';

    // clear input
    document.getElementById('tname').value = "";

    /* Adding event listener */
    row.addEventListener("click", () => toggleStrikeThrough(row));
}

function toggleStrikeThrough(row) {
    /*
        row_num: row number of table to strike
    */

    var cell = row.cells[0];

    if(cell.style.textDecoration == 'line-through') {
        cell.style.textDecoration = 'none';
    } else {
        cell.style.textDecoration = 'line-through';
    } 
}

function deleteTasks() {
    var table = document.getElementById('TaskTableID');
    var rows = table.getElementsByTagName('tr');
    const indexesToRemove = [];

    for(var i = 0; i < rows.length; i++) {
        var cell = rows[i].cells[0];
        if(cell.style.textDecoration == 'line-through') {
            indexesToRemove.push(i);
        } else if(cell.innerHTML == '') {
            indexesToRemove.push(i);
        }
    }

    for(var i = indexesToRemove.length - 1; i >= 0; i--) {
        var index = indexesToRemove[i];
        rows[index].remove();
    }
}