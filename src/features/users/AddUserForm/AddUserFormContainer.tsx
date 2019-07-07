import React from "react";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";

import { User } from "models/user";
import AddUserForm, { Fields } from "./AddUserForm";
import { actions } from "./ducks";

type OwnProps = {};
type MappedProps = {
  createUser: (fields: Fields) => void;
};
type Props = OwnProps & MappedProps;

const AddUserFormContainer = (props: Props) => (
  <AddUserForm onSubmit={props.createUser} />
);

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      createUser: actions.createUser
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(AddUserFormContainer);
