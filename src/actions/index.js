import { ADD_REMINDER, DELETE_REMINDER } from "../constant";

export const addReminder = (text) => {
  const action = {
    type: ADD_REMINDER,
    text,
  };
  return action;
};

export const deleteReminder = (id) => {
  const action = {
    type: DELETE_REMINDER,
    id,
  };
  return action;
};
