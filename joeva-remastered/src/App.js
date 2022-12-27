import './App.css';
import Homepage from './Components/Homepage';
import Navbar from './Components/Navbar';
import ReduxRoutes from './Components/ReduxRoutes';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ReduxRoutes />
    </div>
  );
}

export default App;
