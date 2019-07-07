import React from "react";
import { connect } from 'react-redux';
import { List } from "molecules/List";
import { User } from "models/user";

import UserListItem from "./UserListItem";

type MappedProps = {
  users?: User[];
  loading: boolean;
};

type Props = MappedProps;

const UserListContainer = (props: Props) => {
  const { loading = true, users } = props;
  return loading ? (
    <div>
      <span>Loading...</span>
    </div>
  ) : (
    <List ItemComponent={UserListItem} items={users} />
  );
};

const mapStateToProps = (state: any) => {
  users: state.users,
}

export default connect(mapStateToProps, null)(UserListContainer);
