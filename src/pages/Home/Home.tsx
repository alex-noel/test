import React from 'react';

import { User } from 'models/user';
import { LargeHeading } from 'atoms/typography';
import { Column } from 'layouts/Grid';
import { AddUserForm } from 'features/users/AddUserForm';
import { UsersList } from 'features/users/UsersList';
type OwnProps = {
  selectedUser?: User,
};

type Props = OwnProps;

export const Home  = (props: Props) => {
  const { selectedUser } = props;

  return (
    <LargeHeading>User Hobbies</LargeHeading>
    <Grid>
      <Column span={4}>
        <AddUserForm></AddUserForm>
        <UsersList></UsersList>
      </Column>
      <Column span={8}>
        {selectedUser && (  
          <>
            <AddHobbyForm></AddHobbyForm>
            <HobbyList></HobbyList>
          </>
        )}
      </Column>
    </Grid>
  )
}