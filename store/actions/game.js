"use strict";
exports.__esModule = true;
exports.restartGameRedux = exports.addRound = exports.startGame = exports.chooseNumber = void 0;
var chooseNumber = function (number) {
    return { type: "choose", chosen: number };
};
exports.chooseNumber = chooseNumber;
var startGame = function (isStarted) {
    return { type: "startGame", isStarted: isStarted };
};
exports.startGame = startGame;
var addRound = function () {
    return { type: "addRound" };
};
exports.addRound = addRound;
var restartGameRedux = function () {
    return { type: "restartGame" };
};
exports.restartGameRedux = restartGameRedux;
