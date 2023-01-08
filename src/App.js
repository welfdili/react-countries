import './App.css';
import Counter from './components/counter/Counter';
// import ContriesList from './components/countries/ContriesList';
import CounterProvider from './context/CounterProvider'

function App() {
  return (
    <div className="container">
      <CounterProvider>
        <Counter />
      </CounterProvider>
      {/* <ContriesList /> */}
    </div>
  );
}

export default App;
