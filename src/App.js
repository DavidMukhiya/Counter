import './App.css';
import Counter from './component/counter/Counter';

function App() {
  return (
    <div className="App">
      <Counter by={1} />
      <Counter by={5} />
      <Counter by={10} />
    </div>
  );
}

export default App;
