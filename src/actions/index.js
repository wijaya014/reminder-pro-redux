import { ADD_REMINDER } from "../constant";

export const addReminder = (text) => {
  const action = {
    type: ADD_REMINDER,
    text,
  };
  return action;
};
