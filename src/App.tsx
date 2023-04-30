import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Forms from './pages/Forms';
import NotFound from './pages/NotFound';
import GeneralLayout from './layouts/GeneralLayout';
import { Suspense } from 'react';
import Spinner from './components/Spinner';

export const potosEndpoint = '/photos';

function App() {
  return (
    <Suspense
      fallback={
        <div className="mt-20">
          <Spinner />
        </div>
      }
    >
      <GeneralLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="forms" element={<Forms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </GeneralLayout>
    </Suspense>
  );
}

export default App;
