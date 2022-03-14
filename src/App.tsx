import React from 'react'
import { useFakeQuery } from './hooks/useFakeQuery/useFakeQuery';
import RecentActivity from './pages/RecentActivity/RecentActivity';
import { useSelector } from 'react-redux'
import { RootState } from './store/store';

function App() {

  const searchInput = useSelector((state: RootState) => state.recentActivity.searchInput)

  const { data, error, loading } = useFakeQuery('SelectCatPlayers', {
    variables: { search: searchInput },
  });

  return (
    <RecentActivity userList={data} loading={loading} />
  );
}

export default App;
