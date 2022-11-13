import './App.css';
import Mid3 from './components/mid3';
import Mid2 from './components/mid2';
import Container1 from './components/container1';
import Navbar from './components/Navbar';
import Mid from './components/mid';
import Allroutes from './Routes/allroues';
function App() {
  return (
    <div className="App">
        <Navbar/>
        <Allroutes/>
        <Container1/>
        <Mid/>
        <Mid2/>
        <Mid3/>

    </div>
  );
}

export default App;
