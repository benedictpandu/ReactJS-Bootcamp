import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar'
import Container from './components/container'
import ManageData from './components/manageData'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalContext';

function App() {
  return (
    <>
    <BrowserRouter>
    <GlobalProvider>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Container/>} />
      <Route path='/manage-data' element={<ManageData/>} />
    </Routes>
    </GlobalProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
