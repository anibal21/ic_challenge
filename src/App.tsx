import React from 'react'
import { useFakeQuery } from './hooks/useFakeQuery/useFakeQuery';
import RecentActivity from './pages/RecentActivity/RecentActivity';
import { useSelector } from 'react-redux'
import { RootState } from './store/store';

function App() {

  const searchInput = useSelector((state: RootState) => state.recentActivity.searchInput)

  const { data, error, loading } = useFakeQuery('SelectCatPlayers', {
    variables: { search: searchInput }, forceError: true
  });

  return (
    <RecentActivity
      userList={data}
      loading={error ? false : loading}
      error={error ? error.message: null} />
  );
}

export default App;
