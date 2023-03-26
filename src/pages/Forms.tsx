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

  handleFormSubmit = (userData: User) => {
    this.setState((prevState) => ({
      users: [...prevState.users, userData],
    }));
  };

  render() {
    return (
      <>
        <UserForm<User> onFormSubmit={this.handleFormSubmit} />
        <hr className="m-10" />
        <CardsList<User> items={this.state.users} />
      </>
    );
  }
}

export default Forms;
