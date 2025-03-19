import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/login'
import RegisterPage from './pages/register'
import { useSelector, useDispatch } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar';
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
        <LoadingBar style={{ backgroundColor: '#2563eb', height: '3px' }} />
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
      <LoadingBar style={{ backgroundColor: '#2563eb', height: '3px' }} />
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
