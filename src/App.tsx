import React, { useContext, useState, useEffect } from 'react';
import './App.css';
import { DataContext, DataProvider } from './contexts/DataContext';
import Menu from './components/Menu/Menu';
import DotsLoader from './components/Loaders/DotsLoader';
import ListLoader from './components/Loaders/ListLoader';
import LandingPage from './components/LandingPage/LandingPage';
import Cursor from './components/Cursor/Cursor';

const AppWrapper: React.FC = () => {
  const data = useContext(DataContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [data]);

  if (loading) {
    return <DotsLoader />;
  }

  return (
    <>
      <ListLoader />
      <LandingPage />
      <Menu />
      {!data?.app.app.isPhone && (
        <Cursor />
      )}
    </>
  );
};

const App: React.FC = () => {
  return (
    <DataProvider>
      <AppWrapper />
    </DataProvider>
  );
};

export default App;
