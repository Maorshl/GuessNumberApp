"use strict";
exports.__esModule = true;
var initialState = {
    chosenNumber: 0,
    startGame: false,
    numberOfRounds: 0
};
var gameReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case "choose":
            state.chosenNumber = action.chosen;
            break;
    }
    return state;
};
exports["default"] = gameReducer;
