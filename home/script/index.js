'use strict';
function cl(className,index) {
    return document.getElementsByClassName(className)[index];
}
function $(id) {
    return document.getElementById(id);
}
let blackboard = cl('blackb',0);
window.onload = function () {
    blackboard.className = 'onimg ' + 'blackb';
}
