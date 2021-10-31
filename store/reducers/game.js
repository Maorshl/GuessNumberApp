"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
            return __assign(__assign({}, state), { chosenNumber: action.chosen });
        case "startGame":
            return __assign(__assign({}, state), { startGame: action.isStarted });
        case "addRound":
            return __assign(__assign({}, state), { numberOfRounds: state.numberOfRounds + 1 });
        case "restartGame":
            return { chooseNumber: 0, startGame: false, numberOfRounds: 0 };
    }
    return state;
};
exports["default"] = gameReducer;
