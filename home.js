/*
Listen to changes to the editor.
*/

var editor = document.querySelector("#editor");
if (window.localStorage["TextEditorData"]) {
    editor.value = window.localStorage["TextEditorData"];
}
editor.addEventListener("keyup", function() {
    window.localStorage["TextEditorData"] = editor.value;
});

/*
Listen to changes to Project 1.
*/

var project1_title = document.querySelector("#project1-title");
if (window.localStorage["project1_title"]) {
    project1_title.value = window.localStorage["project1_title"];
}
project1_title.addEventListener("keyup", function() {
    window.localStorage["project1_title"] = project1_title.value;
});

var project1_task = document.querySelector("#project1-tasks");
if (window.localStorage["project1_task"]) {
    project1_task.value = window.localStorage["project1_task"];
}
project1_task.addEventListener("keyup", function() {
    window.localStorage["project1_task"] = project1_task.value;
});

/*
Listen to changes to Project2.
*/

var project2_title = document.querySelector("#project2-title");
if (window.localStorage["project2_title"]) {
    project2_title.value = window.localStorage["project2_title"];
}
project2_title.addEventListener("keyup", function() {
    window.localStorage["project2_title"] = project2_title.value;
});

var project2_task = document.querySelector("#project2-tasks");
if (window.localStorage["project2_task"]) {
    project2_task.value = window.localStorage["project2_task"];
}
project2_task.addEventListener("keyup", function() {
    window.localStorage["project2_task"] = project2_task.value;
});

/*
Listen to changes to Project3.
*/

var project3_title = document.querySelector("#project3-title");
if (window.localStorage["project3_title"]) {
    project3_title.value = window.localStorage["project3_title"];
}
project3_title.addEventListener("keyup", function() {
    window.localStorage["project3_title"] = project3_title.value;
});

var project3_task = document.querySelector("#project3-tasks");
if (window.localStorage["project3_task"]) {
    project3_task.value = window.localStorage["project3_task"];
}
project3_task.addEventListener("keyup", function() {
    window.localStorage["project3_task"] = project3_task.value;
});

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
    var yyyy = today.getFullYear();

    if(dd<10) {
        dd = '0'+dd
    }

    Date.prototype.getMonthText = function() {
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return months[this.getMonth()];
    };

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