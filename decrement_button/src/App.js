// import logo from './logo.svg';
import './App.css';
import Counters from './components/counters';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
     <Navbar/>
     <main className="container">
       <Counters/>
     </main>
    </>
  );
}

export default App;
