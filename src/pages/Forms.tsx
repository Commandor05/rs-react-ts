import React from 'react';
import CardsList from '../components/CardsList';
import UserForm from '../components/UserForm';
import { useAppSelector } from '../redux/hooks';
import { User } from '../types/User';

const Forms: React.FC = () => {
  const users = useAppSelector((state) => state.users.data);

  return (
    <>
      <UserForm />
      <hr className="m-10" />
      <CardsList<User> items={users} />
    </>
  );
};

export default Forms;
