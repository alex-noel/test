import React, { useCallback } from "react";

import { User } from "models/user";

type OwnProps = {
  item: User;
};

type MappedProps = {
  selectUser: (user: User) => void;
};

type Props = OwnProps & MappedProps;

const UserListItem = (props: Props) => {
  const { item: user, selectUser } = props;
  const handleItemClick = useCallback(user => selectUser(user), [user]);
  return <div onClick={handleItemClick}>{user.name}</div>;
};

export default UserListItem;
