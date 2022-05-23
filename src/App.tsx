import './App.css';
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from './components/AppRoutes';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <AppRoutes />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
