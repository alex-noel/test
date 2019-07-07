import React from "react";
import { Field, reduxForm, InjectedFormProps } from "redux-form";

import { InputGroup, InputGroupAppend } from "molecules/InputGroup";
import Button from "molecules/Button";
import Input from "molecules/Input";

export interface Fields {
  name: string;
}

const AddUserForm = (props: InjectedFormProps, fields: Fields) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <InputGroup>
        <Field
          name="name"
          component={Input}
          type="text"
          placeholder="User Name"
        />
        <InputGroupAppend>
          <Button type="submit" />
        </InputGroupAppend>
      </InputGroup>
    </form>
  );
};

export default reduxForm({
  form: "AddUser"
})(AddUserForm);
