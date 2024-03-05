'use strict';
document.getElementById('myInputField').addEventListener('focus', function() {
    document.getElementById('myDiv').style.display = 'block';
});

document.getElementById('myInputField').addEventListener('blur', function() {
    document.getElementById('myDiv').style.display = 'none';
});