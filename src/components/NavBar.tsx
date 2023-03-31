import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav>
      <ul className="flex">
        <li className="px-5">
          <NavLink
            className={({ isActive }) => (isActive ? 'text-slate-50' : 'text-gray-400')}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="px-5">
          <NavLink
            className={({ isActive }) => (isActive ? 'text-slate-50' : 'text-gray-400')}
            to="/about"
          >
            About Us
          </NavLink>
        </li>
        <li className="px-5">
          <NavLink
            className={({ isActive }) => (isActive ? 'text-slate-50' : 'text-gray-400')}
            to="/forms"
          >
            Forms
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
