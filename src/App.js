import Todos from 'views/Todos/Todos';
import Counter from 'views/Counter/Counter';
import User from 'views/User/User';

function App() {
  return (
    <div className="App">
      <h1>Simple Redux</h1>

      <h3>Counter</h3>
      <Counter />

      <br />
      ------------------------------
      <h3>Todos</h3>
      <Todos />
      
      <br />
      ------------------------------
      <h3>User</h3>
      <User />
    </div>
  );
}

export default App;
