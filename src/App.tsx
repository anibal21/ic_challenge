import { useFakeQuery } from './data/fakeFetchClient';

function App() {
  const { data, error, loading } = useFakeQuery('SelectCatPlayers', {
    variables: { search: null },
  });

  return (
    <div>
      <h1>Players Latest Activities</h1>
      <span>{loading ? 'Loading...' : 'Data is loaded'}</span>
    </div>
  );
}

export default App;
