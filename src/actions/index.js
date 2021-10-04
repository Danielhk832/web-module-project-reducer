export const ADD_ONE = "ADD_ONE";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const MEMORY_SET = "MEMORY_SET";
export const MEMORY_ADD = "MEMORY_ADD";
export const MEMORY_CLEAR = "MEMORY_CLEAR";

export const changeOperation = (operator) => {
  return { type: CHANGE_OPERATION, payload: operator };
};
export const addOne = () => {
  return { type: ADD_ONE };
};

export const clear = () => {
  return { type: CLEAR_DISPLAY };
};

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: number };
};

export const memorySet = () => {
  return { type: MEMORY_SET };
};

export const memoryAdd = () => {
  return { type: MEMORY_ADD };
};

export const memoryClear = () => {
  return { type: MEMORY_CLEAR };
};
