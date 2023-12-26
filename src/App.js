
import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Employelist from './Employelist';
 import EmpCreate from './EmpCreate';
  import EmpDetail from './EmpDetail';
   import EmpEdit from './EmpEdit';
function App() {
  return (<div className="App">
    <h1>React JS CRUD operations</h1>
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<Employelist/>}></Route>
     <Route path='/employee/create' element={<EmpCreate/>}></Route>
     <Route path='/employee/detail/:empid' element={<EmpDetail/>}></Route>
     <Route path='/employee/edit/:empid' element={<EmpEdit/>}></Route>

      
    </Routes>
    </BrowserRouter>
    </div> 
  )
}

export default App;
