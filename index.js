function printInput() {
    const taskName = document.getElementById('tname').value;
    // var paragraph = document.getElementById("outputid");
    // var text = document.createTextNode(firstName);

    // paragraph.appendChild(text);

    const outputDiv = document.getElementById("outputid");
    outputDiv.textContent = 'Tasks left:\n' + taskName;
}

function addTask() {    
    const taskName = document.getElementById('tname').value;
    const dueDate = document.getElementById('date').value;

    if(taskName == '') {
        window.alert("Enter a task!");
        return;
    }

    var table = document.getElementById('TaskTableID');
    var numRows = table.getElementsByTagName('tr').length;

    const outputDiv = document.getElementById("outputid");
    outputDiv.textContent = 'Tasks left:\n' + numRows;

    var row = table.insertRow(numRows);
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);

    row.id = 'RowID';

    if(document.getElementById('GreenPriority').checked) {
        cell2.bgColor = "Green";
    } else if(document.getElementById('YellowPriority').checked) {
        cell2.bgColor = "Yellow";
    } else if(document.getElementById('RedPriority').checked) {
        cell2.bgColor = "Red";
    } else {
        cell2.bgColor = "White";
    }

    cell0.innerHTML = taskName;
    cell0.style.textDecoration = 'none';

    cell1.innerHTML = dueDate;

    const infoTxt = document.getElementById('information').value;
    generateInformationDiv(infoTxt, numRows);

    const infoButton = document.createElement('button');
    infoButton.textContent = 'Info';
    cell3.appendChild(infoButton);
    infoButton.addEventListener('click', () => toggleInformationDiv(numRows + 1));

    // clear input
    document.getElementById('tname').value = "";
    document.getElementById('date').value = "";
    document.getElementById('GreenPriority').checked = false;
    document.getElementById('YellowPriority').checked = false;
    document.getElementById('RedPriority').checked = false;
    document.getElementById('information').value = "";

    /* Adding event listener */
    cell0.addEventListener("click", () => toggleStrikeThrough(row));
    cell1.addEventListener("click", () => toggleStrikeThrough(row));
}

function generateInformationDiv(infoTxt) {
    var table = document.getElementById('TaskTableID');
    var numRows = table.getElementsByTagName('tr').length;

    var infoRow = table.insertRow(numRows);
    var cell = infoRow.insertCell(0);
    cell.colSpan = 4;

    cell.innerHTML = infoTxt;

    cell.id = 'InfoParagraphID';
    
    // infoParagraph.id = 'InfoParagraphID' + numRows;
    cell.style.display = 'none';
}

function toggleInformationDiv(rowNum) {
    //var infoParagraph = document.getElementById("InfoParagraphID");
    var table = document.getElementById('TaskTableID');
    var numRows = table.getElementsByTagName('tr')
    var infoParagraph = table.rows[rowNum].cells[0];

    if(infoParagraph.style.display == "none") {
        infoParagraph.style.display = "";
    } else {
        infoParagraph.style.display = "none";
    }

}

function toggleStrikeThrough(row) {
    /*
        row_num: row number of table to strike
    */
    var striked = false;
    var cell1 = row.cells[0];

    if(cell1.style.textDecoration == 'line-through') {
        striked = true;
    } else {
        striked = false;
        //numRows--;
    }

    for(var i = 0; i < row.cells.length; i++) {
        var cell = row.cells[i];

        if(striked) {
            cell.style.textDecoration = 'none';
        } else {
            cell.style.textDecoration = 'line-through';
        } 
    }
}

function deleteTasks() {
    var table = document.getElementById('TaskTableID');
    var rows = table.getElementsByTagName('tr');
    const indexesToRemove = [];

    for(var i = 1; i < rows.length; i += 2) {
        var cell = rows[i].cells[0];
        if(cell.style.textDecoration == 'line-through') {
            indexesToRemove.push(i);
            indexesToRemove.push(i+1);
        } else if(cell.innerHTML == '') {
            indexesToRemove.push(i);
            indexesToRemove.push(i+1);
        }
    }

    console.log(indexesToRemove);

    for(var i = indexesToRemove.length - 1; i >= 0; i--) {
        var index = indexesToRemove[i];
        rows[index].remove();
    }

    const outputDiv = document.getElementById("outputid");
    outputDiv.textContent = 'Tasks left:\n' + (rows.length - 1);
}