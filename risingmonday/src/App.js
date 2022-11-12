import logo from './logo.svg';
import './App.css';
import Mid3 from './components/mid3';
import Mid2 from './components/mid2';
import Container1 from './components/container1';
import Navbar from './components/Navbar';
import Mid from './components/mid';
import Product from './components/Product';
function App() {
  return (
    <div className="App">
        <Navbar/>
        <Container1/>
        <Mid/>
        <Mid2/>
        <Mid3/>
        <Product/>
    </div>
  );
}

export default App;
