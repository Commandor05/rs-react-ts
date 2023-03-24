import React, { Component } from 'react';
import { User } from '../types/User';

type UserCardsProps = {
  item: User;
};

class UserCard extends Component<UserCardsProps> {
  render() {
    const { name, surname } = this.props.item;
    return (
      <div
        className="flex flex-col gap-2 
        rounded-md border-indigo-600 border-2 
        shadow-md hover:shadow-2xl bg-slate-100  w-64 sm:w-80 py-3 text-lg"
      >
        <h3 className="justify-self-center self-center text-xl font-bold text-center">{name}</h3>
        <h3 className="justify-self-center self-center text-xl font-bold text-center">{surname}</h3>
      </div>
    );
  }
}

export default UserCard;
