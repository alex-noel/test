import { User } from "models/user";
import { Dispatch } from "redux";

const createUser = (fields: { name: string }) => (dispatch: Dispatch) => {
  dispatch({
    type: "CREATE_USER",
    payload: { name: fields.name }
  });
};

export const actions = {
  createUser
};
