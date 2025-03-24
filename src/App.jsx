import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/login'
import RegisterPage from './pages/register'
import { useSelector, useDispatch } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar';
import { useEffect } from 'react';
import ThreadPage from './pages/thread';
import DetailThread from './pages/thread-detail';
import { asyncPreloadProcess } from './states/isPreload/action';
import Layout from './pages/layout';
import LeaderboardPage from './pages/leaderboard';

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
        <Routes>
          {/* Gunakan Layout sebagai Parent Route */}
          <Route element={<Layout />}>
            <Route path="/" element={<ThreadPage />} />
            <Route path="/threads/:id" element={<DetailThread />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App
