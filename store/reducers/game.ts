const initialState: State = {
  chosenNumber: 0,
  startGame: false,
  numberOfRounds: 0,
};

const gameReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case "choose":
      state.chosenNumber = action.chosen;
      break;
  }
  return state;
};

export default gameReducer;

interface State {
  chosenNumber: number;
  startGame: boolean;
  numberOfRounds: number;
}
interface Action {
  type: string;
  [props: string]: any;
}
