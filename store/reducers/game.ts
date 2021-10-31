const initialState: State = {
  chosenNumber: 0,
  startGame: false,
  numberOfRounds: 0,
};

const gameReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case "choose":
      return { ...state, chosenNumber: action.chosen };
    case "startGame":
      return { ...state, startGame: action.isStarted };
    case "addRound":
      return { ...state, numberOfRounds: state.numberOfRounds + 1 };
    case "restartGame":
      return { chooseNumber: 0, startGame: false, numberOfRounds: 0 };
  }
  return state;
};

export default gameReducer;

interface State {
  chosenNumber: number | null;
  startGame: boolean;
  numberOfRounds: number;
}
interface Action {
  type: string;
  chosen: number;
  isStarted: boolean;
  run: string;
}
