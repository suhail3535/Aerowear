
import './App.css';
import Post from './Components/Admin/Post';
import Navbar from './Components/Navbar/Navbar';
import MainRoutes from './Pages/MainRoutes';

function App() {
  return (
    <div className="App">
      {/*<Post />*/}
      <Navbar/>
      <MainRoutes/>
    </div>
  );
}

export default App;
