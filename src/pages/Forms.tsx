import React, { useState } from 'react';
import CardsList from '../components/CardsList';
import UserForm from '../components/UserForm';
import { User } from '../types/User';

type UsersState = User[] | [];

const Forms: React.FC = () => {
  const [users, setUsers] = useState<UsersState>([]);

  const handleFormSubmit = (userData: User) => {
    setUsers((prevState) => [...prevState, userData]);
  };

  return (
    <>
      <UserForm<User> onFormSubmit={handleFormSubmit} />
      <hr className="m-10" />
      <CardsList<User> items={users} />
    </>
  );
};

export default Forms;
