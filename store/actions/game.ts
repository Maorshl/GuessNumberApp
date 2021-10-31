export const chooseNumber = (number: number) => {
  return { type: "choose", chosen: number };
};

export const startGame = (isStarted: boolean) => {
  return { type: "startGame", isStarted };
};

export const addRound = () => {
  return { type: "addRound" };
};

export const restartGameRedux = () => {
  return { type: "restartGame" };
};
