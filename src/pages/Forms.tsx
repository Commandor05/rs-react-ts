import React, { Component } from 'react';
import CardsList from '../components/CardsList';
import UserForm from '../components/UserForm';
import { User } from '../types/User';

type FormsProps = unknown;

type FormsState = {
  users: User[] | [];
};

class Forms extends Component<FormsProps, FormsState> {
  state: FormsState = { users: [] };

  render() {
    return (
      <>
        <UserForm />
        <hr />
        <CardsList<User> items={this.state.users} />
      </>
    );
  }
}

export default Forms;
