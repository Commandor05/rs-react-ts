import React, { Children, Component, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';

type GeneralLayoutProps = {
  children: ReactNode;
};

class GeneralLayout extends Component<GeneralLayoutProps> {
  render() {
    const [mainContent] = Children.toArray(this.props.children);
    return (
      <div className="grid grid-flow-row">
        <header className="overflow-hidden py-5 bg-indigo-800 flex justify-around text-xl">
          <Link className="text-amber-600" to="/">
            [LOGO]
          </Link>{' '}
          <NavBar />
        </header>
        <main className="mx-3 md:container md:mx-auto min-h-screen ">{mainContent}</main>
        <footer className="overflow-hidden py-5 bg-indigo-800 flex justify-around text-slate-50">
          [Footer content]
        </footer>
      </div>
    );
  }
}

export default GeneralLayout;
