import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/login'
import RegisterPage from './pages/register'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ThreadPage from './pages/thread';
import DetailThread from './pages/thread-detail';
import { asyncPreloadProcess } from './states/isPreload/action';

function App() {

  const {
    authUser = null,
    isPreload = false,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());

  }, [dispatch]);

  if (isPreload) {
    return null;
  }

  if (authUser === null) {
    return (
      <>
        <main>
          <Routes>
            <Route path="/*" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
      </>
    );
  }

  return (
    <>
      <div className="app-container">
        <main>
          <Routes>
            <Route path="/" element={<ThreadPage />} />
            <Route path="/threads/:id" element={<DetailThread />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App
