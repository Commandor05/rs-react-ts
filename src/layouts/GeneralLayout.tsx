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
      <>
        <header>
          <Link to="/">[LOGO]</Link> <NavBar />
        </header>
        <main>{mainContent}</main>
        <footer>[Footer content]</footer>
      </>
    );
  }
}

export default GeneralLayout;
