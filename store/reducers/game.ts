const initialState: State = {
  chosenNumber: 0,
  startGame: false,
  numberOfRounds: 0,
};

const gameReducer = (state: State = initialState, action) => {
  return state;
};

export default gameReducer;

interface State {
  chosenNumber: number;
  startGame: boolean;
  numberOfRounds: number;
}
