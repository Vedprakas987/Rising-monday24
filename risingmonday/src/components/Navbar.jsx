import { Button} from '@chakra-ui/react'
function Navbar(){
    return(
        <>
<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <img  width={140} src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/monday-logo-x2.png"/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li style={{marginLeft:"20px"}} className="nav-item">
          <a className="nav-link active" aria-current="page" href="/Products">Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/Products">Use cases</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/Features">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/Resources">Resources</a>
        </li>
        <li className="nav-item">
          <a style={{marginLeft:"450px"}} className="nav-link active" aria-current="page" href="/Resources">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/Resources">Contact sales</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/Resources">Log in</a>
        </li>
        <button style={{borderRadius:"25px",color:"white",backgroundColor:"#6C6CFF",border:"0px"}}>Get Started➟</button>
      </ul>
    
        
      
    </div>
  </div>
</nav>
    </>
    )
}
export default Navbar;