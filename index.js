function paint(color) {
    const circle = document.getElementById('circleID');
    circle.style = `background-color:${color}`;
}

function paintRandom() {
    const circle = document.getElementById('circleID');

    var letters = '0123456789ABCDEF';
    var color = '#';
    
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    circle.style = `background-color:${color}`;
}

function printInput() {
    const firstName = document.getElementById('fname').value;
    const lastName = document.getElementById('lname').value;
    // var paragraph = document.getElementById("outputid");
    // var text = document.createTextNode(firstName);

    // paragraph.appendChild(text);

    const outputDiv = document.getElementById("outputid")
    outputDiv.textContent = 'Output here:\n' + firstName + ' ' + lastName;
}