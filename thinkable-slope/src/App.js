
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import MainRoutes from './Pages/MainRoutes';
import Payment from './Pages/Payment/Payment';

function App() {
  return (
    <div className="App">

      <Navbar/>
      <MainRoutes />
      <Footer/>
    </div>
  );
}

export default App;
