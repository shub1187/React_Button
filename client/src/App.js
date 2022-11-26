import './App.css';
import PageOne from './component/PageOne';
import PageTwo from './component/PageTwo';
import {BrowserRouter,Routes,Route} from "react-router-dom" // used to navigate

function App() {
  return (
    <div>
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<PageOne/>} />
        <Route path="/pagetwo" element={<PageTwo/>} />
      </Routes>
    </BrowserRouter>   
    </div>
  );
}

export default App;
