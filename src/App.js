import Todos from 'views/Todos/Todos';
import Counter from 'views/Counter/Counter';

function App() {
  return (
    <div className="App">
      <h1>Simple Redux</h1>

      <Counter />

      <h1>Todos</h1>
      <Todos />
    </div>
  );
}

export default App;
