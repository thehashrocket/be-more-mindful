/*
Listen to changes to the editor.
*/

var editor = document.querySelector("#editor");
if (window.localStorage["TextEditorData"]) {
    editor.value = window.localStorage["TextEditorData"];
}
editor.addEventListener("keyup", function() {
    window.localStorage["TextEditorData"] = editor.value;
    console.log('editor.value ', editor.value);
});
 
console.log('i am here');

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    if(dd<10) {
        dd = '0'+dd
    }

    if(mm<10) {
        mm = '0'+mm
    }

    Date.prototype.getMonthText = function() {
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return months[this.getMonth()];
    }

    var month = today.getMonthText();

    today =  dd + ' ' + month + ' ' + yyyy;

    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
    document.getElementById('date').innerHTML = today;
    t = setTimeout(function () {
        startTime()
    }, 500);
}
startTime();