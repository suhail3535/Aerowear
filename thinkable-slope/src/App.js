
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import BackToTop from './Pages/HomePage/BacktoTop';
import MainRoutes from './Pages/MainRoutes';


function App() {

  return (
      <div className="App">
          <Navbar />
          <MainRoutes />
          <BackToTop />
          <Footer />
      </div>
  );
}

export default App;
